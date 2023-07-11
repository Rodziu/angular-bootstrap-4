/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {
    Directive,
    ElementRef,
    HostListener,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    Output,
    SimpleChanges
} from '@angular/core';
import {BsModalConfigService, IBsModalOptions} from './bs-modal-config.service';
import {BsModalBackdropService} from './backdrop/bs-modal-backdrop.service';
import {EventEmitter} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {BsHelpers} from '../helpers/bs-helpers.service';

@Directive({
    selector: '[bsModal]',
    exportAs: 'bsModal'
})
export class BsModalDirective implements OnChanges, OnDestroy {
    @Input() get bsModal(): boolean {
        return this._bsModal;
    }

    /**
     * allow setting new value, but ignore it as it's picked up in ngOnChanges
     * _bsModal value is updated after shouldChange validation
     */
    set bsModal(bsModal: boolean) {
        // noinspection BadExpressionStatementJS
        bsModal;
    }

    @Input() backdrop?: IBsModalOptions['backdrop'];
    @Input() keyboard?: IBsModalOptions['keyboard'];
    @Input() onBeforeChange?: IBsModalOptions['onBeforeChange'];

    @Output() readonly bsModalChange = new EventEmitter<boolean>();

    private _bsModal = false;
    private _keydownListener = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            this.onKeydown();
        }
    };

    constructor(
        private readonly config: BsModalConfigService,
        private readonly backdropService: BsModalBackdropService,
        private readonly bsHelpers: BsHelpers,
        private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(DOCUMENT) private readonly document: Document
    ) {
        this.backdrop = this.config.backdrop;
        this.keyboard = this.config.keyboard;
    }

    @HostListener('click', ['$event.target']) click(target: HTMLElement): void {
        if (window.getSelection()?.type === 'Range') {
            return;
        }
        if (this.backdrop === true && target === this.elementRef.nativeElement) { // .modal covers whole page
            this.hide();
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('bsModal' in changes) {
            const result = changes.bsModal.currentValue ? this.show() : this.hide();
            if (!result) { // not shown, prevented by shouldChange
                setTimeout(() => {
                    this.bsModalChange.emit(!changes.bsModal.currentValue);
                })
                this._bsModal = !changes.bsModal.currentValue;
            }
        }
    }

    onKeydown(): void {
        if (this.keyboard) {
            this.hide();
        }
    }

    show(): boolean {
        if (this._bsModal) {
            return true;
        }
        if (this.shouldChange()) {
            this._bsModal = true;
            this.bsModalChange.emit(true);
            this.doShow();
            return true;
        }
        return false;
    }

    hide(): boolean {
        if (!this._bsModal) {
            return true;
        }
        if (this.shouldChange()) {
            this._bsModal = false;
            this.bsModalChange.emit(false);
            this.doHide();
            return true;
        }
        return false;
    }

    private shouldChange(): boolean {
        let ret = this.config.onBeforeChange(this);
        if (ret && typeof this.onBeforeChange !== 'undefined') {
            ret = this.onBeforeChange(this);
        }
        return ret;
    }

    private doShow(): void {
        this.document.addEventListener('keydown', this._keydownListener);

        if (!this.elementRef.nativeElement.classList.contains('show')) {
            this.elementRef.nativeElement.style.display = 'block';
            this.bsHelpers.reflow(this.elementRef.nativeElement);
            this.backdropService
                .show(
                    !!this.backdrop,
                    this.elementRef.nativeElement.classList.contains('fade'),
                    this.elementRef
                )
                .then(() => {
                    this.elementRef.nativeElement.classList.add('show');
                });
        }
    }

    private doHide(): void {
        this.document.removeEventListener('keydown', this._keydownListener);

        if (this.elementRef.nativeElement.classList.contains('show')) {
            this.elementRef.nativeElement.classList.remove('show');

            const callback = () => {
                this.backdropService.hide(this.elementRef);
                this.elementRef.nativeElement.style.display = '';
            };

            if (this.elementRef.nativeElement.classList.contains('fade')) {
                this.bsHelpers.runTransition(this.elementRef.nativeElement, callback);
            } else {
                callback();
            }
        }
    }

    ngOnDestroy(): void {
        this.document.removeEventListener('keydown', this._keydownListener);
    }
}
