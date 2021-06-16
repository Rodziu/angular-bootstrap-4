import {Directive, Host, HostListener} from '@angular/core';
import {BsDropdownDirective} from './bs-dropdown.directive';

@Directive({
    selector: '[bsDropdownToggle]'
})
export class BsDropdownToggleDirective {
    constructor(
        @Host() private bsDropdown: BsDropdownDirective
    ) {
    }

    @HostListener('click') click(): void {
        this.bsDropdown.bsDropdownChange.emit(!this.bsDropdown.bsDropdown);
    }
}
