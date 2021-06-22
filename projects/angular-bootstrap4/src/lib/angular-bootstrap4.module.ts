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
import {BsCarouselModule} from './carousel/bs-carousel.module';
import {BsToastModule} from './toast/bs-toast.module';

@NgModule({
    declarations: [],
    imports: [
        BsCarouselModule,
        BsCollapseModule,
        BsDropdownModule,
        BsHelpersModule,
        BsModalModule,
        BsPopoverModule,
        BsToastModule,
        BsTooltipModule
    ],
    exports: [
        BsCarouselModule,
        BsCollapseModule,
        BsDropdownModule,
        BsHelpersModule,
        BsModalModule,
        BsPopoverModule,
        BsToastModule,
        BsTooltipModule
    ]
})
export class AngularBootstrap4Module {
}
