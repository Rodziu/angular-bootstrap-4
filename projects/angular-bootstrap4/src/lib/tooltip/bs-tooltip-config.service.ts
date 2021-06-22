/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {Injectable} from '@angular/core';
import {placement} from '../helpers/bs-helpers.service';
import {bsPopupDelay, BsPopupOptions} from '../helpers/abstract-popup-component';

@Injectable({
    providedIn: 'root'
})
export class BsTooltipConfigService implements BsPopupOptions {
    animation = true;
    delay: bsPopupDelay = 0;
    placement: placement = 'bottom';
    html = false;
    title = '';
    trigger = 'hover focus';
}
