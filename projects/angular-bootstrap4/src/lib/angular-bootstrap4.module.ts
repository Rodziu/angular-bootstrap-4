import {NgModule} from '@angular/core';
import {BsModalModule} from './modal/bs-modal.module';
import {BsDropdownModule} from './dropdown/bs-dropdown.module';
import {BsHelpersModule} from './helpers/bs-helpers.module';
import {BsTooltipModule} from './tooltip/bs-tooltip.module';
import {BsPopoverModule} from './popover/bs-popover.module';

@NgModule({
    declarations: [],
    imports: [
        BsDropdownModule,
        BsHelpersModule,
        BsModalModule,
        BsPopoverModule,
        BsTooltipModule
    ],
    exports: [
        BsDropdownModule,
        BsHelpersModule,
        BsModalModule,
        BsPopoverModule,
        BsTooltipModule
    ]
})
export class AngularBootstrap4Module {
}
