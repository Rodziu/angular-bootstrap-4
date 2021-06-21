import {NgModule} from '@angular/core';
import {BsModalModule} from './modal/bs-modal.module';
import {BsDropdownModule} from './dropdown/bs-dropdown.module';
import {BsHelpersModule} from './helpers/bs-helpers.module';
import {BsTooltipModule} from './tooltip/bs-tooltip.module';

@NgModule({
    declarations: [],
    imports: [
        BsDropdownModule,
        BsHelpersModule,
        BsModalModule,
        BsTooltipModule
    ],
    exports: [
        BsDropdownModule,
        BsHelpersModule,
        BsModalModule,
        BsTooltipModule
    ]
})
export class AngularBootstrap4Module {
}
