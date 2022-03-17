/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
import {Component, ElementRef} from '@angular/core';
import {BsHelpers} from './bs-helpers.service';

// eslint-disable-next-line @angular-eslint/use-component-selector
@Component({
    template: ''
})
export abstract class AbstractFadeOutComponent {
    abstract visible: boolean;
    abstract fadeIn: boolean;
    abstract animation: boolean;
    protected _visible = true;

    protected constructor(
        protected elementRef: ElementRef<HTMLElement>,
        protected bsHelpers: BsHelpers
    ) {
    }

    protected hide(): void {
        this.fadeIn = false;
        if (this.animation) {
            const popup = this.elementRef.nativeElement.children[0] as HTMLElement;

            this._visible = true;
            this.bsHelpers.runTransition(popup, () => {
                this._visible = false;
            });
        }
    }
}
