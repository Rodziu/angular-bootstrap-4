/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {Directive, Host, HostListener} from '@angular/core';
import {BsModalDirective} from './bs-modal.directive';

@Directive({
    selector: '[dismiss]'
})
export class DismissDirective {
    constructor(
        @Host() private bsModal: BsModalDirective
    ) {
    }

    @HostListener('click') click(): void {
        this.bsModal.hide();
    }
}
