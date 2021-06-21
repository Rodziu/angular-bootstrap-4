import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[bsTooltipBoundary]'
})
export class BsTooltipBoundaryDirective {
    constructor(
        public elementRef: ElementRef<HTMLElement>
    ) {
    }
}
