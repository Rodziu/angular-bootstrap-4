import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[bsDropdownBoundary]'
})
export class BsDropdownBoundaryDirective {
    constructor(
        public elementRef: ElementRef<HTMLElement>
    ) {
    }
}
