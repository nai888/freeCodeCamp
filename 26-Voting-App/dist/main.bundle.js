webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\r\n  min-height: 500px; }\r\n\r\n.title {\r\n  color: #1e4062; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav-comp></nav-comp>\n</header>\n<main>\n  <h1 class=\"title\">{{title}}</h1>\n  <router-outlet></router-outlet>\n</main>\n<footer>\n  <p>Built by <a href=\"https://www.freecodecamp.com/nai888\" target=\"_blank\" rel=\"noopener noreferrer\">Ian A. Cook</a>, copyright &copy; 2017. <a href=\"https://github.com/nai888/freeCodeCamp/tree/master/26-Voting-App\" target=\"_blank\" rel=\"noopener noreferrer\">View this project on GitHub.</a></p>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'freeCodeCamp Voting App';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__log_in_component__ = __webpack_require__("../../../../../src/app/log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_component__ = __webpack_require__("../../../../../src/app/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_poll_component__ = __webpack_require__("../../../../../src/app/new-poll.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_component__ = __webpack_require__("../../../../../src/app/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__poll_component__ = __webpack_require__("../../../../../src/app/poll.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes_guard__ = __webpack_require__("../../../../../src/app/routes.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__polls_mock__ = __webpack_require__("../../../../../src/app/polls.mock.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_module__ = __webpack_require__("../../../../../src/app/routes.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__log_in_component__["a" /* LogInComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__new_poll_component__["a" /* NewPollComponent */],
                __WEBPACK_IMPORTED_MODULE_8__profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_9__poll_component__["a" /* PollComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__routes_module__["a" /* RoutesModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__routes_guard__["a" /* LoggedInGuard */],
                __WEBPACK_IMPORTED_MODULE_11__routes_guard__["b" /* LoggedOutGuard */],
                __WEBPACK_IMPORTED_MODULE_12__polls_mock__["a" /* Polls */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AuthService = (function () {
    function AuthService() {
        this._loggedIn = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](false);
        this._id = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this._username = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this._displayName = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
    }
    AuthService.prototype.isLoggedIn = function () {
        return this._loggedIn;
    };
    AuthService.prototype.getId = function () {
        return this._id;
    };
    AuthService.prototype.getUsername = function () {
        return this._username;
    };
    AuthService.prototype.getDisplayName = function () {
        return this._displayName;
    };
    AuthService.prototype.logIn = function () {
        this._loggedIn.next(true);
        // Update the following properties with the results from Passport
        this._id.next("0");
        this._username.next("nai888");
        this._displayName.next("Ian A. Cook");
    };
    AuthService.prototype.logOut = function () {
        this._loggedIn.next(false);
        this._id.next(null);
        this._username.next(null);
        this._displayName.next(null);
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\" *ngIf=\"loggedIn\">\r\n  <h2>Dashboard</h2>\r\n  <button class=\"btn\" (click)=\"routeNewPoll()\">New Poll</button>\r\n  <button class=\"btn\" (click)=\"routeRandomPoll()\">Random Poll</button>\r\n  <h3>Your Polls</h3>\r\n  <ul *ngIf=\"numberPolls\">\r\n    <li *ngFor=\"let poll of polls\"><a [routerLink]=\"'polls/' + poll.id\">{{poll.question}}</a></li>\r\n  </ul>\r\n</div>\r\n<div class=\"dashboard\" *ngIf=\"!loggedIn\">\r\n  <p>To create a new poll, you will need to <a routerLink=\"/login\">log in</a>.</p>\r\n  <p>You may vote on others&rsquo; polls without logging in.</p>\r\n  <button class=\"btn\" (click)=\"routeRandomPoll()\">Random Poll</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polls_mock__ = __webpack_require__("../../../../../src/app/polls.mock.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(_authService, _router, _pollsList) {
        var _this = this;
        this._authService = _authService;
        this._router = _router;
        this._pollsList = _pollsList;
        this.polls = this._pollsList.polls;
        this.numberPolls = this.polls.length;
        this.routeNewPoll = function () {
            _this._router.navigate(['/newpoll']);
        };
        this.routeRandomPoll = function () {
            var rand = Math.floor(Math.random() * _this.numberPolls);
            _this._router.navigate(["/polls/" + rand]);
        };
        this._loggedInSubsc = this._authService.isLoggedIn().subscribe(function (loggedIn) { return _this.loggedIn = loggedIn; });
    }
    DashboardComponent.prototype.ngOnDestroy = function () {
        this._loggedInSubsc.unsubscribe();
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__polls_mock__["a" /* Polls */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__polls_mock__["a" /* Polls */]) === "function" && _c || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/log-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/log-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <p>This is where we&rsquo;ll log in.</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/log-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogInComponent = (function () {
    function LogInComponent(authService) {
        this.authService = authService;
        this.loggedIn = this.authService.isLoggedIn();
    }
    LogInComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'log-in',
            template: __webpack_require__("../../../../../src/app/log-in.component.html"),
            styles: [__webpack_require__("../../../../../src/app/log-in.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], LogInComponent);
    return LogInComponent;
    var _a;
}());

//# sourceMappingURL=log-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.active {\r\n  color: #ab8921; }\r\n\r\nnav {\r\n  margin: 10px 0;\r\n  padding: 10px 0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-line-pack: baseline;\r\n      align-content: baseline;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  border-bottom: 1px solid rgba(41, 90, 137, 0.2); }\r\n\r\np, ul {\r\n  margin: 0; }\r\n\r\np {\r\n  font-style: italic; }\r\n\r\nli {\r\n  display: inline;\r\n  list-style: none;\r\n  margin: 0 10px;\r\n  text-align: right; }\r\n\r\n.disabled {\r\n  color: rgba(0, 0, 0, 0.35); }\r\n\r\n.name {\r\n  font-weight: bold; }\r\n\r\n.log-out {\r\n  color: #295a89;\r\n  cursor: pointer; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"menu\">\r\n  <p class=\"menu-greeting\" *ngIf=\"loggedIn\">Welcome, <a class=\"name\" routerLink=\"/profile\" routerLinkActive=\"active\">{{displayName}}</a>! <small><span class=\"log-out\" (click)=\"logOut()\">(log out)</span></small></p>\r\n  <p class=\"menu-greeting\" *ngIf=\"!loggedIn\">Welcome! Please <a routerLink=\"/login\" routerLinkActive=\"active\">log in</a>.</p>\r\n  <ul class=\"menu-ul\">\r\n    <li class=\"menu-li\"><a routerLink=\"/\" routerLinkActive=\"active\">Dashboard</a></li>\r\n    <li class=\"menu-li\" *ngIf=\"loggedIn\"><a routerLink=\"/newpoll\" routerLinkActive=\"active\">New Poll</a></li>\r\n    <li class=\"menu-li\" *ngIf=\"!loggedIn\"><span class=\"disabled\">New Poll</span></li>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = (function () {
    function NavComponent(_authService, _route, _router, _location) {
        var _this = this;
        this._authService = _authService;
        this._route = _route;
        this._router = _router;
        this._location = _location;
        this.logOut = function () {
            if (_this.loggedIn) {
                _this._authService.logOut();
                _this._router.navigate(['']);
            }
        };
        this._loggedInSubsc = this._authService.isLoggedIn().subscribe(function (loggedIn) { return _this.loggedIn = loggedIn; });
        this._idSubsc = this._authService.getId().subscribe(function (id) { return _this.id = id; });
        this._usernameSubsc = this._authService.getUsername().subscribe(function (username) { return _this.username = username; });
        this._displayNameSubsc = this._authService.getDisplayName().subscribe(function (displayName) { return _this.displayName = displayName; });
    }
    NavComponent.prototype.ngOnDestroy = function () {
        this._loggedInSubsc.unsubscribe();
        this._idSubsc.unsubscribe();
        this._usernameSubsc.unsubscribe();
        this._displayNameSubsc.unsubscribe();
    };
    NavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'nav-comp',
            template: __webpack_require__("../../../../../src/app/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */]) === "function" && _d || Object])
    ], NavComponent);
    return NavComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-poll.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-poll.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <p>This is where we&rsquo;ll create a new poll.</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/new-poll.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPollComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NewPollComponent = (function () {
    function NewPollComponent() {
        this.name = 'Ian A. Cook';
    }
    NewPollComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'new-poll',
            template: __webpack_require__("../../../../../src/app/new-poll.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-poll.component.css")]
        })
    ], NewPollComponent);
    return NewPollComponent;
}());

//# sourceMappingURL=new-poll.component.js.map

/***/ }),

