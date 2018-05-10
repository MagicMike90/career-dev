(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/pagenotfound/pagenotfound.component */ "./src/app/core/components/pagenotfound/pagenotfound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', component: _core_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_2__["PagenotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _features_user_user_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/user/user.module */ "./src/app/features/user/user.module.ts");
/* harmony import */ var _features_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/dashboard/dashboard.module */ "./src/app/features/dashboard/dashboard.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var AppModule = /** @class */ (function () {
    function AppModule(platformId, appId) {
        this.platformId = platformId;
        this.appId = appId;
        var platform = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId) ?
            'in the browser' : 'on the server';
        console.log("Running " + platform + " with appId=" + appId);
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'career-dev' }),
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _features_user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"],
                _features_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__["DashboardModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"], useValue: '/' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_ID"])),
        __metadata("design:paramtypes", [Object, String])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/components/about/about.component.css":
/*!***********************************************************!*\
  !*** ./src/app/core/components/about/about.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/about/about.component.html":
/*!************************************************************!*\
  !*** ./src/app/core/components/about/about.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n<div>\n    Athenang : a production-ready, fully-featured SPA sample \n    powered by ASP.NET Core and Angular.\n</div>\n"

/***/ }),

/***/ "./src/app/core/components/about/about.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/about/about.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.title = 'About';
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/core/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/core/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/core/components/app-layout/app-layout.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/core/components/app-layout/app-layout.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.feather {\n    width: 16px;\n    height: 16px;\n    vertical-align: text-bottom;\n}\n\n/*\n * Sidebar\n */\n\n.sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 100;\n    /* Behind the navbar */\n    padding: 0;\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n}\n\n.sidebar-sticky {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 48px;\n    /* Height of navbar */\n    height: calc(100vh - 48px);\n    padding-top: .5rem;\n    overflow-x: hidden;\n    overflow-y: auto;\n    /* Scrollable contents if viewport is shorter than content. */\n}\n\n.sidebar .nav-link {\n    font-weight: 500;\n    color: #333;\n}\n\n.sidebar .nav-link .feather {\n    margin-right: 4px;\n    color: #999;\n}\n\n.sidebar .nav-link.active {\n    color: #007bff;\n}\n\n.sidebar .nav-link:hover .feather,\n.sidebar .nav-link.active .feather {\n    color: inherit;\n}\n\n.sidebar-heading {\n    font-size: .75rem;\n    text-transform: uppercase;\n}"

/***/ }),

/***/ "./src/app/core/components/app-layout/app-layout.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/app-layout/app-layout.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n<div class='container-fluid'>\n  <div class='row'>\n    <div class='col-md-2 d-none d-md-block bg-light sidebar'>\n      <app-nav-menu></app-nav-menu>\n    </div>\n    <div class='col-md-9 ml-sm-auto col-lg-10 pt-3 px-4'>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/components/app-layout/app-layout.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/components/app-layout/app-layout.component.ts ***!
  \********************************************************************/
/*! exports provided: AppLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLayoutComponent", function() { return AppLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppLayoutComponent = /** @class */ (function () {
    function AppLayoutComponent() {
    }
    AppLayoutComponent.prototype.ngOnInit = function () {
    };
    AppLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-layout',
            template: __webpack_require__(/*! ./app-layout.component.html */ "./src/app/core/components/app-layout/app-layout.component.html"),
            styles: [__webpack_require__(/*! ./app-layout.component.css */ "./src/app/core/components/app-layout/app-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppLayoutComponent);
    return AppLayoutComponent;
}());



/***/ }),

/***/ "./src/app/core/components/modal/modal.component.css":
/*!***********************************************************!*\
  !*** ./src/app/core/components/modal/modal.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/modal/modal.component.html":
/*!************************************************************!*\
  !*** ./src/app/core/components/modal/modal.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        ...\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/components/modal/modal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/modal/modal.component.ts ***!
  \**********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/core/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/core/components/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/core/components/nav-bar/nav-bar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/core/components/nav-bar/nav-bar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Navbar\n */\n\n .navbar-brand {\n    padding-top: .75rem;\n    padding-bottom: .75rem;\n    font-size: 1rem;\n    background-color: rgba(0, 0, 0, .25);\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\n  }\n  "

/***/ }),

/***/ "./src/app/core/components/nav-bar/nav-bar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/core/components/nav-bar/nav-bar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0\">\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">Athena</a>\n\n  <!-- <app-quiz-search class=\"w-100\" placeholder=\"Search for a quiz...\"></app-quiz-search> -->\n  <ul class=\"navbar-nav px-3\">\n    <li class=\"nav-item text-nowrap\">\n      <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"logout()\">Sign out</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/core/components/nav-bar/nav-bar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/components/nav-bar/nav-bar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.logout = function () {
        // logs out the user, then redirects him to Home View.
        if (this.auth.logout()) {
            this.router.navigate(['user/login']);
        }
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/core/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/core/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/core/components/nav-menu/nav-menu.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/core/components/nav-menu/nav-menu.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feather {\r\n  width: 16px;\r\n  height: 16px;\r\n  vertical-align: text-bottom;\r\n}\r\n\r\n/*\r\n * Sidebar\r\n */\r\n\r\n.sidebar {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 100; /* Behind the navbar */\r\n  padding: 0;\r\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n}\r\n\r\n.sidebar-sticky {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 48px; /* Height of navbar */\r\n  height: calc(100vh - 48px);\r\n  padding-top: .5rem;\r\n  overflow-x: hidden;\r\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n}\r\n\r\n.sidebar .nav-link {\r\n  font-weight: 500;\r\n  color: #333;\r\n}\r\n\r\n.sidebar .nav-link .feather {\r\n  margin-right: 4px;\r\n  color: #999;\r\n}\r\n\r\n.sidebar .nav-link.active {\r\n  color: #007bff;\r\n}\r\n\r\n.sidebar .nav-link:hover .feather,\r\n.sidebar .nav-link.active .feather {\r\n  color: inherit;\r\n}\r\n\r\n.sidebar-heading {\r\n  font-size: .75rem;\r\n  text-transform: uppercase;\r\n}\r\n"

/***/ }),

/***/ "./src/app/core/components/nav-menu/nav-menu.component.html":
/*!******************************************************************!*\
  !*** ./src/app/core/components/nav-menu/nav-menu.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\r\n  <div class=\"sidebar-sticky\">\r\n    <ul class=\"nav flex-column\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\" [routerLinkActive]=\"['active']\">\r\n          <span data-feather=\"dashboard\"></span>\r\n          Dashboard\r\n          <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/about']\" [routerLinkActive]=\"['active']\">\r\n          <span data-feather=\"file\"></span>\r\n          About\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/quiz/create']\" [routerLinkActive]=\"['active']\">\r\n          <span data-feather=\"shopping-cart\"></span>\r\n          Create Quiz\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/core/components/nav-menu/nav-menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/components/nav-menu/nav-menu.component.ts ***!
  \****************************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.isExpanded = false;
    }
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/core/components/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/core/components/nav-menu/nav-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/core/components/pagenotfound/pagenotfound.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/core/components/pagenotfound/pagenotfound.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/pagenotfound/pagenotfound.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/pagenotfound/pagenotfound.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pagenotfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/components/pagenotfound/pagenotfound.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/components/pagenotfound/pagenotfound.component.ts ***!
  \************************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/core/components/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/core/components/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/core/components/site-layout/site-layout.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/core/components/site-layout/site-layout.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brand {\n    padding-top: 120px;\n}\n\n.brand img {\n    width: 90px;\n    height: 90px;\n}\n\n.brand h2 {\n    margin-top: 0;\n}\n\n.footer {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 60px;\n    /* Set the fixed height of the footer here */\n    line-height: 60px;\n}\n\n.footer .copyright {\n    /* Vertically center the text there */\n    background-color: #f5f5f5;\n}"

/***/ }),

/***/ "./src/app/core/components/site-layout/site-layout.component.html":
/*!************************************************************************!*\
  !*** ./src/app/core/components/site-layout/site-layout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"brand text-center\">\n    <img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n    <h2>Athena</h2>\n  </div>\n  <router-outlet></router-outlet>\n</div>\n<footer class=\"footer text-center\">\n  <div class=\"copyright\">\n    <span class=\"text-muted\">Copyright &copy; 20018 MagicMike90. All rights reserved</span>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/core/components/site-layout/site-layout.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/site-layout/site-layout.component.ts ***!
  \**********************************************************************/
/*! exports provided: SiteLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteLayoutComponent", function() { return SiteLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteLayoutComponent = /** @class */ (function () {
    function SiteLayoutComponent() {
    }
    SiteLayoutComponent.prototype.ngOnInit = function () {
    };
    SiteLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-layout',
            template: __webpack_require__(/*! ./site-layout.component.html */ "./src/app/core/components/site-layout/site-layout.component.html"),
            styles: [__webpack_require__(/*! ./site-layout.component.css */ "./src/app/core/components/site-layout/site-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteLayoutComponent);
    return SiteLayoutComponent;
}());



/***/ }),

/***/ "./src/app/core/constant.ts":
/*!**********************************!*\
  !*** ./src/app/core/constant.ts ***!
  \**********************************/
/*! exports provided: AUTH_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
var AUTH_KEY = 'auth';


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _services_auth_request_intercept_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.request.intercept.service */ "./src/app/core/services/auth.request.intercept.service.ts");
/* harmony import */ var _services_auth_response_intercept_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.response.intercept.service */ "./src/app/core/services/auth.response.intercept.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/register.service */ "./src/app/core/services/register.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/core/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/nav-menu/nav-menu.component */ "./src/app/core/components/nav-menu/nav-menu.component.ts");
/* harmony import */ var _components_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/app-layout/app-layout.component */ "./src/app/core/components/app-layout/app-layout.component.ts");
/* harmony import */ var _components_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/site-layout/site-layout.component */ "./src/app/core/components/site-layout/site-layout.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/core/components/about/about.component.ts");
/* harmony import */ var _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pagenotfound/pagenotfound.component */ "./src/app/core/components/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/core/components/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


















function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            ],
            declarations: [
                _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_12__["NavMenuComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavBarComponent"],
                _components_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_13__["AppLayoutComponent"],
                _components_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_14__["SiteLayoutComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
                _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_16__["PagenotfoundComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_17__["ModalComponent"],
            ],
            exports: [
                _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_12__["NavMenuComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavBarComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
                _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_16__["PagenotfoundComponent"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _services_auth_request_intercept_service__WEBPACK_IMPORTED_MODULE_6__["AuthRequestInterceptService"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _services_auth_response_intercept_service__WEBPACK_IMPORTED_MODULE_7__["AuthResponseInterceptService"],
                    multi: true
                },
                _services_register_service__WEBPACK_IMPORTED_MODULE_8__["RegisterService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__["LocalStorageService"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn()) {
            // this.router.navigate(['/dashboard']);
            return true;
        }
        // Navigate to the login page with extras
        this.router.navigate(['user/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/http.error.handler.ts":
/*!********************************************!*\
  !*** ./src/app/core/http.error.handler.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handleError; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
function handleError(operation, result) {
    if (operation === void 0) { operation = 'operation'; }
    return function (error) {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
        // TODO: better job of transforming error for user consumption
        // return Observable.throw(error.message);
        // console.log(`${operation} failed: ${error.message}`);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error.message);
        // // Let the app keep running by returning an empty result.
        // return of(result as T);
    };
}


/***/ }),

/***/ "./src/app/core/services/auth.request.intercept.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/services/auth.request.intercept.service.ts ***!
  \*****************************************************************/
/*! exports provided: AuthRequestInterceptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRequestInterceptService", function() { return AuthRequestInterceptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/core/services/local-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthRequestInterceptService = /** @class */ (function () {
    function AuthRequestInterceptService(injector) {
        this.injector = injector;
    }
    AuthRequestInterceptService.prototype.intercept = function (request, next) {
        var auth = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
        var localStorage = this.injector.get(_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]);
        var token = (auth.isLoggedIn()) ? localStorage.getAuth().token : null;
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token
                }
            });
        }
        return next.handle(request);
    };
    AuthRequestInterceptService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AuthRequestInterceptService);
    return AuthRequestInterceptService;
}());



/***/ }),

/***/ "./src/app/core/services/auth.response.intercept.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/services/auth.response.intercept.service.ts ***!
  \******************************************************************/
