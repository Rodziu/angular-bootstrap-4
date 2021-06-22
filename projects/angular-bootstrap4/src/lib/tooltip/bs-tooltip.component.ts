/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {AfterContentChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BsTooltipConfigService} from './bs-tooltip-config.service';
import {BsHelpers} from '../helpers/bs-helpers.service';
import {AbstractPopupComponent} from '../helpers/abstract-popup-component';

@Component({
    selector: 'bs-tooltip',
    templateUrl: './bs-tooltip.component.html'
})
export class BsTooltipComponent extends AbstractPopupComponent implements OnInit, AfterContentChecked {
    titleVisible = true;
    protected cssPrefix = 'bs-tooltip-';

    @ViewChild('ngContent') private ngContent?: ElementRef<HTMLElement>;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(
        elementRef: ElementRef<HTMLElement>,
        config: BsTooltipConfigService,
        helpers: BsHelpers
    ) {
        super(elementRef, config, helpers);
    }

    ngOnInit(): void {
        (this.elementRef.nativeElement.children[0] as HTMLElement).style.top = '0';

        super.ngOnInit();
    }

    ngAfterContentChecked(): void {
        this.titleVisible = !!this.ngContent?.nativeElement.textContent?.trim().length;
    }
}
