import {Directive, ElementRef} from '@angular/core';
import {AbstractPopupBoundary} from '../helpers/abstract-popup-toggle-directive';

@Directive({
    selector: '[bsPopoverBoundary]'
})
export class BsPopoverBoundaryDirective implements AbstractPopupBoundary {
    constructor(
        public elementRef: ElementRef<HTMLElement>
    ) {
    }
}
