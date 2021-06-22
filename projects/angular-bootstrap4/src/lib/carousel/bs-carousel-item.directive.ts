/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
    selector: '[bsCarouselItem]'
})
export class BsCarouselItemDirective implements OnInit {
    constructor(
        public elementRef: ElementRef<HTMLElement>
    ) {
    }

    ngOnInit(): void {
        this.elementRef.nativeElement.classList.add('carousel-item');
    }
}
