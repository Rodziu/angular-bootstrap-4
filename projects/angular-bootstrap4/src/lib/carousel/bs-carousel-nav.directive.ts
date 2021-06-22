/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
import {Directive, Host, HostListener, Input} from '@angular/core';
import {BsCarouselDirective} from './bs-carousel.directive';

@Directive({
    selector: '[bsCarouselNav]'
})
export class BsCarouselNavDirective {
    @Input() bsCarouselNav!: 'right' | 'left';

    constructor(
        @Host() private carousel: BsCarouselDirective
    ) {
    }

    @HostListener('click') click(): void {
        this.carousel.prevNextSlide(this.bsCarouselNav === 'right');
    }
}