/***/ "../../../../../src/app/poll.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/poll.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <p>A poll will be here.</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/poll.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PollComponent = (function () {
    function PollComponent() {
        this.name = "Ian A. Cook";
    }
    PollComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'poll',
            template: __webpack_require__("../../../../../src/app/poll.component.html"),
            styles: [__webpack_require__("../../../../../src/app/poll.component.css")]
        })
    ], PollComponent);
    return PollComponent;
}());

//# sourceMappingURL=poll.component.js.map

/***/ }),

/***/ "../../../../../src/app/polls.mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Polls; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Polls = (function () {
    function Polls() {
        this.polls = [
            {
                id: 0,
                question: 'How old are you?',
                answers: [
                    {
                        id: 0,
                        answer: '<18',
                        votes: 0
                    }, {
                        id: 1,
                        answer: '18-24',
                        votes: 0
                    }, {
                        id: 2,
                        answer: '25-34',
                        votes: 0
                    }, {
                        id: 3,
                        answer: '>35',
                        votes: 0
                    }
                ],
                owner: 'nai888'
            }, {
                id: 1,
                question: 'What is your gender?',
                answers: [
                    {
                        id: 0,
                        answer: 'cismale',
                        votes: 0
                    }, {
                        id: 1,
                        answer: 'cisfemale',
                        votes: 0
                    }, {
                        id: 2,
                        answer: 'transmale',
                        votes: 0
                    }, {
                        id: 3,
                        answer: 'transfemale',
                        votes: 0
                    }, {
                        id: 4,
                        answer: 'intersex',
                        votes: 0
                    }, {
                        id: 5,
                        answer: 'bigender',
                        votes: 0
                    }
                ],
                owner: 'nai888'
            }
        ];
    }
    Polls = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
    ], Polls);
    return Polls;
}());

