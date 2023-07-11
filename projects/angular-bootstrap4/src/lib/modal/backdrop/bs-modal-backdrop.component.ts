/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {Component, ElementRef} from '@angular/core';
import {BsModalBackdropService} from './bs-modal-backdrop.service';
import {BsHelpers} from '../../helpers/bs-helpers.service';

@Component({
    template: '<div class="modal-backdrop" [ngClass]="{\'fade\': service.isAnimated}"></div>',
    selector: 'bs-modal-backdrop'
})
export class BsModalBackdropComponent {
    constructor(
        public service: BsModalBackdropService,
        private bsHelpers: BsHelpers,
        public elementRef: ElementRef<HTMLElement>
    ) {
    }

    private getBackdropElement(): HTMLElement {
        return this.elementRef.nativeElement.children[0] as HTMLElement;
    }

    show(): void {
        const backdropElement = this.getBackdropElement();
        this.bsHelpers.reflow(backdropElement);
        backdropElement.classList.add('show');
        backdropElement.style.display = '';
    }

    hide(): Promise<void> {
        return new Promise((resolve) => {
            const backdropElement = this.getBackdropElement();
            backdropElement.classList.remove('show');
            if (this.service.isAnimated) {
                this.bsHelpers.runTransition(backdropElement, () => {
                    backdropElement.style.display = 'none';
                    resolve();
                });
            } else {
                backdropElement.style.display = 'none';
                resolve();
            }
        });
    }
}
