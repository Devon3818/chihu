webpackJsonp([12],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regist__ = __webpack_require__(406);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistModule", function() { return RegistModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistModule = (function () {
    function RegistModule() {
    }
    return RegistModule;
}());
RegistModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__regist__["a" /* Regist */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__regist__["a" /* Regist */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__regist__["a" /* Regist */]
        ]
    })
], RegistModule);

//# sourceMappingURL=regist.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Regist; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Regist = (function () {
    function Regist(navCtrl, navParams, UserService, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserService = UserService;
        this.http = http;
        this.userdata = null;
    }
    Regist.prototype.registJP = function () {
        var name = this.userdata._id + '', pass = this.userdata._id + '', _that = this;
        if (window.JMessage) {
            window.JMessage.register(name, pass, function () {
                // 注册成功。
                _that.UserService.setUser(_that.userdata);
                _that.navCtrl.popToRoot();
            }, function (errorStr) {
                alert(errorStr); // 输出错误信息。
            });
        }
    };
    Regist.prototype.regist = function () {
        var _this = this;
        if (!this.name || !this.pass) {
            return true;
        }
        var url = "http://www.devonhello.com/chihu/register";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "name=" + this.name + "&pass=" + this.pass, {
            headers: headers
        })
            .subscribe(function (res) {
            if (res.json()[0]['_id']) {
                _this.userdata = res.json()[0];
                _this.registJP();
            }
        });
    };
    return Regist;
}());
Regist = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-regist',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/regist/regist.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>吃乎注册</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <img class="dv_logo" src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n\n    <ion-list>\n\n        <ion-item>\n            <ion-label floating>用户：</ion-label>\n            <ion-input type="text" [(ngModel)]="name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>密码：</ion-label>\n            <ion-input type="password" [(ngModel)]="pass"></ion-input>\n        </ion-item>\n\n    </ion-list>\n\n    <div padding>\n        <button ion-button color="icon-shop" block (click)="regist();">注册</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/regist/regist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], Regist);

//# sourceMappingURL=regist.js.map

/***/ })

});
//# sourceMappingURL=12.main.js.map