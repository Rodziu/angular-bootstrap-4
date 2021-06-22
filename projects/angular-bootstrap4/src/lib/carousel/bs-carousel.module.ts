/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
import {NgModule} from '@angular/core';
import {BsCarouselItemDirective} from './bs-carousel-item.directive';
import {BsCarouselDirective} from './bs-carousel.directive';
import {BsCarouselNavDirective} from './bs-carousel-nav.directive';
import {BsCarouselIndicatorsComponent} from './bs-carousel-indicators.component';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        BsCarouselDirective,
        BsCarouselIndicatorsComponent,
        BsCarouselItemDirective,
        BsCarouselNavDirective
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        BsCarouselDirective,
        BsCarouselIndicatorsComponent,
        BsCarouselItemDirective,
        BsCarouselNavDirective
    ]
})
export class BsCarouselModule {
}
