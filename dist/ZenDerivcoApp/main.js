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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/AuthService/AuthService.ts":
/*!********************************************!*\
  !*** ./src/app/AuthService/AuthService.ts ***!
  \********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);

// src/app/auth/auth.service.ts


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.getToken = function () {
        debugger;
        var strToken = localStorage.getItem('token');
        return strToken;
    };
    AuthService.prototype.isAuthenticated = function () {
        // get the token
        var token = this.getToken();
        return null;
    };
    AuthService.prototype.isTokenExpired = function (token) {
        if (!token)
            token = this.getToken();
        if (!token)
            return true;
        var date = this.getTokenExpirationDate(token);
        if (date === undefined)
            return false;
        return !(date.valueOf() > new Date().valueOf());
    };
    AuthService.prototype.getTokenExpirationDate = function (token) {
        debugger;
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
        if (decoded === undefined)
            return null;
        var date = new Date(0);
        var expDate = +localStorage.getItem("expires_at");
        date.setUTCSeconds(expDate);
        return date;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/AuthService/ErrorInterceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/AuthService/ErrorInterceptor.ts ***!
  \*************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(router) {
        this.router = router;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                // this.authenticationService.logout();
                _this.router.navigateByUrl('login');
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/AuthService/token.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/AuthService/token.interceptor.ts ***!
  \**************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthService */ "./src/app/AuthService/AuthService.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        debugger;
        var token = localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': 'Bearer ' + token
                }
            });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json'
                }
            });
        }
        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log(error);
            if (error.status === 401) {
                localStorage.clear();
                _this.router.navigate(['login']);
            }
            if (error.status === 400) {
                alert(error.error);
            }
            if (error.status === 500) {
                alert(error.error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
        }));
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_AuthService__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/encrypt.password.ts":
/*!**********************************************!*\
  !*** ./src/app/_helpers/encrypt.password.ts ***!
  \**********************************************/
/*! exports provided: EncryptPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncryptPassword", function() { return EncryptPassword; });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);

// custom validator to check that two fields match
function EncryptPassword(password, userId) {
    //Encryption logic
    var iv = crypto_js__WEBPACK_IMPORTED_MODULE_0__["enc"].Utf8.parse(userId);
    var encryptedpwd = crypto_js__WEBPACK_IMPORTED_MODULE_0__["AES"].encrypt(password, userId, {
        keySize: 128 / 8,
        iv: iv,
        mode: crypto_js__WEBPACK_IMPORTED_MODULE_0__["mode"].CBC,
        padding: crypto_js__WEBPACK_IMPORTED_MODULE_0__["pad"].Pkcs7
    });
    return encryptedpwd;
}
//Decryption logic
// var key = CryptoJS.enc.Utf8.parse(keys);
// var iv = CryptoJS.enc.Utf8.parse(keys);
// var decrypted = CryptoJS.AES.decrypt(value, key, {
//     keySize: 128 / 8,
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
// });
// return decrypted.toString(CryptoJS.enc.Utf8);


/***/ }),

/***/ "./src/app/_helpers/must-match.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/_helpers/must-match.validator.ts ***!
  \**************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/app-header/app-header.component.html":
/*!******************************************************!*\
  !*** ./src/app/app-header/app-header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow p-2 mb-4 bg-white rounded\"> \n  <nav class=\"navbar navbar-expand-xl\">\n    <!-- Brand -->\n  <a class=\"gameInformation\"  routerLink=\"list\">Zen-Derivco</a>\n    <!-- Links -->\n    <ul class=\"navbar-nav  ml-auto\" style=\"float: right\" *ngIf=\"isUserLoggedIn\" >\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"list\"><i class=\"fa fa-home\"></i>&nbsp;Home</a>\n        </li>\n      \n        <!-- Dropdown -->\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-tasks\"></i>&nbsp;Allocation\n          </a>\n          <div class=\"dropdown-menu\">\n            <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-users\"></i>&nbsp;Team</a>\n            <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-desktop\"></i>&nbsp;Asset</a>            \n          </div>\n        </li>\n        <li class=\"nav-item\"><a  class=\"nav-link\" >|</a></li>\n        <li class=\"nav-item\"><a  class=\"nav-link\" routerLink=\"login\" (click)=\"logout()\">\n            <i class=\"fa fa-sign-out\"></i>&nbsp;Logout</a> \n        </li>\n      </ul>\n</nav>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app-header/app-header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/app-header/app-header.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-area .top-header-area {\n  position: relative;\n  z-index: 1;\n  background-color: #252525;\n  width: 100%;\n  height: 30px; }\n\n.h-100 {\n  height: 100% !important; }\n\n.align-items-center {\n  align-items: center !important; }\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n/* Stackoverflow preview fix, please ignore */\n\n.navbar-nav {\n  flex-direction: row; }\n\n.nav-link {\n  padding-right: .5rem !important;\n  padding-left: .5rem !important; }\n\n/* Fixes dropdown menus placed on the right side */\n\n.ml-auto .dropdown-menu {\n  left: auto !important;\n  right: 0px; }\n\n.dropdown-item:hover {\n  background-color: #07ffea; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWhlYWRlci9EOlxcWmVuRGVyaXZjb1xcWmVuRGVyaXZjb0FwcC9zcmNcXGFwcFxcYXBwLWhlYWRlclxcYXBwLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSWQ7RUFDRSx1QkFBdUIsRUFBQTs7QUFHekI7RUFFRSw4QkFBOEIsRUFBQTs7QUFHaEM7RUFFRSxhQUFhO0VBRWIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHcEIsNkNBQUE7O0FBQ0E7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSwrQkFBK0I7RUFDL0IsOEJBQThCLEVBQUE7O0FBR2hDLGtEQUFBOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVUsRUFBQTs7QUFFWjtFQUVFLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLWhlYWRlci9hcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1hcmVhIC50b3AtaGVhZGVyLWFyZWEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTI1MjU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG5cclxuLmgtMTAwIHtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxufVxyXG5cclxuLyogU3RhY2tvdmVyZmxvdyBwcmV2aWV3IGZpeCwgcGxlYXNlIGlnbm9yZSAqL1xyXG4ubmF2YmFyLW5hdiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAuNXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogRml4ZXMgZHJvcGRvd24gbWVudXMgcGxhY2VkIG9uIHRoZSByaWdodCBzaWRlICovXHJcbi5tbC1hdXRvIC5kcm9wZG93bi1tZW51IHtcclxuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDBweDtcclxufVxyXG4uZHJvcGRvd24taXRlbTpob3ZlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3ZmZlYTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/app-header/app-header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/app-header/app-header.component.ts ***!
  \****************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _AuthService_AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AuthService/AuthService */ "./src/app/AuthService/AuthService.ts");



