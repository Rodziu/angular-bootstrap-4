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
/* harmony export */   "BsModalConfigService": () => (/* binding */ BsModalConfigService),
/* harmony export */   "BsModalDirective": () => (/* binding */ BsModalDirective),
/* harmony export */   "BsModalModule": () => (/* binding */ BsModalModule),
/* harmony export */   "DismissDirective": () => (/* binding */ DismissDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);





const _c0 = function (a0) {
  return {
    "fade": a0
  };
};

class BsModalConfigService {
  constructor() {
    this.backdrop = 'static';
    this.keyboard = true;
    this.transitionDuration = 300;
    this.backdropTransitionDuration = 150;

    this.onBeforeChange = () => true;
  }

}

BsModalConfigService.ɵfac = function BsModalConfigService_Factory(t) {
  return new (t || BsModalConfigService)();
};

BsModalConfigService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: BsModalConfigService,
  factory: BsModalConfigService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalConfigService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

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
    return new Promise(resolve => {
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
      } else {
        resolve();
      }
    });
  }

}

BsModalBackdropComponent.ɵfac = function BsModalBackdropComponent_Factory(t) {
  return new (t || BsModalBackdropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsModalBackdropService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

BsModalBackdropComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BsModalBackdropComponent,
  selectors: [["bs-modal-backdrop"]],
  decls: 1,
  vars: 3,
  consts: [[1, "modal-backdrop", 3, "ngClass"]],
  template: function BsModalBackdropComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.service.isAnimated));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalBackdropComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      template: '<div class="modal-backdrop" [ngClass]="{\'fade\': service.isAnimated}"></div>',
      selector: 'bs-modal-backdrop'
    }]
  }], function () {
    return [{
      type: BsModalBackdropService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, null);
})();

class BsModalBackdropService {
  constructor(componentFactoryResolver, appRef, injector) {
    this.componentFactoryResolver = componentFactoryResolver;
    this.appRef = appRef;
    this.injector = injector;
    this.openModals = 0;
    this._isAnimated = false;
  }

  get isAnimated() {
    return this._isAnimated;
  }

  show(backdrop, animate) {
    return new Promise(resolve => {
      this.createBackdropComponent();
      this.openModals++;
      this._isAnimated = animate;
      document.body.classList.add('modal-open');

      if (backdrop) {
        setTimeout(() => {
          var _a;

          (_a = this.backdropRef) === null || _a === void 0 ? void 0 : _a.instance.show();
          resolve();
        });
      } else {
        resolve();
      }
    });
  }

  createBackdropComponent() {
    if (typeof this.backdropRef !== 'undefined') {
      return;
    }

    const componentRef = this.componentFactoryResolver.resolveComponentFactory(BsModalBackdropComponent).create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    document.body.appendChild(componentRef.hostView.rootNodes[0]);
    this.backdropRef = componentRef;
  }

  hide() {
    this.openModals--;

    if (this.openModals < 0) {
      this.openModals = 0;
    }

    if (this.openModals === 0) {
      const callback = () => {
        document.body.classList.remove('modal-open');
      };

      if (this.backdropRef) {
        this.backdropRef.instance.hide().then(callback);
      } else {
        callback();
      }
    }
  }

}

BsModalBackdropService.ɵfac = function BsModalBackdropService_Factory(t) {
  return new (t || BsModalBackdropService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
};

BsModalBackdropService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: BsModalBackdropService,
  factory: BsModalBackdropService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalBackdropService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }];
  }, null);
})();

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

    if (!result) {
      // not shown, prevented by shouldChange
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

    if (this.backdrop === true && target === this.elementRef.nativeElement) {
      // .modal covers whole page
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

      this.backdropService.show(!!this.backdrop, this.elementRef.nativeElement.classList.contains('fade')).then(() => {
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

BsModalDirective.ɵfac = function BsModalDirective_Factory(t) {
  return new (t || BsModalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsModalConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsModalBackdropService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

BsModalDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: BsModalDirective,
  selectors: [["", "bsModal", ""]],
  hostBindings: function BsModalDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BsModalDirective_click_HostBindingHandler($event) {
        return ctx.click($event.target);
      })("keydown.escape", function BsModalDirective_keydown_escape_HostBindingHandler() {
        return ctx.keydown();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    bsModal: "bsModal",
    backdrop: "backdrop",
    keyboard: "keyboard",
    onBeforeChange: "onBeforeChange"
  },
  outputs: {
    bsModalChange: "bsModalChange"
  },
  exportAs: ["bsModal"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[bsModal]',
      exportAs: 'bsModal'
    }]
  }], function () {
    return [{
      type: BsModalConfigService
    }, {
      type: BsModalBackdropService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    bsModal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bsModalChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    backdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    keyboard: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onBeforeChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    click: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event.target']]
    }],
    keydown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['document:keydown.escape']
    }]
  });
})();

