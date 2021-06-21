/*
 * Bootstrap 4 plugin for AngularJS.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {ComponentRef, ElementRef, EventEmitter, Host, HostListener, Inject, Optional} from '@angular/core';
import {Directive, Input, Output} from '@angular/core';
import {BsTooltipConfigService, bsTooltipDelay, IBsTooltipOptions} from './bs-tooltip-config.service';
import {BsHelpers, placement} from '../helpers/bs-helpers.service';
import {BsTooltipComponent} from './bs-tooltip.component';
import {BsTooltipBoundaryDirective} from './bs-tooltip-boundary.directive';
import {DOCUMENT} from '@angular/common';

@Directive({
    selector: '[bsTooltipToggle]'
})
export class BsTooltipToggleDirective {
    @Input() animation?: boolean;
    @Input() delay?: bsTooltipDelay;
    @Input() html: boolean;
    @Input() placement?: placement;
    @Input() trigger: IBsTooltipOptions['trigger'];

    @Input() get title(): string {
        return this._title
    }

    set title(title: string) {
        this._title = title;
        this.elementRef.nativeElement.setAttribute('title', '');

        if (this.tooltipComponent?.instance.visible) {
            this.tooltipComponent.destroy();
            this.tooltipComponent = undefined;
            this.show();
        }
    }

    private _title = '';

    @Input() get bsTooltipToggle(): boolean | undefined {
        return this.tooltipComponent?.instance.visible;
    }

    set bsTooltipToggle(visible: boolean | undefined) {
        if (visible) {
            this.show();
        } else {
            this.hide();
        }
    }

    @Output() readonly bsTooltipToggleChange = new EventEmitter<boolean>();

    private tooltipComponent?: ComponentRef<BsTooltipComponent>;

    constructor(
        private config: BsTooltipConfigService,
        private helpers: BsHelpers,
        private elementRef: ElementRef<HTMLElement>,
        @Optional() @Host() private boundary: BsTooltipBoundaryDirective,
        @Inject(DOCUMENT) private document: Document
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
            this.bsTooltipToggleChange.emit(true);
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
            this.bsTooltipToggleChange.emit(false);
            this.hide();
        }
    }

    @HostListener('click') click(): void {
        const visible = !!this.tooltipComponent?.instance.visible;
        this.bsTooltipToggleChange.emit(!visible);
        if (visible) {
            this.hide();
        } else {
            this.show();
        }
    }

    private getTriggers(): string[] {
        return this.trigger.split(' ');
    }

    show(): void {
        if (!this.tooltipComponent) {
            const projectableNodes = [];
            if (this.html) {
                const div = this.document.createElement('div');
                div.innerHTML = this.title;
                projectableNodes.push(
                    div.childNodes as unknown as unknown[]
                    // NodeListOf<ChildNode> is accepted by projectableNodes, but TS doesn't know that
                );
            } else {
                projectableNodes.push([this.document.createTextNode(this.title)]);
            }

            this.tooltipComponent = this.helpers.createComponent(
                BsTooltipComponent,
                this.document.body,
                projectableNodes
            );
            this.tooltipComponent.instance.parentElement = this.elementRef.nativeElement;
        }
        this.tooltipComponent.instance.visible = true;
        if (this.animation) {
            this.tooltipComponent.instance.animation = this.animation;
        }
        if (this.delay) {
            this.tooltipComponent.instance.delay = this.delay;
        }
        if (this.placement) {
            this.tooltipComponent.instance.placement = this.placement;
        }
        if (this.boundary) {
            this.tooltipComponent.instance.boundary = this.boundary.elementRef.nativeElement;
        }
    }

    hide(): void {
        if (!this.tooltipComponent) {
            return;
        }
        this.tooltipComponent.instance.visible = false;
    }
}
