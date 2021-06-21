/*
 * Bootstrap 4 plugin for AngularJS.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
import {Injectable} from '@angular/core';

export interface IBsCarouselOptions {
    interval: number,
    pause: 'hover' | null,
    wrap: boolean,
    keyboard: boolean
}

@Injectable({
    providedIn: 'root'
})
export class BsCarouselConfigService implements IBsCarouselOptions {
    interval = 5000;
    pause: IBsCarouselOptions['pause'] = 'hover';
    wrap = true;
    keyboard = true;
}