/*! exports provided: AuthResponseInterceptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthResponseInterceptService", function() { return AuthResponseInterceptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/core/services/local-storage.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthResponseInterceptService = /** @class */ (function () {
    function AuthResponseInterceptService(auth, localStorage, router, http) {
        this.auth = auth;
        this.localStorage = localStorage;
        this.router = router;
        this.http = http;
    }
    AuthResponseInterceptService.prototype.intercept = function (request, next) {
        var _this = this;
        var token = (this.auth.isLoggedIn()) ? this.localStorage.getAuth().token : null;
        if (token) {
            // save current request
            this.currentRequest = request;
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                    // do nothing
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return _this.handleError(error); }));
        }
        return next.handle(request);
    };
    AuthResponseInterceptService.prototype.handleError = function (err) {
        var _this = this;
        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            if (err.status === 401) {
                // JWT token might be expired:
                // try to get a new one using refresh token
                console.log('Token expired. Attempting refresh...');
                this.auth.refreshToken().subscribe(function (res) {
                    if (res) {
                        // refresh token successful
                        console.log('refresh token successful');
                        // re-submit the failed request
                        return _this.http.request(_this.currentRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(3), // retry a failed request up to 3 times
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (val) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])("I caught: " + val); }) // then handle the error
                        );
                    }
                    else {
                        // refresh token failed
                        console.log('refresh token failed');
                        // erase current token
                        _this.auth.logout();
                        // redirect to login page
                        _this.router.navigate(['login']);
                    }
                }, function (error) { return console.log(error); });
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
    };
    AuthResponseInterceptService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthResponseInterceptService);
    return AuthResponseInterceptService;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/core/services/local-storage.service.ts");
/* harmony import */ var _http_error_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http.error.handler */ "./src/app/core/http.error.handler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Application-Names': ['store', 'auth']
    })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, origin, platformId, localStorageService) {
        this.http = http;
        this.platformId = platformId;
        this.localStorageService = localStorageService;
        this.authTokenUrl = 'api/token/auth'; // URL to web api
        this.facebookTokenUrl = 'api/token/facebook';
        this.authKey = 'auth';
        this.clientId = 'Athena';
        this.authTokenUrl = "" + origin + this.authTokenUrl;
        this.facebookTokenUrl = "" + origin + this.facebookTokenUrl;
    }
    // performs the login
    AuthService.prototype.login = function (email, password) {
        var data = {
            username: email,
            password: password,
            client_id: this.clientId,
            // required when signing up with username/password
            grant_type: 'password',
            // space-separated list of scopes for which the token is issued
            scope: 'offline_access profile email'
        };
        return this.getAuthFromServer(this.authTokenUrl, data);
    };
    AuthService.prototype.facebookLogin = function (data) {
        return this.http.post(this.facebookTokenUrl, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (newuser) { return console.log('Login successful.'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(Object(_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('facebookLogin')));
    };
    // try to refresh token
    AuthService.prototype.refreshToken = function () {
        var data = {
            client_id: this.clientId,
            // required when signing up with username/password
            grant_type: 'refresh_token',
            refresh_token: this.localStorageService.getAuth().refresh_token,
            // space-separated list of scopes for which the token is issued
            scope: 'offline_access profile email'
        };
        return this.getAuthFromServer(this.authTokenUrl, data);
    };
    // retrieve the access & refresh tokens from the server
    AuthService.prototype.getAuthFromServer = function (url, data) {
        var _this = this;
        return this.http.post(url, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (token) { return _this.localStorageService.setAuth(token); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(Object(_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('getToken')));
    };
    // performs the logout
    AuthService.prototype.logout = function () {
        this.localStorageService.setAuth(null);
        return true;
    };
    // Returns TRUE if the user is logged in, FALSE otherwise.
    AuthService.prototype.isLoggedIn = function () {
        return this.localStorageService.getAuth() != null;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["APP_BASE_HREF"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, Object, _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/local-storage.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/local-storage.service.ts ***!
  \********************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./src/app/core/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    // Persist auth into localStorage or removes it if a NULL argument is given
    LocalStorageService.prototype.setAuth = function (auth) {
        if (auth) {
            localStorage.setItem(_constant__WEBPACK_IMPORTED_MODULE_1__["AUTH_KEY"], JSON.stringify(auth));
        }
        else {
            localStorage.removeItem(_constant__WEBPACK_IMPORTED_MODULE_1__["AUTH_KEY"]);
        }
        return true;
    };
    // Retrieves the auth JSON object (or NULL if none)
    LocalStorageService.prototype.getAuth = function () {
        var token = localStorage.getItem(_constant__WEBPACK_IMPORTED_MODULE_1__["AUTH_KEY"]);
        if (token) {
            return JSON.parse(token);
        }
        else {
            return null;
        }
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/core/services/register.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/register.service.ts ***!
  \***************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http.error.handler */ "./src/app/core/http.error.handler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
var RegisterService = /** @class */ (function () {
    function RegisterService(http, origin, platformId) {
        this.http = http;
        this.platformId = platformId;
        this.userUrl = 'api/user'; // URL to web api
        this.userUrl = "" + origin + this.userUrl;
    }
    /** GET users from the server */
    RegisterService.prototype.getUsers = function () {
        return this.http.get(this.userUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (users) { return console.log("fetched users by random"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('getUsers', [])));
    };
    /** GET user by id. Return `undefined` when id not found */
    RegisterService.prototype.getUserNo404 = function (id) {
        var url = this.userUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (users) { return users[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            console.log(outcome + " user id=" + id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])("getUser id=" + id)));
    };
    /** GET user by id. Will 404 if id not found */
    RegisterService.prototype.getUser = function (id) {
        var url = this.userUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("fetched user id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])("getUser id=" + id)));
    };
    /* GET users whose name contains search term */
    RegisterService.prototype.searchUsers = function (term) {
        if (!term.trim()) {
            // if not search term, return empty user array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }
        return this.http.get("api/users/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("found users matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('searchUsers', [])));
    };
    //////// Save methods //////////
    /** POST: add a new user to the server */
    RegisterService.prototype.addUser = function (user) {
        return this.http.post(this.userUrl, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (newuser) { return console.log("added user w/ id=" + newuser.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('addUser')));
    };
    /** DELETE: delete the user from the server */
    RegisterService.prototype.deleteUser = function (user) {
        var id = typeof user === 'number' ? user : user.id;
        var url = this.userUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("deleted user id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('deleteUser')));
    };
    /** PUT: update the user on the server */
    RegisterService.prototype.updateUser = function (user) {
        return this.http.put(this.userUrl, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("updated user id=" + user.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('updateUser')));
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["APP_BASE_HREF"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, Object])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/features/answer/answer-edit/answer-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/features/answer/answer-edit/answer-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".answer-edit textarea {\n  min-width: 500px;\n}\n"

/***/ }),

/***/ "./src/app/features/answer/answer-edit/answer-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/features/answer/answer-edit/answer-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n<div class=\"answer-edit\">\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error has-feedback' : hasError('Text') }\">\n      <label for=\"text\">Answer text:</label>\n      <br />\n      <textarea id=\"text\" formControlName=\"Text\" required placeholder=\"enter a suitable text...\" class=\"form-control\"></textarea>\n      <span *ngIf=\"hasError('Text')\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\n      <div *ngIf=\"hasError('Text')\" class=\"help-block\">\n        Text is a required field: please insert a valid text.\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error has-feedback' : hasError('Value') }\">\n      <label for=\"value\">Score Value:</label>\n      <br />\n      <select id=\"value\" formControlName=\"Value\" required class=\"form-control\">\n        <option value=\"\">Pick a value...</option>\n        <option *ngFor=\"let num of [-5,-4,-3,-2,-1,0,1,2,3,4,5]\" [value]=\"num\">\n          {{num}}\n        </option>\n      </select>\n      <div *ngIf=\"hasError('Value')\" class=\"help-block\">\n        Please select a valid number between -5 and 5.\n      </div>\n    </div>\n\n    <div class=\"form-group commands\">\n      <button *ngIf=\"editMode\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-success\">\n        Apply Changes\n      </button>\n      <button *ngIf=\"!editMode\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-success\">\n        Create the Answer!\n      </button>\n      <button type=\"submit\" (click)=\"onBack()\" class=\"btn btn-default\">\n        Cancel\n      </button>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/features/answer/answer-edit/answer-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/answer/answer-edit/answer-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: AnswerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerEditComponent", function() { return AnswerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _answer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../answer.service */ "./src/app/features/answer/answer.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AnswerEditComponent = /** @class */ (function () {
    function AnswerEditComponent(answerService, router, activatedRoute, fb, location) {
        this.answerService = answerService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.location = location;
        // create an empty object from the Quiz interface
        this.answer = {};
    }
    AnswerEditComponent.prototype.ngOnInit = function () {
        // initialize the form
        this.createForm();
        this.loadData();
    };
    AnswerEditComponent.prototype.loadData = function () {
        var _this = this;
        var id = +this.activatedRoute.snapshot.params['id'];
        // quick & dirty way to check if we're in edit mode or not
        this.editMode = (this.activatedRoute.snapshot.url[1].path === 'edit');
        if (this.editMode) {
            this.answerService.getAnswer(id).subscribe(function (answer) {
                _this.answer = answer;
                _this.title = 'Edit - ' + _this.answer.Text;
                // update the form with the question value
                _this.updateForm();
            });
        }
        else {
            this.answer.QuestionId = id;
            this.title = 'Create a new Answer';
        }
    };
    AnswerEditComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            Text: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Value: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(-4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(5)]
            ]
        });
    };
    AnswerEditComponent.prototype.updateForm = function () {
        this.form.setValue({
            Text: this.answer.Text || '',
            Value: this.answer.Value || 0
        });
    };
    AnswerEditComponent.prototype.onSubmit = function () {
        var _this = this;
        // build a temporary answer object from form values
        var tempAnswer = {};
        tempAnswer.Text = this.form.value.Text;
        tempAnswer.Value = this.form.value.Value;
        tempAnswer.QuestionId = this.answer.QuestionId;
        if (this.editMode) {
            // don't forget to set the tempAnswer id,
            // otherwise the EDIT would fail!
            tempAnswer.id = this.answer.id;
            this.answerService.updateAnswer(tempAnswer).subscribe(function (res) {
                console.log('Answer ' + res.id + ' has been updated.');
                _this.router.navigate(['question/edit', res.QuestionId]);
            });
        }
        else {
            this.answerService.addAnswer(tempAnswer).subscribe(function (res) {
                console.log('Answer ' + res.id + ' has been created.');
                _this.router.navigate(['question/edit', res.QuestionId]);
            });
        }
    };
    // onBack() {
    //   this.router.navigate(['question/edit', this.answer.QuestionId]);
    // }
    AnswerEditComponent.prototype.onBack = function () {
        this.location.back();
    };
    // retrieve a FormControl
    AnswerEditComponent.prototype.getFormControl = function (name) {
        return this.form.get(name);
    };
    // returns TRUE if the FormControl is valid
    AnswerEditComponent.prototype.isValid = function (name) {
        var e = this.getFormControl(name);
        return e && e.valid;
    };
    // returns TRUE if the FormControl has been changed
    AnswerEditComponent.prototype.isChanged = function (name) {
        var e = this.getFormControl(name);
        return e && (e.dirty || e.touched);
    };
    // returns TRUE if the FormControl is invalid after user changes
    AnswerEditComponent.prototype.hasError = function (name) {
        var e = this.getFormControl(name);
        return e && (e.dirty || e.touched) && !e.valid;
    };
    AnswerEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answer-edit',
            template: __webpack_require__(/*! ./answer-edit.component.html */ "./src/app/features/answer/answer-edit/answer-edit.component.html"),
            styles: [__webpack_require__(/*! ./answer-edit.component.css */ "./src/app/features/answer/answer-edit/answer-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_answer_service__WEBPACK_IMPORTED_MODULE_3__["AnswerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AnswerEditComponent);
    return AnswerEditComponent;
}());



/***/ }),

/***/ "./src/app/features/answer/answer-list/answer-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/features/answer/answer-list/answer-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.answers {\n  min-width: 500px;\n}\n"

/***/ }),

/***/ "./src/app/features/answer/answer-list/answer-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/features/answer/answer-list/answer-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Answers</h3>\n<div *ngIf=\"answers.length > 0\">\n  <table class=\"answers\">\n    <thead>\n      <tr>\n        <th>Text</th>\n        <th>Value</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let answer of answers\">\n        <td>{{answer.Text}}</td>\n        <td>{{answer.Value}}</td>\n        <td>\n          <input type=\"button\" value=\"Edit\" (click)=\"onEdit(answer)\" />\n          <input type=\"button\" value=\"Delete\" (click)=\"onDelete(answer)\" />\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div *ngIf=\"answers.length == 0\">\n  This questions has no answers (yet): click the\n  <strong>Add a new Answer</strong> button to add the first one!\n</div>\n<input type=\"button\" value=\"Add a new Answer\" (click)=\"onCreate()\" />\n"

/***/ }),

/***/ "./src/app/features/answer/answer-list/answer-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/answer/answer-list/answer-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: AnswerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerListComponent", function() { return AnswerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _answer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../answer.service */ "./src/app/features/answer/answer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnswerListComponent = /** @class */ (function () {
    function AnswerListComponent(answerService, router) {
        this.answerService = answerService;
        this.router = router;
        this.answers = [];
    }
    AnswerListComponent.prototype.ngOnChanges = function (changes) {
        if (changes['question']) {
            // retrieve the question variable change info
            var change = changes['question'];
            // only perform the task if the value has been changed
            if (!change.isFirstChange()) {
                // execute the Http request and retrieve the result
                this.loadData();
            }
        }
    };
    AnswerListComponent.prototype.ngOnInit = function () {
    };
    AnswerListComponent.prototype.loadData = function () {
        var _this = this;
        this.answerService.getAnswers(this.question.id).subscribe(function (answers) { return _this.answers; });
    };
    AnswerListComponent.prototype.onCreate = function () {
        this.router.navigate(['/answer/create', this.question.id]);
    };
    AnswerListComponent.prototype.onEdit = function (answer) {
        this.router.navigate(['/answer/edit', answer.id]);
    };
    AnswerListComponent.prototype.onDelete = function (answer) {
        var _this = this;
        if (confirm('Do you really want to delete this answer?')) {
            this.answerService.deleteAnswer(answer).subscribe(function (res) {
                console.log('Answer ' + answer.id + ' has been deleted.');
                // refresh the question list
                _this.loadData();
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnswerListComponent.prototype, "question", void 0);
    AnswerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answer-list',
            template: __webpack_require__(/*! ./answer-list.component.html */ "./src/app/features/answer/answer-list/answer-list.component.html"),
            styles: [__webpack_require__(/*! ./answer-list.component.css */ "./src/app/features/answer/answer-list/answer-list.component.css")]
        }),
        __metadata("design:paramtypes", [_answer_service__WEBPACK_IMPORTED_MODULE_2__["AnswerService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AnswerListComponent);
    return AnswerListComponent;
}());



/***/ }),

/***/ "./src/app/features/answer/answer-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/answer/answer-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AnswerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerRoutingModule", function() { return AnswerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answer-edit/answer-edit.component */ "./src/app/features/answer/answer-edit/answer-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'answer/create/:id', component: _answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_2__["AnswerEditComponent"] },
    { path: 'answer/edit/:id', component: _answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_2__["AnswerEditComponent"] },
];
var AnswerRoutingModule = /** @class */ (function () {
    function AnswerRoutingModule() {
    }
    AnswerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AnswerRoutingModule);
    return AnswerRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/answer/answer.module.ts":
/*!**************************************************!*\
  !*** ./src/app/features/answer/answer.module.ts ***!
  \**************************************************/
/*! exports provided: AnswerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerModule", function() { return AnswerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _answer_list_answer_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./answer-list/answer-list.component */ "./src/app/features/answer/answer-list/answer-list.component.ts");
/* harmony import */ var _answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./answer-edit/answer-edit.component */ "./src/app/features/answer/answer-edit/answer-edit.component.ts");
/* harmony import */ var _answer_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./answer-routing.module */ "./src/app/features/answer/answer-routing.module.ts");
/* harmony import */ var _answer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./answer.service */ "./src/app/features/answer/answer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AnswerModule = /** @class */ (function () {
    function AnswerModule() {
    }
    AnswerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _answer_routing_module__WEBPACK_IMPORTED_MODULE_6__["AnswerRoutingModule"]
            ],
            declarations: [_answer_list_answer_list_component__WEBPACK_IMPORTED_MODULE_4__["AnswerListComponent"], _answer_edit_answer_edit_component__WEBPACK_IMPORTED_MODULE_5__["AnswerEditComponent"]],
            exports: [_answer_list_answer_list_component__WEBPACK_IMPORTED_MODULE_4__["AnswerListComponent"]],
            providers: [
                _answer_service__WEBPACK_IMPORTED_MODULE_7__["AnswerService"]
            ],
        })
    ], AnswerModule);
    return AnswerModule;
}());



