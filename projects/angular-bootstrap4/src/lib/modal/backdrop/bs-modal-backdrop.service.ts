/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {ComponentRef, ElementRef, Inject, Injectable} from '@angular/core';
import {BsModalBackdropComponent} from './bs-modal-backdrop.component';
import {BsHelpers} from '../../helpers/bs-helpers.service';
import {DOCUMENT} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class BsModalBackdropService {
    private backdrops: WeakMap<ElementRef<HTMLElement>, ComponentRef<BsModalBackdropComponent>> = new WeakMap();
    private openModals = 0;
    private _isAnimated = false;
    get isAnimated(): boolean {
        return this._isAnimated;
    }

    constructor(
        private helpers: BsHelpers,
        @Inject(DOCUMENT) private document: Document
    ) {
    }

    show(
        backdrop: boolean,
        animate: boolean,
        elementRef: ElementRef<HTMLElement>
    ): Promise<void> {
        return new Promise<void>((resolve) => {
            this.createBackdropComponent(elementRef);
            this.openModals++;
            this._isAnimated = animate;
            this.document.body.classList.add('modal-open');
            if (backdrop) {
                setTimeout(() => { // wait for backdrop element to be fully drawn
                    this.backdrops.get(elementRef)?.instance.show();
                    resolve();
                });
            } else {
                resolve();
            }
        });
    }

    private createBackdropComponent(elementRef: ElementRef<HTMLElement>): void {
        if (!this.backdrops.has(elementRef)) {
            const backdropRef = this.helpers.createComponent(
                BsModalBackdropComponent,
                elementRef.nativeElement,
                undefined,
                'before'
            );

            (backdropRef.instance.elementRef.nativeElement.children[0] as HTMLElement).style.zIndex
                = window.getComputedStyle(elementRef.nativeElement).zIndex;
            this.backdrops.set(elementRef, backdropRef);
        }
    }

    hide(elementRef: ElementRef<HTMLElement>): void {
        this.openModals--;
        if (this.openModals < 0) {
            this.openModals = 0;
        }
        const callback = () => {
            if (this.openModals === 0) {
                this.document.body.classList.remove('modal-open');
            }
        }

        if (this.backdrops.has(elementRef)) {
            this.backdrops.get(elementRef)?.instance.hide().then(callback);
        } else {
            callback();
        }
    }
}
