/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {
    ApplicationRef,
    ComponentFactoryResolver,
    ComponentRef,
    EmbeddedViewRef, Inject,
    Injectable,
    Injector, NgZone,
    Type
} from '@angular/core';
import {DOCUMENT} from '@angular/common';

export interface IElementOffset {
    width: number,
    height: number,
    top: number,
    left: number
}

export type placement = 'top' | 'left' | 'right' | 'bottom' | string;

@Injectable({
    providedIn: 'root'
})
export class BsHelpers {
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector,
        private ngZone: NgZone,
        @Inject(DOCUMENT) private document: Document
    ) {
    }

    /**
     * Get element width, height, position from top and left of document/window,
     */
    offset(element: HTMLElement): IElementOffset {
        const elemBCR = element.getBoundingClientRect(),
            elemStyle = window.getComputedStyle(element);
        return {
            width: Math.ceil(elemBCR.width || element.offsetWidth)
                + parseInt(elemStyle.getPropertyValue('margin-left'))
                + parseInt(elemStyle.getPropertyValue('margin-right')),
            height: Math.ceil(elemBCR.height || element.offsetHeight)
                + parseInt(elemStyle.getPropertyValue('margin-top'))
                + parseInt(elemStyle.getPropertyValue('margin-bottom')),
            top: Math.ceil(elemBCR.top + (window.pageYOffset || this.document.documentElement.scrollTop)),
            left: Math.ceil(elemBCR.left + (window.pageXOffset || this.document.documentElement.scrollLeft)),
        };
    }

    /**
     * Removes all placement classes on given element
     */
    setPlacementCSS(element: HTMLElement, prefix: string, placement: placement): void {
        ['top', 'left', 'right', 'bottom'].forEach((placement) => {
            element.classList.remove(prefix + placement);
        })
        element.classList.add(prefix + placement);
    }

    /**
     * Position element aside of positionTo on given side (placement)
     */
    positionElement(
        element: HTMLElement,
        positionTo: HTMLElement,
        placement: placement,
        boundaryElement: HTMLElement | undefined,
        cssPrefix: string
    ): void {
        const splitPlacement = placement.split(' ');
        let top = 0, left = 0,
            arrowTop = '50%',
            realPlacement: placement = 'left',
            offset = this.offset(element);

        if (isNaN(offset.width)) { // element is not present in DOM
            return;
        }

        const offsetTo = this.offset(positionTo),
            placements: placement[] = ['right', 'top', 'bottom'],
            auto = !!~splitPlacement.indexOf('auto'),
            calcPosition = () => {
                switch (realPlacement) {
                    case 'bottom':
                        top = (offsetTo.top + offsetTo.height);
                        left = ((offsetTo.left + (offsetTo.width / 2)) - (offset.width / 2));
                        break;
                    case 'top':
                        top = (offsetTo.top - offset.height);
                        left = ((offsetTo.left + (offsetTo.width / 2)) - (offset.width / 2));
                        break;
                    case 'left':
                        top = (offsetTo.top + ((offsetTo.height - offset.height) / 2));
                        left = (offsetTo.left - offset.width);
                        break;
                    case 'right':
                        top = (offsetTo.top + ((offsetTo.height - offset.height) / 2));
                        left = (offsetTo.left + offsetTo.width);
                        break;
                }
                this.setPlacementCSS(element, cssPrefix, realPlacement);
                // check to see if element has been resized after adding the placement
                const newOffset = this.offset(element);
                if (newOffset.height !== offset.height || newOffset.width !== offset.width) {
                    offset = newOffset;
                    calcPosition();
                }
            };
        for (let p = 0; p < placements.length; p++) {
            if (~splitPlacement.indexOf(placements[p])) {
                realPlacement = placements[p];
                break;
            }
        }
        calcPosition();
        // get boundary offset
        const bo = typeof boundaryElement !== 'undefined' ? this.offset(boundaryElement) : {
            top: window.pageYOffset || this.document.documentElement.scrollTop,
            left: 0,
            width: Math.max(window.innerWidth, this.document.body.clientWidth),
            height: Math.max(window.innerHeight, this.document.body.clientHeight)
        };
        // change side if element would be outside of given viewport
        if (auto) {
            let newPlacement = realPlacement;
            switch (realPlacement) {
                case 'left':
                    if (left < bo.left) {
                        newPlacement = 'right';
                    }
                    break;
                case 'right':
                    if (left + offset.width + 10 > bo.left + bo.width) {
                        newPlacement = 'left';
                    }
                    break;
                case 'bottom':
                    if (top + offset.height + 10 > bo.top + bo.height) {
                        newPlacement = 'top';
                    }
                    break;
                case 'top':
                    if (top < bo.top) {
                        newPlacement = 'bottom';
                    }
                    break;
            }
            if (newPlacement !== realPlacement) {
                realPlacement = newPlacement;
                calcPosition();
            }
        }
        // adjust arrow position
        const arrow = element.querySelector<HTMLElement>('.arrow');
        if (arrow) {
            switch (realPlacement) {
                case 'left':
                case 'right':
                    if (top < bo.top) {
                        top = bo.top;
                        arrowTop = (offsetTo.top + offsetTo.height / 2) + 'px';
                    } else if (top + offset.height > bo.top + bo.height) {
                        top = bo.top + bo.height - offset.height;
                        let arrowTopN = offsetTo.top + offsetTo.height / 2 - top;
                        if (arrowTopN > offset.height - 15) {
                            arrowTopN = offset.height - 15;
                        }
                        arrowTop = arrowTopN + 'px';
                    }
                    arrow.style.top = arrowTop;
                    break;
                case 'bottom':
                    arrow.style.top = '';
                    break;
                case 'top':
                    arrow.style.top = 'auto';
                    break;
            }
        }
        this.adjustArrow(element, realPlacement);
        // apply element position
        element.style.top = '0px';
        element.style.left = '0px';
        element.style.transform = 'translate3d(' + left + 'px, ' + top + 'px, 0px)';
    }

    /**
     * Properly set arrow position of tooltip/popover element
     */
    adjustArrow(element: HTMLElement, placement: placement): void {
        const arrow = element.querySelector<HTMLElement>('.arrow');
        if (arrow) {
            switch (placement) {
                case 'top':
                case 'bottom':
                    arrow.style.left = 'calc(50% - ' + (this.offset(arrow).width / 2 + 'px)');
                    break;
                case 'left':
                case 'right':
                    arrow.style.top = 'calc(50% - ' + (this.offset(arrow).height / 2 + 'px)');
                    break;
            }
        }
    }

    reflow(element: HTMLElement): void {
        element.offsetWidth;
    }

    runTransition(element: HTMLElement, endFn: () => void): void {
        const {
            transitionDuration,
            transitionDelay
        } = window.getComputedStyle(element);

        let transitionFinished = false;
        const transition = () => {
            if (!transitionFinished) {
                transitionFinished = true;
                element.removeEventListener('transitionend', transition);
                endFn();
            }
        };
        this.ngZone.runOutsideAngular(() => {
            element.addEventListener('transitionend', transition);
            setTimeout(transition, (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * 1000);
        });
    }

    createComponent<T>(
        component: Type<T>,
        appendTo: HTMLElement,
        projectableNodes?: unknown[][]
    ): ComponentRef<T> {
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector, projectableNodes);

        this.appRef.attachView(componentRef.hostView);

        appendTo.appendChild(
            (componentRef.hostView as EmbeddedViewRef<T>)
                .rootNodes[0] as HTMLElement
        );
        return componentRef;
    }
}