/***/ }),

/***/ "./src/app/features/answer/answer.service.ts":
/*!***************************************************!*\
  !*** ./src/app/features/answer/answer.service.ts ***!
  \***************************************************/
/*! exports provided: AnswerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerService", function() { return AnswerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/http.error.handler */ "./src/app/core/http.error.handler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AnswerService = /** @class */ (function () {
    function AnswerService(http, origin) {
        this.http = http;
        this.answerUrl = 'api/answer'; // URL to web api
        this.quizzez = [];
        this.answerUrl = "" + origin + this.answerUrl;
    }
    /** GET answers from the server */
    AnswerService.prototype.getAnswers = function (id) {
        var url = this.answerUrl + "/All/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (answers) { return console.log("fetched answers by date"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('getAnswers', [])));
    };
    /** GET answer by id. Return `undefined` when id not found */
    AnswerService.prototype.getAnswerNo404 = function (id) {
        var url = this.answerUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (answers) { return answers[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            console.log(outcome + " answer id=" + id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])("getAnswer id=" + id)));
    };
    /** GET answer by id. Will 404 if id not found */
    AnswerService.prototype.getAnswer = function (id) {
        var url = this.answerUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("fetched answer id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])("getAnswer id=" + id)));
    };
    /* GET answers whose name contains search term */
    AnswerService.prototype.searchAnswers = function (term) {
        if (!term.trim()) {
            // if not search term, return empty answer array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }
        return this.http.get("api/answers/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("found answers matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('searchAnswers', [])));
    };
    //////// Save methods //////////
    /** POST: add a new answer to the server */
    AnswerService.prototype.addAnswer = function (answer) {
        return this.http.post(this.answerUrl, answer, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (newquiz) { return console.log("added answer w/ id=" + newquiz.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('addAnswer')));
    };
    /** DELETE: delete the answer from the server */
    AnswerService.prototype.deleteAnswer = function (answer) {
        var id = typeof answer === 'number' ? answer : answer.id;
        var url = this.answerUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("deleted answer id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('deleteAnswer')));
    };
    /** PUT: update the answer on the server */
    AnswerService.prototype.updateAnswer = function (answer) {
        return this.http.put(this.answerUrl, answer, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("updated answer id=" + answer.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('updateAnswer')));
    };
    AnswerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], AnswerService);
    return AnswerService;
}());



/***/ }),

/***/ "./src/app/features/dashboard/dashboard-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/dashboard/dashboard-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/features/dashboard/dashboard.component.ts");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _core_components_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/app-layout/app-layout.component */ "./src/app/core/components/app-layout/app-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _core_components_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_4__["AppLayoutComponent"],
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            { path: 'dashboard', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/dashboard/dashboard.component.css":
/*!************************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".latest {\n  background-color: #f0f0f0;\n}\n\n.byTitle {\n  background-color: #e0e0e0;\n}\n\n.random {\n  background-color: #d0d0d0;\n}\n"

/***/ }),

/***/ "./src/app/features/dashboard/dashboard.component.html":
/*!*************************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Greetings, stranger!</h1>\r\n<p>This is what you get for messing up with .NET Core and Angular.</p>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm latest\">\r\n    <app-quiz-list class=\"latest\"></app-quiz-list>\r\n  </div>\r\n  <div class=\"col-sm byTitle\">\r\n    <app-quiz-list class=\"byTitle\"></app-quiz-list>\r\n  </div>\r\n  <div class=\"col-sm random\">\r\n    <app-quiz-list class=\"random\"></app-quiz-list>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/features/dashboard/dashboard.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/features/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/features/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/dashboard.module.ts":
/*!********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.module.ts ***!
  \********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _quiz_quiz_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quiz/quiz.module */ "./src/app/features/quiz/quiz.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/features/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/features/dashboard/dashboard-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutingModule"],
                _quiz_quiz_module__WEBPACK_IMPORTED_MODULE_3__["QuizModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
            exports: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
            ],
            providers: [],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/features/question/question-edit/question-edit.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/features/question/question-edit/question-edit.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-edit textarea {\n  min-width: 500px;\n}\n"

/***/ }),

/***/ "./src/app/features/question/question-edit/question-edit.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/features/question/question-edit/question-edit.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n<div class=\"question-edit\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error has-feedback' : hasError('Text') }\">\n      <label for=\"text\">Question text:</label>\n      <br />\n      <textarea id=\"text\" formControlName=\"Text\" required placeholder=\"enter a suitable text...\" class=\"form-control\"></textarea>\n      <span *ngIf=\"hasError('Text')\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\n      <div *ngIf=\"hasError('Text')\" class=\"help-block\">\n        Text is a required field: please insert a valid text.\n      </div>\n    </div>\n\n    <div class=\"form-group commands\">\n      <button *ngIf=\"editMode\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-success\">\n        Apply Changes\n      </button>\n      <button *ngIf=\"!editMode\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-success\">\n        Create the Question!\n      </button>\n      <button type=\"submit\" (click)=\"onBack()\" class=\"btn btn-default\">\n        Cancel\n      </button>\n    </div>\n\n    <app-answer-list *ngIf=\"editMode\" [question]=\"question\"></app-answer-list>\n  </form>\n</div>\n\n<div class=\"panel panel-info\" style=\"margin-top: 20px;\">\n  <div class=\"panel-heading\">Form debug info</div>\n  <div class=\"panel-body\">\n    <p>\n      <strong>Form value:</strong>\n    </p>\n    <div class=\"help-block\">\n      {{ form.value | json }}\n    </div>\n    <p>\n      <strong>Form status:</strong>\n    </p>\n    <div class=\"help-block\">\n      {{ form.status | json }}\n    </div>\n    <p>\n      <strong>Form activity log:</strong>\n    </p>\n    <div class=\"help-block\">\n      <span *ngIf=\"activityLog\" [innerHTML]=\"activityLog\"></span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/question/question-edit/question-edit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/question/question-edit/question-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: QuestionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionEditComponent", function() { return QuestionEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../question.service */ "./src/app/features/question/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionEditComponent = /** @class */ (function () {
    function QuestionEditComponent(activatedRoute, questionService, fb, router) {
        this.activatedRoute = activatedRoute;
        this.questionService = questionService;
        this.fb = fb;
        this.router = router;
        // create an empty object from the Quiz interface
        this.question = {};
    }
    QuestionEditComponent.prototype.ngOnInit = function () {
        // initialize the form
        this.createForm();
        this.loadData();
    };
    QuestionEditComponent.prototype.loadData = function () {
        var _this = this;
        var id = +this.activatedRoute.snapshot.params['id'];
        // check if we're in edit mode or not
        this.editMode = (this.activatedRoute.snapshot.url[1].path === 'edit');
        if (this.editMode) {
            this.questionService.getQuestion(id).subscribe(function (question) {
                _this.question = question;
                _this.title = 'Edit - ' + _this.question.Text;
            });
        }
        else {
            this.question.QuizId = id;
            this.title = 'Create a new Question';
        }
    };
    QuestionEditComponent.prototype.createForm = function () {
        var _this = this;
        this.form = this.fb.group({
            Text: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.activityLog = '';
        this.log('Form has been initialized.');
        // react to form changes
        this.form.valueChanges
            .subscribe(function (val) {
            if (!_this.form.dirty) {
                _this.log('Form Model has been loaded.');
            }
            else {
                _this.log('Form was updated by the user.');
            }
        });
        // react to changes in the form.Text control
        this.form.get('Text').valueChanges
            .subscribe(function (val) {
            if (!_this.form.dirty) {
                _this.log('Text control has been loaded with initial values.');
            }
            else {
                _this.log('Text control was updated by the user.');
            }
        });
    };
    QuestionEditComponent.prototype.log = function (str) {
        this.activityLog += '['
            + new Date().toLocaleString()
            + '] ' + str + '<br />';
    };
    QuestionEditComponent.prototype.updateForm = function () {
        this.form.setValue({
            Text: this.question.Text || ''
        });
    };
    QuestionEditComponent.prototype.onSubmit = function () {
        var _this = this;
        // build a temporary question object from form values
        var tempQuestion = {};
        tempQuestion.Text = this.form.value.Text;
        tempQuestion.QuizId = this.question.QuizId;
        if (this.editMode) {
            this.questionService.updateQuestion(tempQuestion).subscribe(function (res) {
                console.log('Question ' + res + ' has been updated.');
                _this.router.navigate(['quiz/edit', res.QuizId]);
            });
        }
        else {
            this.questionService.addQuestion(tempQuestion).subscribe(function (res) {
                console.log('Question ' + res.id + ' has been updated.');
                _this.router.navigate(['quiz/edit', res.QuizId]);
            });
        }
    };
    QuestionEditComponent.prototype.onBack = function () {
        this.router.navigate(['quiz/edit', this.question.QuizId]);
    };
    // retrieve a FormControl
    QuestionEditComponent.prototype.getFormControl = function (name) {
        return this.form.get(name);
    };
    // returns TRUE if the FormControl is valid
    QuestionEditComponent.prototype.isValid = function (name) {
        var e = this.getFormControl(name);
        return e && e.valid;
    };
    // returns TRUE if the FormControl has been changed
    QuestionEditComponent.prototype.isChanged = function (name) {
        var e = this.getFormControl(name);
        return e && (e.dirty || e.touched);
    };
    // returns TRUE if the FormControl is invalid after user changes
    QuestionEditComponent.prototype.hasError = function (name) {
        var e = this.getFormControl(name);
        return e && (e.dirty || e.touched) && !e.valid;
    };
    QuestionEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-edit',
            template: __webpack_require__(/*! ./question-edit.component.html */ "./src/app/features/question/question-edit/question-edit.component.html"),
            styles: [__webpack_require__(/*! ./question-edit.component.css */ "./src/app/features/question/question-edit/question-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], QuestionEditComponent);
    return QuestionEditComponent;
}());



/***/ }),

/***/ "./src/app/features/question/question-list/question-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/features/question/question-list/question-list.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-edit textarea {\n  min-width: 500px;\n}\n"

/***/ }),