class DismissDirective {
  constructor(bsModal) {
    this.bsModal = bsModal;
  }

  click() {
    this.bsModal.hide();
  }

}

DismissDirective.ɵfac = function DismissDirective_Factory(t) {
  return new (t || DismissDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BsModalDirective, 1));
};

DismissDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DismissDirective,
  selectors: [["", "dismiss", ""]],
  hostBindings: function DismissDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DismissDirective_click_HostBindingHandler() {
        return ctx.click();
      });
    }
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DismissDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[dismiss]'
    }]
  }], function () {
    return [{
      type: BsModalDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }]
    }];
  }, {
    click: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click']
    }]
  });
})();

class BsModalModule {}

BsModalModule.ɵfac = function BsModalModule_Factory(t) {
  return new (t || BsModalModule)();
};

BsModalModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: BsModalModule
});
BsModalModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [BsModalBackdropComponent, BsModalDirective, DismissDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      exports: [BsModalDirective, DismissDirective]
    }]
  }], null, null);
})();

class AngularBootstrap4Module {}

AngularBootstrap4Module.ɵfac = function AngularBootstrap4Module_Factory(t) {
  return new (t || AngularBootstrap4Module)();
};

AngularBootstrap4Module.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AngularBootstrap4Module
});
AngularBootstrap4Module.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[BsModalModule], BsModalModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularBootstrap4Module, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [],
      imports: [BsModalModule],
      exports: [BsModalModule]
    }]
  }], null, null);
})();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 36);
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
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bsModalApi = _t.first);
    } }, decls: 123, vars: 13, consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["bs-collapse", "navbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["class", "nav-item", 4, "ngFor", "ngForOf"], ["id", "Modal"], [1, "page-header", "border-bottom"], [1, "row"], [1, "col-md-4"], [1, "btn", "btn-outline-primary", "btn-lg", 3, "click"], [1, "radio"], ["type", "radio", "value", "static", 3, "ngModel", "ngModelChange"], ["type", "radio", 3, "ngModel", "value", "ngModelChange"], [1, "checkbox"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "modal", "fade", 3, "bsModal", "backdrop", "keyboard", "onBeforeChange", "bsModalChange"], ["bsModalApi", "bsModal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "button", 1, "btn", "btn-primary", "btn-large", 3, "click"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "modal", "fade", 3, "bsModal", "bsModalChange"], ["type", "button", "dismiss", "modal", 1, "btn", "btn-danger"], [1, "col-md-8"], [1, "table", "table-bordered", "table-striped", "js-options-table"], ["colspan", "4"], [1, "nav-item"], [1, "nav-link", 3, "href"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 9795);
/* harmony import */ var angular_bootstrap4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap4 */ 1488);
/* harmony import */ var _section_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section.directive */ 4966);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            angular_bootstrap4__WEBPACK_IMPORTED_MODULE_3__.AngularBootstrap4Module,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _section_directive__WEBPACK_IMPORTED_MODULE_1__.SectionDirective], imports: [angular_bootstrap4__WEBPACK_IMPORTED_MODULE_3__.AngularBootstrap4Module,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _section_directive__WEBPACK_IMPORTED_MODULE_1__.SectionDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, angular_bootstrap4__WEBPACK_IMPORTED_MODULE_3__.BsModalDirective, angular_bootstrap4__WEBPACK_IMPORTED_MODULE_3__.DismissDirective], []);


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