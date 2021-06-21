(self["webpackChunkangular_bootstrap4"] = self["webpackChunkangular_bootstrap4"] || []).push([["main"],{

/***/ 1488:
/*!*********************************************!*\
  !*** ./dist/fesm2015/angular-bootstrap4.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularBootstrap4Module": () => (/* binding */ AngularBootstrap4Module),
/* harmony export */   "BsDropdownBoundaryDirective": () => (/* binding */ BsDropdownBoundaryDirective),
/* harmony export */   "BsDropdownDirective": () => (/* binding */ BsDropdownDirective),
/* harmony export */   "BsDropdownModule": () => (/* binding */ BsDropdownModule),
/* harmony export */   "BsDropdownToggleDirective": () => (/* binding */ BsDropdownToggleDirective),
/* harmony export */   "BsHelpersModule": () => (/* binding */ BsHelpersModule),
/* harmony export */   "BsModalConfigService": () => (/* binding */ BsModalConfigService),
/* harmony export */   "BsModalDirective": () => (/* binding */ BsModalDirective),
/* harmony export */   "BsModalModule": () => (/* binding */ BsModalModule),
/* harmony export */   "BsPopoverBoundaryDirective": () => (/* binding */ BsPopoverBoundaryDirective),
/* harmony export */   "BsPopoverComponent": () => (/* binding */ BsPopoverComponent),
/* harmony export */   "BsPopoverConfigService": () => (/* binding */ BsPopoverConfigService),
/* harmony export */   "BsPopoverModule": () => (/* binding */ BsPopoverModule),
/* harmony export */   "BsPopoverToggleDirective": () => (/* binding */ BsPopoverToggleDirective),
/* harmony export */   "BsTooltipBoundaryDirective": () => (/* binding */ BsTooltipBoundaryDirective),
/* harmony export */   "BsTooltipComponent": () => (/* binding */ BsTooltipComponent),
/* harmony export */   "BsTooltipConfigService": () => (/* binding */ BsTooltipConfigService),
/* harmony export */   "BsTooltipModule": () => (/* binding */ BsTooltipModule),
/* harmony export */   "BsTooltipToggleDirective": () => (/* binding */ BsTooltipToggleDirective),
/* harmony export */   "DismissDirective": () => (/* binding */ DismissDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);





class BsModalConfigService {
    constructor() {
        this.backdrop = 'static';
        this.keyboard = true;
        this.transitionDuration = 300;
        this.backdropTransitionDuration = 150;
        this.onBeforeChange = () => true;
    }
}
BsModalConfigService.ɵfac = function BsModalConfigService_Factory(t) { return new (t || BsModalConfigService)(); };
BsModalConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BsModalConfigService, factory: BsModalConfigService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

const _c0$2 = function (a0) { return { "fade": a0 }; };
class BsModalBackdropComponent {
    constructor(service, elementRef) {
        this.service = service;
        this.elementRef = elementRef;
    }
    getBackdropElement() {
        return this.elementRef.nativeElement.children[0];
    }
    show() {
        const backdropElement = this.getBackdropElement();
        backdropElement.offsetWidth; // force reflow
        backdropElement.classList.add('show');
        backdropElement.style.display = '';
    }
    hide() {
        return new Promise((resolve) => {
            const backdropElement = this.getBackdropElement();
            backdropElement.classList.remove('show');
            if (this.service.isAnimated) {
                let transitionFinished = false;
                const transition = function () {
                    if (!transitionFinished) {
                        resolve();
                        transitionFinished = true;
                        backdropElement.removeEventListener('transitionend', transition);
                        backdropElement.style.display = 'none';
                    }
                };
                backdropElement.addEventListener('transitionend', transition);
                setTimeout(transition, 150);
            }
            else {
                resolve();
            }
        });
    }
}
BsModalBackdropComponent.ɵfac = function BsModalBackdropComponent_Factory(t) { return new (t || BsModalBackdropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsModalBackdropService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
BsModalBackdropComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BsModalBackdropComponent, selectors: [["bs-modal-backdrop"]], decls: 1, vars: 3, consts: [[1, "modal-backdrop", 3, "ngClass"]], template: function BsModalBackdropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0$2, ctx.service.isAnimated));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalBackdropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                template: '<div class="modal-backdrop" [ngClass]="{\'fade\': service.isAnimated}"></div>',
                selector: 'bs-modal-backdrop'
            }]
    }], function () { return [{ type: BsModalBackdropService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, null); })();

class BsHelpers {
    constructor(componentFactoryResolver, appRef, injector, document) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.document = document;
    }
    /**
     * Get element width, height, position from top and left of document/window,
     */
    offset(element) {
        const elemBCR = element.getBoundingClientRect(), elemStyle = window.getComputedStyle(element);
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
    setPlacementCSS(element, prefix, placement) {
        ['top', 'left', 'right', 'bottom'].forEach((placement) => {
            element.classList.remove(prefix + placement);
        });
        element.classList.add(prefix + placement);
    }
    /**
     * Position element aside of positionTo on given side (placement)
     */
    positionElement(element, positionTo, placement, boundaryElement, cssPrefix) {
        const splitPlacement = placement.split(' ');
        let top = 0, left = 0, arrowTop = '50%', realPlacement = 'left', offset = this.offset(element);
        const offsetTo = this.offset(positionTo), placements = ['right', 'top', 'bottom'], auto = !!~splitPlacement.indexOf('auto'), calcPosition = () => {
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
        const arrow = element.querySelector('.arrow');
        if (arrow) {
            switch (realPlacement) {
                case 'left':
                case 'right':
                    if (top < bo.top) {
                        top = bo.top;
                        arrowTop = (offsetTo.top + offsetTo.height / 2) + 'px';
                    }
                    else if (top + offset.height > bo.top + bo.height) {
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
    adjustArrow(element, placement) {
        const arrow = element.querySelector('.arrow');
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
    createComponent(component, appendTo, projectableNodes) {
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector, projectableNodes);
        this.appRef.attachView(componentRef.hostView);
        appendTo.appendChild(componentRef.hostView
            .rootNodes[0]);
        return componentRef;
    }
}
BsHelpers.ɵfac = function BsHelpers_Factory(t) { return new (t || BsHelpers)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
BsHelpers.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BsHelpers, factory: BsHelpers.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsHelpers, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }] }]; }, null); })();

