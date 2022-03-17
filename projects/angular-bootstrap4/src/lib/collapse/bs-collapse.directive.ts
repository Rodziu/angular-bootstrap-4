/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
import {ElementRef, EventEmitter, OnInit} from '@angular/core';
import {Directive, Input, Output} from '@angular/core';
import {BsHelpers} from '../helpers/bs-helpers.service';

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

    private classList: DOMTokenList;
    private collapse = false;

    constructor(
        private elementRef: ElementRef<HTMLElement>,
        private bsHelpers: BsHelpers
    ) {
        this.classList = elementRef.nativeElement.classList;
    }


    ngOnInit(): void {
        if (this.collapse) {
            this.classList.remove('show', 'collapsing');
            this.classList.add('collapse');
            this._setHeight();
        } else {
            this.classList.remove('collapsing');
            this.classList.add('collapse', 'show');
        }
    }

    private _setHeight(height?: number): void {
        this.elementRef.nativeElement.style.height = typeof height === 'undefined' ? '' : height + 'px';
    }

    show(): void {
        if (!this.classList.contains('show')) {
            this.animate(false);
        }
    }

    hide(): void {
        if (this.classList.contains('show')) {
            this.animate(true);
        }
    }

    private animate(collapse: boolean): void {
        if (!collapse) { // add show class to properly calculate element expand height
            this.classList.add('show');
        }

        const expandHeight = this.elementRef.nativeElement.scrollHeight;
        this._setHeight(collapse ? expandHeight : 0);
        this.classList.remove('collapse', 'show');
        this.bsHelpers.reflow(this.elementRef.nativeElement);
        // start animation
        this.elementRef.nativeElement.classList.add('collapsing');
        this._setHeight(collapse ? 0 : expandHeight);

        this.bsHelpers.runTransition(this.elementRef.nativeElement, () => {
            this.classList.remove('collapsing');
            this.classList.add('collapse');
            if (!collapse) {
                this.classList.add('show');
            }
            this._setHeight();
        });
    }
}
