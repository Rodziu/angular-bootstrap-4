import {Directive, ElementRef, HostListener, Input, OnInit, Output} from '@angular/core';
import {BsModalConfigService, IBsModalOptions} from './bs-modal-config.service';
import {BsModalBackdropService} from './backdrop/bs-modal-backdrop.service';
import {EventEmitter} from '@angular/core';

@Directive({
    selector: '[bsModal]',
    exportAs: 'bsModal'
})
export class BsModalDirective implements OnInit {
    @Input() get bsModal(): boolean {
        return this._bsModal;
    }

    set bsModal(bsModal: boolean) {
        if (bsModal === this._bsModal) {
            return;
        }

        const result = bsModal ? this.show() : this.hide();
        if (!result) { // not shown, prevented by shouldChange
            setTimeout(() => {
                this.bsModalChange.emit(!bsModal);
            })
            this._bsModal = !bsModal;
        }
    }

    private _bsModal = false;
    @Output() readonly bsModalChange = new EventEmitter<boolean>();
    @Input() backdrop?: IBsModalOptions['backdrop'];
    @Input() keyboard?: IBsModalOptions['keyboard'];
    @Input() onBeforeChange?: IBsModalOptions['onBeforeChange'];

    constructor(
        private config: BsModalConfigService,
        private backdropService: BsModalBackdropService,
        private elementRef: ElementRef<HTMLElement>
    ) {
    }

    @HostListener('click', ['$event.target']) click(target: HTMLElement): void {
        if (window.getSelection()?.type === 'Range') {
            return;
        }
        if (this.backdrop === true && target === this.elementRef.nativeElement) { // .modal covers whole page
            this.hide();
        }
    }

    @HostListener('document:keydown.escape') keydown(): void {
        if (this.keyboard) {
            this.hide();
        }
    }

    ngOnInit(): void {
        if (typeof this.backdrop === 'undefined') {
            this.backdrop = this.config.backdrop;
        }
        if (typeof this.keyboard === 'undefined') {
            this.keyboard = this.config.keyboard;
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
        let ret = typeof this.onBeforeChange !== 'undefined' ? this.onBeforeChange(this) : true;
        if (ret) {
            ret = this.config.onBeforeChange(this);
        }
        return ret;
    }

    private doShow(): void {
        if (!this.elementRef.nativeElement.classList.contains('show')) {
            this.elementRef.nativeElement.style.display = 'block';
            this.elementRef.nativeElement.offsetWidth; // force reflow
            this.backdropService
                .show(!!this.backdrop, this.elementRef.nativeElement.classList.contains('fade'))
                .then(() => {
                    this.elementRef.nativeElement.classList.add('show');
                });
        }
    }

    private doHide(): void {
        if (this.elementRef.nativeElement.classList.contains('show')) {
            this.elementRef.nativeElement.classList.remove('show');
            let transitionEnded = false;
            const callback = () => {
                    this.backdropService.hide();
                    this.elementRef.nativeElement.style.display = '';
                },
                transition = () => {
                    if (!transitionEnded) {
                        this.elementRef.nativeElement.removeEventListener('transitionend', transition);
                        callback();
                        transitionEnded = true;
                    }
                };
            if (this.elementRef.nativeElement.classList.contains('fade')) {
                this.elementRef.nativeElement.addEventListener('transitionend', transition);
                setTimeout(transition, 300);
            } else {
                callback();
            }
        }
    }
}
