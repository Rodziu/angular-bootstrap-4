/*
 * Bootstrap 4 plugin for AngularJS.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
import {AfterContentChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BsHelpers} from '../helpers/bs-helpers.service';
import {BsPopoverConfigService} from './bs-popover-config.service';
import {AbstractPopupComponent} from '../helpers/abstract-popup-component';

@Component({
    selector: 'bs-popover',
    templateUrl: './bs-popover.component.html'
})
export class BsPopoverComponent extends AbstractPopupComponent implements OnInit, AfterContentChecked {
    defaultContent: string;
    contentVisible = true;
    protected cssPrefix = 'bs-popover-';

    @ViewChild('titleElement') private titleElement?: ElementRef<HTMLElement>;
    @ViewChild('contentElement') private contentElement?: ElementRef<HTMLElement>;

    constructor(
        elementRef: ElementRef<HTMLElement>,
        config: BsPopoverConfigService,
        helpers: BsHelpers
    ) {
        super(elementRef, config, helpers);
        this.defaultContent = config.content;
    }

    ngOnInit(): void {
        (this.elementRef.nativeElement.children[0] as HTMLElement).style.top = '0';
        super.ngOnInit();
    }

    ngAfterContentChecked(): void {
        this.titleVisible = !!this.titleElement?.nativeElement.textContent?.trim().length;
        this.contentVisible = !!this.contentElement?.nativeElement.textContent?.trim().length;
    }
}