/***/ "./src/app/features/question/question-list/question-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/features/question/question-list/question-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Questions</h3>\n<div *ngIf=\"questions.length > 0\">\n  <table class=\"questions\">\n    <thead>\n      <tr>\n        <th>Text</th>\n        <th>Options</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let question of questions\">\n        <td>{{question.Text}}</td>\n        <td>\n          <input type=\"button\" value=\"Edit\" (click)=\"onEdit(question)\" />\n          <input type=\"button\" value=\"Delete\" (click)=\"onDelete(question)\" />\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div *ngIf=\"questions.length == 0\">\n  This quiz has no questions (yet): click the\n  <strong>Add a new Question</strong> button to add the first one!\n</div>\n<input type=\"button\" value=\"Add a new Question\" (click)=\"onCreate()\" />\n"

/***/ }),

/***/ "./src/app/features/question/question-list/question-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/question/question-list/question-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: QuestionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionListComponent", function() { return QuestionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../question.service */ "./src/app/features/question/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionListComponent = /** @class */ (function () {
    function QuestionListComponent(questionService, router) {
        this.questionService = questionService;
        this.router = router;
        this.questions = [];
    }
    QuestionListComponent.prototype.ngOnChanges = function (changes) {
        if (changes['quiz']) {
            // retrieve the quiz variable change info
            var change = changes['quiz'];
            // only perform the task if the value has been changed
            if (!change.isFirstChange()) {
                // execute the Http request and retrieve the result
                this.loadData();
            }
        }
    };
    QuestionListComponent.prototype.ngOnInit = function () {
    };
    QuestionListComponent.prototype.loadData = function () {
        var _this = this;
        this.questionService.getQuestions(this.quiz.id).subscribe(function (questions) { return _this.questions = questions; });
    };
    QuestionListComponent.prototype.onCreate = function () {
        this.router.navigate(['/question/create', this.quiz.id]);
    };
    QuestionListComponent.prototype.onEdit = function (question) {
        this.router.navigate(['/question/edit', question.id]);
    };
    QuestionListComponent.prototype.onDelete = function (question) {
        var _this = this;
        if (confirm('Do you really want to delete this question?')) {
            this.questionService.deleteQuestion(question.id).subscribe(function (res) {
                console.log('Question ' + question.id + ' has been deleted.');
                // refresh the question list
                _this.loadData();
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuestionListComponent.prototype, "quiz", void 0);
    QuestionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-list',
            template: __webpack_require__(/*! ./question-list.component.html */ "./src/app/features/question/question-list/question-list.component.html"),
            styles: [__webpack_require__(/*! ./question-list.component.css */ "./src/app/features/question/question-list/question-list.component.css")]
        }),
        __metadata("design:paramtypes", [_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], QuestionListComponent);
    return QuestionListComponent;
}());



/***/ }),

/***/ "./src/app/features/question/question-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/question/question-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: QuestionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionRoutingModule", function() { return QuestionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question-edit/question-edit.component */ "./src/app/features/question/question-edit/question-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'question/create/:id', component: _question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_2__["QuestionEditComponent"] },
    { path: 'question/edit/:id', component: _question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_2__["QuestionEditComponent"] },
];
var QuestionRoutingModule = /** @class */ (function () {
    function QuestionRoutingModule() {
    }
    QuestionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], QuestionRoutingModule);
    return QuestionRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/question/question.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/question/question.module.ts ***!
  \******************************************************/
/*! exports provided: QuestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionModule", function() { return QuestionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _question_list_question_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question-list/question-list.component */ "./src/app/features/question/question-list/question-list.component.ts");
/* harmony import */ var _question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./question-edit/question-edit.component */ "./src/app/features/question/question-edit/question-edit.component.ts");
/* harmony import */ var _question_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question-routing.module */ "./src/app/features/question/question-routing.module.ts");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question.service */ "./src/app/features/question/question.service.ts");
/* harmony import */ var _answer_answer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../answer/answer.module */ "./src/app/features/answer/answer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var QuestionModule = /** @class */ (function () {
    function QuestionModule() {
    }
    QuestionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _question_routing_module__WEBPACK_IMPORTED_MODULE_6__["QuestionRoutingModule"],
                _answer_answer_module__WEBPACK_IMPORTED_MODULE_8__["AnswerModule"]
            ],
            declarations: [_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_4__["QuestionListComponent"], _question_edit_question_edit_component__WEBPACK_IMPORTED_MODULE_5__["QuestionEditComponent"]],
            exports: [
                _question_list_question_list_component__WEBPACK_IMPORTED_MODULE_4__["QuestionListComponent"]
            ],
            providers: [
                _question_service__WEBPACK_IMPORTED_MODULE_7__["QuestionService"]
            ],
        })
    ], QuestionModule);
    return QuestionModule;
}());



/***/ }),

/***/ "./src/app/features/question/question.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/question/question.service.ts ***!
  \*******************************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/http.error.handler */ "./src/app/core/http.error.handler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var QuestionService = /** @class */ (function () {
    function QuestionService(http, origin) {
        this.http = http;
        this.questionUrl = 'api/question'; // URL to web api
        this.quizzez = [];
        this.questionUrl = "" + origin + this.questionUrl;
    }
    /** GET quizzes from the server */
    QuestionService.prototype.getQuestions = function (id) {
        var url = this.questionUrl + "/All/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (quizzes) { return console.log("fetched quizzes by date"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('getQuestionzes', [])));
    };
    /** GET question by id. Return `undefined` when id not found */
    QuestionService.prototype.getQuestionNo404 = function (id) {
        var url = this.questionUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (quizzes) { return quizzes[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            console.log(outcome + " question id=" + id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])("getQuestion id=" + id)));
    };
    /** GET question by id. Will 404 if id not found */
    QuestionService.prototype.getQuestion = function (id) {
        var url = this.questionUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("fetched question id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])("getQuestion id=" + id)));
    };
    /* GET quizzes whose name contains search term */
    QuestionService.prototype.searchQuestionzes = function (term) {
        if (!term.trim()) {
            // if not search term, return empty question array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }
        return this.http.get("api/quizzes/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("found quizzes matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('searchQuestionzes', [])));
    };
    //////// Save methods //////////
    /** POST: add a new question to the server */
    QuestionService.prototype.addQuestion = function (question) {
        return this.http.post(this.questionUrl, question, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (newquiz) { return console.log("added question w/ id=" + newquiz.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('addQuestion')));
    };
    /** DELETE: delete the question from the server */
    QuestionService.prototype.deleteQuestion = function (question) {
        var id = typeof question === 'number' ? question : question.id;
        var url = this.questionUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("deleted question id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('deleteQuestion')));
    };
    /** PUT: update the question on the server */
    QuestionService.prototype.updateQuestion = function (question) {
        return this.http.put(this.questionUrl, question, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("updated question id=" + question.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('updateQuestion')));
    };
    QuestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/features/quiz/quiz-edit/quiz-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/features/quiz/quiz-edit/quiz-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quiz-edit input[type=\"text\"],\n.quiz-edit textarea {\n    min-width: 500px;\n}"

/***/ }),

/***/ "./src/app/features/quiz/quiz-edit/quiz-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/features/quiz/quiz-edit/quiz-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quiz-edit\">\n  <h2>{{title}}</h2>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error has-feedback' : hasError('Title') }\">\n\n      <label for=\"title\">Quiz title:</label>\n      <br />\n      <input type=\"text\" id=\"title\" formControlName=\"Title\" required placeholder=\"choose a title...\" class=\"form-control\" />\n      <span *ngIf=\"hasError('Title')\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\n      <div *ngIf=\"hasError('Title')\" class=\"help-block\">\n        Title is a required field: please insert a valid title.\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"description\">Quiz description:</label>\n      <br />\n      <input type=\"text\" id=\"description\" formControlName=\"Description\" placeholder=\"enter a description...\" class=\"form-control\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"text\">Quiz informative text:</label>\n      <br />\n      <textarea id=\"text\" formControlName=\"Text\" placeholder=\"enter a text...\" class=\"form-control\"></textarea>\n    </div>\n\n    <div class=\"form-group commands\">\n      <button *ngIf=\"editMode\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-success\">\n        Apply Changes\n      </button>\n      <button *ngIf=\"!editMode\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-success\">\n        Create the Quiz!\n      </button>\n      <button *ngIf=\"!editMode\" type=\"submit\" (click)=\"onBack()\" class=\"btn btn-default\">\n        Cancel\n      </button>\n    </div>\n\n  </form>\n\n  <app-question-list *ngIf=\"editMode\" [quiz]=\"quiz\"></app-question-list>\n\n  <app-result-list *ngIf=\"editMode\" [quiz]=\"quiz\"></app-result-list>\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/quiz/quiz-edit/quiz-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/quiz/quiz-edit/quiz-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: QuizEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizEditComponent", function() { return QuizEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quiz.service */ "./src/app/features/quiz/quiz.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuizEditComponent = /** @class */ (function () {
    function QuizEditComponent(activatedRoute, router, quizService, fb, location) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.quizService = quizService;
        this.fb = fb;
        this.location = location;
        // create an empty object from the Quiz interface
        this.quiz = {};
    }
    QuizEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialize the form
        this.createForm();
        var id = +this.activatedRoute.snapshot.params['id'];
        if (id) {
            this.editMode = true;
            this.quizService.getQuiz(id).subscribe(function (quiz) {
                _this.quiz = quiz;
                _this.title = 'Edit - ' + _this.quiz.Title;
                // update the form with the quiz value
                _this.updateForm();
            });
        }
        else {
            this.editMode = false;
            this.title = 'Create a new Quiz';
        }
    };
    QuizEditComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            Title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Description: '',
            Text: ''
        });
    };
    QuizEditComponent.prototype.updateForm = function () {
        this.form.setValue({
            Title: this.quiz.Title,
            Description: this.quiz.Description || '',
            Text: this.quiz.Text || ''
        });
    };
    QuizEditComponent.prototype.onSubmit = function () {
        var _this = this;
        // build a temporary quiz object from form values
        var tempQuiz = {};
        tempQuiz.Title = this.form.value.Title;
        tempQuiz.Description = this.form.value.Description;
        tempQuiz.Text = this.form.value.Text;
        if (this.editMode) {
            // don't forget to set the tempQuiz id,
            // otherwise the EDIT would fail!
            tempQuiz.id = this.quiz.id;
            this.quizService.updateQuiz(tempQuiz).subscribe(function (res) {
                console.log('Quiz ' + res + ' has been updated.');
                _this.onBack();
            });
        }
        else {
            this.quizService.addQuiz(tempQuiz).subscribe(function (res) {
                console.log('Quiz ' + res + ' has been created.');
                _this.onBack();
            });
        }
    };
    QuizEditComponent.prototype.onBack = function () {
        this.router.navigate(['dashboard']);
    };
    // retrieve a FormControl
    QuizEditComponent.prototype.getFormControl = function (name) {
        return this.form.get(name);
    };
    // returns TRUE if the FormControl is valid
    QuizEditComponent.prototype.isValid = function (name) {
        var e = this.getFormControl(name);
        return e && e.valid;
    };
    // returns TRUE if the FormControl has been changed
    QuizEditComponent.prototype.isChanged = function (name) {
        var e = this.getFormControl(name);
        return e && (e.dirty || e.touched);
    };
    // returns TRUE if the FormControl is invalid after user changes
    QuizEditComponent.prototype.hasError = function (name) {
        var e = this.getFormControl(name);
        return e && (e.dirty || e.touched) && !e.valid;
    };
    QuizEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-edit',
            template: __webpack_require__(/*! ./quiz-edit.component.html */ "./src/app/features/quiz/quiz-edit/quiz-edit.component.html"),
            styles: [__webpack_require__(/*! ./quiz-edit.component.css */ "./src/app/features/quiz/quiz-edit/quiz-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], QuizEditComponent);
    return QuizEditComponent;
}());



