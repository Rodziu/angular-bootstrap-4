import {Injectable} from '@angular/core';
import {placement} from '../helpers/bs-helpers.service';

export type bsTooltipDelay = number | { show: number, hide: number };

export interface IBsTooltipOptions {
    animation: boolean,
    delay: bsTooltipDelay,
    placement: placement,
    html: boolean,
    title: string,
    trigger: 'click' | 'hover' | 'focus' | string
}

@Injectable({
    providedIn: 'root'
})
export class BsTooltipConfigService implements IBsTooltipOptions {
    animation = true;
    delay: bsTooltipDelay = 0;
    placement: placement = 'bottom';
    html = false;
    title = '';
    trigger = 'hover focus';
}
