/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {
    ComponentRef,
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Inject,
    Input, OnDestroy,
    Type
} from '@angular/core';
import {AbstractPopupComponent, bsPopupDelay, BsPopupOptions} from './abstract-popup-component';
import {BsHelpers, placement} from './bs-helpers.service';
import {DOCUMENT} from '@angular/common';

export abstract class AbstractPopupBoundary {
    abstract elementRef: ElementRef<HTMLElement>;
}

@Directive()
export abstract class AbstractPopupToggleDirective<T extends AbstractPopupComponent> implements OnDestroy {
    @Input() animation?: boolean;
    @Input() delay?: bsPopupDelay;
    @Input() html: boolean;
    @Input() placement?: placement;
    @Input() trigger: BsPopupOptions['trigger'];

    @Input() get title(): string {
        return this._title
    }

    set title(title: string) {
        this._title = title;
        this.elementRef.nativeElement.setAttribute('title', '');

        if (this.popupComponent?.instance.visible) {
            this.popupComponent.destroy();
            this.popupComponent = undefined;
            this.show();
        }
    }

    protected _title = '';

    get bsPopupToggle(): boolean | undefined {
        return this.popupComponent?.instance.visible;
    }

    set bsPopupToggle(visible: boolean | undefined) {
        if (visible) {
            this.show();
        } else {
            this.hide();
        }
    }

    abstract readonly bsPopupToggleChange: EventEmitter<boolean>;

    protected popupComponent?: ComponentRef<T>;
    protected _showTimeout?: number;
    protected abstract componentClass: Type<T>;
    protected abstract boundary: AbstractPopupBoundary;

    protected constructor(
        protected config: BsPopupOptions,
        protected helpers: BsHelpers,
        protected elementRef: ElementRef<HTMLElement>,
        @Inject(DOCUMENT) protected document: Document
    ) {
        this.html = config.html;
        this.trigger = config.trigger;
    }

    @HostListener('mouseenter', ['$event.type'])
    @HostListener('focus', ['$event.type'])
    showEvent(type: 'mouseenter' | 'focus'): void {
        const triggers = this.getTriggers();
        if (
            (type === 'mouseenter' && triggers.includes('hover'))
            || (type === 'focus' && triggers.includes('focus'))
        ) {
            this.bsPopupToggleChange.emit(true);
            this.show();
        }
    }

    @HostListener('mouseleave', ['$event.type'])
    @HostListener('blur', ['$event.type'])
    hideEvent(type: 'mouseleave' | 'blur'): void {
        const triggers = this.getTriggers();
        if (
            (type === 'mouseleave' && triggers.includes('hover'))
            || (type === 'blur' && triggers.includes('focus'))
        ) {
            this.bsPopupToggleChange.emit(false);
            this.hide();
        }
    }

    @HostListener('click') click(): void {
        const visible = !!this.popupComponent?.instance.visible;
        this.bsPopupToggleChange.emit(!visible);
        if (visible) {
            this.hide();
        } else {
            this.show();
        }
    }

    ngOnDestroy(): void {
        if (this.popupComponent) {
            this.popupComponent.destroy();
            this.popupComponent = undefined;
        }
    }

    protected getTriggers(): string[] {
        return this.trigger.split(' ');
    }

    protected abstract getPopupProjectableNodes(): unknown[][];

    show(): void {
        if (!this.popupComponent) {
            this.popupComponent = this.helpers.createComponent(
                this.componentClass,
                this.document.body,
                this.getPopupProjectableNodes()
            );
            this.popupComponent.instance.parentElement = this.elementRef.nativeElement;
        }

        this._showTimeout = setTimeout(() => {
            if (this.popupComponent) {
                this.popupComponent.instance.visible = true;
            }
        });

        if (this.animation) {
            this.popupComponent.instance.animation = this.animation;
        }
        if (this.delay) {
            this.popupComponent.instance.delay = this.delay;
        }
        if (this.placement) {
            this.popupComponent.instance.placement = this.placement;
        }
        if (this.boundary) {
            this.popupComponent.instance.boundary = this.boundary.elementRef.nativeElement;
        }
    }

    hide(): void {
        if (!this.popupComponent) {
            return;
        }

        if (this._showTimeout) {
            clearTimeout(this._showTimeout);
            this._showTimeout = undefined;
        }

        this.popupComponent.instance.visible = false;
    }
}