/***/ }),

/***/ "./src/app/features/quiz/quiz-list/quiz-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/features/quiz/quiz-list/quiz-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.quizzes li {\n  color: #000acb;\n  cursor: pointer;\n}\n\nul.quizzes li.selected {\n  background-color: #cccccc;\n}\n"

/***/ }),

/***/ "./src/app/features/quiz/quiz-list/quiz-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/features/quiz/quiz-list/quiz-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary {{class}}\">\n  <div class=\"panel-heading\">\n    <span class=\"glyphicon\"></span>\n    <h4>{{title}}</h4>\n  </div>\n  <div class=\"panel-body\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let quiz of quizzes\" [class.selected]=\"quiz === selectedQuiz\" (click)=\"onSelect(quiz)\">\n        <span>{{quiz.Title}}</span>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/quiz/quiz-list/quiz-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/quiz/quiz-list/quiz-list.component.ts ***!
  \****************************************************************/
/*! exports provided: QuizListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizListComponent", function() { return QuizListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quiz.service */ "./src/app/features/quiz/quiz.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizListComponent = /** @class */ (function () {
    function QuizListComponent(quizService, router) {
        this.quizService = quizService;
        this.router = router;
    }
    QuizListComponent.prototype.ngOnInit = function () {
        console.log('QuizListComponent' +
            ' instantiated with the following class: '
            + this.class);
        this.getQuizes();
    };
    QuizListComponent.prototype.getQuizes = function () {
        var _this = this;
        switch (this.class) {
            case 'latest':
            default:
                this.title = 'Latest Quizzes';
                this.quizService.getQuizzesByDate().subscribe(function (quizzes) { return _this.quizzes = quizzes; });
                break;
            case 'byTitle':
                this.title = 'Quizzes by Title';
                this.quizService.getQuizzesByTitle().subscribe(function (quizzes) { return _this.quizzes = quizzes; });
                break;
            case 'random':
                this.title = 'Random Quizzes';
                this.quizService.getQuizzesByRandom().subscribe(function (quizzes) { return _this.quizzes = quizzes; });
                break;
        }
    };
    QuizListComponent.prototype.onSelect = function (quiz) {
        // console.log(quiz);
        this.selectedQuiz = quiz;
        console.log('quiz with id '
            + this.selectedQuiz.id
            + ' has been selected.');
        this.router.navigate(['/quiz', this.selectedQuiz.id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QuizListComponent.prototype, "class", void 0);
    QuizListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-list',
            template: __webpack_require__(/*! ./quiz-list.component.html */ "./src/app/features/quiz/quiz-list/quiz-list.component.html"),
            styles: [__webpack_require__(/*! ./quiz-list.component.css */ "./src/app/features/quiz/quiz-list/quiz-list.component.css")]
        }),
        __metadata("design:paramtypes", [_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], QuizListComponent);
    return QuizListComponent;
}());



/***/ }),

/***/ "./src/app/features/quiz/quiz-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/quiz/quiz-routing.module.ts ***!
  \******************************************************/
/*! exports provided: QuizRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizRoutingModule", function() { return QuizRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quiz_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz.component */ "./src/app/features/quiz/quiz.component.ts");
/* harmony import */ var _quiz_edit_quiz_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-edit/quiz-edit.component */ "./src/app/features/quiz/quiz-edit/quiz-edit.component.ts");
/* harmony import */ var _core_components_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/app-layout/app-layout.component */ "./src/app/core/components/app-layout/app-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _core_components_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_4__["AppLayoutComponent"],
        children: [
            { path: 'quiz/edit/:id', component: _quiz_edit_quiz_edit_component__WEBPACK_IMPORTED_MODULE_3__["QuizEditComponent"] },
            { path: 'quiz/create', component: _quiz_edit_quiz_edit_component__WEBPACK_IMPORTED_MODULE_3__["QuizEditComponent"] },
            { path: 'quiz/:id', component: _quiz_component__WEBPACK_IMPORTED_MODULE_2__["QuizComponent"] },
        ]
    }
];
var QuizRoutingModule = /** @class */ (function () {
    function QuizRoutingModule() {
    }
    QuizRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], QuizRoutingModule);
    return QuizRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/quiz/quiz-search/quiz-search.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/features/quiz/quiz-search/quiz-search.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n    padding: .75rem 1rem;\n    border-width: 0;\n    border-radius: 0;\n}\n\n.form-control-dark {\n    color: #fff;\n    background-color: rgba(255, 255, 255, .1);\n    border-color: rgba(255, 255, 255, .1);\n}\n\n.form-control-dark:focus {\n    border-color: transparent;\n    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\n}"

/***/ }),

/***/ "./src/app/features/quiz/quiz-search/quiz-search.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/features/quiz/quiz-search/quiz-search.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input class=\"form-control form-control-dark w-100\" type=\"text\" placeholder=\"{{placeholder}}\" aria-label=\"Search\">"

/***/ }),

/***/ "./src/app/features/quiz/quiz-search/quiz-search.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/quiz/quiz-search/quiz-search.component.ts ***!
  \********************************************************************/
/*! exports provided: QuizSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizSearchComponent", function() { return QuizSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuizSearchComponent = /** @class */ (function () {
    function QuizSearchComponent() {
    }
    QuizSearchComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QuizSearchComponent.prototype, "class", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QuizSearchComponent.prototype, "placeholder", void 0);
    QuizSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-search',
            template: __webpack_require__(/*! ./quiz-search.component.html */ "./src/app/features/quiz/quiz-search/quiz-search.component.html"),
            styles: [__webpack_require__(/*! ./quiz-search.component.css */ "./src/app/features/quiz/quiz-search/quiz-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuizSearchComponent);
    return QuizSearchComponent;
}());



/***/ }),

/***/ "./src/app/features/quiz/quiz.component.css":
/*!**************************************************!*\
  !*** ./src/app/features/quiz/quiz.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quiz {\n  margin: 5px;\n  padding: 5px 10px;\n  border: 1px solid black;\n  background-color: #dddddd;\n}\n\n.quiz * {\n  vertical-align: middle;\n}\n\n.quiz ul li {\n  padding: 5px 0;\n}\n"

/***/ }),

/***/ "./src/app/features/quiz/quiz.component.html":
/*!***************************************************!*\
  !*** ./src/app/features/quiz/quiz.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quiz\">\n  <div class=\"quiz-details\">\n    <div class=\"quiz-image\">\n      <img src=\"https://lorempixel.com/150/150/?random={{quiz.id}}\" alt=\"{{quiz.Title}}\" class=\"img-circle\">\n    </div>\n    <div class=\"quiz-info-block\">\n      <div class=\"quiz-heading\">\n        <h2>{{quiz.Title}}</h2>\n        <span class=\"help-block\">{{quiz.Description}}</span>\n        <!--<span class=\"help-block\">Created by User # on {{quiz.CreatedDate}}</span>-->\n      </div>\n\n      <ul class=\"navigation\">\n        <li class=\"active\">\n          <a data-toggle=\"tab\" href=\"#description\">\n            <span class=\"glyphicon glyphicon-user\"></span>\n            &nbsp; Description\n          </a>\n        </li>\n        <li>\n          <a data-toggle=\"tab\" href=\"#stats\">\n            <span class=\"glyphicon glyphicon-stats\"></span>\n            &nbsp; Stats\n          </a>\n        </li>\n        <li>\n          <a data-toggle=\"tab\" href=\"#share\">\n            <span class=\"glyphicon glyphicon-share-alt\"></span>\n            &nbsp; Share\n          </a>\n        </li>\n      </ul>\n      <div class=\"quiz-body\">\n        <div class=\"tab-content\">\n          <div id=\"description\" class=\"tab-pane active\">\n            {{quiz.Text}}\n          </div>\n          <div id=\"stats\" class=\"tab-pane\">\n            TO-DO\n          </div>\n          <div id=\"share\" class=\"tab-pane\">\n            TO-DO\n          </div>\n        </div>\n      </div>\n\n      <div class=\"commands\">\n        <a [routerLink]=\"['/quiz', quiz.id, 'take']\" class=\"btn btn-success\">\n          <span class=\"glyphicon glyphicon-education\"></span>\n          &nbsp; Take the Test!\n        </a>\n        <a [routerLink]=\"['/dashboard']\" class=\"btn btn-default\">\n          <span class=\"glyphicon glyphicon-backward\"></span>\n          &nbsp; Back\n        </a>\n        <div *ngIf=\"isLoggedIn()\" class=\"edit\">\n          <input type=\"button\" value=\"Edit\" (click)=\"onEdit()\" class=\"btn btn-sm btn-warning\" />\n          <input type=\"button\" value=\"Delete\" (click)=\"onDelete()\" class=\"btn btn-sm btn-danger\" />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/quiz/quiz.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/quiz/quiz.component.ts ***!
  \*************************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz.service */ "./src/app/features/quiz/quiz.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizComponent = /** @class */ (function () {
    function QuizComponent(activatedRoute, router, auth, quizService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.auth = auth;
        this.quizService = quizService;
        // create an empty object from the Quiz interface
        this.quiz = {};
        var id = +this.activatedRoute.snapshot.params['id'];
        if (id) {
            quizService.getQuiz(id).subscribe(function (quiz) { return _this.quiz = quiz; });
        }
        else {
            console.log('Invalid id: routing back to dashboard...');
            this.router.navigate(['dashboard']);
        }
    }
    QuizComponent.prototype.ngOnInit = function () {
    };
    QuizComponent.prototype.onEdit = function () {
        this.router.navigate(['quiz/edit', this.quiz.id]);
    };
    QuizComponent.prototype.onDelete = function () {
        var _this = this;
        if (confirm('Do you really want to delete this quiz?')) {
            this.quizService.deleteQuiz(this.quiz).subscribe(function (res) {
                console.log('Quiz ' + _this.quiz.id + ' has been deleted.');
                _this.router.navigate(['dashboard']);
            });
        }
    };
    QuizComponent.prototype.isLoggedIn = function () {
        return this.auth.isLoggedIn();
    };
    QuizComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/features/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/features/quiz/quiz.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/features/quiz/quiz.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/quiz/quiz.module.ts ***!
  \**********************************************/
/*! exports provided: QuizModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizModule", function() { return QuizModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _quiz_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz-routing.module */ "./src/app/features/quiz/quiz-routing.module.ts");
/* harmony import */ var _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-list/quiz-list.component */ "./src/app/features/quiz/quiz-list/quiz-list.component.ts");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz.service */ "./src/app/features/quiz/quiz.service.ts");
/* harmony import */ var _quiz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz.component */ "./src/app/features/quiz/quiz.component.ts");
/* harmony import */ var _quiz_edit_quiz_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz-edit/quiz-edit.component */ "./src/app/features/quiz/quiz-edit/quiz-edit.component.ts");
/* harmony import */ var _question_question_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../question/question.module */ "./src/app/features/question/question.module.ts");
/* harmony import */ var _result_result_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../result/result.module */ "./src/app/features/result/result.module.ts");
/* harmony import */ var _quiz_search_quiz_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quiz-search/quiz-search.component */ "./src/app/features/quiz/quiz-search/quiz-search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var QuizModule = /** @class */ (function () {
    function QuizModule() {
    }
    QuizModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["ShareModule"],
                _quiz_routing_module__WEBPACK_IMPORTED_MODULE_2__["QuizRoutingModule"],
                _question_question_module__WEBPACK_IMPORTED_MODULE_7__["QuestionModule"],
                _result_result_module__WEBPACK_IMPORTED_MODULE_8__["ResultModule"]
            ],
            providers: [
                _quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"]
            ],
            declarations: [_quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_3__["QuizListComponent"], _quiz_component__WEBPACK_IMPORTED_MODULE_5__["QuizComponent"], _quiz_edit_quiz_edit_component__WEBPACK_IMPORTED_MODULE_6__["QuizEditComponent"], _quiz_search_quiz_search_component__WEBPACK_IMPORTED_MODULE_9__["QuizSearchComponent"]],
            exports: [
                _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_3__["QuizListComponent"],
                _quiz_search_quiz_search_component__WEBPACK_IMPORTED_MODULE_9__["QuizSearchComponent"]
            ],
        })
    ], QuizModule);
    return QuizModule;
}());



