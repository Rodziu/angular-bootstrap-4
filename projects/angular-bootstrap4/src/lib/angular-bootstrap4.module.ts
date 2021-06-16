import {NgModule} from '@angular/core';
import {BsModalModule} from './modal/bs-modal.module';
import {BsDropdownModule} from './dropdown/bs-dropdown.module';
import {BsHelpersModule} from './helpers/bs-helpers.module';

@NgModule({
    declarations: [],
    imports: [
        BsDropdownModule,
        BsHelpersModule,
        BsModalModule
    ],
    exports: [
        BsDropdownModule,
        BsHelpersModule,
        BsModalModule
    ]
})
export class AngularBootstrap4Module {
}
