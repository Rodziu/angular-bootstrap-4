/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
import {ElementRef, EventEmitter, Host, OnInit, Optional} from '@angular/core';
import {Directive, Input, Output} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Directive({
    selector: '[bsCollapse]',
})
export class BsCollapseDirective implements OnInit {
    @Input() get bsCollapse(): boolean {
        return this.collapse;
    }

    set bsCollapse(collapse: boolean) {
        if (this.collapse === collapse) {
            return;
        }

        if (collapse) {
            this.hide();
        } else {
            this.show();
            this.opened.emit();
        }

        this.collapse = collapse;
    }

    @Output() readonly bsCollapseChange = new EventEmitter<boolean>();
    @Output() readonly opened = new EventEmitter<void>();
    private collapse = false;

    constructor(
        private elementRef: ElementRef<HTMLElement>,
        private builder: AnimationBuilder
    ) {
    }


    ngOnInit(): void {
        if (this.collapse) {
            this.elementRef.nativeElement.classList.remove('show', 'collapsing');
            this.elementRef.nativeElement.classList.add('collapse');
            this.elementRef.nativeElement.style.height = '';
        } else {
            this.elementRef.nativeElement.classList.remove('collapsing');
            this.elementRef.nativeElement.classList.add('collapse', 'show');
        }
    }

    show(): void {
        if (!this.elementRef.nativeElement.classList.contains('show')) {
            this.animate(false);
        }
    }

    hide(): void {
        if (this.elementRef.nativeElement.classList.contains('show')) {
            this.animate(true);
        }
    }

    private animate(collapse: boolean): void {
        if (!collapse) { // add show class to properly calculate element expand height
            this.elementRef.nativeElement.classList.add('show');
        }
        this.elementRef.nativeElement.classList.remove('collapse');
        this.elementRef.nativeElement.classList.add('collapsing');

        const {
            transitionDuration,
            transitionDelay,
            transitionTimingFunction
        } = window.getComputedStyle(this.elementRef.nativeElement);
        const expandHeight = this.elementRef.nativeElement.scrollHeight + 'px';

        const player = this.builder.build([
            style({height: collapse ? expandHeight : 0}),
            animate(
                `${transitionDuration} ${transitionDelay} ${transitionTimingFunction}`,
                style({height: collapse ? 0 : expandHeight})
            )
        ]).create(this.elementRef.nativeElement);

        player.onDone(() => {
            if (collapse) {
                this.elementRef.nativeElement.classList.remove('show', 'collapsing');
            } else {
                this.elementRef.nativeElement.classList.remove('collapsing');
                this.elementRef.nativeElement.style.height = expandHeight;
            }
            this.elementRef.nativeElement.classList.add('collapse');
        });
        player.play();
    }
}
