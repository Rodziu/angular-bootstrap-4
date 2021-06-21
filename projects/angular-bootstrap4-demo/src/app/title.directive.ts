/*
 * Bootstrap 4 plugin for AngularJS.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
import {Directive} from '@angular/core';
import {BsTooltipToggleDirective} from 'angular-bootstrap4';

@Directive({
    selector: '[title]:not([bsPopoverToggle])'
})
export class TitleDirective extends BsTooltipToggleDirective {
}
