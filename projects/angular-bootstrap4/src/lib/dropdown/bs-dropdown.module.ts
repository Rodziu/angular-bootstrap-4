import {NgModule} from '@angular/core';
import {BsDropdownDirective} from './bs-dropdown.directive';
import {BsDropdownToggleDirective} from './bs-dropdown-toggle.directive';
import {BsDropdownBoundaryDirective} from './bs-dropdown-boundary.directive';
import {BsHelpersModule} from '../helpers/bs-helpers.module';

@NgModule({
    declarations: [
        BsDropdownBoundaryDirective,
        BsDropdownDirective,
        BsDropdownToggleDirective
    ],
    imports: [
        BsHelpersModule
    ],
    exports: [
        BsDropdownBoundaryDirective,
        BsDropdownDirective,
        BsDropdownToggleDirective
    ]
})
export class BsDropdownModule {

}
