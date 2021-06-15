import {Directive, Host, HostListener} from '@angular/core';
import {BsModalDirective} from './bs-modal.directive';

@Directive({
    selector: '[dismiss]'
})
export class DismissDirective {
    constructor(
        @Host() private bsModal: BsModalDirective
    ) {
    }

    @HostListener('click') click(): void {
        this.bsModal.hide();
    }
}
