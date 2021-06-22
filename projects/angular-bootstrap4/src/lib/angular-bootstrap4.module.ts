/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {NgModule} from '@angular/core';
import {BsModalModule} from './modal/bs-modal.module';
import {BsDropdownModule} from './dropdown/bs-dropdown.module';
import {BsHelpersModule} from './helpers/bs-helpers.module';
import {BsTooltipModule} from './tooltip/bs-tooltip.module';
import {BsPopoverModule} from './popover/bs-popover.module';
import {BsCollapseModule} from './collapse/bs-collapse.module';

@NgModule({
    declarations: [],
    imports: [
        BsCollapseModule,
        BsDropdownModule,
        BsHelpersModule,
        BsModalModule,
        BsPopoverModule,
        BsTooltipModule
    ],
    exports: [
        BsCollapseModule,
        BsDropdownModule,
        BsHelpersModule,
        BsModalModule,
        BsPopoverModule,
        BsTooltipModule
    ]
})
export class AngularBootstrap4Module {
}