var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(auth) {
        this.auth = auth;
        this.isUserLoggedIn = false;
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
    };
    // setHeader()
    // {
    //   debugger;
    //   if(this.auth.getToken()!=null)
    //   {
    //     this.isUserLoggedIn = true;
    //   }
    // }
    AppHeaderComponent.prototype.logout = function () {
        this.isUserLoggedIn = false;
        localStorage.removeItem("expires_at");
        localStorage.removeItem("token");
        localStorage.clear();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AppHeaderComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AppHeaderComponent.prototype, "isUserLoggedIn", void 0);
    AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-header',
            template: __webpack_require__(/*! ./app-header.component.html */ "./src/app/app-header/app-header.component.html"),
            styles: [__webpack_require__(/*! ./app-header.component.scss */ "./src/app/app-header/app-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_AuthService_AuthService__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employeelist/employeelist.component */ "./src/app/employeelist/employeelist.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _employeedetail_employeedetail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employeedetail/employeedetail.component */ "./src/app/employeedetail/employeedetail.component.ts");







var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'list',
        component: _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_4__["EmployeelistComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    },
    {
        path: 'employeedetail',
        component: _employeedetail_employeedetail_component__WEBPACK_IMPORTED_MODULE_6__["EmployeedetailComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-app-header></app-app-header>\n\n<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"large\" color=\"#fff\" type=\"ball-scale-ripple-multiple\"></ngx-spinner>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-header/app-header.component */ "./src/app/app-header/app-header.component.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ZenDerivcoApp';
    }
    AppComponent.prototype.ngDoCheck = function () {
        this.header.isUserLoggedIn = true;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.header.isUserLoggedIn = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_2__["AppHeaderComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "header", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config/config */ "./src/config/config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employeelist/employeelist.component */ "./src/app/employeelist/employeelist.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _employeelist_employee_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employeelist/employee.service */ "./src/app/employeelist/employee.service.ts");
/* harmony import */ var _AuthService_token_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AuthService/token.interceptor */ "./src/app/AuthService/token.interceptor.ts");
/* harmony import */ var _AuthService_AuthService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AuthService/AuthService */ "./src/app/AuthService/AuthService.ts");
/* harmony import */ var _AuthService_ErrorInterceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AuthService/ErrorInterceptor */ "./src/app/AuthService/ErrorInterceptor.ts");
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-header/app-header.component */ "./src/app/app-header/app-header.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _register_resgister_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./register/resgister.service */ "./src/app/register/resgister.service.ts");
/* harmony import */ var _message_message_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./message/message.service */ "./src/app/message/message.service.ts");
/* harmony import */ var _employeedetail_employeedetail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./employeedetail/employeedetail.component */ "./src/app/employeedetail/employeedetail.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var src_config_date_format__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/config/date-format */ "./src/config/date-format.ts");



























var AppModule = /** @class */ (function () {
    function AppModule(dateAdapter) {
        this.dateAdapter = dateAdapter;
        dateAdapter.setLocale('en-in'); // DD/MM/YYYY
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_12__["EmployeelistComponent"],
                _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_18__["AppHeaderComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _employeedetail_employeedetail_component__WEBPACK_IMPORTED_MODULE_22__["EmployeedetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot({
                    timeOut: 1500,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true,
                }),
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"],
            ],
            providers: [_config_config__WEBPACK_IMPORTED_MODULE_10__["config"], _login_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"], _employeelist_employee_service__WEBPACK_IMPORTED_MODULE_14__["EmployeeService"], _AuthService_AuthService__WEBPACK_IMPORTED_MODULE_16__["AuthService"], _register_resgister_service__WEBPACK_IMPORTED_MODULE_20__["RegisterService"], _message_message_service__WEBPACK_IMPORTED_MODULE_21__["MessageService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _AuthService_token_interceptor__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _AuthService_ErrorInterceptor__WEBPACK_IMPORTED_MODULE_17__["ErrorInterceptor"], multi: true
                }, {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_23__["DateAdapter"],
                    useClass: src_config_date_format__WEBPACK_IMPORTED_MODULE_25__["DateFormat"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_23__["DateAdapter"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employeedetail/employeedetail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/employeedetail/employeedetail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContainer rounded\">\n<div class=\"homecontainer color-dark rounded\" >\n  <div class=\"homecol1\">\n      <h6>{{header}}</h6>\n    </div>\n    <div _ngcontent-iridium-us-c22=\"\" class=\"flag flag-bg-pink ng-star-inserted\">    \n      </div>\n  </div>\n\n<div class=\"buildcontainer color-light\">\n  <div class=\"col-md-16\">\n    <div class=\"homecol\">\n      <form [formGroup]=\"empPage\">       \n          <!-- <div style=\"float:left\"> -->\n        <div class=\"label-container\">\n          <label>First Name</label>\n        </div>\n        <div class=\"txt-container\">\n          <input type=\"text\" class=\"form-control\" formControlName='FirstName' placeholder=\"First Name *\" value=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.FirstName.errors }\" />\n          <div *ngIf=\"submitted && f.FirstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.FirstName.errors.required\">First Name is required</div>\n          </div>          \n        </div>       \n        <div class=\"label-container\">\n          <label>Last Name</label>\n        </div>\n        <div class=\"txt-container\">\n          <input type=\"text\" class=\"form-control\" formControlName='LastName' placeholder=\"LastName *\" value=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.LastName.errors }\" />\n          <div *ngIf=\"submitted && f.LastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.LastName.errors.required\">Last Name is required</div>\n          </div>\n        </div>\n        <div class=\"label-container\">\n          <label>DOB</label>\n        </div>\n        <div class=\"txt-container\">\n\n          <input matInput class=\"datepicker\" [matDatepicker]=\"picker\" formControlName='DateOfBirth'\n            placeholder=\"Date of birth *\" value=\"\" [ngClass]=\"{ 'is-invalid': submitted && f.DateOfBirth.errors }\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <div *ngIf=\"submitted && f.DateOfBirth.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.DateOfBirth.errors.required\">Date of birth is required</div>\n          </div>\n        </div>\n\n        <div class=\"label-container\">\n          <label>Phone Number</label>\n        </div>\n        <div class=\"txt-container\">\n          <input type=\"number\" class=\"form-control\" formControlName='PhoneNumber' placeholder=\"PhoneNumber *\" value=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.PhoneNumber.errors }\" />\n          <div *ngIf=\"submitted && f.PhoneNumber.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.PhoneNumber.errors.required\">Phone Number is required</div>\n          </div>\n        </div>\n        <div class=\"label-container\">\n          <label>Email</label>\n        </div>\n        <div class=\"txt-container\">\n          <input type=\"text\" class=\"form-control\" formControlName='Email' placeholder=\"Email *\" value=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.Email.errors }\" />\n          <div *ngIf=\"submitted && f.Email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.Email.errors.required\">Email is required</div>\n            <div *ngIf=\"f.Email.errors.email\">Email must be a valid email address</div>\n          </div>\n        </div>\n        <div class=\"label-container\">\n            <label>Derivco Email</label>\n          </div>\n        <div class=\"txt-container\">\n          <input type=\"text\" class=\"form-control\" formControlName='DerivcoEmail' placeholder=\"Derivco Email *\" value=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.Email.errors }\" />\n          <div *ngIf=\"submitted && f.DerivcoEmail.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.Email.errors.required\">Derivco Email is required</div>\n            <div *ngIf=\"f.Email.errors.email\">Derivco Email must be a valid email address</div>\n          </div>\n        </div>\n        <div class=\"label-container\">\n          <label>Gender</label>\n        </div>\n        <div class=\"txt-container\">\n          <select class=\"form-control\" formControlName='Gender' placeholder=\"Gender *\" value=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.Gender.errors }\">\n            <option class=\"option\" value=\"\">--Select gender--</option>\n            <option class=\"option\" value=\"1\">Male</option>\n            <option class=\"option\" value=\"2\">Female</option>\n          </select>\n          <div *ngIf=\"submitted && f.Gender.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.Gender.errors.required\">Gender is required</div>\n          </div>\n        </div>       \n        <div class=\"label-container\">\n          <label>Staff Id</label>\n        </div>\n        <div class=\"txt-container\">\n          <input type=\"text\" class=\"form-control\" formControlName='StaffId' (input)=\"fillUserId()\"\n            placeholder=\"Staff Id *\" value=\"\" [ngClass]=\"{ 'is-invalid': submitted && f.StaffId.errors }\" />\n          <div *ngIf=\"submitted && f.StaffId.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.StaffId.errors.required\">Staff Id is required</div>\n          </div>\n        </div>\n        <div class=\"label-container\">\n          <label>User Id</label>\n        </div>\n        <div class=\"txt-container\">\n          <input type=\"text\" class=\"form-control\" formControlName='UserId' placeholder=\"User Id *\" value=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.UserId.errors }\" />\n          <div *ngIf=\"submitted && f.UserId.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.UserId.errors.required\">User Id is required</div>\n          </div>\n        </div>\n        <div class=\"label-container\">\n          <label>Password</label>\n        </div>\n        <div class=\"txt-container\">\n          <input type=\"password\" class=\"form-control\" formControlName='Password' placeholder=\"Password *\" value=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.Password.errors }\" />\n          <div *ngIf=\"submitted && f.Password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.Password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.Password.errors.minlength\">Password must be at least 6 characters</div>\n            <div *ngIf=\"f.Password.errors.pattern\">\n              Password is not valid. Your password must contain at least one uppercase, one lowercase, one number and\n              one special character.\n            </div>\n          </div>\n        </div>\n        <div class=\"label-container\">\n          <label>Confirm Password</label>\n        </div>\n        <div class=\"txt-container\">\n          <input type=\"password\" class=\"form-control\" formControlName='ConfirmPassword' placeholder=\"Confirm Password *\"\n            value=\"\" [ngClass]=\"{ 'is-invalid': submitted && f.ConfirmPassword.errors }\" />\n          <div *ngIf=\"submitted && f.Password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.ConfirmPassword.errors.required\">Password is required</div>\n            <div *ngIf=\"f.ConfirmPassword.errors.minlength\">Password must be at least 6 characters</div>\n          </div>\n        </div>\n\n        <div class=\"label-container\">\n\n        </div>\n        <div class=\"txt-container\">\n          <input type=\"submit\" class=\"btnSubmit\" (click)=\"submit(empPage)\" value=\"Submit\" /> &nbsp;\n          <input type=\"reset\" class=\"btnSubmit\" value=\"Reset\" />\n        </div>\n\n        <!-- </div> -->\n        <!-- <div style=\"float: right;\">         \n            <img [src]=\"imgURL\" height=\"200\" *ngIf=\"imgURL\"><br>\n          <input #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\n         \n  \n        </div> -->\n      </form>\n    </div>\n  </div>\n</div>\n</div>\n<!-- \n\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 employee-form\">\n        <h3>Employee detail</h3>\n        <form [formGroup]=\"employeePage\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName='FirstName' placeholder=\"First Name *\" value=\"\" />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName='LastName' placeholder=\"LastName *\" value=\"\" />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName='StaffId' placeholder=\"Staff Id *\" value=\"\" />\n          </div>\n          <div class=\"form-group\">\n            <input matInput class=\"datepicker\" [matDatepicker]=\"picker\" formControlName='DateOfBirth'\n            placeholder=\"Date of birth *\" value=\"\" [ngClass]=\"{ 'is-invalid': submitted && f.DateOfBirth.errors }\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <div *ngIf=\"submitted && f.DateOfBirth.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.DateOfBirth.errors.required\">Date of birth is required</div>\n          </div>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName='PhoneNumber' placeholder=\"PhoneNumber *\" value=\"\" />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName='Email' placeholder=\"Email *\" value=\"\" />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName='DerivcoEmail' placeholder=\"Derivco Email *\"\n              value=\"\" />\n          </div>\n          <div class=\"form-group\">\n            <select class=\"form-control\" formControlName='Gender' placeholder=\"Gender *\" value=\"\">\n              <option value=\"\">--Select gender--</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <select class=\"form-control\" formControlName='ManagerId' placeholder=\"Select Manager *\" value=\"\">\n              <option value=\"\">--Select Manager--</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <select class=\"form-control\" formControlName='TeamId' placeholder=\"Select Team *\" value=\"\">\n              <option value=\"\">--Select team--</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName='UserId' placeholder=\"User name *\" value=\"\" />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName='Password' placeholder=\"Password *\" value=\"\" />\n          </div>\n          <div class=\"form-group\">\n            <select class=\"form-control\" formControlName='RoleId' placeholder=\"Select Role *\" value=\"\">\n              <option value=\"\">--Select Role--</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"submit\" class=\"btnSubmit\" (click)=\"submit(registerPage)\" value=\"Register\" /> &nbsp;\n            <input type=\"submit\" class=\"btnSubmit\" value=\"Reset\" />\n          </div>\n        </form>\n      </div>\n    </div> -->\n"

/***/ }),

/***/ "./src/app/employeedetail/employeedetail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/employeedetail/employeedetail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlZGV0YWlsL2VtcGxveWVlZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/employeedetail/employeedetail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/employeedetail/employeedetail.component.ts ***!
  \************************************************************/
/*! exports provided: EmployeedetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeedetailComponent", function() { return EmployeedetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/must-match.validator */ "./src/app/_helpers/must-match.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _employeedetail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employeedetail.service */ "./src/app/employeedetail/employeedetail.service.ts");
/* harmony import */ var _message_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../message/message.service */ "./src/app/message/message.service.ts");
/* harmony import */ var _helpers_encrypt_password__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_helpers/encrypt.password */ "./src/app/_helpers/encrypt.password.ts");










var EmployeedetailComponent = /** @class */ (function () {
    function EmployeedetailComponent(formBuilder, spinner, route, toastr, empService, message) {
        this.formBuilder = formBuilder;
        this.spinner = spinner;
        this.route = route;
        this.toastr = toastr;
        this.empService = empService;
        this.message = message;
        this.header = "Employee Detail";
        this.pwdPattern = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$";
        this.submitted = false;
        //this.toastr.setRootViewContainerRef(vcr);
    }
    EmployeedetailComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        debugger;
        if (this.route.snapshot.queryParams.empId > 0) {
            this.empId = this.route.snapshot.queryParams.empId;
            this.getEmployeeData();
        }
        else {
            this.empId = 0;
            this.spinner.hide();
        }
    };
    EmployeedetailComponent.prototype.initializeForm = function () {
        this.empPage = this.formBuilder.group({
            StaffId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            DateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            PhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            DerivcoEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            UserId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.pwdPattern)]),
            ConfirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('Password', 'ConfirmPassword')
        });
    };
    EmployeedetailComponent.prototype.getEmployeeData = function () {
        var _this = this;
        this.spinner.show();
        this.empService.getEmployeeDataById(this.empId).subscribe(function (data) {
            _this.employeePage = data;
            _this.empPage.setValue({
                StaffId: _this.employeePage.staffId,
                FirstName: _this.employeePage.firstName,
                LastName: _this.employeePage.lastName,
                DateOfBirth: _this.employeePage.dateOfBirth,
                PhoneNumber: _this.employeePage.phoneNumber,
                Email: _this.employeePage.email,
                DerivcoEmail: _this.employeePage.derivcoEmail,
                Gender: _this.employeePage.gender,
                UserId: _this.employeePage.userId,
                Password: _this.employeePage.password,
                ConfirmPassword: _this.employeePage.password
            });
            _this.spinner.hide();
        });
    };
    EmployeedetailComponent.prototype.submit = function (empPage) {
        var _this = this;
        debugger;
        this.submitted = true;
        if (empPage.valid) {
            if (empPage.status == "INVALID") {
                this.message.showResgistrationFailed();
            }
            else {
                this.spinner.show();
                var password = Object(_helpers_encrypt_password__WEBPACK_IMPORTED_MODULE_9__["EncryptPassword"])(empPage.value.Password, empPage.value.UserId);
                empPage.value.Password = password.toString();
                this.empService.UpdateEmployeeDetails(empPage.value.EmployeeId, empPage.value).subscribe(function (response) {
                    if (response.status == "302") {
                        _this.message.showUpdateFalied();
                        _this.reset();
                        _this.spinner.hide();
                    }
                    else if (response.status == "404") {
                        _this.message.showUpdateFalied();
                        _this.reset();
                        _this.spinner.hide();
                    }
                    else if (response.status == "200") {
                        _this.message.showUpdate();
                        _this.reset();
                        _this.spinner.hide();
                    }
                });
            }
        }
    };
    EmployeedetailComponent.prototype.reset = function () {
        this.empPage.controls.setValue[""];
    };
    EmployeedetailComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.msg = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    EmployeedetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employeedetail',
            template: __webpack_require__(/*! ./employeedetail.component.html */ "./src/app/employeedetail/employeedetail.component.html"),
            styles: [__webpack_require__(/*! ./employeedetail.component.scss */ "./src/app/employeedetail/employeedetail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _employeedetail_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeDetailService"],
            _message_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"]])
    ], EmployeedetailComponent);
    return EmployeedetailComponent;
}());