class BsModalBackdropService {
    constructor(helpers, document) {
        this.helpers = helpers;
        this.document = document;
        this.openModals = 0;
        this._isAnimated = false;
    }
    get isAnimated() {
        return this._isAnimated;
    }
    show(backdrop, animate) {
        return new Promise((resolve) => {
            this.createBackdropComponent();
            this.openModals++;
            this._isAnimated = animate;
            this.document.body.classList.add('modal-open');
            if (backdrop) {
                setTimeout(() => {
                    var _a;
                    (_a = this.backdropRef) === null || _a === void 0 ? void 0 : _a.instance.show();
                    resolve();
                });
            }
            else {
                resolve();
            }
        });
    }
    createBackdropComponent() {
        if (typeof this.backdropRef !== 'undefined') {
            return;
        }
        this.backdropRef = this.helpers.createComponent(BsModalBackdropComponent, this.document.body);
    }
    hide() {
        this.openModals--;
        if (this.openModals < 0) {
            this.openModals = 0;
        }
        if (this.openModals === 0) {
            const callback = () => {
                this.document.body.classList.remove('modal-open');
            };
            if (this.backdropRef) {
                this.backdropRef.instance.hide().then(callback);
            }
            else {
                callback();
            }
        }
    }
}
BsModalBackdropService.ɵfac = function BsModalBackdropService_Factory(t) { return new (t || BsModalBackdropService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BsHelpers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
BsModalBackdropService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BsModalBackdropService, factory: BsModalBackdropService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalBackdropService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: BsHelpers }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }] }]; }, null); })();

class BsModalDirective {
    constructor(config, backdropService, elementRef) {
        this.config = config;
        this.backdropService = backdropService;
        this.elementRef = elementRef;
        this._bsModal = false;
        this.bsModalChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get bsModal() {
        return this._bsModal;
    }
    set bsModal(bsModal) {
        if (bsModal === this._bsModal) {
            return;
        }
        const result = bsModal ? this.show() : this.hide();
        if (!result) { // not shown, prevented by shouldChange
            setTimeout(() => {
                this.bsModalChange.emit(!bsModal);
            });
            this._bsModal = !bsModal;
        }
    }
    click(target) {
        var _a;
        if (((_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.type) === 'Range') {
            return;
        }
        if (this.backdrop === true && target === this.elementRef.nativeElement) { // .modal covers whole page
            this.hide();
        }
    }
    keydown() {
        if (this.keyboard) {
            this.hide();
        }
    }
    ngOnInit() {
        if (typeof this.backdrop === 'undefined') {
            this.backdrop = this.config.backdrop;
        }
        if (typeof this.keyboard === 'undefined') {
            this.keyboard = this.config.keyboard;
        }
    }
    show() {
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
    hide() {
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
    shouldChange() {
        let ret = typeof this.onBeforeChange !== 'undefined' ? this.onBeforeChange(this) : true;
        if (ret) {
            ret = this.config.onBeforeChange(this);
        }
        return ret;
    }
    doShow() {
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
    doHide() {
        if (this.elementRef.nativeElement.classList.contains('show')) {
            this.elementRef.nativeElement.classList.remove('show');
            let transitionEnded = false;
            const callback = () => {
                this.backdropService.hide();
                this.elementRef.nativeElement.style.display = '';
            }, transition = () => {
                if (!transitionEnded) {
                    this.elementRef.nativeElement.removeEventListener('transitionend', transition);
                    callback();
                    transitionEnded = true;
                }
            };
            if (this.elementRef.nativeElement.classList.contains('fade')) {
                this.elementRef.nativeElement.addEventListener('transitionend', transition);
                setTimeout(transition, 300);
            }
            else {
                callback();
            }
        }
    }
}
BsModalDirective.ɵfac = function BsModalDirective_Factory(t) { return new (t || BsModalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsModalConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsModalBackdropService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
BsModalDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BsModalDirective, selectors: [["", "bsModal", ""]], hostBindings: function BsModalDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BsModalDirective_click_HostBindingHandler($event) { return ctx.click($event.target); })("keydown.escape", function BsModalDirective_keydown_escape_HostBindingHandler() { return ctx.keydown(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { bsModal: "bsModal", backdrop: "backdrop", keyboard: "keyboard", onBeforeChange: "onBeforeChange" }, outputs: { bsModalChange: "bsModalChange" }, exportAs: ["bsModal"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[bsModal]',
                exportAs: 'bsModal'
            }]
    }], function () { return [{ type: BsModalConfigService }, { type: BsModalBackdropService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { bsModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], bsModalChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], backdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], keyboard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], onBeforeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click', ['$event.target']]
        }], keydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['document:keydown.escape']
        }] }); })();

class DismissDirective {
    constructor(bsModal) {
        this.bsModal = bsModal;
    }
    click() {
        this.bsModal.hide();
    }
}
DismissDirective.ɵfac = function DismissDirective_Factory(t) { return new (t || DismissDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsModalDirective, 1)); };
DismissDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DismissDirective, selectors: [["", "dismiss", ""]], hostBindings: function DismissDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DismissDirective_click_HostBindingHandler() { return ctx.click(); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DismissDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[dismiss]'
            }]
    }], function () { return [{ type: BsModalDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }] }]; }, { click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
        }] }); })();

class BsHelpersModule {
}
BsHelpersModule.ɵfac = function BsHelpersModule_Factory(t) { return new (t || BsHelpersModule)(); };
BsHelpersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BsHelpersModule });
BsHelpersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsHelpersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [],
                exports: []
            }]
    }], null, null); })();

class BsModalModule {
}
BsModalModule.ɵfac = function BsModalModule_Factory(t) { return new (t || BsModalModule)(); };
BsModalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BsModalModule });
BsModalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            BsHelpersModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [
                    BsModalBackdropComponent,
                    BsModalDirective,
                    DismissDirective
                ],
                imports: [
                    BsHelpersModule,
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule
                ],
                exports: [
                    BsModalDirective,
                    DismissDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BsModalModule, { declarations: [BsModalBackdropComponent,
        BsModalDirective,
        DismissDirective], imports: [BsHelpersModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule], exports: [BsModalDirective,
        DismissDirective] }); })();

class BsDropdownBoundaryDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
BsDropdownBoundaryDirective.ɵfac = function BsDropdownBoundaryDirective_Factory(t) { return new (t || BsDropdownBoundaryDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
BsDropdownBoundaryDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BsDropdownBoundaryDirective, selectors: [["", "bsDropdownBoundary", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsDropdownBoundaryDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[bsDropdownBoundary]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, null); })();

class BsDropdownDirective {
    constructor(elementRef, helpers, boundary) {
        this.elementRef = elementRef;
        this.helpers = helpers;
        this.boundary = boundary;
        this._bsDropdown = false;
        this.bsDropdownChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get bsDropdown() {
        return this._bsDropdown;
    }
    set bsDropdown(bsDropdown) {
        this._bsDropdown = bsDropdown;
        if (bsDropdown) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    ngOnInit() {
        this.elementRef.nativeElement.classList.add('dropdown');
    }
    click(target) {
        if (this._bsDropdown && !this.elementRef.nativeElement.contains(target)) {
            this._bsDropdown = false;
            this.bsDropdownChange.emit(false);
        }
    }
    keydown(event) {
        if (!this._bsDropdown) {
            return;
        }
        if (event.key === 'Escape') {
            this._bsDropdown = false;
            this.bsDropdownChange.emit(false);
        }
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            const items = this.elementRef.nativeElement.querySelectorAll('.dropdown-menu a:not(.disabled)');
            let idx = -1;
            for (let i = 0; i < items.length; i++) {
                if (items[i].contains(event.target)) {
                    idx = i;
                    break;
                }
            }
            if (event.key === 'ArrowUp' && idx > 0) {
                idx--;
            }
            else if (event.key === 'ArrowDown' && idx < items.length - 1) {
                idx++;
            }
            if (!~idx) {
                idx = 0;
            }
            items[idx].focus();
        }
    }
    show() {
        this.elementRef.nativeElement.classList.add('show');
        this.elementRef.nativeElement.querySelectorAll('.dropdown-menu')
            .forEach((element) => {
            element.classList.add('show');
        });
        this.reposition();
    }
    hide() {
        if (this.boundary || this.boundaryElement) {
            this.elementRef.nativeElement.classList.remove('dropup');
        }
        this.elementRef.nativeElement.classList.remove('show');
        this.elementRef.nativeElement.querySelectorAll('.dropdown-menu')
            .forEach((element) => {
            element.classList.remove('show');
        });
    }
    reposition() {
        let boundaryElement;
        if (this.boundary) {
            boundaryElement = this.boundary.elementRef.nativeElement;
        }
        else if (this.boundaryElement) {
            boundaryElement = this.boundaryElement.nativeElement;
        }
        else {
            return;
        }
        const dropdownMenu = this.elementRef.nativeElement.querySelector('.dropdown-menu');
        if (!dropdownMenu) {
            return;
        }
        const boundaryOffset = this.helpers.offset(boundaryElement), menuOffset = this.helpers.offset(dropdownMenu);
        if (menuOffset.height + menuOffset.top > boundaryOffset.height + boundaryOffset.top) {
            this.elementRef.nativeElement.classList.add('dropup');
        }
        else {
            this.elementRef.nativeElement.classList.remove('dropup');
        }
    }
}
BsDropdownDirective.ɵfac = function BsDropdownDirective_Factory(t) { return new (t || BsDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsHelpers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsDropdownBoundaryDirective, 9)); };
BsDropdownDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BsDropdownDirective, selectors: [["", "bsDropdown", ""]], hostBindings: function BsDropdownDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BsDropdownDirective_click_HostBindingHandler($event) { return ctx.click($event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function BsDropdownDirective_keydown_HostBindingHandler($event) { return ctx.keydown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { bsDropdown: "bsDropdown", boundaryElement: "boundaryElement" }, outputs: { bsDropdownChange: "bsDropdownChange" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsDropdownDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[bsDropdown]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: BsHelpers }, { type: BsDropdownBoundaryDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }] }]; }, { bsDropdown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], boundaryElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], bsDropdownChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['document:click', ['$event.target']]
        }], keydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['document:keydown', ['$event']]
        }] }); })();

class BsDropdownToggleDirective {
    constructor(bsDropdown) {
        this.bsDropdown = bsDropdown;
    }
    click() {
        this.bsDropdown.bsDropdownChange.emit(!this.bsDropdown.bsDropdown);
    }
}
BsDropdownToggleDirective.ɵfac = function BsDropdownToggleDirective_Factory(t) { return new (t || BsDropdownToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsDropdownDirective, 1)); };
BsDropdownToggleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BsDropdownToggleDirective, selectors: [["", "bsDropdownToggle", ""]], hostBindings: function BsDropdownToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BsDropdownToggleDirective_click_HostBindingHandler() { return ctx.click(); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsDropdownToggleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[bsDropdownToggle]'
            }]
    }], function () { return [{ type: BsDropdownDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }] }]; }, { click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
        }] }); })();

class BsDropdownModule {
}
BsDropdownModule.ɵfac = function BsDropdownModule_Factory(t) { return new (t || BsDropdownModule)(); };
BsDropdownModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BsDropdownModule });
BsDropdownModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            BsHelpersModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsDropdownModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [
                    BsDropdownBoundaryDirective,
                    BsDropdownDirective,
                    BsDropdownToggleDirective
                ],
                imports: [
                    BsHelpersModule
                ],
                exports: [
                    BsDropdownBoundaryDirective,
                    BsDropdownDirective,
                    BsDropdownToggleDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BsDropdownModule, { declarations: [BsDropdownBoundaryDirective,
        BsDropdownDirective,
        BsDropdownToggleDirective], imports: [BsHelpersModule], exports: [BsDropdownBoundaryDirective,
        BsDropdownDirective,
        BsDropdownToggleDirective] }); })();

