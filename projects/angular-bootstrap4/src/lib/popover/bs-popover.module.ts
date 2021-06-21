/*
 * Bootstrap 4 plugin for AngularJS.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
import {NgModule} from '@angular/core';
import {BsPopoverComponent} from './bs-popover.component';
import {CommonModule} from '@angular/common';
import {BsPopoverBoundaryDirective} from './bs-popover-boundary.directive';
import {BsPopoverToggleDirective} from './bs-popover-toggle.directive';

@NgModule({
    declarations: [
        BsPopoverBoundaryDirective,
        BsPopoverComponent,
        BsPopoverToggleDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BsPopoverBoundaryDirective,
        BsPopoverComponent,
        BsPopoverToggleDirective
    ]
})
export class BsPopoverModule {
}
