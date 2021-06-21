import {AfterContentChecked, Component, ElementRef, Input, OnInit} from '@angular/core';
import {BsTooltipConfigService, bsTooltipDelay} from './bs-tooltip-config.service';
import {BsHelpers, placement} from '../helpers/bs-helpers.service';

@Component({
    selector: 'bs-tooltip',
    templateUrl: './bs-tooltip.component.html'
})
export class BsTooltipComponent implements OnInit, AfterContentChecked {
    @Input() get visible(): boolean {
        return this._visible;
    }

    set visible(visible: boolean) {
        this._visible = visible;
        this.toggle();
    }

    @Input() animation: boolean;
    @Input() delay: bsTooltipDelay;
    @Input() placement: placement;
    @Input() parentElement?: HTMLElement;
    @Input() boundary?: HTMLElement;
    defaultTitle: string;
    fadeIn = false;
    titleVisible = true;

    private _visible = true;
    private timeout: number | null = null;
    private tooltipInner?: HTMLElement;

    constructor(
        private elementRef: ElementRef<HTMLElement>,
        private config: BsTooltipConfigService,
        private helpers: BsHelpers
    ) {
        this.animation = this.config.animation;
        this.delay = this.config.delay;
        this.placement = this.config.placement;
        this.defaultTitle = this.config.title;
    }

    ngOnInit(): void {
        (this.elementRef.nativeElement.children[0] as HTMLElement).style.top = '0';
        this.tooltipInner = this.elementRef.nativeElement.querySelector('.tooltip-inner') as HTMLElement;

        if (this.visible) {
            this.toggle();
        }
    }

    ngAfterContentChecked(): void {
        this.titleVisible = !!this.tooltipInner?.textContent?.trim().length;
    }

    private toggle(): void {
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

    private show(): void {
        const tooltip = this.elementRef.nativeElement.children[0] as HTMLElement;
        if (this.parentElement) {
            this.helpers.positionElement(
                tooltip, this.parentElement, this.placement,
                this.boundary, 'bs-tooltip-'
            )
        } else {
            this.helpers.setPlacementCSS(tooltip, 'bs-tooltip-', this.placement);
            this.helpers.adjustArrow(tooltip, this.placement)
        }
        this.fadeIn = true;
    }

    private hide(): void {
        const tooltip = this.elementRef.nativeElement.children[0] as HTMLElement;

        this._visible = true;
        this.fadeIn = false;
        const transition = () => {
            this._visible = false;
            tooltip.removeEventListener('transitionend', transition);
        };
        tooltip.addEventListener('transitionend', transition);
    }

    private getDelay(inDelay: bsTooltipDelay): number {
        if (typeof inDelay === 'object') {
            return inDelay[this.visible ? 'show' : 'hide'] || this.getDelay(this.config.delay);
        }
        return inDelay;
    }
}