/***/ }),

/***/ "./src/app/features/quiz/quiz.service.ts":
/*!***********************************************!*\
  !*** ./src/app/features/quiz/quiz.service.ts ***!
  \***********************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/http.error.handler */ "./src/app/core/http.error.handler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var QuizService = /** @class */ (function () {
    function QuizService(http, origin) {
        this.http = http;
        this.quizzesByDateUrl = 'api/quiz/Latest'; // URL to web api
        this.quizzesByTitleUrl = 'api/quiz/ByTitle'; // URL to web api
        this.quizzesByRandomUrl = 'api/quiz/Random'; // URL to web api
        this.quizUrl = 'api/quiz'; // URL to web api
        this.quizzez = [];
        this.quizzesByDateUrl = "" + origin + this.quizzesByDateUrl;
        this.quizzesByTitleUrl = "" + origin + this.quizzesByTitleUrl;
        this.quizzesByRandomUrl = "" + origin + this.quizzesByRandomUrl;
        this.quizUrl = "" + origin + this.quizUrl;
    }
    /** GET quizzes from the server */
    QuizService.prototype.getQuizzesByDate = function () {
        return this.http.get(this.quizzesByDateUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (quizzes) { return console.log("fetched quizzes by date"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('getQuizzes', [])));
    };
    QuizService.prototype.getQuizzesByTitle = function () {
        return this.http.get(this.quizzesByTitleUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (quizzes) { return console.log("fetched quizzes by title"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('getQuizzes', [])));
    };
    QuizService.prototype.getQuizzesByRandom = function () {
        return this.http.get(this.quizzesByRandomUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (quizzes) { return console.log("fetched quizzes by random"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('getQuizzes', [])));
    };
    /** GET quiz by id. Return `undefined` when id not found */
    QuizService.prototype.getQuizNo404 = function (id) {
        var url = this.quizzesByDateUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (quizzes) { return quizzes[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            console.log(outcome + " quiz id=" + id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])("getQuiz id=" + id)));
    };
    /** GET quiz by id. Will 404 if id not found */
    QuizService.prototype.getQuiz = function (id) {
        var url = this.quizUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("fetched quiz id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])("getQuiz id=" + id)));
    };
    /* GET quizzes whose name contains search term */
    QuizService.prototype.searchQuizzes = function (term) {
        if (!term.trim()) {
            // if not search term, return empty quiz array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }
        return this.http.get("api/quizzes/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("found quizzes matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('searchQuizzes', [])));
    };
    //////// Save methods //////////
    /** POST: add a new quiz to the server */
    QuizService.prototype.addQuiz = function (quiz) {
        return this.http.post(this.quizUrl, quiz, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (newquiz) { return console.log("added quiz w/ id=" + newquiz.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('addQuiz')));
    };
    /** DELETE: delete the quiz from the server */
    QuizService.prototype.deleteQuiz = function (quiz) {
        var id = typeof quiz === 'number' ? quiz : quiz.id;
        var url = this.quizUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("deleted quiz id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('deleteQuiz')));
    };
    /** PUT: update the quiz on the server */
    QuizService.prototype.updateQuiz = function (quiz) {
        return this.http.put(this.quizUrl, quiz, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("updated quiz id=" + quiz.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('updateQuiz')));
    };
    QuizService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "./src/app/features/result/result-edit/result-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/features/result/result-edit/result-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result-edit textarea {\n  min-width: 500px;\n}\n"

/***/ }),

/***/ "./src/app/features/result/result-edit/result-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/features/result/result-edit/result-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n<div class=\"result-edit\">\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error has-feedback' : hasError('Text') }\">\n      <label for=\"text\">Result text:</label>\n      <br />\n      <textarea id=\"text\" formControlName=\"Text\" required placeholder=\"enter a suitable text...\" class=\"form-control\"></textarea>\n      <span *ngIf=\"hasError('Text')\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\n      <div *ngIf=\"hasError('Text')\" class=\"help-block\">\n        Text is a required field: please insert a valid text.\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error has-feedback' : hasError('MinValue') }\">\n      <label for=\"MinValue\">Minimum Score Value:</label>\n      <br />\n      <input type=\"number\" id=\"MinValue\" name=\"MinValue\" formControlName=\"MinValue\" class=\"form-control\" />\n      <span *ngIf=\"hasError('MinValue')\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\n      <div *ngIf=\"hasError('MinValue')\" class=\"help-block\">\n        Insert a numeric value, or leave it blank to match everything up to MaxValue.\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error has-feedback' : hasError('MaxValue') }\">\n      <label for=\"MaxValue\">Maximum Score Value:</label>\n      <br />\n      <input type=\"text\" id=\"MaxValue\" name=\"MaxValue\" formControlName=\"MaxValue\" class=\"form-control\" />\n      <span *ngIf=\"hasError('MaxValue')\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\n      <div *ngIf=\"hasError('MaxValue')\" class=\"help-block\">\n        Insert a numeric value, or leave it blank to match everything up to MinValue.\n      </div>\n    </div>\n\n    <div class=\"form-group commands\">\n      <button *ngIf=\"editMode\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-success\">\n        Apply Changes\n      </button>\n      <button *ngIf=\"!editMode\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-success\">\n        Create the Result!\n      </button>\n      <button type=\"submit\" (click)=\"onBack()\" class=\"btn btn-default\">\n        Cancel\n      </button>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/features/result/result-edit/result-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/result/result-edit/result-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: ResultEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultEditComponent", function() { return ResultEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _result_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../result.service */ "./src/app/features/result/result.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultEditComponent = /** @class */ (function () {
    function ResultEditComponent(activatedRoute, resultService, fb, router) {
        this.activatedRoute = activatedRoute;
        this.resultService = resultService;
        this.fb = fb;
        this.router = router;
        // create an empty object from the Quiz interface
        this.result = {};
    }
    ResultEditComponent.prototype.ngOnInit = function () {
        // initialize the form
        this.createForm();
        this.loadData();
    };
    ResultEditComponent.prototype.loadData = function () {
        var _this = this;
        var id = +this.activatedRoute.snapshot.params['id'];
        // check if we're in edit mode or not
        this.editMode = (this.activatedRoute.snapshot.url[1].path === 'edit');
        if (this.editMode) {
            this.resultService.getResult(id).subscribe(function (result) { return _this.result = result; });
        }
        else {
            this.result.QuizId = id;
            this.title = 'Create a new Result';
        }
    };
    ResultEditComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            Text: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            MinValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d*$/)],
            MaxValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d*$/)]
        });
    };
    ResultEditComponent.prototype.updateForm = function () {
        this.form.setValue({
            Text: this.result.Text,
            MinValue: this.result.MinValue || '',
            MaxValue: this.result.MaxValue || ''
        });
    };
    ResultEditComponent.prototype.onSubmit = function () {
        var _this = this;
        // build a temporary result object from form values
        var tempResult = {};
        tempResult.Text = this.form.value.Text;
        tempResult.MinValue = this.form.value.MinValue;
        tempResult.MaxValue = this.form.value.MaxValue;
        tempResult.QuizId = this.result.QuizId;
        if (this.editMode) {
            this.resultService.updateResult(tempResult).subscribe(function (res) {
                console.log('Result ' + res.id + ' has been updated.');
                _this.router.navigate(['quiz/edit', res.QuizId]);
            });
        }
        else {
            this.resultService.addResult(tempResult).subscribe(function (res) {
                console.log('Result ' + res.id + ' has been updated.');
                _this.router.navigate(['quiz/edit', res.QuizId]);
            });
        }
    };
    ResultEditComponent.prototype.onBack = function () {
        this.router.navigate(['quiz/edit', this.result.QuizId]);
    };
    // retrieve a FormControl
    ResultEditComponent.prototype.getFormControl = function (name) {
        return this.form.get(name);
    };
    // returns TRUE if the FormControl is valid
    ResultEditComponent.prototype.isValid = function (name) {
        var e = this.getFormControl(name);
        return e && e.valid;
    };
    // returns TRUE if the FormControl has been changed
    ResultEditComponent.prototype.isChanged = function (name) {
        var e = this.getFormControl(name);
        return e && (e.dirty || e.touched);
    };
    // returns TRUE if the FormControl is invalid after user changes
    ResultEditComponent.prototype.hasError = function (name) {
        var e = this.getFormControl(name);
        return e && (e.dirty || e.touched) && !e.valid;
    };
    ResultEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result-edit',
            template: __webpack_require__(/*! ./result-edit.component.html */ "./src/app/features/result/result-edit/result-edit.component.html"),
            styles: [__webpack_require__(/*! ./result-edit.component.css */ "./src/app/features/result/result-edit/result-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _result_service__WEBPACK_IMPORTED_MODULE_3__["ResultService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ResultEditComponent);
    return ResultEditComponent;
}());



/***/ }),

/***/ "./src/app/features/result/result-list/result-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/features/result/result-list/result-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result-edit textarea {\n  min-width: 500px;\n}\n"

/***/ }),

/***/ "./src/app/features/result/result-list/result-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/features/result/result-list/result-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Results</h3>\n<div *ngIf=\"results.length > 0\">\n  <table class=\"results\">\n    <thead>\n      <tr>\n        <th>Text</th>\n        <th>Min. Value</th>\n        <th>Max. Value</th>\n        <th>Options</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let result of results\">\n        <td>{{result.Text}}</td>\n        <td *ngIf=\"result.MinValue === null\">N/A</td>\n        <td *ngIf=\"result.MinValue !== null\">{{result.MinValue}}</td>\n        <td *ngIf=\"result.MaxValue === null\">N/A</td>\n        <td *ngIf=\"result.MaxValue !== null\">{{result.MaxValue}}</td>\n        <td>\n          <input type=\"button\" value=\"Edit\" (click)=\"onEdit(result)\" />\n          <input type=\"button\" value=\"Delete\" (click)=\"onDelete(result)\" />\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div *ngIf=\"results.length == 0\">\n  This quiz has no results (yet): click the\n  <strong>Add a new Result</strong> button to add the first one!\n</div>\n<input type=\"button\" value=\"Add a new Result\" (click)=\"onCreate()\" />\n"

/***/ }),

