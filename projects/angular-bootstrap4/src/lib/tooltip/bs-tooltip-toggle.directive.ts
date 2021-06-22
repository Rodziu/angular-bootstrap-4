/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {Directive, ElementRef, EventEmitter, Host, Inject, Input, Optional, Output} from '@angular/core';
import {BsTooltipComponent} from './bs-tooltip.component';
import {AbstractPopupToggleDirective} from '../helpers/abstract-popup-toggle-directive';
import {BsHelpers} from '../helpers/bs-helpers.service';
import {DOCUMENT} from '@angular/common';
import {BsTooltipConfigService} from './bs-tooltip-config.service';
import {BsTooltipBoundaryDirective} from './bs-tooltip-boundary.directive';

@Directive({
    selector: '[bsTooltipToggle]'
})
export class BsTooltipToggleDirective extends AbstractPopupToggleDirective<BsTooltipComponent> {

    @Input() get bsTooltipToggle(): boolean | undefined {
        return super.bsPopupToggle;
    }

    set bsTooltipToggle(visible: boolean | undefined) {
        super.bsPopupToggle = visible;
    }

    bsPopupToggleChange = new EventEmitter<boolean>();

    @Output() readonly bsTooltipToggleChange = this.bsPopupToggleChange;

    protected componentClass = BsTooltipComponent;

    constructor(
        protected config: BsTooltipConfigService,
        protected helpers: BsHelpers,
        protected elementRef: ElementRef<HTMLElement>,
        @Optional() @Host() protected boundary: BsTooltipBoundaryDirective,
        @Inject(DOCUMENT) protected document: Document
    ) {
        super(config, helpers, elementRef, document);
    }

    protected getPopupProjectableNodes(): unknown[][] {
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
        return projectableNodes;
    }
}
