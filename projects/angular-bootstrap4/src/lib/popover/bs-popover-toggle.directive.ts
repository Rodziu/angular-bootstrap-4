/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {Directive, ElementRef, EventEmitter, Host, Inject, Input, Optional, Output} from '@angular/core';
import {BsPopoverComponent} from './bs-popover.component';
import {AbstractPopupToggleDirective} from '../helpers/abstract-popup-toggle-directive';
import {BsHelpers} from '../helpers/bs-helpers.service';
import {DOCUMENT} from '@angular/common';
import {BsPopoverConfigService} from './bs-popover-config.service';
import {BsPopoverBoundaryDirective} from './bs-popover-boundary.directive';

@Directive({
    selector: '[bsPopoverToggle]'
})
export class BsPopoverToggleDirective extends AbstractPopupToggleDirective<BsPopoverComponent> {
    @Input() get bsPopoverToggle(): boolean | undefined {
        return super.bsPopupToggle;
    }

    set bsPopoverToggle(visible: boolean | undefined) {
        super.bsPopupToggle = visible;
    }

    bsPopupToggleChange = new EventEmitter<boolean>();

    @Output() readonly bsPopoverToggleChange = this.bsPopupToggleChange;

    @Input() get content(): string {
        return this._content;
    }

    set content(content: string) {
        this._content = content;

        if (this.popupComponent?.instance.visible) {
            this.popupComponent.destroy();
            this.popupComponent = undefined;
            this.show();
        }
    }

    protected _content = '';

    protected componentClass = BsPopoverComponent;

    constructor(
        protected config: BsPopoverConfigService,
        protected helpers: BsHelpers,
        protected elementRef: ElementRef<HTMLElement>,
        @Optional() @Host() protected boundary: BsPopoverBoundaryDirective,
        @Inject(DOCUMENT) protected document: Document
    ) {
        super(config, helpers, elementRef, document);
    }

    protected getPopupProjectableNodes(): unknown[][] {
        const projectableNodes = [];
        if (this.html) {
            let div = this.document.createElement('div');
            div.innerHTML = this.title;
            projectableNodes.push(
                div.childNodes as unknown as unknown[]
                // NodeListOf<ChildNode> is accepted by projectableNodes, but TS doesn't know that
            );

            div = this.document.createElement('div');
            div.innerHTML = this.content;
            projectableNodes.push(
                div.childNodes as unknown as unknown[]
                // NodeListOf<ChildNode> is accepted by projectableNodes, but TS doesn't know that
            );
        } else {
            projectableNodes.push([this.document.createTextNode(this.title)]);
            projectableNodes.push([this.document.createTextNode(this.content)]);
        }
        return projectableNodes;
    }
}