/***/ "./src/app/features/result/result-list/result-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/result/result-list/result-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: ResultListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultListComponent", function() { return ResultListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../result.service */ "./src/app/features/result/result.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultListComponent = /** @class */ (function () {
    function ResultListComponent(resultService, router) {
        this.resultService = resultService;
        this.router = router;
        this.results = [];
    }
    ResultListComponent.prototype.ngOnChanges = function (changes) {
        if (changes['quiz']) {
            // retrieve the quiz variable change info
            var change = changes['quiz'];
            // only perform the task if the value has been changed
            if (!change.isFirstChange()) {
                // execute the Http request and retrieve the result
                this.loadData();
            }
        }
    };
    ResultListComponent.prototype.ngOnInit = function () {
    };
    ResultListComponent.prototype.loadData = function () {
        var _this = this;
        this.resultService.getResults(this.quiz.id).subscribe(function (results) { return _this.results = results; });
    };
    ResultListComponent.prototype.onCreate = function () {
        this.router.navigate(['/result/create', this.quiz.id]);
    };
    ResultListComponent.prototype.onEdit = function (result) {
        this.router.navigate(['/result/edit', result.id]);
    };
    ResultListComponent.prototype.onDelete = function (result) {
        var _this = this;
        if (confirm('Do you really want to delete this result?')) {
            this.resultService.deleteResult(result.id).subscribe(function (res) {
                console.log('Result ' + result.id + ' has been deleted.');
                // refresh the result list
                _this.loadData();
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ResultListComponent.prototype, "quiz", void 0);
    ResultListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result-list',
            template: __webpack_require__(/*! ./result-list.component.html */ "./src/app/features/result/result-list/result-list.component.html"),
            styles: [__webpack_require__(/*! ./result-list.component.css */ "./src/app/features/result/result-list/result-list.component.css")]
        }),
        __metadata("design:paramtypes", [_result_service__WEBPACK_IMPORTED_MODULE_2__["ResultService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ResultListComponent);
    return ResultListComponent;
}());



/***/ }),

/***/ "./src/app/features/result/result-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/result/result-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ResultRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultRoutingModule", function() { return ResultRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _result_edit_result_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result-edit/result-edit.component */ "./src/app/features/result/result-edit/result-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'result/create/:id', component: _result_edit_result_edit_component__WEBPACK_IMPORTED_MODULE_2__["ResultEditComponent"] },
    { path: 'result/edit/:id', component: _result_edit_result_edit_component__WEBPACK_IMPORTED_MODULE_2__["ResultEditComponent"] },
];
var ResultRoutingModule = /** @class */ (function () {
    function ResultRoutingModule() {
    }
    ResultRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ResultRoutingModule);
    return ResultRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/result/result.module.ts":
/*!**************************************************!*\
  !*** ./src/app/features/result/result.module.ts ***!
  \**************************************************/
/*! exports provided: ResultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultModule", function() { return ResultModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _result_list_result_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./result-list/result-list.component */ "./src/app/features/result/result-list/result-list.component.ts");
/* harmony import */ var _result_edit_result_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./result-edit/result-edit.component */ "./src/app/features/result/result-edit/result-edit.component.ts");
/* harmony import */ var _result_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./result-routing.module */ "./src/app/features/result/result-routing.module.ts");
/* harmony import */ var _result_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./result.service */ "./src/app/features/result/result.service.ts");
/* harmony import */ var _answer_answer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../answer/answer.module */ "./src/app/features/answer/answer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ResultModule = /** @class */ (function () {
    function ResultModule() {
    }
    ResultModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _result_routing_module__WEBPACK_IMPORTED_MODULE_6__["ResultRoutingModule"],
                _answer_answer_module__WEBPACK_IMPORTED_MODULE_8__["AnswerModule"]
            ],
            declarations: [_result_list_result_list_component__WEBPACK_IMPORTED_MODULE_4__["ResultListComponent"], _result_edit_result_edit_component__WEBPACK_IMPORTED_MODULE_5__["ResultEditComponent"]],
            exports: [
                _result_list_result_list_component__WEBPACK_IMPORTED_MODULE_4__["ResultListComponent"]
            ],
            providers: [
                _result_service__WEBPACK_IMPORTED_MODULE_7__["ResultService"]
            ],
        })
    ], ResultModule);
    return ResultModule;
}());



/***/ }),

/***/ "./src/app/features/result/result.service.ts":
/*!***************************************************!*\
  !*** ./src/app/features/result/result.service.ts ***!
  \***************************************************/
/*! exports provided: ResultService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultService", function() { return ResultService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/http.error.handler */ "./src/app/core/http.error.handler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ResultService = /** @class */ (function () {
    function ResultService(http, origin) {
        this.http = http;
        this.resultUrl = 'api/result'; // URL to web api
        this.quizzez = [];
        this.resultUrl = "" + origin + this.resultUrl;
    }
    /** GET results from the server */
    ResultService.prototype.getResults = function (id) {
        var url = this.resultUrl + "/All/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (results) { return console.log("fetched results by date"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('getResultzes', [])));
    };
    /** GET result by id. Return `undefined` when id not found */
    ResultService.prototype.getResultNo404 = function (id) {
        var url = this.resultUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (results) { return results[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            console.log(outcome + " result id=" + id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])("getResult id=" + id)));
    };
    /** GET result by id. Will 404 if id not found */
    ResultService.prototype.getResult = function (id) {
        var url = this.resultUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("fetched result id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])("getResult id=" + id)));
    };
    /* GET results whose name contains search term */
    ResultService.prototype.searchResultzes = function (term) {
        if (!term.trim()) {
            // if not search term, return empty result array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }
        return this.http.get("api/results/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("found results matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('searchResultzes', [])));
    };
    //////// Save methods //////////
    /** POST: add a new result to the server */
    ResultService.prototype.addResult = function (result) {
        return this.http.post(this.resultUrl, result, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (newquiz) { return console.log("added result w/ id=" + newquiz.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('addResult')));
    };
    /** DELETE: delete the result from the server */
    ResultService.prototype.deleteResult = function (result) {
        var id = typeof result === 'number' ? result : result.id;
        var url = this.resultUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("deleted result id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('deleteResult')));
    };
    /** PUT: update the result on the server */
    ResultService.prototype.updateResult = function (result) {
        return this.http.put(this.resultUrl, result, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("updated result id=" + result.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(Object(_core_http_error_handler__WEBPACK_IMPORTED_MODULE_5__["default"])('updateResult')));
    };
    ResultService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], ResultService);
    return ResultService;
}());



/***/ }),

/***/ "./src/app/features/user/facebook-login/facebook-login.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/features/user/facebook-login/facebook-login.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/user/facebook-login/facebook-login.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/features/user/facebook-login/facebook-login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fb-login-button\" data-max-rows=\"1\" data-size=\"large\" data-button-type=\"login_with\" data-show-faces=\"false\" data-auto-logout-link=\"false\"\n  data-use-continue-as=\"false\" data-scope=\"public_profile,email\"></div>\n"

/***/ }),

/***/ "./src/app/features/user/facebook-login/facebook-login.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/user/facebook-login/facebook-login.component.ts ***!
  \**************************************************************************/
/*! exports provided: FacebookLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginComponent", function() { return FacebookLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var FacebookLoginComponent = /** @class */ (function () {
    function FacebookLoginComponent(http, router, authService, localStorageService, 
    // inject the local zone
    zone, platformId) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.zone = zone;
        this.platformId = platformId;
    }
    FacebookLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            return;
        }
        if (typeof (FB) === 'undefined') {
            // if the FB oject is undefined,
            // it means that it's the first time
            // we visit this page, hence we need
            // to initialize the Facebook SDK
            window.fbAsyncInit = function () {
                // be sure to do this within
                // the local zone, or Angular will be
                // unable to find the local references
                return _this.zone.run(function () {
                    FB.init({
                        appId: '1535777516721739',
                        xfbml: true,
                        version: 'v2.12'
                    });
                    FB.AppEvents.logPageView();
                    // this will trigger right after the user
                    // completes the FB SDK Auth roundtrip successfully
                    FB.Event.subscribe('auth.statusChange', (function (result) {
                        console.log('FB auth status changed');
                        console.log(result);
                        if (result.status === 'connected') {
                            // login successful
                            console.log('Connected to Facebook.');
                            _this.onConnect(result.authResponse.accessToken);
                        }
                    }));
                });
            };
            // Load the SDK js library (only once)
            (function (d, s, id) {
                var fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                var js = d.createElement(s);
                js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=1535777516721739&autoLogAppEvents=1';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        }
        else {
            // Reload the FB login button
            window.FB.XFBML.parse();
            // if the user is still connected, log him off.
            FB.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                    FB.logout(function (res) {
                        // do nothing
                    });
                }
            });
        }
    };
    // this method will be executed
    // upon the user FB SDK Auth roundtrip completion
    // to create/login the local user
    FacebookLoginComponent.prototype.onConnect = function (accessToken) {
        // call TokenController and register/login
        var _this = this;
        var data = {
            access_token: accessToken,
            client_id: this.authService.clientId
        };
        this.authService.facebookLogin(data).subscribe(function (res) {
            // store user login data
            _this.localStorageService.setAuth(res);
            // redirect user to home
            _this.router.navigate(['dashboard']);
        }, function (error) { return console.log(error); });
    };
    FacebookLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-facebook-login',
            template: __webpack_require__(/*! ./facebook-login.component.html */ "./src/app/features/user/facebook-login/facebook-login.component.html"),
            styles: [__webpack_require__(/*! ./facebook-login.component.css */ "./src/app/features/user/facebook-login/facebook-login.component.css")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            Object])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());



/***/ }),

/***/ "./src/app/features/user/forget-password-form/forget-password-form.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/features/user/forget-password-form/forget-password-form.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/user/forget-password-form/forget-password-form.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/features/user/forget-password-form/forget-password-form.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <input type=\"email\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" formControlName=\"email\">\n    <!-- <small class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n  </div>\n\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Send</button>\n</form>\n"

/***/ }),

/***/ "./src/app/features/user/forget-password-form/forget-password-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/features/user/forget-password-form/forget-password-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ForgetPasswordFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordFormComponent", function() { return ForgetPasswordFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgetPasswordFormComponent = /** @class */ (function () {
    function ForgetPasswordFormComponent(router, fb, authService) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
    }
    ForgetPasswordFormComponent.prototype.ngOnInit = function () {
        this.title = 'User Login';
        // initialize the form
        this.createForm();
    };
    ForgetPasswordFormComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    ForgetPasswordFormComponent.prototype.onSubmit = function () {
        var email = this.form.value.email;
        // this.authService.forget(email)
        //   .subscribe(res => {
        //     // login successful
        //     // outputs the login info through a JS alert.
        //     // IMPORTANT: remove this when test is done.
        //     alert('Login successful! '
        //       + 'USERNAME: '
        //       + email
        //       + ' TOKEN: '
        //       + this.authService.getAuth().token
        //     );
        //     this.router.navigate(['dashboard']);
        //   },
        //     err => {
        //       // login failed
        //       console.log(err);
        //       this.form.setErrors({
        //         'auth': 'Incorrect username or password'
        //       });
        //     });
    };
    ForgetPasswordFormComponent.prototype.onBack = function () {
        this.router.navigate(['login']);
    };
    // retrieve a FormControl
    ForgetPasswordFormComponent.prototype.getFormControl = function (name) {
        return this.form.get(name);
    };
    // returns TRUE if the FormControl is invalid after user changes
    ForgetPasswordFormComponent.prototype.hasError = function (name) {
        var e = this.getFormControl(name);
        return e && (e.dirty || e.touched) && !e.valid;
    };
    ForgetPasswordFormComponent.prototype.getErrorMessage = function (name) {
        var errors = {};
        errors['email'] = (this.getFormControl('email').hasError('required') ? 'You must enter a value' :
            this.getFormControl('email').hasError('email') ? 'Not a valid email' : '');
        return errors[name];
    };
    ForgetPasswordFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget-password-form',
            template: __webpack_require__(/*! ./forget-password-form.component.html */ "./src/app/features/user/forget-password-form/forget-password-form.component.html"),
            styles: [__webpack_require__(/*! ./forget-password-form.component.css */ "./src/app/features/user/forget-password-form/forget-password-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ForgetPasswordFormComponent);
    return ForgetPasswordFormComponent;
}());



/***/ }),

/***/ "./src/app/features/user/login-form/login.component.css":
/*!**************************************************************!*\
  !*** ./src/app/features/user/login-form/login.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.social-network {\n\tlist-style: none;\n\tdisplay: inline;\n\tmargin-left:0 !important;\n\tpadding: 0;\n}\nul.social-network li {\n\tdisplay: inline;\n\tmargin: 0 5px;\n}\n.social-network a.icoRss:hover {\n\tbackground-color: #F56505;\n}\n.social-network a.icoFacebook:hover {\n\tbackground-color:#3B5998;\n}\n.social-network a.icoTwitter:hover {\n\tbackground-color:#33ccff;\n}\n.social-network a.icoGoogle:hover {\n\tbackground-color:#BD3518;\n}\n.social-network a.icoVimeo:hover {\n\tbackground-color:#0590B8;\n}\n.social-network a.icoLinkedin:hover {\n\tbackground-color:#007bb7;\n}\n.social-network a.icoRss:hover i, .social-network a.icoFacebook:hover i, .social-network a.icoTwitter:hover i,\n.social-network a.icoGoogle:hover i, .social-network a.icoVimeo:hover i, .social-network a.icoLinkedin:hover i {\n\tcolor:#fff;\n}\na.socialIcon:hover, .socialHoverClass {\n\tcolor:#44BCDD;\n}\n.social-circle li a {\n\tdisplay:inline-block;\n\tposition:relative;\n\tmargin:0 auto 0 auto;\n\tborder-radius:50%;\n\ttext-align:center;\n\twidth: 25px;\n\theight: 25px;\n\tfont-size:10px;\n\tbackground-color: #D3D3D3;\n}\n.social-circle li i {\n\tmargin:0;\n\tline-height:50px;\n\ttext-align: center;\n}\n.social-circle li a:hover i, .triggeredHover {\n\t-moz-transform: rotate(360deg);\n\t-webkit-transform: rotate(360deg);\n\t-ms--transform: rotate(360deg);\n\ttransform: rotate(360deg);\n\ttransition: all 0.2s;\n}\n.social-circle i {\n\tcolor: #fff;\n\ttransition: all 0.8s;\n}\n"

/***/ }),

