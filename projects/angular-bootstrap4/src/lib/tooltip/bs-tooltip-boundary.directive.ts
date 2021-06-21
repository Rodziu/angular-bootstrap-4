import {Directive, ElementRef} from '@angular/core';
import {AbstractPopupBoundary} from '../helpers/abstract-popup-toggle-directive';

@Directive({
    selector: '[bsTooltipBoundary]'
})
export class BsTooltipBoundaryDirective implements AbstractPopupBoundary {
    constructor(
        public elementRef: ElementRef<HTMLElement>
    ) {
    }
}
