/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {Directive, ElementRef} from '@angular/core';
import {AbstractPopupBoundary} from '../helpers/abstract-popup-toggle-directive';

@Directive({
    selector: '[bsTooltipBoundary]'
})
export class BsTooltipBoundaryDirective implements AbstractPopupBoundary {
    constructor(
        public elementRef: ElementRef<HTMLElement>
    ) {
    }
}
