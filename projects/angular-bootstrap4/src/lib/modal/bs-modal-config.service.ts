import {Injectable} from '@angular/core';
import {BsModalDirective} from './bs-modal.directive';

export interface IBsModalOptions {
    backdrop: 'static' | boolean,
    keyboard: boolean,
    transitionDuration: number,
    backdropTransitionDuration: number,
    onBeforeChange: (instance: BsModalDirective) => boolean;
}

@Injectable({
    providedIn: 'root'
})
export class BsModalConfigService implements IBsModalOptions {
    backdrop: 'static' | boolean = 'static';
    keyboard = true;
    transitionDuration = 300;
    backdropTransitionDuration = 150;
    onBeforeChange: IBsModalOptions['onBeforeChange'] = (): boolean => true;
}
