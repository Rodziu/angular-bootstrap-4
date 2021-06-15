import {
    ApplicationRef,
    ComponentFactoryResolver,
    ComponentRef,
    EmbeddedViewRef,
    Injectable,
    Injector
} from '@angular/core';
import {BsModalBackdropComponent} from './bs-modal-backdrop.component';

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
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) {
    }

    show(backdrop: boolean, animate: boolean): Promise<void> {
        return new Promise<void>((resolve) => {
            this.createBackdropComponent();
            this.openModals++;
            this._isAnimated = animate;
            document.body.classList.add('modal-open');
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
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(BsModalBackdropComponent)
            .create(this.injector);

        this.appRef.attachView(componentRef.hostView);

        document.body.appendChild(
            (componentRef.hostView as EmbeddedViewRef<BsModalBackdropComponent>)
                .rootNodes[0] as HTMLElement
        );
        this.backdropRef = componentRef;
    }

    hide(): void {
        this.openModals--;
        if (this.openModals < 0) {
            this.openModals = 0;
        }
        if (this.openModals === 0) {
            const callback = () => {
                document.body.classList.remove('modal-open');
            }
            if (this.backdropRef) {
                this.backdropRef.instance.hide().then(callback);
            } else {
                callback();
            }
        }
    }
}