/*
 * Bootstrap 4 plugin for AngularJS.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
class BsPopupOptions {
    constructor() {
        this.animation = true;
        this.delay = 0;
        this.placement = 'bottom';
        this.html = false;
        this.title = '';
        this.trigger = 'hover focus';
    }
}
// eslint-disable-next-line @angular-eslint/use-component-selector
class AbstractPopupComponent {
    constructor(elementRef, config, helpers) {
        this.elementRef = elementRef;
        this.config = config;
        this.helpers = helpers;
        this.fadeIn = false;
        this.titleVisible = true;
        this._visible = true;
        this.timeout = null;
        this.animation = this.config.animation;
        this.delay = this.config.delay;
        this.placement = this.config.placement;
        this.defaultTitle = this.config.title;
    }
    get visible() {
        return this._visible;
    }
    set visible(visible) {
        this._visible = visible;
        this.toggle();
    }
    // eslint-disable-next-line @angular-eslint/contextual-lifecycle
    ngOnInit() {
        if (this.visible) {
            this.toggle();
        }
    }
    toggle() {
        if (this.timeout !== null) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
            this.timeout = null;
            if (this._visible) {
                this.show();
            }
            else {
                this.hide();
            }
        }, this.getDelay(this.delay));
    }
    show() {
        const popup = this.elementRef.nativeElement.children[0];
        if (this.parentElement) {
            this.helpers.positionElement(popup, this.parentElement, this.placement, this.boundary, this.cssPrefix);
        }
        else {
            this.helpers.setPlacementCSS(popup, this.cssPrefix, this.placement);
            this.helpers.adjustArrow(popup, this.placement);
        }
        this.fadeIn = true;
    }
    hide() {
        this.fadeIn = false;
        if (this.animation) {
            const popup = this.elementRef.nativeElement.children[0];
            this._visible = true;
            const transition = () => {
                this._visible = false;
                popup.removeEventListener('transitionend', transition);
            };
            popup.addEventListener('transitionend', transition);
        }
    }
    getDelay(inDelay) {
        if (typeof inDelay === 'object') {
            return inDelay[this.visible ? 'show' : 'hide'] || this.getDelay(this.config.delay);
        }
        return inDelay;
    }
}
AbstractPopupComponent.ɵfac = function AbstractPopupComponent_Factory(t) { return new (t || AbstractPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsPopupOptions), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsHelpers)); };
AbstractPopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AbstractPopupComponent, selectors: [["ng-component"]], inputs: { visible: "visible", animation: "animation", delay: "delay", placement: "placement", parentElement: "parentElement", boundary: "boundary" }, decls: 0, vars: 0, template: function AbstractPopupComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                template: ''
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: BsPopupOptions }, { type: BsHelpers }]; }, { visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], parentElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], boundary: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class BsTooltipConfigService {
    constructor() {
        this.animation = true;
        this.delay = 0;
        this.placement = 'bottom';
        this.html = false;
        this.title = '';
        this.trigger = 'hover focus';
    }
}
BsTooltipConfigService.ɵfac = function BsTooltipConfigService_Factory(t) { return new (t || BsTooltipConfigService)(); };
BsTooltipConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BsTooltipConfigService, factory: BsTooltipConfigService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsTooltipConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

const _c0$1 = ["ngContent"];
function BsTooltipComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.defaultTitle);
} }
const _c1$1 = function (a0, a1) { return { "fade": a0, "show": a1 }; };
const _c2$1 = ["*"];
class BsTooltipComponent extends AbstractPopupComponent {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(elementRef, config, helpers) {
        super(elementRef, config, helpers);
        this.titleVisible = true;
        this.cssPrefix = 'bs-tooltip-';
    }
    ngOnInit() {
        this.elementRef.nativeElement.children[0].style.top = '0';
        super.ngOnInit();
    }
    ngAfterContentChecked() {
        var _a, _b;
        this.titleVisible = !!((_b = (_a = this.ngContent) === null || _a === void 0 ? void 0 : _a.nativeElement.textContent) === null || _b === void 0 ? void 0 : _b.trim().length);
    }
}
BsTooltipComponent.ɵfac = function BsTooltipComponent_Factory(t) { return new (t || BsTooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsTooltipConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsHelpers)); };
BsTooltipComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BsTooltipComponent, selectors: [["bs-tooltip"]], viewQuery: function BsTooltipComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0$1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngContent = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c2$1, decls: 7, vars: 8, consts: [[1, "tooltip", 3, "ngClass", "hidden"], [1, "arrow", 3, "hidden"], [1, "tooltip-inner", 3, "hidden"], ["ngContent", ""], [4, "ngIf"]], template: function BsTooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BsTooltipComponent_span_6_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c1$1, ctx.animation, ctx.fadeIn))("hidden", !ctx.visible && !ctx.fadeIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.titleVisible && !ctx.defaultTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.titleVisible && !ctx.defaultTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.titleVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsTooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'bs-tooltip',
                templateUrl: './bs-tooltip.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: BsTooltipConfigService }, { type: BsHelpers }]; }, { ngContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['ngContent']
        }] }); })();

/*
 * Bootstrap 4 plugin for AngularJS.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
class AbstractPopupBoundary {
}
class AbstractPopupToggleDirective {
    constructor(config, helpers, elementRef, document) {
        this.config = config;
        this.helpers = helpers;
        this.elementRef = elementRef;
        this.document = document;
        this._title = '';
        this.html = config.html;
        this.trigger = config.trigger;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        var _a;
        this._title = title;
        this.elementRef.nativeElement.setAttribute('title', '');
        if ((_a = this.popupComponent) === null || _a === void 0 ? void 0 : _a.instance.visible) {
            this.popupComponent.destroy();
            this.popupComponent = undefined;
            this.show();
        }
    }
    get bsPopupToggle() {
        var _a;
        return (_a = this.popupComponent) === null || _a === void 0 ? void 0 : _a.instance.visible;
    }
    set bsPopupToggle(visible) {
        if (visible) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    showEvent(type) {
        const triggers = this.getTriggers();
        if ((type === 'mouseenter' && triggers.includes('hover'))
            || (type === 'focus' && triggers.includes('focus'))) {
            this.bsPopupToggleChange.emit(true);
            this.show();
        }
    }
    hideEvent(type) {
        const triggers = this.getTriggers();
        if ((type === 'mouseleave' && triggers.includes('hover'))
            || (type === 'blur' && triggers.includes('focus'))) {
            this.bsPopupToggleChange.emit(false);
            this.hide();
        }
    }
    click() {
        var _a;
        const visible = !!((_a = this.popupComponent) === null || _a === void 0 ? void 0 : _a.instance.visible);
        this.bsPopupToggleChange.emit(!visible);
        if (visible) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    getTriggers() {
        return this.trigger.split(' ');
    }
    show() {
        if (!this.popupComponent) {
            this.popupComponent = this.helpers.createComponent(this.componentClass, this.document.body, this.getPopupProjectableNodes());
            this.popupComponent.instance.parentElement = this.elementRef.nativeElement;
        }
        this.popupComponent.instance.visible = true;
        if (this.animation) {
            this.popupComponent.instance.animation = this.animation;
        }
        if (this.delay) {
            this.popupComponent.instance.delay = this.delay;
        }
        if (this.placement) {
            this.popupComponent.instance.placement = this.placement;
        }
        if (this.boundary) {
            this.popupComponent.instance.boundary = this.boundary.elementRef.nativeElement;
        }
    }
    hide() {
        if (!this.popupComponent) {
            return;
        }
        this.popupComponent.instance.visible = false;
    }
}
AbstractPopupToggleDirective.ɵfac = function AbstractPopupToggleDirective_Factory(t) { return new (t || AbstractPopupToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsPopupOptions), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsHelpers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
AbstractPopupToggleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AbstractPopupToggleDirective, hostBindings: function AbstractPopupToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AbstractPopupToggleDirective_mouseenter_HostBindingHandler($event) { return ctx.showEvent($event.type); })("focus", function AbstractPopupToggleDirective_focus_HostBindingHandler($event) { return ctx.showEvent($event.type); })("mouseleave", function AbstractPopupToggleDirective_mouseleave_HostBindingHandler($event) { return ctx.hideEvent($event.type); })("blur", function AbstractPopupToggleDirective_blur_HostBindingHandler($event) { return ctx.hideEvent($event.type); })("click", function AbstractPopupToggleDirective_click_HostBindingHandler() { return ctx.click(); });
    } }, inputs: { animation: "animation", delay: "delay", html: "html", placement: "placement", trigger: "trigger", title: "title" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractPopupToggleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: BsPopupOptions }, { type: BsHelpers }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }] }]; }, { animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], html: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], showEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mouseenter', ['$event.type']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['focus', ['$event.type']]
        }], hideEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mouseleave', ['$event.type']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['blur', ['$event.type']]
        }], click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
        }] }); })();

class BsTooltipBoundaryDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
BsTooltipBoundaryDirective.ɵfac = function BsTooltipBoundaryDirective_Factory(t) { return new (t || BsTooltipBoundaryDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
BsTooltipBoundaryDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BsTooltipBoundaryDirective, selectors: [["", "bsTooltipBoundary", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsTooltipBoundaryDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[bsTooltipBoundary]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, null); })();

/*
 * Bootstrap 4 plugin for AngularJS.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
class BsTooltipToggleDirective extends AbstractPopupToggleDirective {
    constructor(config, helpers, elementRef, boundary, document) {
        super(config, helpers, elementRef, document);
        this.config = config;
        this.helpers = helpers;
        this.elementRef = elementRef;
        this.boundary = boundary;
        this.document = document;
        this.bsPopupToggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.bsTooltipToggleChange = this.bsPopupToggleChange;
        this.componentClass = BsTooltipComponent;
    }
    get bsTooltipToggle() {
        return super.bsPopupToggle;
    }
    set bsTooltipToggle(visible) {
        super.bsPopupToggle = visible;
    }
    getPopupProjectableNodes() {
        const projectableNodes = [];
        if (this.html) {
            const div = this.document.createElement('div');
            div.innerHTML = this.title;
            projectableNodes.push(div.childNodes
            // NodeListOf<ChildNode> is accepted by projectableNodes, but TS doesn't know that
            );
        }
        else {
            projectableNodes.push([this.document.createTextNode(this.title)]);
        }
        return projectableNodes;
    }
}
BsTooltipToggleDirective.ɵfac = function BsTooltipToggleDirective_Factory(t) { return new (t || BsTooltipToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsTooltipConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsHelpers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsTooltipBoundaryDirective, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
BsTooltipToggleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BsTooltipToggleDirective, selectors: [["", "bsTooltipToggle", ""]], inputs: { bsTooltipToggle: "bsTooltipToggle" }, outputs: { bsTooltipToggleChange: "bsTooltipToggleChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsTooltipToggleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[bsTooltipToggle]'
            }]
    }], function () { return [{ type: BsTooltipConfigService }, { type: BsHelpers }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: BsTooltipBoundaryDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }] }]; }, { bsTooltipToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], bsTooltipToggleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }] }); })();

class BsTooltipModule {
}
BsTooltipModule.ɵfac = function BsTooltipModule_Factory(t) { return new (t || BsTooltipModule)(); };
BsTooltipModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BsTooltipModule });
BsTooltipModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            BsHelpersModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsTooltipModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [
                    BsTooltipBoundaryDirective,
                    BsTooltipComponent,
                    BsTooltipToggleDirective
                ],
                imports: [
                    BsHelpersModule,
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule
                ],
                exports: [
                    BsTooltipBoundaryDirective,
                    BsTooltipComponent,
                    BsTooltipToggleDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BsTooltipModule, { declarations: [BsTooltipBoundaryDirective,
        BsTooltipComponent,
        BsTooltipToggleDirective], imports: [BsHelpersModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule], exports: [BsTooltipBoundaryDirective,
        BsTooltipComponent,
        BsTooltipToggleDirective] }); })();

/*
 * Bootstrap 4 plugin for AngularJS.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
class BsPopoverConfigService {
    constructor() {
        this.animation = true;
        this.delay = 0;
        this.html = false;
        this.placement = 'right';
        this.title = '';
        this.content = '';
        this.trigger = 'click';
    }
}
BsPopoverConfigService.ɵfac = function BsPopoverConfigService_Factory(t) { return new (t || BsPopoverConfigService)(); };
BsPopoverConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BsPopoverConfigService, factory: BsPopoverConfigService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsPopoverConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

/*
 * Bootstrap 4 plugin for AngularJS.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
const _c0 = ["titleElement"];
const _c1 = ["contentElement"];
function BsPopoverComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.defaultTitle);
} }
function BsPopoverComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.defaultContent);
} }
const _c2 = [[["", "title", ""]], [["", "content", ""]]];
const _c3 = function (a0, a1) { return { "fade": a0, "show": a1 }; };
const _c4 = function (a0) { return { display: a0 }; };
const _c5 = ["[title]", "[content]"];
class BsPopoverComponent extends AbstractPopupComponent {
    constructor(elementRef, config, helpers) {
        super(elementRef, config, helpers);
        this.contentVisible = true;
        this.cssPrefix = 'bs-popover-';
        this.defaultContent = config.content;
    }
    ngOnInit() {
        this.elementRef.nativeElement.children[0].style.top = '0';
        super.ngOnInit();
    }
    ngAfterContentChecked() {
        var _a, _b, _c, _d;
        this.titleVisible = !!((_b = (_a = this.titleElement) === null || _a === void 0 ? void 0 : _a.nativeElement.textContent) === null || _b === void 0 ? void 0 : _b.trim().length);
        this.contentVisible = !!((_d = (_c = this.contentElement) === null || _c === void 0 ? void 0 : _c.nativeElement.textContent) === null || _d === void 0 ? void 0 : _d.trim().length);
    }
}
BsPopoverComponent.ɵfac = function BsPopoverComponent_Factory(t) { return new (t || BsPopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsPopoverConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsHelpers)); };
BsPopoverComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BsPopoverComponent, selectors: [["bs-popover"]], viewQuery: function BsPopoverComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titleElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentElement = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c5, decls: 12, vars: 12, consts: [[1, "popover", 3, "ngClass", "ngStyle", "hidden"], [1, "arrow"], [1, "popover-header", 3, "hidden"], ["titleElement", ""], [4, "ngIf"], [1, "popover-body", 3, "hidden"], ["contentElement", ""]], template: function BsPopoverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BsPopoverComponent_span_6_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BsPopoverComponent_span_11_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c3, ctx.animation, ctx.fadeIn))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c4, ctx.visible || ctx.fadeIn ? "block" : "none"))("hidden", !ctx.visible && !ctx.fadeIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.titleVisible && !ctx.defaultTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.titleVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.contentVisible && !ctx.defaultContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.contentVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsPopoverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'bs-popover',
                templateUrl: './bs-popover.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: BsPopoverConfigService }, { type: BsHelpers }]; }, { titleElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['titleElement']
        }], contentElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['contentElement']
        }] }); })();

class BsPopoverBoundaryDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
BsPopoverBoundaryDirective.ɵfac = function BsPopoverBoundaryDirective_Factory(t) { return new (t || BsPopoverBoundaryDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
BsPopoverBoundaryDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BsPopoverBoundaryDirective, selectors: [["", "bsPopoverBoundary", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsPopoverBoundaryDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[bsPopoverBoundary]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, null); })();

/*
 * Bootstrap 4 plugin for AngularJS.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
class BsPopoverToggleDirective extends AbstractPopupToggleDirective {
    constructor(config, helpers, elementRef, boundary, document) {
        super(config, helpers, elementRef, document);
        this.config = config;
        this.helpers = helpers;
        this.elementRef = elementRef;
        this.boundary = boundary;
        this.document = document;
        this.bsPopupToggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.bsPopoverToggleChange = this.bsPopupToggleChange;
        this._content = '';
        this.componentClass = BsPopoverComponent;
    }
    get bsPopoverToggle() {
        return super.bsPopupToggle;
    }
    set bsPopoverToggle(visible) {
        super.bsPopupToggle = visible;
    }
    get content() {
        return this._content;
    }
    set content(content) {
        var _a;
        this._content = content;
        if ((_a = this.popupComponent) === null || _a === void 0 ? void 0 : _a.instance.visible) {
            this.popupComponent.destroy();
            this.popupComponent = undefined;
            this.show();
        }
    }
    getPopupProjectableNodes() {
        const projectableNodes = [];
        if (this.html) {
            const div = this.document.createElement('div');
            div.innerHTML = this.title;
            projectableNodes.push(div.childNodes
            // NodeListOf<ChildNode> is accepted by projectableNodes, but TS doesn't know that
            );
            div.innerHTML = this.content;
            projectableNodes.push(div.childNodes
            // NodeListOf<ChildNode> is accepted by projectableNodes, but TS doesn't know that
            );
        }
        else {
            projectableNodes.push([this.document.createTextNode(this.title)]);
            projectableNodes.push([this.document.createTextNode(this.content)]);
        }
        return projectableNodes;
    }
}
BsPopoverToggleDirective.ɵfac = function BsPopoverToggleDirective_Factory(t) { return new (t || BsPopoverToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsPopoverConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsHelpers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsPopoverBoundaryDirective, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
BsPopoverToggleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BsPopoverToggleDirective, selectors: [["", "bsPopoverToggle", ""]], inputs: { bsPopoverToggle: "bsPopoverToggle", content: "content" }, outputs: { bsPopoverToggleChange: "bsPopoverToggleChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsPopoverToggleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[bsPopoverToggle]'
            }]
    }], function () { return [{ type: BsPopoverConfigService }, { type: BsHelpers }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: BsPopoverBoundaryDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }] }]; }, { bsPopoverToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], bsPopoverToggleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/*
 * Bootstrap 4 plugin for AngularJS.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
class BsPopoverModule {
}
BsPopoverModule.ɵfac = function BsPopoverModule_Factory(t) { return new (t || BsPopoverModule)(); };
BsPopoverModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BsPopoverModule });
BsPopoverModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsPopoverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [
                    BsPopoverBoundaryDirective,
                    BsPopoverComponent,
                    BsPopoverToggleDirective
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule
                ],
                exports: [
                    BsPopoverBoundaryDirective,
                    BsPopoverComponent,
                    BsPopoverToggleDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BsPopoverModule, { declarations: [BsPopoverBoundaryDirective,
        BsPopoverComponent,
        BsPopoverToggleDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule], exports: [BsPopoverBoundaryDirective,
        BsPopoverComponent,
        BsPopoverToggleDirective] }); })();

class AngularBootstrap4Module {
}
AngularBootstrap4Module.ɵfac = function AngularBootstrap4Module_Factory(t) { return new (t || AngularBootstrap4Module)(); };
AngularBootstrap4Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularBootstrap4Module });
AngularBootstrap4Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            BsDropdownModule,
            BsHelpersModule,
            BsModalModule,
            BsPopoverModule,
            BsTooltipModule
        ], BsDropdownModule,
        BsHelpersModule,
        BsModalModule,
        BsPopoverModule,
        BsTooltipModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularBootstrap4Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [],
                imports: [
                    BsDropdownModule,
                    BsHelpersModule,
                    BsModalModule,
                    BsPopoverModule,
                    BsTooltipModule
                ],
                exports: [
                    BsDropdownModule,
                    BsHelpersModule,
                    BsModalModule,
                    BsPopoverModule,
                    BsTooltipModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularBootstrap4Module, { imports: [BsDropdownModule,
        BsHelpersModule,
        BsModalModule,
        BsPopoverModule,
        BsTooltipModule], exports: [BsDropdownModule,
        BsHelpersModule,
        BsModalModule,
        BsPopoverModule,
        BsTooltipModule] }); })();

/*
 * Public API Surface of angular-bootstrap4
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 9795:
/*!*******************************************************************!*\
  !*** ./projects/angular-bootstrap4-demo/src/app/app.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

const _c0 = ["bsModalApi"];
function AppComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const n_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", n_r2, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r2);
} }
class AppComponent {
    constructor() {
        this.nav = [];
        this.navbar = false;
        this.modal = {
            exampleModal: false,
            nestedModal: false,
            backdrop: 'static',
            keyboard: false,
            preventModalOpen: false,
            beforeChange: () => {
                return !this.modal.preventModalOpen;
            }
        };
        this.dropdown = false;
        this.dropdown2 = false;
        this.dropdown3 = false;
        this.title = 'title<br/><strong>second line</strong>';
        this.tooltip = false;
        this.popover = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bsModalApi = _t.first);
    } }, decls: 587, vars: 25, consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["bs-collapse", "navbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["class", "nav-item", 4, "ngFor", "ngForOf"], ["id", "Modal"], [1, "page-header", "border-bottom"], [1, "row"], [1, "col-md-4"], [1, "btn", "btn-outline-primary", "btn-lg", 3, "click"], [1, "radio"], ["type", "radio", "value", "static", 3, "ngModel", "ngModelChange"], ["type", "radio", 3, "ngModel", "value", "ngModelChange"], [1, "checkbox"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "modal", "fade", 3, "bsModal", "backdrop", "keyboard", "onBeforeChange", "bsModalChange"], ["bsModalApi", "bsModal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "button", 1, "btn", "btn-primary", "btn-large", 3, "click"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "modal", "fade", 3, "bsModal", "bsModalChange"], ["type", "button", "dismiss", "modal", 1, "btn", "btn-danger"], [1, "col-md-8"], [1, "table", "table-bordered", "table-striped", "js-options-table"], ["colspan", "4"], ["id", "Dropdown"], [1, "page-header"], [3, "bsDropdown", "bsDropdownChange"], ["bsDropdownToggle", "", 1, "btn", "btn-outline-primary", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], ["href", "javascript:", 3, "click"], [1, "help-block"], ["bsDropdownBoundary", "", 1, "d-flex", "flex-column", 2, "height", "200px"], [1, "mt-auto", 3, "bsDropdown", "bsDropdownChange"], [1, "help-block", "mt-3"], ["id", "Tooltip"], [1, "table", "table-bordered", "table-striped"], [1, "bs-example-tooltip", "text-center"], ["placement", "left"], ["placement", "top"], ["placement", "bottom"], ["placement", "right"], [1, "d-flex", "justify-content-center", 2, "gap", ".5rem"], ["title", "title", "placement", "left", 1, "btn", "btn-secondary", 3, "bsTooltipToggle"], ["title", "title", "placement", "right", 1, "btn", "btn-secondary", 3, "bsTooltipToggle"], ["title", "title", "placement", "top", 1, "btn", "btn-secondary", 3, "bsTooltipToggle"], ["title", "title", "placement", "bottom", 1, "btn", "btn-secondary", 3, "bsTooltipToggle"], ["bsTooltipBoundary", ""], ["title", "title", "placement", "auto", 1, "btn", "btn-secondary", 3, "bsTooltipToggle"], [1, "mb-3"], ["type", "button", "trigger", "click", 1, "btn", "btn-secondary", "mr-2", 3, "bsTooltipToggle", "title", "html", "bsTooltipToggleChange"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["title", "Test", 1, "btn", "btn-secondary"], ["id", "Popover"], [1, "bs-example-popover"], ["title", ""], ["content", ""], [1, "clearfix"], ["content", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "left", 1, "btn", "btn-secondary", 3, "bsPopoverToggle"], ["content", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "top", 1, "btn", "btn-secondary", 3, "bsPopoverToggle"], ["content", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "bottom", 1, "btn", "btn-secondary", 3, "bsPopoverToggle"], ["content", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "right", 1, "btn", "btn-secondary", 3, "bsPopoverToggle"], [1, "col-md-6"], ["bsPopoverBoundary", ""], ["title", "title", "placement", "left auto", 1, "btn", "btn-secondary", 3, "bsPopoverToggle"], [1, "d-flex", "mb-3", 2, "gap", ".5rem"], ["type", "button", "trigger", "focus", "placement", "bottom", "content", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-secondary", 3, "bsPopoverToggle"], ["type", "button", "trigger", "hover", "placement", "bottom", "content", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-secondary", 3, "bsPopoverToggle"], [1, "nav-item"], [1, "nav-link", 3, "href"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "AngularJS Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.navbar = !ctx.navbar; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_li_8_Template, 3, 2, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_15_listener() { return ctx.modal.exampleModal = !ctx.modal.exampleModal; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Launch demo modal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_21_listener($event) { return ctx.modal.backdrop = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " 'static' backdrop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_25_listener($event) { return ctx.modal.backdrop = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " clickable backdrop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_29_listener($event) { return ctx.modal.backdrop = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " no backdrop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_33_listener($event) { return ctx.modal.keyboard = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " keyboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_37_listener($event) { return ctx.modal.preventModalOpen = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " preventModalOpen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bsModalChange", function AppComponent_Template_div_bsModalChange_39_listener($event) { return ctx.modal.exampleModal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "ExampleModal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_50_listener() { return ctx.modal.nestedModal = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Show nested modal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40); return _r1.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Dismiss ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bsModalChange", function AppComponent_Template_div_bsModalChange_55_listener($event) { return ctx.modal.nestedModal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Nested modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Dismiss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "table", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "backdrop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "boolean or the string ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "'static'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "'static'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Includes a modal-backdrop element. Alternatively, specify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "static");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " for a backdrop which doesn't close the modal on click. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "keyboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Closes the modal when escape key is pressed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "onBeforeChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Function that gets called before every change of modal state. If this function returns false, action is prevented. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "All option defaults are configurable in 'BsModalConfigService' and can be changed via bindings. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "<div class=\"modal fade\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "[(bsModal)]=\"modal.exampleModal\" [keyboard]=\"modal.keyboard\" [onBeforeChange]=\"modal.beforeChange\" #bsModalApi=bsModal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, ">\n...\n</div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "section", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h3", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bsDropdownChange", function AppComponent_Template_div_bsDropdownChange_128_listener($event) { return ctx.dropdown = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Toggle dropdown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "ul", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "<div ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "[(bsDropdown)]=\"dropdown\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, ">\n\t<button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "bsDropdownToggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " class=\"btn btn-primary dropdown-toggle\">Toggle dropdown</button>\n\t<ul class=\"dropdown-menu\">\n\t\t<li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n\t\t<li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n\t\t<li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n\t</ul>\n</div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_152_listener($event) { ctx.dropdown = true; return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Show dropdown by binding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "<a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "(click)=\"dropdown=true;$event.stopPropagation()\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, ">Show dropdown by binding</a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Auto placement & boundary element");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " Dropdown will be converted to 'dropup' if it would overflow given boundary element (red border). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bsDropdownChange", function AppComponent_Template_div_bsDropdownChange_167_listener($event) { return ctx.dropdown2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Toggle dropdown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "ul", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bsDropdownChange", function AppComponent_Template_div_bsDropdownChange_180_listener($event) { return ctx.dropdown3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Toggle dropdown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "ul", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "<div ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "bsDropdownBoundary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, ">\n\t<div [(bsDropdown)]...>\n\t\t...\n\t</div>\n</div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " Optionally, you can pass boundary element (elementRef) via 'boundaryElement' binding. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "section", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h3", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "table", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Apply a CSS fade transition to the tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "delay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "number | object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Delay showing and hiding the tooltip (ms)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "If a number is supplied, delay is applied to both hide/show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Object structure is: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Allow HTML in the tooltip.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "placement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "'bottom'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "How to position the tooltip - top | bottom | left | right | auto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "When \"auto\" is specified, it will dynamically reorient the tooltip. For example, if placement is \"auto left\", the tooltip will display to the left when possible, otherwise it will display right.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "''");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Default title value if ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " attribute isn't present.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "'hover focus'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "How tooltip is triggered - click | hover | focus. You may pass multiple triggers; separate them with a space. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "All option defaults are configurable in 'Tooltip' provider and can be changed via attributes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Static tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "bs-tooltip", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Tooltip on left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "bs-tooltip", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Tooltip on top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "bs-tooltip", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Tooltip on bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "bs-tooltip", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Tooltip on right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "bs-tooltip placement=\"left\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, ">Tooltip on left</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "bs-tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, ">\n<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "bs-tooltip placement=\"top\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, ">Tooltip on top</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "bs-tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, ">\n<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "bs-tooltip placement=\"bottom\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, ">Tooltip on bottom</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "bs-tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, ">\n<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "bs-tooltip placement=\"right\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, ">Tooltip on right</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "bs-tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Four directions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Title left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "Title right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Title top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Title bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "<span class=\"btn btn-secondary\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "[bsTooltipToggle] title=\"title\" placement=\"left\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, ">Title left</span>\n<span class=\"btn btn-secondary\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "[bsTooltipToggle] title=\"title\" placement=\"right\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, ">Title right</span>\n<span class=\"btn btn-secondary\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "[bsTooltipToggle] title=\"title\" placement=\"top\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, ">Title top</span>\n<span class=\"btn btn-secondary\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "[bsTooltipToggle] title=\"title\" placement=\"bottom\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, ">Title bottom</span>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "Auto placement & boundary element");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Tooltip will be adjusted to display within boundary element (red border)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Title auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "<div ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "bsTooltipBoundary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, ">\n\t<button class=\"btn btn-secondary\"\n\t\t[bsTooltipToggle] title=\"title\"\n\t\tplacement=\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "\">\n\t\tTitle auto\n\t</button>\n</div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Trigger on click with bound html value & remote trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("bsTooltipToggleChange", function AppComponent_Template_button_bsTooltipToggleChange_374_listener($event) { return ctx.tooltip = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Title on click");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_376_listener() { return ctx.tooltip = !ctx.tooltip; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, " Remote trigger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_379_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "<button type=\"button\" class=\"btn btn-secondary\" [(bsTooltipToggle)]=\"tooltip\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "[title]=\"title\" html=\"true\" trigger=\"click\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, ">Title on click</button>\n<button type=\"button\" class=\"btn btn-secondary\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "(click)=\"tooltip=!tooltip\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, ">Remote trigger</button>\n<input type=\"text\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "[(ngModel)]=\"title\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "Create tooltips on all elements with [title] attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "Hover me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "section", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "h3", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Popover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "table", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "Apply a CSS fade transition to the popover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "''");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "Default content value if ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, " attribute isn't present.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "delay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "number | object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "Delay showing and hiding the popover (ms)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "If a number is supplied, delay is applied to both hide/show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "Object structure is: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "Allow HTML in the popover title/content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "placement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "'right'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "How to position the popover - top | bottom | left | right | auto. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](471, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "When \"auto\" is specified, it will dynamically reorient the popover. For example, if placement is \"auto left\", the popover will display to the left when possible, otherwise it will display right.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "''");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "Default title value if ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, " attribute isn't present.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "'click'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "How popover is triggered - click | hover | focus. You may pass multiple triggers; separate them with a space. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "Static popover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "bs-popover", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, "Popover top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "bs-popover", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "Popover right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "bs-popover", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "Popover bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "bs-popover", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "Popover left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](518, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](519, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "<bs-popover placement=\"top\">\n\t<span title>Popover top</span>\n\t<span content>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem\n\t\tlacinia quam venenatis vestibulum.\n\t</span>\n</bs-popover>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "Four directions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "Popover on left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, "Popover on top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "Popover on bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "Popover on right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](533, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "<span class=\"btn btn-secondary\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, "[bsPopoverToggle] content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" placement=\"left\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, ">Popover on left</span>\n<span class=\"btn btn-secondary\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, "[bsPopoverToggle] content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" placement=\"top\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, ">Popover on top</span>\n<span class=\"btn btn-secondary\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](543, "[bsPopoverToggle] content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" placement=\"bottom\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, ">Popover on bottom</span>\n<span class=\"btn btn-secondary\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "[bsPopoverToggle] content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" placement=\"right\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, ">Popover on right</span>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, "Auto placement & boundary element");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "Popover will be adjusted to display within boundary element (red border)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, "Popover auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](557, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, "<div ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, "bsPopoverBoundary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, ">\n\t<span class=\"btn btn-secondary\" [bsPopoverToggle]\n\t\ttitle=\"title\" placement=\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, "left auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, "\">\n\t\tPopover auto\n\t</span>\n</div>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, "Different trigger types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, "Popover on focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, " Popover on hover ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_574_listener() { return ctx.popover = !ctx.popover; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, "Remote trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, "<button type=\"button\" class=\"btn btn-secondary\" [bsPopoverToggle] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, "trigger=\"focus\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](580, "...>\n\tPopover on focus\n</button>\n<button type=\"button\" class=\"btn btn-secondary\" [bsPopoverToggle]=\"popover\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, "trigger=\"hover\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, "...>\n\tPopover on hover\n</button>\n<button type=\"button\" class=\"btn btn-secondary\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "(click)=\"popover=!popover\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, "...>\n\tRemote trigger\n</button>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nav);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modal.backdrop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modal.backdrop)("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modal.backdrop)("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modal.keyboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modal.preventModalOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsModal", ctx.modal.exampleModal)("backdrop", ctx.modal.backdrop)("keyboard", ctx.modal.keyboard)("onBeforeChange", ctx.modal.beforeChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsModal", ctx.modal.nestedModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsDropdown", ctx.dropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsDropdown", ctx.dropdown2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsDropdown", ctx.dropdown3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("delay: ", "{", "show: 500, hide: 100}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsTooltipToggle", ctx.tooltip)("title", ctx.title)("html", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("<button class=\"btn btn-secondary\" title=\"Test\">Hover me!</button>\n -----\n@Directive(", "{", "\n            selector: '[title]'\n})\nexport class TitleDirective extends BsTooltipToggleDirective ", "{", "\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("delay: ", "{", "show: 500, hide: 100}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bsPopoverToggle", ctx.popover);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7022:
/*!****************************************************************!*\
  !*** ./projects/angular-bootstrap4-demo/src/app/app.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 9795);
/* harmony import */ var angular_bootstrap4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap4 */ 1488);
/* harmony import */ var _section_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section.directive */ 4966);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _title_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title.directive */ 4886);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            angular_bootstrap4__WEBPACK_IMPORTED_MODULE_4__.AngularBootstrap4Module,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _section_directive__WEBPACK_IMPORTED_MODULE_1__.SectionDirective,
        _title_directive__WEBPACK_IMPORTED_MODULE_2__.TitleDirective], imports: [angular_bootstrap4__WEBPACK_IMPORTED_MODULE_4__.AngularBootstrap4Module,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _section_directive__WEBPACK_IMPORTED_MODULE_1__.SectionDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, angular_bootstrap4__WEBPACK_IMPORTED_MODULE_4__.BsModalDirective, angular_bootstrap4__WEBPACK_IMPORTED_MODULE_4__.DismissDirective, angular_bootstrap4__WEBPACK_IMPORTED_MODULE_4__.BsDropdownDirective, angular_bootstrap4__WEBPACK_IMPORTED_MODULE_4__.BsDropdownToggleDirective, angular_bootstrap4__WEBPACK_IMPORTED_MODULE_4__.BsDropdownBoundaryDirective, angular_bootstrap4__WEBPACK_IMPORTED_MODULE_4__.BsTooltipComponent, _title_directive__WEBPACK_IMPORTED_MODULE_2__.TitleDirective, angular_bootstrap4__WEBPACK_IMPORTED_MODULE_4__.BsTooltipToggleDirective, angular_bootstrap4__WEBPACK_IMPORTED_MODULE_4__.BsTooltipBoundaryDirective, angular_bootstrap4__WEBPACK_IMPORTED_MODULE_4__.BsPopoverComponent, angular_bootstrap4__WEBPACK_IMPORTED_MODULE_4__.BsPopoverToggleDirective, angular_bootstrap4__WEBPACK_IMPORTED_MODULE_4__.BsPopoverBoundaryDirective], []);


