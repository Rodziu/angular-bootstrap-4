/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
import {AfterViewInit, ElementRef, EventEmitter, NgZone, ViewChild} from '@angular/core';
import {Component, Input, Output} from '@angular/core';
import {BsToastConfigService} from './bs-toast-config.service';
import {AbstractFadeOutComponent} from '../helpers/abstract-fade-out-component';
import {BsHelpers} from '../helpers/bs-helpers.service';

@Component({
    selector: 'bs-toast',
    templateUrl: './bs-toast.component.html'
})
export class BsToastComponent extends AbstractFadeOutComponent implements AfterViewInit {
    @Input() animation: boolean;

    @Input() get visible(): boolean {
        return this._visible;
    }

    set visible(visible: boolean) {
        if (visible === this._visible) {
            return;
        }

        this._visible = visible;

        if (!visible) {
            this.hide();
        } else {
            setTimeout(() => {
                this.fadeIn = true;
            });
        }
    }

    protected _visible = false;

    @Output() readonly visibleChange = new EventEmitter<boolean>();

    @ViewChild('toast') toast?: ElementRef<HTMLElement>;

    fadeIn = false;

    constructor(
        protected elementRef: ElementRef<HTMLElement>,
        protected bsHelpers: BsHelpers,
        private config: BsToastConfigService
    ) {
        super(elementRef, bsHelpers);
        this.animation = this.config.animation;
    }

    ngAfterViewInit(): void {
        this.toast?.nativeElement.childNodes.forEach((node, idx) => {
            (node as HTMLElement).classList.add(idx ? 'toast-body' : 'toast-header');
        });
    }
}
