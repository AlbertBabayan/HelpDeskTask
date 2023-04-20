function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
  /***/
  "./src/app/user/components/index.ts":
  /*!******************************************!*\
    !*** ./src/app/user/components/index.ts ***!
    \******************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user */
    "./src/app/user/components/user/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return _user__WEBPACK_IMPORTED_MODULE_0__["UserComponent"];
    });
    /***/

  },

  /***/
  "./src/app/user/components/user/index.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/components/user/index.ts ***!
    \***********************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserComponentsUserIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user.component */
    "./src/app/user/components/user/user.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return _user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"];
    });
    /***/

  },

  /***/
  "./src/app/user/components/user/user.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/user/components/user/user.component.ts ***!
    \********************************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserComponentsUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserComponent = /*#__PURE__*/function () {
      function UserComponent() {
        _classCallCheck(this, UserComponent);
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserComponent;
    }();

    UserComponent.ɵfac = function UserComponent_Factory(t) {
      return new (t || UserComponent)();
    };

    UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserComponent,
      selectors: [["app-users"]],
      decls: 0,
      vars: 0,
      template: function UserComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-users',
          templateUrl: './user.component.html',
          styleUrls: ['./user.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/services/index.ts":
  /*!****************************************!*\
    !*** ./src/app/user/services/index.ts ***!
    \****************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user */
    "./src/app/user/services/user/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user__WEBPACK_IMPORTED_MODULE_0__["UserService"];
    });
    /***/

  },

  /***/
  "./src/app/user/services/user/index.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/services/user/index.ts ***!
    \*********************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServicesUserIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/user/services/user/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"];
    });
    /***/

  },

  /***/
  "./src/app/user/services/user/user.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/user/services/user/user.service.ts ***!
    \****************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServicesUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = function UserService(http) {
      _classCallCheck(this, UserService);

      this.http = http;
    };

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/user-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: UserRoutingModule */

  /***/
  function srcAppUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
      return UserRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components */
    "./src/app/user/components/index.ts");

    var routes = [{
      path: '',
      component: _components__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]
    }];

    var UserRoutingModule = function UserRoutingModule() {
      _classCallCheck(this, UserRoutingModule);
    };

    UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserRoutingModule
    });
    UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserRoutingModule_Factory(t) {
        return new (t || UserRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/user/user-routing.module.ts");
    /* harmony import */


    var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _components_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/user/user.component */
    "./src/app/user/components/user/user.component.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services */
    "./src/app/user/services/index.ts");

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserModule
    });
    UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserModule_Factory(t) {
        return new (t || UserModule)();
      },
      providers: [_services__WEBPACK_IMPORTED_MODULE_5__["UserService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserModule, {
        declarations: [_components_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
          exports: [],
          providers: [_services__WEBPACK_IMPORTED_MODULE_5__["UserService"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=user-user-module-es5.js.map