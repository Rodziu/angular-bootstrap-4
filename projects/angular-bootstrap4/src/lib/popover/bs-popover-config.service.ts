/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {Injectable} from '@angular/core';
import {BsPopupOptions} from '../helpers/abstract-popup-component';

export interface IBsPopoverOptions extends BsPopupOptions {
    content: string,
}

@Injectable({
    providedIn: 'root'
})
export class BsPopoverConfigService implements IBsPopoverOptions {
    animation = true;
    delay = 0;
    html = false;
    placement = 'right';
    title = '';
    content = '';
    trigger = 'click';
}