//# sourceMappingURL=polls.mock.js.map

/***/ }),

/***/ "../../../../../src/app/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <p>This is the user profile.</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
        this.loggedIn = this.authService.isLoggedIn();
    }
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'profile',
            template: __webpack_require__("../../../../../src/app/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoggedOutGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggedInGuard = (function () {
    function LoggedInGuard(_authService) {
        this._authService = _authService;
    }
    LoggedInGuard.prototype.canActivate = function () {
        // can only activate this route if logged in
        return this._authService.isLoggedIn().getValue();
    };
    LoggedInGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], LoggedInGuard);
    return LoggedInGuard;
    var _a;
}());

var LoggedOutGuard = (function () {
    function LoggedOutGuard(_authService) {
        this._authService = _authService;
    }
    LoggedOutGuard.prototype.canActivate = function () {
        // can only activate this route if logged out
        return !this._authService.isLoggedIn().getValue();
    };
    LoggedOutGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], LoggedOutGuard);
    return LoggedOutGuard;
    var _a;
}());

//# sourceMappingURL=routes.guard.js.map

/***/ }),

/***/ "../../../../../src/app/routes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_in_component__ = __webpack_require__("../../../../../src/app/log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_poll_component__ = __webpack_require__("../../../../../src/app/new-poll.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_component__ = __webpack_require__("../../../../../src/app/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__poll_component__ = __webpack_require__("../../../../../src/app/poll.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_guard__ = __webpack_require__("../../../../../src/app/routes.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]
    }, {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__log_in_component__["a" /* LogInComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_7__routes_guard__["b" /* LoggedOutGuard */]
        ]
    }, {
        path: 'newpoll',
        component: __WEBPACK_IMPORTED_MODULE_4__new_poll_component__["a" /* NewPollComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_7__routes_guard__["a" /* LoggedInGuard */]
        ]
    }, {
        path: 'polls/:id',
        component: __WEBPACK_IMPORTED_MODULE_6__poll_component__["a" /* PollComponent */]
    }, {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_5__profile_component__["a" /* ProfileComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_7__routes_guard__["a" /* LoggedInGuard */]
        ]
    }
];
var RoutesModule = (function () {
    function RoutesModule() {
    }
    RoutesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], RoutesModule);
    return RoutesModule;
}());

//# sourceMappingURL=routes.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map