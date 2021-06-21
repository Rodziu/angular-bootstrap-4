import {NgModule} from '@angular/core';
import {BsModalDirective} from './bs-modal.directive';
import {CommonModule} from '@angular/common';
import {BsModalBackdropComponent} from './backdrop/bs-modal-backdrop.component';
import {DismissDirective} from './dismiss.directive';
import {BsHelpersModule} from '../helpers/bs-helpers.module';

@NgModule({
    declarations: [
        BsModalBackdropComponent,
        BsModalDirective,
        DismissDirective
    ],
    imports: [
        BsHelpersModule,
        CommonModule
    ],
    exports: [
        BsModalDirective,
        DismissDirective
    ]
})
export class BsModalModule {
}
