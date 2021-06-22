/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
import {Component, Host} from '@angular/core';
import {BsCarouselDirective} from './bs-carousel.directive';

@Component({
    selector: 'bs-carousel-indicators',
    templateUrl: './bs-carousel-indicators.component.html'
})
export class BsCarouselIndicatorsComponent {
    constructor(
        @Host() public carousel: BsCarouselDirective
    ) {
    }
}
