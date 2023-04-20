function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
  /***/
  "./src/app/admin/admin-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/admin-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
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


    var _shared_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/components */
    "./src/app/shared/components/index.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components */
    "./src/app/admin/components/index.ts");

    var routes = [{
      path: '',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
      children: [{
        path: 'staff',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["StaffComponent"]
      }, {
        path: 'tickets',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["TicketsComponent"]
      }, {
        path: 'config',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["ConfigComponent"]
      }, {
        path: 'account',
        component: _shared_components__WEBPACK_IMPORTED_MODULE_2__["UserAccountComponent"]
      }]
    }];

    var AdminRoutingModule = function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    };

    AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminRoutingModule
    });
    AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminRoutingModule_Factory(t) {
        return new (t || AdminRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
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
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
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


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/admin/admin-routing.module.ts");
    /* harmony import */


    var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/admin/admin.component */
    "./src/app/admin/components/admin/admin.component.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services */
    "./src/app/admin/services/index.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components */
    "./src/app/admin/components/index.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminModule
    });
    AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminModule_Factory(t) {
        return new (t || AdminModule)();
      },
      providers: [_services__WEBPACK_IMPORTED_MODULE_5__["AdminDataService"], _services__WEBPACK_IMPORTED_MODULE_5__["StaffService"], _services__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, {
        declarations: [_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["StaffComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["TicketsComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["ConfigComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["TicketColumnsComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["TicketFormComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["StaffComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["TicketsComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["ConfigComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["TicketColumnsComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["TicketFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
          providers: [_services__WEBPACK_IMPORTED_MODULE_5__["AdminDataService"], _services__WEBPACK_IMPORTED_MODULE_5__["StaffService"], _services__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/components/admin/admin.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/admin/components/admin/admin.component.ts ***!
    \***********************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminComponentsAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services */
    "./src/app/admin/services/index.ts");
    /* harmony import */


    var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/components/sidebar/sidebar.component */
    "./src/app/shared/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/components/navbar/navbar.component */
    "./src/app/shared/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function AdminComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(adminData, loader) {
        _classCallCheck(this, AdminComponent);

        this.adminData = adminData;
        this.loader = loader;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showLoading();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngUnsubscribe.next();
          this.ngUnsubscribe.complete();
        }
      }, {
        key: "showLoading",
        value: function showLoading() {
          var _this = this;

          this.loader.subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (resp) {
            setTimeout(function () {
              _this.showSpinner = resp;
            });
          });
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AdminDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]));
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 11,
      vars: 2,
      consts: [[1, "container-fluid"], [1, "row", "main"], [1, "col-xl-2", "col-lg-3", "col-md-4", "col-sm-5", "sidebar"], [1, "col-xl-10", "col-lg-9", "col-md-8", "col-sm-7", "header"], [1, "row"], [1, "nav"], [1, "row", "content"], ["class", "forLoader", 4, "ngIf"], [1, "inner", 3, "hidden"], [1, "forLoader"], [1, "loader"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-navbar", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminComponent_div_8_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showSpinner);
        }
      },
      directives: [_shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%]  .main .header {\n  display: block;\n}\n[_nghost-%COMP%]  .main .header .nav {\n  width: 100%;\n}\n[_nghost-%COMP%]  .main .header .content {\n  padding: 5px;\n}\n[_nghost-%COMP%]  .main .header .content .inner {\n  width: 100%;\n}\n[_nghost-%COMP%]  .main .header .content .forLoader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n}\n[_nghost-%COMP%]  .main .header .content .forLoader .loader {\n  border: 10px solid #cee1e4;\n  border-radius: 50%;\n  border-top: 10px solid #34344d;\n  width: 100px;\n  height: 100px;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hZG1pbi9EOlxccHJvamVjdHNcXEhlbHBEZXNrL3NyY1xcYXBwXFxhZG1pblxcY29tcG9uZW50c1xcYWRtaW5cXGFkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsY0FBQTtBQ0ROO0FERU07RUFDRSxXQUFBO0FDQVI7QURFTTtFQUNFLFlBQUE7QUNBUjtBRENRO0VBQ0UsV0FBQTtBQ0NWO0FEQ1E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ1Y7QURBVTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7QUNFWjtBRERZO0VBQ0U7SUFDRSx1QkFBQTtFQ0dkO0VERFk7SUFDRSx5QkFBQTtFQ0dkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Q6Om5nLWRlZXAge1xyXG4gIC5tYWluIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgLm5hdiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAuaW5uZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JMb2FkZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIC5sb2FkZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDEwcHggc29saWQgI2NlZTFlNDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMzNDM0NGQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdDo6bmctZGVlcCAubWFpbiAuaGVhZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdDo6bmctZGVlcCAubWFpbiAuaGVhZGVyIC5uYXYge1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0OjpuZy1kZWVwIC5tYWluIC5oZWFkZXIgLmNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHg7XG59XG46aG9zdDo6bmctZGVlcCAubWFpbiAuaGVhZGVyIC5jb250ZW50IC5pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3Q6Om5nLWRlZXAgLm1haW4gLmhlYWRlciAuY29udGVudCAuZm9yTG9hZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuOmhvc3Q6Om5nLWRlZXAgLm1haW4gLmhlYWRlciAuY29udGVudCAuZm9yTG9hZGVyIC5sb2FkZXIge1xuICBib3JkZXI6IDEwcHggc29saWQgI2NlZTFlNDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMzNDM0NGQ7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.scss']
        }]
      }], function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_3__["AdminDataService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/components/admin/index.ts":
  /*!*************************************************!*\
    !*** ./src/app/admin/components/admin/index.ts ***!
    \*************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminComponentsAdminIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./admin.component */
    "./src/app/admin/components/admin/admin.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return _admin_component__WEBPACK_IMPORTED_MODULE_0__["AdminComponent"];
    });
    /***/

  },

  /***/
  "./src/app/admin/components/config/config.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/admin/components/config/config.component.ts ***!
    \*************************************************************/

  /*! exports provided: ConfigComponent */

  /***/
  function srcAppAdminComponentsConfigConfigComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigComponent", function () {
      return ConfigComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng/tabview */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tabview.js");
    /* harmony import */


    var _ticket_form_ticket_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ticket-form/ticket-form.component */
    "./src/app/admin/components/ticket-form/ticket-form.component.ts");
    /* harmony import */


    var _ticket_columns_ticket_columns_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ticket-columns/ticket-columns.component */
    "./src/app/admin/components/ticket-columns/ticket-columns.component.ts");

    var ConfigComponent = /*#__PURE__*/function () {
      function ConfigComponent() {
        _classCallCheck(this, ConfigComponent);
      }

      _createClass(ConfigComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConfigComponent;
    }();

    ConfigComponent.ɵfac = function ConfigComponent_Factory(t) {
      return new (t || ConfigComponent)();
    };

    ConfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfigComponent,
      selectors: [["app-config"]],
      decls: 6,
      vars: 0,
      consts: [[1, "config"], ["header", "Ticket Form", "rightIcon", "pi pi-ticket"], ["header", "Ticket Columns", "rightIcon", "pi pi-envelope"]],
      template: function ConfigComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-tabView");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-tabPanel", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-ticket-form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-tabPanel", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-ticket-columns");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [primeng_tabview__WEBPACK_IMPORTED_MODULE_1__["TabView"], primeng_tabview__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], _ticket_form_ticket_form_component__WEBPACK_IMPORTED_MODULE_2__["TicketFormComponent"], _ticket_columns_ticket_columns_component__WEBPACK_IMPORTED_MODULE_3__["TicketColumnsComponent"]],
      styles: ["[_nghost-%COMP%]  .config .ui-state-default.ui-corner-top.ng-star-inserted {\n  background: #dffbff !important;\n}\n[_nghost-%COMP%]  .config .ui-state-default.ui-corner-top.ng-star-inserted.ui-tabview-selected.ui-state-active {\n  background: #525280 !important;\n  border: none !important;\n}\n[_nghost-%COMP%]  .config .ui-tabview-selected.ui-state-active:focus {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9jb25maWcvRDpcXHByb2plY3RzXFxIZWxwRGVzay9zcmNcXGFwcFxcYWRtaW5cXGNvbXBvbmVudHNcXGNvbmZpZ1xcY29uZmlnLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2NvbmZpZy9jb25maWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSw4QkFBQTtBQ0RaO0FER1E7RUFDSSw4QkFBQTtFQUNBLHVCQUFBO0FDRFo7QURHUTtFQUNJLDJCQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL2NvbmZpZy9jb25maWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdDo6bmctZGVlcCB7XHJcbiAgICAuY29uZmlnIHtcclxuICAgICAgICAudWktc3RhdGUtZGVmYXVsdC51aS1jb3JuZXItdG9wLm5nLXN0YXItaW5zZXJ0ZWR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZmZiZmYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVpLXN0YXRlLWRlZmF1bHQudWktY29ybmVyLXRvcC5uZy1zdGFyLWluc2VydGVkLnVpLXRhYnZpZXctc2VsZWN0ZWQudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzUyNTI4MCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVpLXRhYnZpZXctc2VsZWN0ZWQudWktc3RhdGUtYWN0aXZlOmZvY3VzIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI6aG9zdDo6bmctZGVlcCAuY29uZmlnIC51aS1zdGF0ZS1kZWZhdWx0LnVpLWNvcm5lci10b3Aubmctc3Rhci1pbnNlcnRlZCB7XG4gIGJhY2tncm91bmQ6ICNkZmZiZmYgIWltcG9ydGFudDtcbn1cbjpob3N0OjpuZy1kZWVwIC5jb25maWcgLnVpLXN0YXRlLWRlZmF1bHQudWktY29ybmVyLXRvcC5uZy1zdGFyLWluc2VydGVkLnVpLXRhYnZpZXctc2VsZWN0ZWQudWktc3RhdGUtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzUyNTI4MCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbjpob3N0OjpuZy1kZWVwIC5jb25maWcgLnVpLXRhYnZpZXctc2VsZWN0ZWQudWktc3RhdGUtYWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-config',
          templateUrl: './config.component.html',
          styleUrls: ['./config.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/components/config/index.ts":
  /*!**************************************************!*\
    !*** ./src/app/admin/components/config/index.ts ***!
    \**************************************************/

  /*! exports provided: ConfigComponent */

  /***/
  function srcAppAdminComponentsConfigIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _config_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./config.component */
    "./src/app/admin/components/config/config.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ConfigComponent", function () {
      return _config_component__WEBPACK_IMPORTED_MODULE_0__["ConfigComponent"];
    });
    /***/

  },

  /***/
  "./src/app/admin/components/index.ts":
  /*!*******************************************!*\
    !*** ./src/app/admin/components/index.ts ***!
    \*******************************************/

  /*! exports provided: AdminComponent, StaffComponent, TicketsComponent, ConfigComponent, TicketColumnsComponent, TicketFormComponent */

  /***/
  function srcAppAdminComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./admin */
    "./src/app/admin/components/admin/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return _admin__WEBPACK_IMPORTED_MODULE_0__["AdminComponent"];
    });
    /* harmony import */


    var _staff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./staff */
    "./src/app/admin/components/staff/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StaffComponent", function () {
      return _staff__WEBPACK_IMPORTED_MODULE_1__["StaffComponent"];
    });
    /* harmony import */


    var _tickets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tickets */
    "./src/app/admin/components/tickets/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TicketsComponent", function () {
      return _tickets__WEBPACK_IMPORTED_MODULE_2__["TicketsComponent"];
    });
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./config */
    "./src/app/admin/components/config/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ConfigComponent", function () {
      return _config__WEBPACK_IMPORTED_MODULE_3__["ConfigComponent"];
    });
    /* harmony import */


    var _ticket_columns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ticket-columns */
    "./src/app/admin/components/ticket-columns/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TicketColumnsComponent", function () {
      return _ticket_columns__WEBPACK_IMPORTED_MODULE_4__["TicketColumnsComponent"];
    });
    /* harmony import */


    var _ticket_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ticket-form */
    "./src/app/admin/components/ticket-form/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TicketFormComponent", function () {
      return _ticket_form__WEBPACK_IMPORTED_MODULE_5__["TicketFormComponent"];
    });
    /***/

  },

  /***/
  "./src/app/admin/components/staff/index.ts":
  /*!*************************************************!*\
    !*** ./src/app/admin/components/staff/index.ts ***!
    \*************************************************/

  /*! exports provided: StaffComponent */

  /***/
  function srcAppAdminComponentsStaffIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _staff_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./staff.component */
    "./src/app/admin/components/staff/staff.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StaffComponent", function () {
      return _staff_component__WEBPACK_IMPORTED_MODULE_0__["StaffComponent"];
    });
    /***/

  },

  /***/
  "./src/app/admin/components/staff/staff.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/admin/components/staff/staff.component.ts ***!
    \***********************************************************/

  /*! exports provided: StaffComponent */

  /***/
  function srcAppAdminComponentsStaffStaffComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffComponent", function () {
      return StaffComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services */
    "./src/app/admin/services/index.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StaffComponent_tr_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StaffComponent_tr_21_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var user_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.deleteUser(user_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.firstName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.lastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.role);
      }
    }

    var StaffComponent = /*#__PURE__*/function () {
      function StaffComponent(staffService, loaderSvc, toaster) {
        _classCallCheck(this, StaffComponent);

        this.staffService = staffService;
        this.loaderSvc = loaderSvc;
        this.toaster = toaster;
        this.pageSize = 10;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(StaffComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUsers();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngUnsubscribe.next();
          this.ngUnsubscribe.complete();
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this2 = this;

          this.loaderSvc.subject.next(true);
          this.staffService.getAllUsers(1, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe)).subscribe({
            next: function next(resp) {
              _this2.loaderSvc.subject.next(false);

              _this2.users = resp;
            },
            error: function error(err) {
              _this2.loaderSvc.subject.next(false);
            }
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          var _this3 = this;

          this.staffService.deleteUser(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe)).subscribe({
            next: function next(resp) {
              _this3.toaster.info(resp);

              _this3.getUsers();
            },
            error: function error(err) {
              console.log(err);

              _this3.toaster.info('error');
            }
          });
        }
      }]);

      return StaffComponent;
    }();

    StaffComponent.ɵfac = function StaffComponent_Factory(t) {
      return new (t || StaffComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["StaffService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    StaffComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StaffComponent,
      selectors: [["app-staff"]],
      decls: 23,
      vars: 1,
      consts: [[1, "content"], [1, "pageName"], ["pButton", "", "type", "button", "label", "Add Admin", 1, "ui-button-success"], [1, "table", "table-striped"], ["scope", "col"], [1, "tbody"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "forButton"], ["pButton", "", "pRipple", "", "type", "button", "label", "Delete", 1, "text-start", "ui-button-info", "delete", 3, "click"]],
      template: function StaffComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Staff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "FirstName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "LastName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, StaffComponent_tr_21_Template, 13, 5, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        }
      },
      directives: [primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: [".content[_ngcontent-%COMP%]   .pageName[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 5px auto;\n  color: #8d9fff;\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n}\n.content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .forButton[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  border: none;\n}\n.content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .forButton[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n.content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tbody[_ngcontent-%COMP%]   .forButton[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]:hover {\n  background-color: #ce0505 !important;\n}\n.content[_ngcontent-%COMP%]   .ui-paginator[_ngcontent-%COMP%] {\n  width: -moz-max-content;\n  width: max-content;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9zdGFmZi9EOlxccHJvamVjdHNcXEhlbHBEZXNrL3NyY1xcYXBwXFxhZG1pblxcY29tcG9uZW50c1xcc3RhZmZcXHN0YWZmLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3N0YWZmL3N0YWZmLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQUo7QURHSTtFQUNFLGdDQUFBO0FDRE47QURHUTtFQUNFLFlBQUE7QUNEVjtBREdRO0VBQ0UsMkJBQUE7QUNEVjtBREdRO0VBQ0Usb0NBQUE7QUNEVjtBRE1FO0VBQ0UsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvc3RhZmYvc3RhZmYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgLnBhZ2VOYW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIGNvbG9yOiAjOGQ5ZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC50YWJsZSB7XHJcbiAgICAudGJvZHkge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgICAgLmZvckJ1dHRvbiB7XHJcbiAgICAgICAgLmRlbGV0ZSB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWxldGU6Zm9jdXMge1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVsZXRlOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDUsIDUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC51aS1wYWdpbmF0b3Ige1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxufVxyXG4iLCIuY29udGVudCAucGFnZU5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4IGF1dG87XG4gIGNvbG9yOiAjOGQ5ZmZmO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250ZW50IC50YWJsZSAudGJvZHkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbn1cbi5jb250ZW50IC50YWJsZSAudGJvZHkgLmZvckJ1dHRvbiAuZGVsZXRlIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmNvbnRlbnQgLnRhYmxlIC50Ym9keSAuZm9yQnV0dG9uIC5kZWxldGU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uY29udGVudCAudGFibGUgLnRib2R5IC5mb3JCdXR0b24gLmRlbGV0ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTA1MDUgIWltcG9ydGFudDtcbn1cbi5jb250ZW50IC51aS1wYWdpbmF0b3Ige1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaffComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-staff',
          templateUrl: './staff.component.html',
          styleUrls: ['./staff.component.scss']
        }]
      }], function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_3__["StaffService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/components/ticket-columns/index.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin/components/ticket-columns/index.ts ***!
    \**********************************************************/

  /*! exports provided: TicketColumnsComponent */

  /***/
  function srcAppAdminComponentsTicketColumnsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _ticket_columns_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ticket-columns.component */
    "./src/app/admin/components/ticket-columns/ticket-columns.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TicketColumnsComponent", function () {
      return _ticket_columns_component__WEBPACK_IMPORTED_MODULE_0__["TicketColumnsComponent"];
    });
    /***/

  },

  /***/
  "./src/app/admin/components/ticket-columns/ticket-columns.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/admin/components/ticket-columns/ticket-columns.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: TicketColumnsComponent */

  /***/
  function srcAppAdminComponentsTicketColumnsTicketColumnsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketColumnsComponent", function () {
      return TicketColumnsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services */
    "./src/app/admin/services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/tooltip */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tooltip.js");

    function TicketColumnsComponent_div_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketColumnsComponent_div_2_div_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.edit(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketColumnsComponent_div_2_div_3_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.deleteColumn(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TicketColumnsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TicketColumnsComponent_div_2_div_3_Template, 5, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("completed", col_r1.label === "Completed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragDisabled", col_r1.label === "Completed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](col_r1.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r1.label !== "Completed");
      }
    }

    var _c0 = function _c0() {
      return {
        width: "30vw"
      };
    };

    var TicketColumnsComponent = /*#__PURE__*/function () {
      function TicketColumnsComponent(builder, adminData, loaderSvc) {
        _classCallCheck(this, TicketColumnsComponent);

        this.builder = builder;
        this.adminData = adminData;
        this.loaderSvc = loaderSvc;
        this.selectedItemIndex = null;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(TicketColumnsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formInit();
          this.getColumns();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngUnsubscribe.next();
          this.ngUnsubscribe.unsubscribe();
        }
      }, {
        key: "formInit",
        value: function formInit() {
          this.columNameForm = this.builder.group({
            addNewColumn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "getColumns",
        value: function getColumns() {
          var _this4 = this;

          this.loaderSvc.subject.next(true);
          this.adminData.getConfigs().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe)).subscribe({
            next: function next(resp) {
              _this4.loaderSvc.subject.next(false);

              _this4.columns = resp.map(function (col) {
                return col = {
                  name: col.name,
                  label: col.label,
                  "default": col["default"]
                };
              });
            },
            error: function error(err) {
              _this4.loaderSvc.subject.next(false);

              console.log(err);
            }
          });
        }
      }, {
        key: "drop",
        value: function drop(event) {
          if (this.columns.length - 1 !== event.currentIndex) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.columns, event.previousIndex, event.currentIndex);
          }
        }
      }, {
        key: "showModalDialog",
        value: function showModalDialog(resetControl) {
          if (resetControl) {
            this.columNameForm.get('addNewColumn').reset();
          }

          this.displayModal = true;
        }
      }, {
        key: "edit",
        value: function edit(index) {
          this.selectedItemIndex = index;
          this.columNameForm.get('addNewColumn').setValue(this.columns[index].label);
          this.showModalDialog(false);
        }
      }, {
        key: "deleteColumn",
        value: function deleteColumn(index) {
          this.columns.splice(index, 1);
        }
      }, {
        key: "save",
        value: function save() {
          var _this5 = this;

          // this.columns.push({
          //   label: 'Completed',
          //   name: 'Completed',
          //   default: false
          // });
          this.adminData.updateConfig(this.columns).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe)).subscribe({
            next: function next(resp) {
              _this5.columns = resp.column.map(function (col) {
                return col = {
                  name: col.name,
                  label: col.label,
                  "default": col["default"]
                };
              });
            },
            error: function error(err) {
              console.log(err);
            }
          });
        }
      }, {
        key: "confirm",
        value: function confirm() {
          var currentValue = this.columNameForm.get('addNewColumn').value;

          if (this.selectedItemIndex !== null) {
            // edit case
            this.columns[this.selectedItemIndex].label = currentValue;
            this.columns[this.selectedItemIndex].name = this.changeWhitespace(currentValue);
          } else {
            // new case
            this.columns.unshift({
              label: currentValue,
              name: this.changeWhitespace(currentValue),
              "default": false
            });
          }

          this.selectedItemIndex = null;
          this.closeModal();
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.displayModal = false;
        }
      }, {
        key: "changeWhitespace",
        value: function changeWhitespace(str) {
          return str === null || str === void 0 ? void 0 : str.replace(/ /g, '_');
        }
      }]);

      return TicketColumnsComponent;
    }();

    TicketColumnsComponent.ɵfac = function TicketColumnsComponent_Factory(t) {
      return new (t || TicketColumnsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["AdminDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]));
    };

    TicketColumnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TicketColumnsComponent,
      selectors: [["app-ticket-columns"]],
      decls: 13,
      vars: 12,
      consts: [[1, "content"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box columns", "cdkDrag", "", 3, "completed", "cdkDragDisabled", 4, "ngFor", "ngForOf"], [1, "buttons"], [1, "addButton"], ["label", "Add new", 1, "pButton", 3, "click"], ["header", "Create new ticket", 3, "position", "visible", "modal", "baseZIndex", "draggable", "resizable", "visibleChange"], [3, "formGroup"], ["formControlName", "addNewColumn", "type", "text", "size", "20", "placeholder", "Column Name", "pInputText", ""], ["type", "submit", "icon", "pi pi-check", "label", "Yes", 1, "p-button-text", 3, "disabled", "click"], ["icon", "pi pi-times", "label", "No", 3, "click"], ["pButton", "", "type", "button", "label", "Save", 1, "ui-button-success", "saveButton", 3, "click"], ["cdkDrag", "", 1, "example-box", "columns", 3, "cdkDragDisabled"], [1, "columnName"], ["class", "buttonsForColumn", 4, "ngIf"], [1, "buttonsForColumn"], ["type", "button", "pTooltip", "Edit", "tooltipPosition", "top", 1, "editButton", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil", "fa-lg"], ["type", "button", "pTooltip", "Delete", "tooltipPosition", "top", 1, "clearButton", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash-o", "fa-lg"]],
      template: function TicketColumnsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function TicketColumnsComponent_Template_div_cdkDropListDropped_1_listener($event) {
            return ctx.drop($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketColumnsComponent_div_2_Template, 4, 5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketColumnsComponent_Template_p_button_click_5_listener() {
            return ctx.showModalDialog(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p-dialog", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function TicketColumnsComponent_Template_p_dialog_visibleChange_6_listener($event) {
            return ctx.displayModal = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketColumnsComponent_Template_p_button_click_10_listener() {
            return ctx.confirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p-button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketColumnsComponent_Template_p_button_click_11_listener() {
            return ctx.closeModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketColumnsComponent_Template_button_click_12_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", "topleft")("visible", ctx.displayModal)("modal", true)("baseZIndex", 10000)("draggable", false)("resizable", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.columNameForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.columNameForm.invalid);
        }
      },
      directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["Button"], primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["Dialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputText"], primeng_api__WEBPACK_IMPORTED_MODULE_10__["Footer"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonDirective"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__["Tooltip"]],
      styles: ["[_nghost-%COMP%]  .content {\n  width: 50%;\n}\n[_nghost-%COMP%]  .content .example-list {\n  width: auto;\n}\n[_nghost-%COMP%]  .content .example-list .columns .columnName {\n  color: #00508e;\n}\n[_nghost-%COMP%]  .content .example-list .columns .buttonsForColumn .editButton {\n  background: none;\n  border: none;\n  color: #007ad9;\n  margin: 0 5px;\n}\n[_nghost-%COMP%]  .content .example-list .columns .buttonsForColumn .editButton:focus {\n  outline: none;\n}\n[_nghost-%COMP%]  .content .example-list .columns .buttonsForColumn .editButton:hover {\n  color: #61baff;\n}\n[_nghost-%COMP%]  .content .example-list .columns .buttonsForColumn .clearButton {\n  border: none;\n  background: none;\n  color: #b70505;\n  margin: 0 5px;\n}\n[_nghost-%COMP%]  .content .example-list .columns .buttonsForColumn .clearButton:focus {\n  outline: none;\n}\n[_nghost-%COMP%]  .content .example-list .columns .buttonsForColumn .clearButton:hover {\n  color: #f10606;\n}\n[_nghost-%COMP%]  .content .example-list .completed {\n  color: #00508e;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  background: #34a83540;\n  cursor: not-allowed;\n}\n[_nghost-%COMP%]  .content .buttons {\n  display: flex;\n  justify-content: flex-end;\n  padding: 15px 10px 15px 0;\n}\n[_nghost-%COMP%]  .content .buttons .addButton {\n  margin: 0 10px 0 0;\n}\n[_nghost-%COMP%]  .content .buttons .addButton .pButton .ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only {\n  box-shadow: 0 1px 5px #000000;\n}\n[_nghost-%COMP%]  .content .buttons .addButton .pButton .ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only:focus {\n  box-shadow: none;\n}\n[_nghost-%COMP%]  .content .buttons .saveButton {\n  box-shadow: 0 1px 5px #000000;\n}\n[_nghost-%COMP%]  .content .buttons .saveButton:focus {\n  box-shadow: none !important;\n}\n.example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.example-box[_ngcontent-%COMP%]:last-child   .columnName[_ngcontent-%COMP%] {\n  color: #00508e;\n  font-family: \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.example-box[_ngcontent-%COMP%]:last-child   .clearButton[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: #b70505;\n  margin: 0 5px;\n}\n.example-box[_ngcontent-%COMP%]:last-child   .editButton[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #007ad9;\n  margin: 0 5px;\n}\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy90aWNrZXQtY29sdW1ucy9EOlxccHJvamVjdHNcXEhlbHBEZXNrL3NyY1xcYXBwXFxhZG1pblxcY29tcG9uZW50c1xcdGlja2V0LWNvbHVtbnNcXHRpY2tldC1jb2x1bW5zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3RpY2tldC1jb2x1bW5zL3RpY2tldC1jb2x1bW5zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksVUFBQTtBQ0FSO0FEQ1E7RUFDSSxXQUFBO0FDQ1o7QURDZ0I7RUFDSSxjQUFBO0FDQ3BCO0FERW9CO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNBeEI7QURFb0I7RUFDSSxhQUFBO0FDQXhCO0FERW9CO0VBQ0ksY0FBQTtBQ0F4QjtBREVvQjtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDQXhCO0FERW9CO0VBQ0ksYUFBQTtBQ0F4QjtBREVvQjtFQUNJLGNBQUE7QUNBeEI7QURJWTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0ZoQjtBREtRO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNIWjtBRElZO0VBQ0ksa0JBQUE7QUNGaEI7QURJb0I7RUFDSSw2QkFBQTtBQ0Z4QjtBRElvQjtFQUNJLGdCQUFBO0FDRnhCO0FETVk7RUFDSSw2QkFBQTtBQ0poQjtBRE1ZO0VBQ0ksMkJBQUE7QUNKaEI7QURXQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNSSjtBRFdBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1JKO0FEV0E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUNSSjtBRFlBO0VBQ0ksVUFBQTtBQ1RKO0FEWUE7RUFDSSxzREFBQTtBQ1RKO0FEWUE7RUFDSSxZQUFBO0FDVEo7QURVSTtFQUNJLGNBQUE7RUFDQSxzREFBQTtBQ1JSO0FEVUk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ1JSO0FEVUk7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ1JSO0FEWUE7RUFDSSxzREFBQTtBQ1RKO0FEWUE7RUFDSSxpQkFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy90aWNrZXQtY29sdW1ucy90aWNrZXQtY29sdW1ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0OjpuZy1kZWVwIHtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIC5leGFtcGxlLWxpc3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgLmNvbHVtbnMge1xyXG4gICAgICAgICAgICAgICAgLmNvbHVtbk5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA1MDhlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJ1dHRvbnNGb3JDb2x1bW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC5lZGl0QnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwN2FkOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmVkaXRCdXR0b246Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZWRpdEJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjFiYWZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2xlYXJCdXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYjcwNTA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2xlYXJCdXR0b246Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2xlYXJCdXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2YxMDYwNjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbXBsZXRlZCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwNTA4ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzM0YTgzNTQwOztcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCAwO1xyXG4gICAgICAgICAgICAuYWRkQnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICAgICAgICAgICAgICAgIC5wQnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAudWktYnV0dG9uLnVpLXdpZGdldC51aS1zdGF0ZS1kZWZhdWx0LnVpLWNvcm5lci1hbGwudWktYnV0dG9uLXRleHQtb25seSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudWktYnV0dG9uLnVpLXdpZGdldC51aS1zdGF0ZS1kZWZhdWx0LnVpLWNvcm5lci1hbGwudWktYnV0dG9uLXRleHQtb25seTpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zYXZlQnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAjMDAwMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zYXZlQnV0dG9uOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyBkcmFnJmRyb3BTdHlsZXNcclxuXHJcbi5leGFtcGxlLWxpc3Qge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94IHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAuY29sdW1uTmFtZSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDUwOGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIC5jbGVhckJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNiNzA1MDU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgIH1cclxuICAgIC5lZGl0QnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzAwN2FkOTtcclxuICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLm5nLXRvdWNoZWQubmctaW52YWxpZCB7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxufVxyXG4iLCI6aG9zdDo6bmctZGVlcCAuY29udGVudCB7XG4gIHdpZHRoOiA1MCU7XG59XG46aG9zdDo6bmctZGVlcCAuY29udGVudCAuZXhhbXBsZS1saXN0IHtcbiAgd2lkdGg6IGF1dG87XG59XG46aG9zdDo6bmctZGVlcCAuY29udGVudCAuZXhhbXBsZS1saXN0IC5jb2x1bW5zIC5jb2x1bW5OYW1lIHtcbiAgY29sb3I6ICMwMDUwOGU7XG59XG46aG9zdDo6bmctZGVlcCAuY29udGVudCAuZXhhbXBsZS1saXN0IC5jb2x1bW5zIC5idXR0b25zRm9yQ29sdW1uIC5lZGl0QnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzAwN2FkOTtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbjpob3N0OjpuZy1kZWVwIC5jb250ZW50IC5leGFtcGxlLWxpc3QgLmNvbHVtbnMgLmJ1dHRvbnNGb3JDb2x1bW4gLmVkaXRCdXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuOmhvc3Q6Om5nLWRlZXAgLmNvbnRlbnQgLmV4YW1wbGUtbGlzdCAuY29sdW1ucyAuYnV0dG9uc0ZvckNvbHVtbiAuZWRpdEJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjNjFiYWZmO1xufVxuOmhvc3Q6Om5nLWRlZXAgLmNvbnRlbnQgLmV4YW1wbGUtbGlzdCAuY29sdW1ucyAuYnV0dG9uc0ZvckNvbHVtbiAuY2xlYXJCdXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjYjcwNTA1O1xuICBtYXJnaW46IDAgNXB4O1xufVxuOmhvc3Q6Om5nLWRlZXAgLmNvbnRlbnQgLmV4YW1wbGUtbGlzdCAuY29sdW1ucyAuYnV0dG9uc0ZvckNvbHVtbiAuY2xlYXJCdXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuOmhvc3Q6Om5nLWRlZXAgLmNvbnRlbnQgLmV4YW1wbGUtbGlzdCAuY29sdW1ucyAuYnV0dG9uc0ZvckNvbHVtbiAuY2xlYXJCdXR0b246aG92ZXIge1xuICBjb2xvcjogI2YxMDYwNjtcbn1cbjpob3N0OjpuZy1kZWVwIC5jb250ZW50IC5leGFtcGxlLWxpc3QgLmNvbXBsZXRlZCB7XG4gIGNvbG9yOiAjMDA1MDhlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMzNGE4MzU0MDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbjpob3N0OjpuZy1kZWVwIC5jb250ZW50IC5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMTVweCAxMHB4IDE1cHggMDtcbn1cbjpob3N0OjpuZy1kZWVwIC5jb250ZW50IC5idXR0b25zIC5hZGRCdXR0b24ge1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG59XG46aG9zdDo6bmctZGVlcCAuY29udGVudCAuYnV0dG9ucyAuYWRkQnV0dG9uIC5wQnV0dG9uIC51aS1idXR0b24udWktd2lkZ2V0LnVpLXN0YXRlLWRlZmF1bHQudWktY29ybmVyLWFsbC51aS1idXR0b24tdGV4dC1vbmx5IHtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4ICMwMDAwMDA7XG59XG46aG9zdDo6bmctZGVlcCAuY29udGVudCAuYnV0dG9ucyAuYWRkQnV0dG9uIC5wQnV0dG9uIC51aS1idXR0b24udWktd2lkZ2V0LnVpLXN0YXRlLWRlZmF1bHQudWktY29ybmVyLWFsbC51aS1idXR0b24tdGV4dC1vbmx5OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbjpob3N0OjpuZy1kZWVwIC5jb250ZW50IC5idXR0b25zIC5zYXZlQnV0dG9uIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4ICMwMDAwMDA7XG59XG46aG9zdDo6bmctZGVlcCAuY29udGVudCAuYnV0dG9ucyAuc2F2ZUJ1dHRvbjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmV4YW1wbGUtbGlzdCB7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmV4YW1wbGUtYm94IHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIC5jb2x1bW5OYW1lIHtcbiAgY29sb3I6ICMwMDUwOGU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCAuY2xlYXJCdXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjYjcwNTA1O1xuICBtYXJnaW46IDAgNXB4O1xufVxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQgLmVkaXRCdXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMDA3YWQ5O1xuICBtYXJnaW46IDAgNXB4O1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4ubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketColumnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ticket-columns',
          templateUrl: './ticket-columns.component.html',
          styleUrls: ['./ticket-columns.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_5__["AdminDataService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/components/ticket-form/index.ts":
  /*!*******************************************************!*\
    !*** ./src/app/admin/components/ticket-form/index.ts ***!
    \*******************************************************/

  /*! exports provided: TicketFormComponent */

  /***/
  function srcAppAdminComponentsTicketFormIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _ticket_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ticket-form.component */
    "./src/app/admin/components/ticket-form/ticket-form.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TicketFormComponent", function () {
      return _ticket_form_component__WEBPACK_IMPORTED_MODULE_0__["TicketFormComponent"];
    });
    /***/

  },

  /***/
  "./src/app/admin/components/ticket-form/ticket-form.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/admin/components/ticket-form/ticket-form.component.ts ***!
    \***********************************************************************/

  /*! exports provided: TicketFormComponent */

  /***/
  function srcAppAdminComponentsTicketFormTicketFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketFormComponent", function () {
      return TicketFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services */
    "./src/app/admin/services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");

    function TicketFormComponent_div_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TicketFormComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TicketFormComponent_div_2_div_3_Template, 2, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ticket_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ticket_r2.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ticket_r2.type === "dropdown");
      }
    }

    function TicketFormComponent_div_8_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFormComponent_div_8_div_2_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var i_r6 = ctx.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.deleteItem(i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", item_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.ticketForm.get("dropdownItems").value.length < 2);
      }
    }

    function TicketFormComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketFormComponent_div_8_div_2_Template, 5, 2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFormComponent_div_8_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.addItem();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.ticketForm.get("dropdownItems")["controls"]);
      }
    }

    var TicketFormComponent = /*#__PURE__*/function () {
      function TicketFormComponent(bulider, adminData) {
        _classCallCheck(this, TicketFormComponent);

        this.bulider = bulider;
        this.adminData = adminData;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(TicketFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formInit();
          this.getTickets();
          this.ticketTypeOptions = [{
            label: 'Text',
            value: 'text'
          }, {
            label: 'Dropdown',
            value: 'dropdown'
          }];
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngUnsubscribe.next();
          this.ngUnsubscribe.unsubscribe();
        }
      }, {
        key: "getTickets",
        value: function getTickets() {
          var _this6 = this;

          this.adminData.getTickets().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe)).subscribe({
            next: function next(resp) {
              _this6.tickets = (resp || []).map(_this6.getTicket);
            },
            error: function error(err) {
              console.log(err);
            }
          });
        }
      }, {
        key: "getTicket",
        value: function getTicket(ticket) {
          if (ticket.dropdownItems) {
            return {
              label: ticket.label,
              name: ticket.name,
              type: ticket.type
            };
          } else {
            return {
              label: ticket.label,
              name: ticket.name,
              type: ticket.type,
              dropdownItems: ticket.dropdownItems
            };
          }
        }
      }, {
        key: "Submit",
        value: function Submit() {
          var _this7 = this;

          this.ticketForm.get('ticketType').reset();
          this.ticketForm.get('ticketName').reset();
          this.adminData.updateTicket(this.tickets).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe)).subscribe({
            next: function next(resp) {
              _this7.tickets = resp.ticket.map(_this7.getTicket);
            },
            error: function error(err) {
              console.log(err);
            }
          });
        }
      }, {
        key: "addToList",
        value: function addToList() {
          var _this8 = this;

          var ticketType = this.ticketForm.get('ticketType').value;
          var ticketName = this.ticketForm.get('ticketName').value;
          var dropdownItems = this.ticketForm.get('dropdownItems').value;
          this.ticketForm.get('ticketType').reset();
          this.ticketForm.get('ticketName').reset();
          var ticket = {
            label: ticketName,
            name: this.changeWhitespace(ticketName),
            type: ticketType
          };

          if (ticketType === 'dropdown') {
            ticket.dropdownItems = dropdownItems.map(function (item) {
              return {
                label: item,
                value: _this8.changeWhitespace(item)
              };
            });
            console.log(ticket.dropdownItems);
          }

          this.tickets.push(ticket);
          console.log(this.tickets);
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(itemIndex) {
          this.dropDownItems.removeAt(itemIndex);
        }
      }, {
        key: "addItem",
        value: function addItem() {
          this.dropDownItems.push(this.createItem());
        }
      }, {
        key: "createItem",
        value: function createItem() {
          return this.bulider.control('');
        }
      }, {
        key: "formInit",
        value: function formInit() {
          var _this9 = this;

          this.ticketForm = this.bulider.group({
            ticketName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ticketType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dropdownItems: this.bulider.array([])
          });
          var ticketType = this.ticketForm.get('ticketType');
          var dropdownItems = this.ticketForm.get('dropdownItems');
          ticketType.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe)).subscribe(function () {
            if (ticketType.value === 'dropdown' && !dropdownItems.value.length) {
              _this9.addItem();
            }
          });
        }
      }, {
        key: "changeWhitespace",
        value: function changeWhitespace(str) {
          return str === null || str === void 0 ? void 0 : str.replace(/ /g, '_');
        }
      }, {
        key: "dropDownItems",
        get: function get() {
          return this.ticketForm.get('dropdownItems');
        }
      }]);

      return TicketFormComponent;
    }();

    TicketFormComponent.ɵfac = function TicketFormComponent_Factory(t) {
      return new (t || TicketFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["AdminDataService"]));
    };

    TicketFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TicketFormComponent,
      selectors: [["app-ticket-form"]],
      decls: 12,
      vars: 7,
      consts: [[1, "content"], [1, "ticketLabelContainer"], ["class", "ticketLabel", 4, "ngFor", "ngForOf"], [1, "ticketForm", 3, "formGroup"], [1, "ticketFormInputs"], [1, "ticketNameAndType"], ["formControlName", "ticketName", "id", "input", "type", "text", "size", "30", "pInputText", "", "placeholder", "Name", 1, "ticketName"], ["formControlName", "ticketType", "placeholder", "Select a type", 3, "options", "showClear"], ["class", "dropDown", 4, "ngIf"], [1, "save"], ["pButton", "", "type", "button", "label", "Submit", 1, "ui-button-raised", "ui-button-success", 3, "disabled", "click"], ["pButton", "", "type", "button", "label", "Add to list", 1, "ui-button-raised", "ui-button-info", 3, "disabled", "click"], [1, "ticketLabel"], [1, "forTicketLabel"], ["class", "dropdownIcon", 4, "ngIf"], [1, "dropdownIcon"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc", "fa-lg"], [1, "dropDown"], ["formArrayName", "dropdownItems", 1, "dropdownItems"], [4, "ngFor", "ngForOf"], ["pButton", "", "type", "button", "label", "Add Item", 1, "ui-button-raised", "ui-button-secondary", 3, "click"], [1, "controlsAndButton"], ["id", "input", "type", "text", "size", "30", "pInputText", "", "placeholder", "Dropdown Item Name", 3, "formControl"], ["type", "button", 1, "delete", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-minus-circle", "fa-lg"]],
      template: function TicketFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TicketFormComponent_div_2_Template, 4, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p-dropdown", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TicketFormComponent_div_8_Template, 4, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFormComponent_Template_button_click_10_listener() {
            return ctx.Submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketFormComponent_Template_button_click_11_listener() {
            return ctx.addToList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tickets);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ticketForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.ticketTypeOptions)("showClear", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketForm.get("ticketType").value === "dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.ticketForm.get("ticketName").invalid || ctx.ticketForm.get("ticketType").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.ticketForm.get("ticketName").invalid || ctx.ticketForm.get("ticketType").invalid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]],
      styles: [".content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 50%;\n}\n.content[_ngcontent-%COMP%]   .ticketLabelContainer[_ngcontent-%COMP%] {\n  border-bottom: 1px solid gray;\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   .ticketLabelContainer[_ngcontent-%COMP%]   .ticketLabel[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 10px 0;\n  border-bottom: 1px solid #c7c7c7;\n  width: -moz-max-content;\n  width: max-content;\n}\n.content[_ngcontent-%COMP%]   .ticketLabelContainer[_ngcontent-%COMP%]   .ticketLabel[_ngcontent-%COMP%]   .forTicketLabel[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.content[_ngcontent-%COMP%]   .ticketLabelContainer[_ngcontent-%COMP%]   .ticketLabel[_ngcontent-%COMP%]   .dropdownIcon[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n.content[_ngcontent-%COMP%]   .ticketForm[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   .ticketForm[_ngcontent-%COMP%]   .ticketFormInputs[_ngcontent-%COMP%] {\n  margin: 2% 0;\n}\n.content[_ngcontent-%COMP%]   .ticketForm[_ngcontent-%COMP%]   .ticketFormInputs[_ngcontent-%COMP%]   .ticketNameAndType[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.content[_ngcontent-%COMP%]   .ticketForm[_ngcontent-%COMP%]   .ticketFormInputs[_ngcontent-%COMP%]   .ticketNameAndType[_ngcontent-%COMP%]   .ticketName[_ngcontent-%COMP%] {\n  margin-right: 1%;\n}\n.content[_ngcontent-%COMP%]   .ticketForm[_ngcontent-%COMP%]   .dropDown[_ngcontent-%COMP%] {\n  margin: 3% 0;\n}\n.content[_ngcontent-%COMP%]   .ticketForm[_ngcontent-%COMP%]   .dropDown[_ngcontent-%COMP%]   .dropdownItems[_ngcontent-%COMP%] {\n  margin: 1% 0;\n}\n.content[_ngcontent-%COMP%]   .ticketForm[_ngcontent-%COMP%]   .dropDown[_ngcontent-%COMP%]   .dropdownItems[_ngcontent-%COMP%]   .controlsAndButton[_ngcontent-%COMP%] {\n  margin: 1% 0;\n}\n.content[_ngcontent-%COMP%]   .ticketForm[_ngcontent-%COMP%]   .dropDown[_ngcontent-%COMP%]   .dropdownItems[_ngcontent-%COMP%]   .controlsAndButton[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  margin: 0 1%;\n  border: none;\n  background: none;\n  color: #f87d7d;\n}\n.content[_ngcontent-%COMP%]   .ticketForm[_ngcontent-%COMP%]   .dropDown[_ngcontent-%COMP%]   .dropdownItems[_ngcontent-%COMP%]   .controlsAndButton[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]:disabled {\n  color: #BBBBBB;\n}\n.content[_ngcontent-%COMP%]   .ticketForm[_ngcontent-%COMP%]   .dropDown[_ngcontent-%COMP%]   .dropdownItems[_ngcontent-%COMP%]   .controlsAndButton[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]:enabled:hover {\n  color: red;\n}\n.content[_ngcontent-%COMP%]   .ticketForm[_ngcontent-%COMP%]   .dropDown[_ngcontent-%COMP%]   .dropdownItems[_ngcontent-%COMP%]   .controlsAndButton[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]:enabled:focus {\n  outline: none;\n}\n.content[_ngcontent-%COMP%]   .ticketForm[_ngcontent-%COMP%]   .dropDown[_ngcontent-%COMP%]   .ui-button-raised.ui-button-secondary[_ngcontent-%COMP%] {\n  margin: 1% 0;\n  background-color: #dedede;\n  box-shadow: 0 2px 5px #8c8c8c;\n  border: none;\n}\n.content[_ngcontent-%COMP%]   .ticketForm[_ngcontent-%COMP%]   .dropDown[_ngcontent-%COMP%]   .ui-button-raised.ui-button-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #c8c8c8;\n}\n.content[_ngcontent-%COMP%]   .ticketForm[_ngcontent-%COMP%]   .dropDown[_ngcontent-%COMP%]   .ui-button-raised.ui-button-secondary[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.content[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]   .ui-button-raised.ui-button-success[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 5px #000000;\n}\n.content[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]   .ui-button-raised.ui-button-success[_ngcontent-%COMP%]:focus {\n  cursor: auto;\n  box-shadow: none;\n}\n.content[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]   .ui-button-raised.ui-button-success[_ngcontent-%COMP%]:disabled {\n  cursor: auto;\n  box-shadow: none;\n}\n.content[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]   .ui-button-raised.ui-button-info[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  box-shadow: 0 1px 5px #000000;\n}\n.content[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]   .ui-button-raised.ui-button-info[_ngcontent-%COMP%]:disabled {\n  cursor: auto;\n  box-shadow: none;\n}\n.content[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]   .ui-button-raised.ui-button-info[_ngcontent-%COMP%]:focus {\n  cursor: auto;\n  box-shadow: none;\n}\n[_nghost-%COMP%]     .p-dropdown {\n  width: 14rem;\n}\n.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: #ff0033;\n}\n.ng-dirty.ng-invalid[_ngcontent-%COMP%] {\n  border-color: #ff0033;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy90aWNrZXQtZm9ybS9EOlxccHJvamVjdHNcXEhlbHBEZXNrL3NyY1xcYXBwXFxhZG1pblxcY29tcG9uZW50c1xcdGlja2V0LWZvcm1cXHRpY2tldC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3RpY2tldC1mb3JtL3RpY2tldC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0NGO0FEQUU7RUFDRSw2QkFBQTtFQUNBLFdBQUE7QUNFSjtBRERJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7QUNHTjtBREZNO0VBQ0UsU0FBQTtBQ0lSO0FERk07RUFDRSxhQUFBO0FDSVI7QURBRTtFQUNFLFdBQUE7QUNFSjtBRERJO0VBQ0UsWUFBQTtBQ0dOO0FERk07RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNJUjtBREhRO0VBQ0UsZ0JBQUE7QUNLVjtBRERJO0VBQ0UsWUFBQTtBQ0dOO0FERk07RUFDRSxZQUFBO0FDSVI7QURIUTtFQUNFLFlBQUE7QUNLVjtBREpVO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNNWjtBREpVO0VBQ0UsY0FBQTtBQ01aO0FESlU7RUFDRSxVQUFBO0FDTVo7QURKVTtFQUNFLGFBQUE7QUNNWjtBRERNO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FDR1I7QURETTtFQUNFLHlCQUFBO0FDR1I7QURETTtFQUNFLGdCQUFBO0FDR1I7QURDRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDQ0o7QURDSTtFQUNFLDZCQUFBO0FDQ047QURDSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0NOO0FEQ0k7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBREVJO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0FDQU47QURFSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0FOO0FERUk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNBTjtBREtBO0VBQ0UsWUFBQTtBQ0ZGO0FES0E7RUFDRSxxQkFBQTtBQ0ZGO0FESUE7RUFDRSxxQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy90aWNrZXQtZm9ybS90aWNrZXQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogNTAlO1xyXG4gIC50aWNrZXRMYWJlbENvbnRhaW5lciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLnRpY2tldExhYmVsIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzdjN2M3O1xyXG4gICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgIC5mb3JUaWNrZXRMYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5kcm9wZG93bkljb257XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudGlja2V0Rm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC50aWNrZXRGb3JtSW5wdXRzIHtcclxuICAgICAgbWFyZ2luOiAyJSAwO1xyXG4gICAgICAudGlja2V0TmFtZUFuZFR5cGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC50aWNrZXROYW1lIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZHJvcERvd24ge1xyXG4gICAgICBtYXJnaW46IDMlIDA7XHJcbiAgICAgIC5kcm9wZG93bkl0ZW1zIHtcclxuICAgICAgICBtYXJnaW46IDElIDA7XHJcbiAgICAgICAgLmNvbnRyb2xzQW5kQnV0dG9uIHtcclxuICAgICAgICAgIG1hcmdpbjogMSUgMDtcclxuICAgICAgICAgIC5kZWxldGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMSU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyNDgsIDEyNSwgMTI1KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kZWxldGU6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBjb2xvcjogI0JCQkJCQlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRlbGV0ZTplbmFibGVkOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kZWxldGU6ZW5hYmxlZDpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIGFkZCBpdGVtIGJ1dHRvblxyXG4gICAgICAudWktYnV0dG9uLXJhaXNlZC51aS1idXR0b24tc2Vjb25kYXJ5IHtcclxuICAgICAgICBtYXJnaW46IDElIDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggIzhjOGM4YztcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLnVpLWJ1dHRvbi1yYWlzZWQudWktYnV0dG9uLXNlY29uZGFyeTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M4YzhjODtcclxuICAgICAgfVxyXG4gICAgICAudWktYnV0dG9uLXJhaXNlZC51aS1idXR0b24tc2Vjb25kYXJ5OmZvY3VzIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zYXZlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIHN1Ym1pdCBidXR0b25cclxuICAgIC51aS1idXR0b24tcmFpc2VkLnVpLWJ1dHRvbi1zdWNjZXNzIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAxcHggNXB4ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICAudWktYnV0dG9uLXJhaXNlZC51aS1idXR0b24tc3VjY2Vzczpmb2N1cyB7XHJcbiAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICAgIC51aS1idXR0b24tcmFpc2VkLnVpLWJ1dHRvbi1zdWNjZXNzOmRpc2FibGVkIHtcclxuICAgICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gICAgLy8gYWRkIHRvIGxpc3QgYnV0dG9uXHJcbiAgICAudWktYnV0dG9uLXJhaXNlZC51aS1idXR0b24taW5mbyB7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDFweCA1cHggIzAwMDAwMDtcclxuICAgIH1cclxuICAgIC51aS1idXR0b24tcmFpc2VkLnVpLWJ1dHRvbi1pbmZvOmRpc2FibGVkIHtcclxuICAgICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnVpLWJ1dHRvbi1yYWlzZWQudWktYnV0dG9uLWluZm86Zm9jdXMge1xyXG4gICAgICBjdXJzb3I6IGF1dG87XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnAtZHJvcGRvd24ge1xyXG4gIHdpZHRoOiAxNHJlbTtcclxufVxyXG5cclxuLm5nLXRvdWNoZWQubmctaW52YWxpZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAwLCA1MSk7XHJcbn1cclxuLm5nLWRpcnR5Lm5nLWludmFsaWQge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMCwgNTEpOyAvLyA/XHJcbn1cclxuIiwiLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDUwJTtcbn1cbi5jb250ZW50IC50aWNrZXRMYWJlbENvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250ZW50IC50aWNrZXRMYWJlbENvbnRhaW5lciAudGlja2V0TGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjN2M3Yzc7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cbi5jb250ZW50IC50aWNrZXRMYWJlbENvbnRhaW5lciAudGlja2V0TGFiZWwgLmZvclRpY2tldExhYmVsIHtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbnRlbnQgLnRpY2tldExhYmVsQ29udGFpbmVyIC50aWNrZXRMYWJlbCAuZHJvcGRvd25JY29uIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbi5jb250ZW50IC50aWNrZXRGb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGVudCAudGlja2V0Rm9ybSAudGlja2V0Rm9ybUlucHV0cyB7XG4gIG1hcmdpbjogMiUgMDtcbn1cbi5jb250ZW50IC50aWNrZXRGb3JtIC50aWNrZXRGb3JtSW5wdXRzIC50aWNrZXROYW1lQW5kVHlwZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNvbnRlbnQgLnRpY2tldEZvcm0gLnRpY2tldEZvcm1JbnB1dHMgLnRpY2tldE5hbWVBbmRUeXBlIC50aWNrZXROYW1lIHtcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcbn1cbi5jb250ZW50IC50aWNrZXRGb3JtIC5kcm9wRG93biB7XG4gIG1hcmdpbjogMyUgMDtcbn1cbi5jb250ZW50IC50aWNrZXRGb3JtIC5kcm9wRG93biAuZHJvcGRvd25JdGVtcyB7XG4gIG1hcmdpbjogMSUgMDtcbn1cbi5jb250ZW50IC50aWNrZXRGb3JtIC5kcm9wRG93biAuZHJvcGRvd25JdGVtcyAuY29udHJvbHNBbmRCdXR0b24ge1xuICBtYXJnaW46IDElIDA7XG59XG4uY29udGVudCAudGlja2V0Rm9ybSAuZHJvcERvd24gLmRyb3Bkb3duSXRlbXMgLmNvbnRyb2xzQW5kQnV0dG9uIC5kZWxldGUge1xuICBtYXJnaW46IDAgMSU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICNmODdkN2Q7XG59XG4uY29udGVudCAudGlja2V0Rm9ybSAuZHJvcERvd24gLmRyb3Bkb3duSXRlbXMgLmNvbnRyb2xzQW5kQnV0dG9uIC5kZWxldGU6ZGlzYWJsZWQge1xuICBjb2xvcjogI0JCQkJCQjtcbn1cbi5jb250ZW50IC50aWNrZXRGb3JtIC5kcm9wRG93biAuZHJvcGRvd25JdGVtcyAuY29udHJvbHNBbmRCdXR0b24gLmRlbGV0ZTplbmFibGVkOmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5jb250ZW50IC50aWNrZXRGb3JtIC5kcm9wRG93biAuZHJvcGRvd25JdGVtcyAuY29udHJvbHNBbmRCdXR0b24gLmRlbGV0ZTplbmFibGVkOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5jb250ZW50IC50aWNrZXRGb3JtIC5kcm9wRG93biAudWktYnV0dG9uLXJhaXNlZC51aS1idXR0b24tc2Vjb25kYXJ5IHtcbiAgbWFyZ2luOiAxJSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggIzhjOGM4YztcbiAgYm9yZGVyOiBub25lO1xufVxuLmNvbnRlbnQgLnRpY2tldEZvcm0gLmRyb3BEb3duIC51aS1idXR0b24tcmFpc2VkLnVpLWJ1dHRvbi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOGM4O1xufVxuLmNvbnRlbnQgLnRpY2tldEZvcm0gLmRyb3BEb3duIC51aS1idXR0b24tcmFpc2VkLnVpLWJ1dHRvbi1zZWNvbmRhcnk6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNvbnRlbnQgLnNhdmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250ZW50IC5zYXZlIC51aS1idXR0b24tcmFpc2VkLnVpLWJ1dHRvbi1zdWNjZXNzIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4ICMwMDAwMDA7XG59XG4uY29udGVudCAuc2F2ZSAudWktYnV0dG9uLXJhaXNlZC51aS1idXR0b24tc3VjY2Vzczpmb2N1cyB7XG4gIGN1cnNvcjogYXV0bztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5jb250ZW50IC5zYXZlIC51aS1idXR0b24tcmFpc2VkLnVpLWJ1dHRvbi1zdWNjZXNzOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBhdXRvO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmNvbnRlbnQgLnNhdmUgLnVpLWJ1dHRvbi1yYWlzZWQudWktYnV0dG9uLWluZm8ge1xuICBtYXJnaW46IDAgMTBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4ICMwMDAwMDA7XG59XG4uY29udGVudCAuc2F2ZSAudWktYnV0dG9uLXJhaXNlZC51aS1idXR0b24taW5mbzpkaXNhYmxlZCB7XG4gIGN1cnNvcjogYXV0bztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5jb250ZW50IC5zYXZlIC51aS1idXR0b24tcmFpc2VkLnVpLWJ1dHRvbi1pbmZvOmZvY3VzIHtcbiAgY3Vyc29yOiBhdXRvO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnAtZHJvcGRvd24ge1xuICB3aWR0aDogMTRyZW07XG59XG5cbi5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXItY29sb3I6ICNmZjAwMzM7XG59XG5cbi5uZy1kaXJ0eS5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmYwMDMzO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ticket-form',
          templateUrl: './ticket-form.component.html',
          styleUrls: ['./ticket-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_4__["AdminDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/components/tickets/index.ts":
  /*!***************************************************!*\
    !*** ./src/app/admin/components/tickets/index.ts ***!
    \***************************************************/

  /*! exports provided: TicketsComponent */

  /***/
  function srcAppAdminComponentsTicketsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _tickets_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tickets.component */
    "./src/app/admin/components/tickets/tickets.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TicketsComponent", function () {
      return _tickets_component__WEBPACK_IMPORTED_MODULE_0__["TicketsComponent"];
    });
    /***/

  },

  /***/
  "./src/app/admin/components/tickets/tickets.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/admin/components/tickets/tickets.component.ts ***!
    \***************************************************************/

  /*! exports provided: TicketsComponent */

  /***/
  function srcAppAdminComponentsTicketsTicketsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketsComponent", function () {
      return TicketsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TicketsComponent = /*#__PURE__*/function () {
      function TicketsComponent() {
        _classCallCheck(this, TicketsComponent);
      }

      _createClass(TicketsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TicketsComponent;
    }();

    TicketsComponent.ɵfac = function TicketsComponent_Factory(t) {
      return new (t || TicketsComponent)();
    };

    TicketsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TicketsComponent,
      selectors: [["app-tickets"]],
      decls: 2,
      vars: 0,
      template: function TicketsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tickets works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdGlja2V0cy90aWNrZXRzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tickets',
          templateUrl: './tickets.component.html',
          styleUrls: ['./tickets.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=admin-admin-module-es5.js.map