/***/ }),

/***/ "./src/app/employeedetail/employeedetail.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/employeedetail/employeedetail.service.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailService", function() { return EmployeeDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var EmployeeDetailService = /** @class */ (function () {
    function EmployeeDetailService(http, config) {
        this.http = http;
        this.config = config;
    }
    ;
    EmployeeDetailService.prototype.getEmployeeDataById = function (empId) {
        return this.http.get(this.config.getAPIresult() + empId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
            console.log(response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    EmployeeDetailService.prototype.UpdateEmployeeDetails = function (empId, empPage) {
        var body = JSON.stringify(empPage);
        return this.http.put(this.config.getAPIresult() + '/api/employee/' + empId, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
            console.log(response);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    EmployeeDetailService.prototype.handleError = function (error) {
        debugger;
        var errMsg;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_2__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMsg);
    };
    EmployeeDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _config_config__WEBPACK_IMPORTED_MODULE_4__["config"]])
    ], EmployeeDetailService);
    return EmployeeDetailService;
}());



/***/ }),

/***/ "./src/app/employeelist/employee.service.ts":
/*!**************************************************!*\
  !*** ./src/app/employeelist/employee.service.ts ***!
  \**************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var EmployeeService = /** @class */ (function () {
    function EmployeeService(http, config) {
        this.http = http;
        this.config = config;
    }
    ;
    EmployeeService.prototype.getEmployee = function () {
        return this.http.get(this.config.getAPIresult() + "/api/employee").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    EmployeeService.prototype.handleError = function (error) {
        debugger;
        var errMsg;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_2__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errMsg);
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _config_config__WEBPACK_IMPORTED_MODULE_5__["config"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/employeelist/employeelist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/employeelist/employeelist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"listContainer rounded\">\n  <div class=\"homecontainer color-dark rounded\">\n    <div class=\"homecol1\">\n      <h6>{{header}}</h6>\n    </div>\n    <div _ngcontent-iridium-us-c22=\"\" class=\"flag flag-bg-pink ng-star-inserted rounded\">    \n      </div>\n  </div>\n  <div class=\"right_float\">\n    <input type=\"text\" [(ngModel)]=\"queryString\" placeholder=\"Search\" class=\"search-box-txt rounded\"\n      (input)=\"onSearch()\" />\n  </div><br>\n\n  <div class=\"content_box\">\n    <div class=\"right_barss \">\n      <div class=\"tab-content\">\n        <div class=\"tab-pane fade show active\" id=\"lorem\" role=\"tabpanel\">         \n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>Name</th>\n                <th>Email</th>\n                <th>Derivco Email</th>\n                <th style=\"width:90px;\">DOB</th>\n                <th style=\"width:100px;\">Contact</th>\n                <th style=\"width:70px;\">Gender</th>\n                <th style=\"width:80px;\">Manage</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let emp of empdata\">\n                <td>{{emp.firstName}} {{emp.lastName}}</td>\n                <td>{{emp.email}}</td>\n                <td>{{emp.derivcoEmail}}</td>\n                <td>{{emp.dateOfBirth | date:\"dd/MM/yyyy\"}}</td>\n                <td>{{emp.phoneNumber}}</td>\n                <td>{{emp.gender}}</td>\n                <td>\n                  <button type=\"button\" class=\"icon_button\" (click)=\"editItem(emp.employeeId)\">\n                    <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                  </button>\n                  &nbsp;\n                  <button type=\"button\" class=\"icon_button\" (click)=\"open(emp.employeeId)\">\n                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n          <div class=\"noRecord\" *ngIf=\"noRecord\">No record found.</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/employeelist/employeelist.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/employeelist/employeelist.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content_box {\n  align-content: center;\n  display: block;\n  width: 99%;\n  margin: auto;\n  position: relative;\n  left: 0;\n  right: 0; }\n\n.left_bar {\n  float: left;\n  width: 15%;\n  background: #eaf4ff;\n  height: 100vh; }\n\n.right_bar {\n  float: left;\n  width: 85%;\n  padding: 15px;\n  /*border-left:1px solid #ccc;*/\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVsaXN0L0Q6XFxaZW5EZXJpdmNvXFxaZW5EZXJpdmNvQXBwL3NyY1xcYXBwXFxlbXBsb3llZWxpc3RcXGVtcGxveWVlbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsVUFBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVEsRUFBQTs7QUFFWjtFQUNJLFdBQVU7RUFDVixVQUFTO0VBQ1QsbUJBQWtCO0VBQ2xCLGFBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFVO0VBQ1YsVUFBUztFQUNULGFBQVk7RUFDUiw4QkFBQTtFQUNBLFlBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlbGlzdC9lbXBsb3llZWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRlbnRfYm94e1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7ICAgIFxyXG4gICAgd2lkdGg6OTklO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgXHJcbiAgICBsZWZ0OiAwOyAgXHJcbiAgICByaWdodDogMDsgIFxyXG59XHJcbi5sZWZ0X2JhcntcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB3aWR0aDoxNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiNlYWY0ZmY7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbn1cclxuXHJcbi5yaWdodF9iYXJ7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgd2lkdGg6ODUlO1xyXG4gICAgcGFkZGluZzoxNXB4O1xyXG4gICAgICAgIC8qYm9yZGVyLWxlZnQ6MXB4IHNvbGlkICNjY2M7Ki9cclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/employeelist/employeelist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/employeelist/employeelist.component.ts ***!
  \********************************************************/
/*! exports provided: EmployeelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeelistComponent", function() { return EmployeelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _employeelist_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../employeelist/employee.service */ "./src/app/employeelist/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _AuthService_AuthService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../AuthService/AuthService */ "./src/app/AuthService/AuthService.ts");







var EmployeelistComponent = /** @class */ (function () {
    function EmployeelistComponent(toastr, spinner, empService, router, auth) {
        this.toastr = toastr;
        this.spinner = spinner;
        this.empService = empService;
        this.router = router;
        this.auth = auth;
        this.itemCount = 0;
        this.noRecord = false;
        this.temp = [];
        this.empdata = [];
        this.tobeSorted = {};
        this.header = "Employee List";
    }
    EmployeelistComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    EmployeelistComponent.prototype.getData = function () {
        var _this = this;
        if (this.auth.isTokenExpired() != false) {
            this.spinner.show();
            this.empService.getEmployee().subscribe(function (res) {
                _this.empList = res;
                _this.temp = res;
                _this.empdata = res;
                _this.empList.forEach(function (element) {
                    if (element.gender == 1) {
                        element.gender = "Male";
                    }
                    else {
                        element.gender = "Female";
                    }
                });
                _this.spinner.hide();
            }, function (err) {
                console.log(err);
            });
        }
        else {
            localStorage.clear();
            this.router.navigateByUrl("login");
        }
    };
    EmployeelistComponent.prototype.editItem = function (empId) {
        debugger;
        this.router.navigate(["employeedetail"], { queryParams: { empId: empId } });
    };
    EmployeelistComponent.prototype.onSearch = function () {
        var _this = this;
        debugger;
        this.searchedItem = true;
        this.empdata = [];
        this.temp.forEach(function (element) {
            if (element.firstName.toLowerCase().indexOf(_this.queryString.toLowerCase()) > -1
                || element.lastName.toLowerCase().indexOf(_this.queryString.toLowerCase()) > -1
                || element.email.toLowerCase().indexOf(_this.queryString.toLowerCase()) > -1) {
                _this.empdata.push(element);
            }
            else {
                _this.index = element.firstName.toLowerCase().indexOf(element.firstName.toLowerCase());
                if (_this.index == undefined) {
                    _this.index = element.lastName.toLowerCase().indexOf(element.lastName.toLowerCase());
                }
                if (_this.index == undefined) {
                    _this.index = element.email.toLowerCase().indexOf(element.email.toLowerCase());
                }
                _this.empdata.slice(_this.index, 1);
            }
            if (_this.empdata.length == 0) {
                _this.noRecord = true;
            }
            else {
                _this.noRecord = false;
            }
            _this.itemsFound = _this.queryString;
            if (_this.empdata.length == _this.empdata.length) {
                _this.searchedItem = false;
            }
        });
    };
    EmployeelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employeelist',
            template: __webpack_require__(/*! ./employeelist.component.html */ "./src/app/employeelist/employeelist.component.html"),
            styles: [__webpack_require__(/*! ./employeelist.component.scss */ "./src/app/employeelist/employeelist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _employeelist_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _AuthService_AuthService__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], EmployeelistComponent);
    return EmployeelistComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-container\">\n\n  <div class=\"ro11w\">\n    <div class=\"login-form col-md-6 \">\n      <div class=\"homecontainer color-dark\">\n        <div class=\"homecol1\">\n          <h6>{{header}}</h6>\n        </div>\n        <div _ngcontent-iridium-us-c22=\"\" class=\"flag flag-bg-pink ng-star-inserted\">\n        </div>\n      </div>\n      <form [formGroup]=\"loginPage\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" formControlName='UserId' placeholder=\"username *\" value=\"\" />\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" formControlName='Password' placeholder=\"password *\" value=\"\" />\n        </div>\n        <div class=\"form-group\">\n          <input type=\"submit\" class=\"btnSubmit\" (click)=\"submit(loginPage)\" value=\"Login\" />&nbsp;\n          <input type=\"submit\" class=\"btnSubmit\" (click)=\"register()\" value=\"Register\" />\n        </div>\n        <div class=\"form-group\">\n          <a href=\"#\" class=\"ForgetPwd\">Forget Password?</a>\n        </div>\n      </form>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  margin-top: 5%;\n  margin-bottom: 5%; }\n\n.login-form {\n  padding: 5%;\n  margin: auto;\n  position: absolute;\n  top: 50;\n  left: 0;\n  bottom: 50;\n  right: 0;\n  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19); }\n\n.login-form h3 {\n  text-align: center;\n  color: #333; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFplbkRlcml2Y29cXFplbkRlcml2Y29BcHAvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsT0FBTztFQUNQLFVBQVU7RUFDVixRQUFRO0VBQ1IsNEVBQTRFLEVBQUE7O0FBRzlFO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICBwYWRkaW5nOiA1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDUwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA5cHggMjZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIGgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message/message.service */ "./src/app/message/message.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(_loginservice, router, message) {
        this._loginservice = _loginservice;
        this.router = router;
        this.message = message;
        this.header = "Login here";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    LoginComponent.prototype.initializeForm = function () {
        this.loginPage = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            UserId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    LoginComponent.prototype.submit = function (loginPage) {
        var _this = this;
        this._loginservice.login(loginPage.value).subscribe(function (res) {
            if (res.token) {
                localStorage.setItem('token', res.token);
                localStorage.setItem("expires_at", JSON.stringify(res.expiresAt));
                _this.router.navigateByUrl('list');
            }
            if (res.error) {
                _this.message.showLoginFailed(res.error);
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigateByUrl('register');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _message_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/config */ "./src/config/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var LoginService = /** @class */ (function () {
    function LoginService(http, config) {
        this.http = http;
        this.config = config;
    }
    ;
    LoginService.prototype.login = function (employee) {
        debugger;
        return this.http.post(this.config.getAPIresult() + "/api/auth", employee)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    LoginService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_2__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(errMsg);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _config_config__WEBPACK_IMPORTED_MODULE_5__["config"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/message/message.service.ts":
/*!********************************************!*\
  !*** ./src/app/message/message.service.ts ***!
  \********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



var MessageService = /** @class */ (function () {
    function MessageService(toastr) {
        this.toastr = toastr;
    }
    MessageService.prototype.showResgistrationFailed = function () {
        this.toastr.error("Resgitration failed", 'Error', {
            positionClass: "toast-top-right",
            timeOut: 1000,
            extendedTimeOut: 1200
        });
    };
    MessageService.prototype.userAlreadyExists = function () {
        this.toastr.error("User already exists", 'Error', {
            positionClass: "toast-top-right",
            timeOut: 1000,
            extendedTimeOut: 1200
        });
    };
    MessageService.prototype.showResgistrationSuccess = function () {
        this.toastr.success("Resgitration complete", 'Success', {
            positionClass: "toast-top-right",
            timeOut: 1000,
            extendedTimeOut: 1200
        });
    };
    MessageService.prototype.showUpdate = function () {
        this.toastr.success("Record updated successfully", 'Update', {
            positionClass: "toast-top-right",
            timeOut: 1000,
            extendedTimeOut: 1200
        });
    };
    MessageService.prototype.showLoginFailed = function (errorvalue) {
        this.toastr.error("Login Failed - " + errorvalue, 'Error', {
            positionClass: "toast-top-right",
            timeOut: 1000,
            extendedTimeOut: 1200
        });
    };
    MessageService.prototype.showUpdateFalied = function () {
        this.toastr.success("Record update falied", 'Update', {
            positionClass: "toast-top-right",
            timeOut: 1000,
            extendedTimeOut: 1200
        });
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container login-container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 login-form\">\n        <div class=\"homecontainer color-dark\">\n            <div class=\"homecol1\">\n              <h6>{{header}}</h6>\n            </div>\n          \n            <div _ngcontent-iridium-us-c22=\"\" class=\"flag flag-bg-pink ng-star-inserted\">    \n            </div>\n          \n          </div>\n      <form [formGroup]=\"registerPage\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" formControlName='FirstName' placeholder=\"First Name *\" value=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.FirstName.errors }\" />\n          <div *ngIf=\"submitted && f.FirstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.FirstName.errors.required\">First Name is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" formControlName='LastName' placeholder=\"LastName *\" value=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.LastName.errors }\" />\n          <div *ngIf=\"submitted && f.LastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.LastName.errors.required\">Last Name is required</div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <input matInput class=\"datepicker\" [matDatepicker]=\"picker\" formControlName='DateOfBirth'\n            placeholder=\"Date of birth *\" value=\"\" [ngClass]=\"{ 'is-invalid': submitted && f.DateOfBirth.errors }\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <div *ngIf=\"submitted && f.DateOfBirth.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.DateOfBirth.errors.required\">Date of birth is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"number\" class=\"form-control\" formControlName='PhoneNumber' placeholder=\"PhoneNumber *\" value=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.PhoneNumber.errors }\" />\n          <div *ngIf=\"submitted && f.PhoneNumber.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.PhoneNumber.errors.required\">Phone Number is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" formControlName='Email' placeholder=\"Email *\" value=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.Email.errors }\" />\n          <div *ngIf=\"submitted && f.Email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.Email.errors.required\">Email is required</div>\n            <div *ngIf=\"f.Email.errors.email\">Email must be a valid email address</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <select class=\"form-control\" formControlName='Gender' placeholder=\"Gender *\" value=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.Gender.errors }\">\n            <option class=\"option\" value=\"\">--Select gender--</option>\n            <option class=\"option\" value=\"1\">Male</option>\n            <option class=\"option\" value=\"2\">Female</option>\n          </select>\n          <div *ngIf=\"submitted && f.Gender.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.Gender.errors.required\">Gender is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" formControlName='StaffId' (input)=\"fillUserId()\" placeholder=\"Staff Id *\" value=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.StaffId.errors }\" />\n          <div *ngIf=\"submitted && f.StaffId.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.StaffId.errors.required\">Staff Id is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" formControlName='UserId' placeholder=\"User Id *\" value=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.UserId.errors }\" />\n          <div *ngIf=\"submitted && f.UserId.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.UserId.errors.required\">User Id is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" formControlName='Password' placeholder=\"Password *\" value=\"\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.Password.errors }\" />\n          <div *ngIf=\"submitted && f.Password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.Password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.Password.errors.minlength\">Password must be at least 6 characters</div>\n            <div *ngIf=\"f.Password.errors.pattern\">\n                Password is not valid. Your password must contain at least one uppercase, one lowercase, one number and one special character.\n              </div> \n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" formControlName='ConfirmPassword' placeholder=\"Confirm Password *\"\n            value=\"\" [ngClass]=\"{ 'is-invalid': submitted && f.ConfirmPassword.errors }\" />\n          <div *ngIf=\"submitted && f.Password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.ConfirmPassword.errors.required\">Password is required</div>\n            <div *ngIf=\"f.ConfirmPassword.errors.minlength\">Password must be at least 6 characters</div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <input type=\"submit\" class=\"btnSubmit\" (click)=\"submit(registerPage)\" value=\"Register\" /> &nbsp;\n          <input type=\"reset\" class=\"btnSubmit\" value=\"Reset\" /> &nbsp;\n          <input type=\"submit\" (click)=\"login()\" class=\"btnSubmit\" value=\"Back to Login\" />\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  margin-top: 5%;\n  margin-bottom: 5%; }\n\n.login-form {\n  padding: 5%;\n  margin: auto;\n  position: absolute;\n  top: 50;\n  left: 0;\n  bottom: 50;\n  right: 0;\n  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19); }\n\n.login-form h3 {\n  text-align: center;\n  color: #333; }\n\n.btnSubmit {\n  width: 30%;\n  padding: 1.5%;\n  border: none;\n  cursor: pointer; }\n\n.login-form .btnSubmit {\n  font-weight: 600;\n  color: #fff;\n  background-color: #0062cc; }\n\n.login-form .ForgetPwd {\n  color: #0062cc;\n  font-weight: 600;\n  text-decoration: none; }\n\n.option {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXFplbkRlcml2Y29cXFplbkRlcml2Y29BcHAvc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsT0FBTztFQUNQLFVBQVU7RUFDVixRQUFRO0VBQ1IsNEVBQTRFLEVBQUE7O0FBRzlFO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCLEVBQUE7O0FBS3hCO0VBQ0csZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1mb3JtIHtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDUwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOXB4IDI2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tZm9ybSBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbiAgXHJcbiAgLmJ0blN1Ym1pdCB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgcGFkZGluZzogMS41JTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWZvcm0gLmJ0blN1Ym1pdCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2MmNjO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tZm9ybSAuRm9yZ2V0UHdkIHtcclxuICAgIGNvbG9yOiAjMDA2MmNjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcblxyXG4gIFxyXG4gLm9wdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgfVxyXG5cclxuIFxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _resgister_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resgister.service */ "./src/app/register/resgister.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message/message.service */ "./src/app/message/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/must-match.validator */ "./src/app/_helpers/must-match.validator.ts");
/* harmony import */ var _helpers_encrypt_password__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/encrypt.password */ "./src/app/_helpers/encrypt.password.ts");







// import custom validator to validate that password and confirm password fields match


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(registerService, spinner, message, router, formBuilder) {
        this.registerService = registerService;
        this.spinner = spinner;
        this.message = message;
        this.router = router;
        this.formBuilder = formBuilder;
        this.itemcount = 0;
        this.header = "New Employee Registration";
        this.submitted = false;
        this.pwdPattern = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    RegisterComponent.prototype.initializeForm = function () {
        this.registerPage = this.formBuilder.group({
            EmployeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            StaffId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            DateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            PhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            UserId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.pwdPattern)]),
            ConfirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_7__["MustMatch"])('Password', 'ConfirmPassword')
        });
    };
    RegisterComponent.prototype.validateAllFormFields = function (formGroup) {
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                if (control.disabled == false) {
                    if ((control.status == "INVALID")) {
                        control.markAsTouched();
                        return false;
                    }
                }
            }
        });
        return true;
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.registerPage.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.submit = function (registerPage) {
        var _this = this;
        debugger;
        this.submitted = true;
        if (this.registerPage.valid) {
            if (this.validateAllFormFields(this.registerPage) == true) {
                if (registerPage.status == "INVALID") {
                    this.required = true;
                }
                else {
                    this.spinner.show();
                    var password = Object(_helpers_encrypt_password__WEBPACK_IMPORTED_MODULE_8__["EncryptPassword"])(registerPage.value.Password, registerPage.value.UserId);
                    registerPage.value.Password = password.toString();
                    this.registerService.regsiter(registerPage.value).subscribe(function (response) {
                        if (response.status == "302") {
                            _this.message.showResgistrationFailed();
                            _this.reset();
                            _this.spinner.hide();
                        }
                        else if (response.status == "404") {
                            _this.message.showResgistrationFailed();
                            _this.reset();
                            _this.spinner.hide();
                        }
                        else if (response.status == "200") {
                            _this.message.showResgistrationSuccess();
                            _this.reset();
                            _this.spinner.hide();
                        }
                    });
                }
            }
        }
        else {
            return;
        }
    };
    RegisterComponent.prototype.reset = function () {
        this.registerPage.controls.setValue[""];
    };
    RegisterComponent.prototype.fillUserId = function () {
        var fName = this.registerPage.controls["FirstName"].value;
        var lName = this.registerPage.controls["LastName"].value;
        this.registerPage.controls["UserId"].setValue(fName.charAt(0).toLocaleLowerCase() + lName.charAt(0).toLocaleLowerCase() + this.registerPage.controls["StaffId"].value);
    };
    RegisterComponent.prototype.login = function () {
        this.router.navigateByUrl("login");
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_resgister_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _message_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/resgister.service.ts":
/*!***********************************************!*\
  !*** ./src/app/register/resgister.service.ts ***!
  \***********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/config/config */ "./src/config/config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var RegisterService = /** @class */ (function () {
    function RegisterService(http, config) {
        this.http = http;
        this.config = config;
    }
    RegisterService.prototype.regsiter = function (registerPage) {
        return this.http.post(this.config.getAPIresult() + "/api/register", registerPage)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    RegisterService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMsg);
    };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_config_config__WEBPACK_IMPORTED_MODULE_4__["config"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/config/config.ts":
/*!******************************!*\
  !*** ./src/config/config.ts ***!
  \******************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var config = /** @class */ (function () {
    function config() {
        this.APIresult = "https://localhost:44334";
    }
    config.prototype.getAPIresult = function () {
        return this.APIresult;
    };
    config = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], config);
    return config;
}());



/***/ }),

/***/ "./src/config/date-format.ts":
/*!***********************************!*\
  !*** ./src/config/date-format.ts ***!
  \***********************************/
/*! exports provided: DateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormat", function() { return DateFormat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");


var SUPPORTS_INTL_API = typeof Intl !== 'undefined';
var DateFormat = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DateFormat, _super);
    function DateFormat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.useUtcForDisplay = true;
        return _this;
    }
    DateFormat.prototype.parse = function (value) {
        if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
            var str = value.split('/');
            var year = Number(str[2]);
            var month = Number(str[1]) - 1;
            var date = Number(str[0]);
            return new Date(date, month, year);
        }
        var timestamp = typeof value === 'number' ? value : Date.parse(value);
        return isNaN(timestamp) ? null : new Date(timestamp);
    };
    return DateFormat;
}(_angular_material__WEBPACK_IMPORTED_MODULE_1__["NativeDateAdapter"]));



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ZenDerivco\ZenDerivcoApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map