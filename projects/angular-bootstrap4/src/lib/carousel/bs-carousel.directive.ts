/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
import {AfterContentInit, ContentChildren, Directive, HostListener, Input, QueryList} from '@angular/core';
import {BsCarouselConfigService, IBsCarouselOptions} from './bs-carousel-config.service';
import {BsCarouselItemDirective} from './bs-carousel-item.directive';
import {BsHelpers} from '../helpers/bs-helpers.service';

type direction = 'left' | 'right';

@Directive({
    selector: '[bsCarousel]'
})
export class BsCarouselDirective implements AfterContentInit {
    @Input() wrap: boolean;
    @Input() keyboard: boolean;
    @Input() pause: IBsCarouselOptions['pause'];
    @Input() interval: number;
    @ContentChildren(BsCarouselItemDirective, {descendants: true}) items!: QueryList<BsCarouselItemDirective>;

    currentSlide = -1;
    private carouselInterval?: number;
    private sliding = false;

    constructor(
        private config: BsCarouselConfigService,
        private bsHelpers: BsHelpers
    ) {
        this.wrap = this.config.wrap;
        this.keyboard = this.config.keyboard;
        this.pause = this.config.pause;
        this.interval = this.config.interval;
    }

    ngAfterContentInit(): void {
        this.items.forEach((item, idx) => {
            if (item.elementRef.nativeElement.classList.contains('active')) {
                if (~this.currentSlide) {
                    this.items.get(this.currentSlide)?.elementRef.nativeElement.classList.remove('active');
                }
                this.currentSlide = idx;
            } else if (!~this.currentSlide) {
                item.elementRef.nativeElement.classList.add('active');
                this.currentSlide = idx;
            }
        });

        if (this.interval) {
            this.cycle();
        }
    }

    @HostListener('keydown', ['$event'])
    keydown(event: KeyboardEvent): void {
        if (
            !this.keyboard
            || (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight')
            || /input|textarea/i.test((event.target as HTMLElement).tagName)
        ) {
            return;
        }
        if (event.key === 'ArrowLeft') {
            this.prevNextSlide(false);
        } else {
            this.prevNextSlide(true);
        }
        event.preventDefault();
    }

    @HostListener('mouseenter', ['$event.type'])
    @HostListener('mouseleave', ['$event.type'])
    event(type: 'mouseenter' | 'mouseleave'): void {
        if (!this.pause) {
            return;
        }
        if (type === 'mouseenter') {
            this.cycle(false);
        } else {
            this.cycle();
        }
    }

    private cycle(start = true): void {
        if (this.carouselInterval) {
            clearInterval(this.carouselInterval);
        }

        if (start) {
            this.carouselInterval = setInterval(() => {
                this.prevNextSlide(true);
            }, this.interval);
        }
    }

    prevNextSlide(isNext: boolean): void {
        const nextIndex = isNext ? this.currentSlide + 1 : this.currentSlide - 1;
        if (
            (nextIndex >= this.items.length || nextIndex < 0)
            && !this.wrap
        ) {
            return;
        }
        this.slideTo(nextIndex, isNext ? 'left' : 'right');
    }

    slideTo(index: number, direction?: direction): void {
        if (index < 0) {
            index = this.items.length - 1;
        } else if (index >= this.items.length) {
            index = 0;
        }
        this.changeSlide(index, direction);
    }

    private changeSlide(nextSlide: number, direction?: direction): void {
        if (nextSlide !== this.currentSlide && !this.sliding) {
            this.sliding = true;

            if (typeof direction === 'undefined') {
                direction = nextSlide > this.currentSlide ? 'left' : 'right';
            }

            const next = this.items.get(nextSlide)?.elementRef.nativeElement,
                active = this.items.get(this.currentSlide)?.elementRef.nativeElement;

            if (!next || !active) {
                return;
            }

            next.classList.add(direction === 'left' ? 'carousel-item-next' : 'carousel-item-prev');
            this.bsHelpers.reflow(next);
            active.classList.add(`carousel-item-${direction}`);
            next.classList.add(`carousel-item-${direction}`);
            this.bsHelpers.runTransition(active, () => {
                next.classList.remove('carousel-item-next', 'carousel-item-prev', `carousel-item-${direction}`);
                next.classList.add('active');
                active.classList.remove('active', `carousel-item-${direction}`);
                this.sliding = false;
            })
            this.currentSlide = nextSlide;
        }
    }
}
