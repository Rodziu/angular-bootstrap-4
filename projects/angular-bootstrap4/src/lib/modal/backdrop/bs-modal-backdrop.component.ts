import {Component, ElementRef} from '@angular/core';
import {BsModalBackdropService} from './bs-modal-backdrop.service';

@Component({
    template: '<div class="modal-backdrop" [ngClass]="{\'fade\': service.isAnimated}"></div>',
    selector: 'bs-modal-backdrop'
})
export class BsModalBackdropComponent {
    constructor(
        public service: BsModalBackdropService,
        public elementRef: ElementRef<HTMLElement>
    ) {
    }

    private getBackdropElement(): HTMLElement {
        return this.elementRef.nativeElement.children[0] as HTMLElement;
    }

    show(): void {
        const backdropElement = this.getBackdropElement();
        backdropElement.offsetWidth; // force reflow
        backdropElement.classList.add('show');
        backdropElement.style.display = '';
    }

    hide(): Promise<void> {
        return new Promise((resolve) => {
            const backdropElement = this.getBackdropElement();
            backdropElement.classList.remove('show');
            if (this.service.isAnimated) {
                let transitionFinished = false;
                const transition = function() {
                    if (!transitionFinished) {
                        resolve();
                        transitionFinished = true;
                        backdropElement.removeEventListener('transitionend', transition);
                        backdropElement.style.display = 'none';
                    }
                };
                backdropElement.addEventListener('transitionend', transition);
                setTimeout(transition, 150);
            } else {
                resolve();
            }
        });
    }
}
