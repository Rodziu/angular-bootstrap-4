import {ComponentRef, Inject, Injectable} from '@angular/core';
import {BsModalBackdropComponent} from './bs-modal-backdrop.component';
import {BsHelpers} from '../../helpers/bs-helpers.service';
import {DOCUMENT} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class BsModalBackdropService {
    private backdropRef?: ComponentRef<BsModalBackdropComponent>;
    private openModals = 0;
    private _isAnimated = false;
    get isAnimated(): boolean {
        return this._isAnimated;
    }

    constructor(
        private helpers: BsHelpers,
        @Inject(DOCUMENT) private document: Document
    ) {
    }

    show(backdrop: boolean, animate: boolean): Promise<void> {
        return new Promise<void>((resolve) => {
            this.createBackdropComponent();
            this.openModals++;
            this._isAnimated = animate;
            this.document.body.classList.add('modal-open');
            if (backdrop) {
                setTimeout(() => { // wait for backdrop element to be fully drawn
                    this.backdropRef?.instance.show();
                    resolve();
                });
            } else {
                resolve();
            }
        });
    }

    private createBackdropComponent(): void {
        if (typeof this.backdropRef !== 'undefined') {
            return;
        }
        this.backdropRef = this.helpers.createComponent(BsModalBackdropComponent, this.document.body);
    }

    hide(): void {
        this.openModals--;
        if (this.openModals < 0) {
            this.openModals = 0;
        }
        if (this.openModals === 0) {
            const callback = () => {
                this.document.body.classList.remove('modal-open');
            }
            if (this.backdropRef) {
                this.backdropRef.instance.hide().then(callback);
            } else {
                callback();
            }
        }
    }
}
