/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {NgModule} from '@angular/core';
import {BsTooltipComponent} from './bs-tooltip.component';
import {BsHelpersModule} from '../helpers/bs-helpers.module';
import {CommonModule} from '@angular/common';
import {BsTooltipToggleDirective} from './bs-tooltip-toggle.directive';
import {BsTooltipBoundaryDirective} from './bs-tooltip-boundary.directive';

@NgModule({
    declarations: [
        BsTooltipBoundaryDirective,
        BsTooltipComponent,
        BsTooltipToggleDirective
    ],
    imports: [
        BsHelpersModule,
        CommonModule
    ],
    exports: [
        BsTooltipBoundaryDirective,
        BsTooltipComponent,
        BsTooltipToggleDirective
    ]
})
export class BsTooltipModule {
}