/***/ "./src/app/features/user/login-form/login.component.html":
/*!***************************************************************!*\
  !*** ./src/app/features/user/login-form/login.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form class=\"form-signin\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-label-group\" [ngClass]=\"{ 'has-error has-feedback' : hasError('email') }\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"Email address\" formControlName=\"email\" required autofocus>\n    <label for=\"inputEmail\">Email address</label>\n    <span *ngIf=\"hasError('email')\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\n    <div *ngIf=\"hasError('email')\" class=\"invalid-feedback\">\n      Please insert a valid username or e-mail address.\n    </div>\n  </div>\n\n  <div class=\"form-label-group\" [ngClass]=\"{ 'has-error has-feedback' : hasError('password') }\">\n    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" required>\n    <label for=\"inputPassword\">Password</label>\n    <span *ngIf=\"hasError('password')\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\n    <div *ngIf=\"hasError('password')\" class=\"invalid-feedback\">\n      Please insert a password.\n    </div>\n  </div>\n  <div class=\"d-flex justify-content-between mb-3\">\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n      </label>\n    </div>\n    <div class=\"login-link\">\n      <a [routerLink]=\"['/user/forgot']\">\n        Forgot?\n      </a>\n    </div>\n  </div>\n\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n  <p class=\"mt-5 mb-3 text-muted text-center\">&copy; 2017-2018</p>\n</form> -->\n<form class=\"form-signin\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [ngClass]=\"{ 'loading disabled' : isLoading() }\">\n  <fieldset>\n    <div class=\"form-group\">\n      <input type=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid' : hasError('email') }\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\"\n        formControlName=\"email\">\n      <div *ngIf=\"hasError('email')\" class=\"invalid-feedback\">\n        Please insert a valid e-mail address.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid' : hasError('password') }\" placeholder=\"Password\" formControlName=\"password\">\n      <span *ngIf=\"hasError('password')\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\n      <div *ngIf=\"hasError('password')\" class=\"invalid-feedback\">\n        Please insert a password.\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-between\">\n      <div class=\"form-group form-check\">\n        <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"remember\">\n        <label class=\"form-check-label\">Remember me</label>\n      </div>\n      <div class=\"login-link\">\n        <a [routerLink]=\"['/user/forgot']\">\n          forget?\n        </a>\n      </div>\n    </div>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n      <i class=\"fa fa-spinner fa-spin\"></i> Sign in</button>\n    <div class=\"text-center\">\n      <hr class=\"hr-text\" data-content=\"OR\">\n      <div>\n        <ul class=\"social-network social-circle\">\n          <li>\n            <a href=\"#\" class=\"icoFacebook\" title=\"Facebook\">\n              <i class=\"fa fa-facebook\"></i>\n            </a>\n          </li>\n          <li>\n            <a href=\"#\" class=\"icoTwitter\" title=\"Twitter\">\n              <i class=\"fa fa-twitter\"></i>\n            </a>\n          </li>\n          <li>\n            <a href=\"#\" class=\"icoGoogle\" title=\"Google +\">\n              <i class=\"fa fa-google-plus\"></i>\n            </a>\n          </li>\n          <li>\n            <a href=\"#\" class=\"icoLinkedin\" title=\"Linkedin\">\n              <i class=\"fa fa-linkedin\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <a [routerLink]=\"['/user/register']\">\n        Sign up?\n      </a>\n    </div>\n  </fieldset>\n</form>\n"

/***/ }),

/***/ "./src/app/features/user/login-form/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/user/login-form/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, fb, authService) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.title = 'User Login';
        // initialize the form
        this.createForm();
    };
    LoginComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            remember: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.loading = false;
    };
    LoginComponent.prototype.pending = function () {
        this.loading = true;
        this.form.disable();
    };
    LoginComponent.prototype.finish = function () {
        this.loading = false;
        this.form.enable();
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.pending();
        var email = this.form.value.email;
        var password = this.form.value.password;
        this.authService.login(email, password)
            .subscribe(function (res) {
            // login successful
            _this.finish();
            // outputs the login info through a JS alert.
            // IMPORTANT: remove this when test is done.
            alert('Login successful! '
                + 'USERNAME: '
                + email
                + ' TOKEN: '
                + res);
            _this.router.navigate(['dashboard']);
        }, function (err) {
            // login failed
            _this.finish();
            console.log(err);
            _this.form.setErrors({
                'auth': 'Incorrect username or password'
            });
        });
    };
    LoginComponent.prototype.onBack = function () {
        this.router.navigate(['login']);
    };
    LoginComponent.prototype.isLoading = function () {
        return this.loading;
    };
    // retrieve a FormControl
    LoginComponent.prototype.getFormControl = function (name) {
        return this.form.get(name);
    };
    // returns TRUE if the FormControl is valid
    LoginComponent.prototype.isValid = function (name) {
        var e = this.getFormControl(name);
        return e && e.valid;
    };
    // returns TRUE if the FormControl has been changed
    LoginComponent.prototype.isChanged = function (name) {
        var e = this.getFormControl(name);
        return e && (e.dirty || e.touched);
    };
    // returns TRUE if the FormControl is invalid after user changes
    LoginComponent.prototype.hasError = function (name) {
        var e = this.getFormControl(name);
        return e && (e.dirty || e.touched) && !e.valid;
    };
    LoginComponent.prototype.getErrorMessage = function (name) {
        var errors = {};
        errors['email'] = (this.getFormControl('email').hasError('required') ? 'You must enter a value' :
            this.getFormControl('email').hasError('email') ? 'Not a valid email' : '');
        errors['password'] = (this.getFormControl('password').hasError('required') ? 'You must enter a value' :
            this.getFormControl('password').hasError('minLength') ? 'Not a valid password' : '');
        return errors[name];
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/features/user/login-form/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/features/user/login-form/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/features/user/register-form/register.component.css":
/*!********************************************************************!*\
  !*** ./src/app/features/user/register-form/register.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n  max-width: 400px;\n  margin: 0 auto;\n}\n\n.form-container>* {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/features/user/register-form/register.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/features/user/register-form/register.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form class=\"form-container\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <h3>Sign up</h3>\n  <mat-form-field>\n    <input matInput placeholder=\"E-Mail Address\" formControlName=\"email\" required>\n    <mat-error *ngIf=\"getFormControl('email').invalid\">{{getErrorMessage(\"email\")}}</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Enter your password\" type=\"password\" formControlName=\"password\" required>\n    <mat-error *ngIf=\"getFormControl('password').invalid\">{{getErrorMessage(\"password\")}}</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Confirm your password\" type=\"password\" formControlName=\"passwordConfirm\" required>\n    <mat-error *ngIf=\"getFormControl('passwordConfirm').invalid\">{{getErrorMessage(\"passwordConfirm\")}}</mat-error>\n  </mat-form-field>\n\n  <button mat-raised-button color=\"primary\">Register</button>\n  <span class=\"mat-caption\">Already have an account?\n    <button mat-button type=\"button\" color=\"primary\" routerLink=\"/user/login\">Login</button>\n  </span>\n</form> -->\n<form class=\"form-signin\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error has-feedback' : hasError('email') }\">\n    <input type=\"email\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" formControlName=\"email\">\n    <!-- <small class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n  </div>\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error has-feedback' : hasError('password') }\">\n    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n  </div>\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign Up</button>\n\n  <div class=\"text-center\">\n    <hr class=\"hr-text\" data-content=\"OR\">\n    <a [routerLink]=\"['/user/login']\">\n      Sign in?\n    </a>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/features/user/register-form/register.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/user/register-form/register.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/register.service */ "./src/app/core/services/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, fb, http, registerService) {
        this.router = router;
        this.fb = fb;
        this.http = http;
        this.registerService = registerService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.title = 'New User Registration';
        // initialize the form
        this.createForm();
    };
    RegisterComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            email: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]
            ],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passwordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: this.passwordConfirmValidator
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        // build a temporary user object from form values
        var tempUser = {};
        tempUser.email = this.form.value.email;
        tempUser.password = this.form.value.password;
        this.registerService.addUser(tempUser).subscribe(function (user) {
            if (user) {
                console.log(user);
                // console.log('User ' + user.username + ' has been created.');
                // redirect to login page
                _this.router.navigate(['user/login']);
            }
            else {
                // registration failed
                _this.form.setErrors({
                    'register': 'User registration failed.'
                });
            }
            // console.log('User ' + user.username + ' has been created.');
            // // redirect to login page
            // this.router.navigate(['user/login']);
        }, function (error) { return console.log(error); });
    };
    RegisterComponent.prototype.onBack = function () {
        this.router.navigate(['dashboard']);
    };
    // custom validator to compare
    // the password and passwordConfirm values.
    RegisterComponent.prototype.passwordConfirmValidator = function (control) {
        // retrieve the two Controls
        var p = control.root.get('password');
        var pc = control.root.get('passwordConfirm');
        if (p && pc) {
            if (p.value !== pc.value) {
                pc.setErrors({ 'passwordMismatch': true });
            }
            else {
                pc.setErrors(null);
            }
        }
        return null;
    };
    // retrieve a FormControl
    RegisterComponent.prototype.getFormControl = function (name) {
        return this.form.get(name);
    };
    // returns TRUE if the FormControl is valid
    RegisterComponent.prototype.isValid = function (name) {
        var e = this.getFormControl(name);
        return e && e.valid;
    };
    // returns TRUE if the FormControl has been changed
    RegisterComponent.prototype.isChanged = function (name) {
        var e = this.getFormControl(name);
        return e && (e.dirty || e.touched);
    };
    // returns TRUE if the FormControl is invalid after user changes
    RegisterComponent.prototype.hasError = function (name) {
        var e = this.getFormControl(name);
        return e && (e.dirty || e.touched) && !e.valid;
    };
    RegisterComponent.prototype.getErrorMessage = function (name) {
        var errors = {};
        errors['email'] = (this.getFormControl('email').hasError('required') ? 'You must enter a value' :
            this.getFormControl('email').hasError('email') ? 'Not a valid email' : '');
        errors['password'] = (this.getFormControl('password').hasError('required') ? 'You must enter a value' :
            this.getFormControl('password').hasError('minLength') ? 'Not a valid password' : '');
        errors['passwordConfirm'] = (this.getFormControl('passwordConfirm').hasError('required') ? 'Please confirm your password' :
            this.getFormControl('passwordConfirm').hasError('passwordMismatch') ? 'Password and confirm password don\'t match.' : '');
        return errors[name];
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/features/user/register-form/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/features/user/register-form/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _core_services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/features/user/user-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/user/user-routing.module.ts ***!
  \******************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_components_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components/site-layout/site-layout.component */ "./src/app/core/components/site-layout/site-layout.component.ts");
/* harmony import */ var _login_form_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form/login.component */ "./src/app/features/user/login-form/login.component.ts");
/* harmony import */ var _register_form_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-form/register.component */ "./src/app/features/user/register-form/register.component.ts");
/* harmony import */ var _forget_password_form_forget_password_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-password-form/forget-password-form.component */ "./src/app/features/user/forget-password-form/forget-password-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'user',
        component: _core_components_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_2__["SiteLayoutComponent"],
        children: [
            { path: 'login', component: _login_form_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
            { path: 'forgot', component: _forget_password_form_forget_password_form_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordFormComponent"] },
            { path: 'register', component: _register_form_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
        ]
    },
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/user/user.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/user/user.module.ts ***!
  \**********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/features/user/user-routing.module.ts");
/* harmony import */ var _login_form_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-form/login.component */ "./src/app/features/user/login-form/login.component.ts");
/* harmony import */ var _register_form_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-form/register.component */ "./src/app/features/user/register-form/register.component.ts");
/* harmony import */ var _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facebook-login/facebook-login.component */ "./src/app/features/user/facebook-login/facebook-login.component.ts");
/* harmony import */ var _forget_password_form_forget_password_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forget-password-form/forget-password-form.component */ "./src/app/features/user/forget-password-form/forget-password-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"]
            ],
            declarations: [_login_form_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _register_form_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginComponent"], _forget_password_form_forget_password_form_component__WEBPACK_IMPORTED_MODULE_7__["ForgetPasswordFormComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    ShareModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: []
        })
    ], ShareModule);
    return ShareModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mluo/Development/career-dev/app/clientApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map