/***/ }),

/***/ 4966:
/*!***********************************************************************!*\
  !*** ./projects/angular-bootstrap4-demo/src/app/section.directive.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionDirective": () => (/* binding */ SectionDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 9795);


class SectionDirective {
    constructor(app) {
        this.app = app;
        this.id = '';
    }
    ngOnInit() {
        this.app.nav.push(this.id);
    }
}
SectionDirective.ɵfac = function SectionDirective_Factory(t) { return new (t || SectionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, 1)); };
SectionDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: SectionDirective, selectors: [["section"]], inputs: { id: "id" } });


/***/ }),

/***/ 4886:
/*!*********************************************************************!*\
  !*** ./projects/angular-bootstrap4-demo/src/app/title.directive.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleDirective": () => (/* binding */ TitleDirective)
/* harmony export */ });
/* harmony import */ var angular_bootstrap4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-bootstrap4 */ 1488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class TitleDirective extends angular_bootstrap4__WEBPACK_IMPORTED_MODULE_0__.BsTooltipToggleDirective {
}
TitleDirective.ɵfac = /*@__PURE__*/ function () { let ɵTitleDirective_BaseFactory; return function TitleDirective_Factory(t) { return (ɵTitleDirective_BaseFactory || (ɵTitleDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TitleDirective)))(t || TitleDirective); }; }();
TitleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TitleDirective, selectors: [["", "title", "", 3, "bsPopoverToggle", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });


/***/ }),

/***/ 1591:
/*!**************************************************************************!*\
  !*** ./projects/angular-bootstrap4-demo/src/environments/environment.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 343:
/*!******************************************************!*\
  !*** ./projects/angular-bootstrap4-demo/src/main.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 7022);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 1591);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err));


/***/ }),

/***/ 6279:
/*!****************************************************************************************!*\
  !*** ./projects/angular-bootstrap4-demo/$_lazy_route_resources/ lazy namespace object ***!
  \****************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 6279;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(343)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map