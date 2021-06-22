/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
/* eslint-disable @angular-eslint/contextual-decorator */

import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {BsHelpers, placement} from './bs-helpers.service';
import {AbstractFadeOutComponent} from './abstract-fade-out-component';

export type bsPopupDelay = number | { show: number, hide: number };

export abstract class BsPopupOptions {
    animation = true;
    delay: bsPopupDelay = 0;
    placement: placement = 'bottom';
    html = false;
    title = '';
    trigger: 'click' | 'hover' | 'focus' | string = 'hover focus';
}

// eslint-disable-next-line @angular-eslint/use-component-selector
@Component({
    template: ''
})
export abstract class AbstractPopupComponent extends AbstractFadeOutComponent implements OnInit {
    @Input() get visible(): boolean {
        return this._visible;
    }

    set visible(visible: boolean) {
        this._visible = visible;
        this.toggle();
    }

    @Input() animation: boolean;
    @Input() delay: bsPopupDelay;
    @Input() placement: placement;
    @Input() parentElement?: HTMLElement;
    @Input() boundary?: HTMLElement;
    defaultTitle: string;
    fadeIn = false;
    titleVisible = true;

    protected _visible = true;
    protected timeout: number | null = null;
    protected abstract cssPrefix: string;

    protected constructor(
        protected elementRef: ElementRef<HTMLElement>,
        protected config: BsPopupOptions,
        protected helpers: BsHelpers
    ) {
        super(elementRef);
        this.animation = this.config.animation;
        this.delay = this.config.delay;
        this.placement = this.config.placement;
        this.defaultTitle = this.config.title;
    }

    // eslint-disable-next-line @angular-eslint/contextual-lifecycle
    ngOnInit(): void {
        if (this.visible) {
            this.toggle();
        }
    }

    protected toggle(): void {
        if (this.timeout !== null) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
            this.timeout = null;
            if (this._visible) {
                this.show();
            } else {
                this.hide();
            }
        }, this.getDelay(this.delay));
    }

    protected show(): void {
        const popup = this.elementRef.nativeElement.children[0] as HTMLElement;
        if (this.parentElement) {
            this.helpers.positionElement(
                popup, this.parentElement, this.placement,
                this.boundary, this.cssPrefix
            )
        } else {
            this.helpers.setPlacementCSS(popup, this.cssPrefix, this.placement);
            this.helpers.adjustArrow(popup, this.placement)
        }
        this.fadeIn = true;
    }

    protected getDelay(inDelay: bsPopupDelay): number {
        if (typeof inDelay === 'object') {
            return inDelay[this.visible ? 'show' : 'hide'] || this.getDelay(this.config.delay);
        }
        return inDelay;
    }
}
