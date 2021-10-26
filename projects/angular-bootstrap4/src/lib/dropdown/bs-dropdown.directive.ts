/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {
    Directive,
    ElementRef,
    EventEmitter,
    Host,
    Inject,
    Input, OnDestroy,
    OnInit,
    Optional,
    Output
} from '@angular/core';
import {BsDropdownBoundaryDirective} from './bs-dropdown-boundary.directive';
import {BsHelpers} from '../helpers/bs-helpers.service';
import {DOCUMENT} from '@angular/common';

@Directive({
    selector: '[bsDropdown]'
})
export class BsDropdownDirective implements OnInit, OnDestroy {
    @Input() get bsDropdown(): boolean {
        return this._bsDropdown;
    }

    set bsDropdown(bsDropdown: boolean) {
        this._bsDropdown = bsDropdown;
        if (bsDropdown) {
            this.show();
        } else {
            this.hide();
        }
    }

    private _bsDropdown = false;

    @Input() boundaryElement?: ElementRef<HTMLElement>;

    @Output() readonly bsDropdownChange = new EventEmitter<boolean>();

    private _listeners: { type: keyof DocumentEventMap, listener: EventListenerOrEventListenerObject }[] = [];

    constructor(
        private elementRef: ElementRef<HTMLElement>,
        private helpers: BsHelpers,
        @Optional() @Host() private boundary: BsDropdownBoundaryDirective,
        @Inject(DOCUMENT) private document: Document
    ) {
    }

    ngOnInit(): void {
        this.elementRef.nativeElement.classList.add('dropdown');

        this._addListener('click', (e) => this.onClick(e.target as HTMLElement));
        this._addListener('keydown', (e) => this.onKeydown(e as KeyboardEvent));
    }

    private _addListener(type: keyof DocumentEventMap, listener: EventListenerOrEventListenerObject): void {
        this._listeners.push({
            type,
            listener
        });

        this.document.addEventListener(type, listener);
    }

    ngOnDestroy(): void {
        this._listeners.forEach((item) => {
            this.document.removeEventListener(item.type, item.listener);
        })
    }

    onClick(target: HTMLElement): void {
        if (this._bsDropdown && !this.elementRef.nativeElement.contains(target)) {
            this._bsDropdown = false;
            this.bsDropdownChange.emit(false);
        }
    }

    onKeydown(event: KeyboardEvent): void {
        if (!this._bsDropdown) {
            return;
        }

        if (event.key === 'Escape') {
            this._bsDropdown = false;
            this.bsDropdownChange.emit(false);
        }

        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            const items = this.elementRef.nativeElement.querySelectorAll<HTMLAnchorElement>(
                '.dropdown-menu a:not(.disabled)'
            );
            let idx = -1;
            for (let i = 0; i < items.length; i++) {
                if (items[i].contains(event.target as Element)) {
                    idx = i;
                    break;
                }
            }
            if (event.key === 'ArrowUp' && idx > 0) {
                idx--;
            } else if (event.key === 'ArrowDown' && idx < items.length - 1) {
                idx++;
            }
            if (!~idx) {
                idx = 0;
            }
            items[idx].focus();
        }
    }

    show(): void {
        this.elementRef.nativeElement.classList.add('show');
        this.elementRef.nativeElement.querySelectorAll('.dropdown-menu')
            .forEach((element) => {
                element.classList.add('show');
            });
        this.reposition();
    }

    hide(): void {
        if (this.boundary || this.boundaryElement) {
            this.elementRef.nativeElement.classList.remove('dropup');
        }
        this.elementRef.nativeElement.classList.remove('show');
        this.elementRef.nativeElement.querySelectorAll('.dropdown-menu')
            .forEach((element) => {
                element.classList.remove('show');
            });
    }

    private reposition(): void {
        let boundaryElement: HTMLElement;

        if (this.boundary) {
            boundaryElement = this.boundary.elementRef.nativeElement;
        } else if (this.boundaryElement) {
            boundaryElement = this.boundaryElement.nativeElement;
        } else {
            return;
        }

        const dropdownMenu = this.elementRef.nativeElement.querySelector('.dropdown-menu') as HTMLElement;

        if (!dropdownMenu) {
            return;
        }

        const boundaryOffset = this.helpers.offset(boundaryElement),
            menuOffset = this.helpers.offset(dropdownMenu);

        if (menuOffset.height + menuOffset.top > boundaryOffset.height + boundaryOffset.top) {
            this.elementRef.nativeElement.classList.add('dropup');
        } else {
            this.elementRef.nativeElement.classList.remove('dropup');
        }
    }
}
