webpackJsonp([27],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__focus_user__ = __webpack_require__(391);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusUserModule", function() { return FocusUserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FocusUserModule = (function () {
    function FocusUserModule() {
    }
    return FocusUserModule;
}());
FocusUserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__focus_user__["a" /* FocusUser */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__focus_user__["a" /* FocusUser */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__focus_user__["a" /* FocusUser */]
        ]
    })
], FocusUserModule);

//# sourceMappingURL=focus-user.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusUser; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FocusUser = (function () {
    function FocusUser(http, navCtrl, navParams, UserService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserService = UserService;
        //数据存储
        this.items = [];
        this.rootNavCtrl = navParams.get('rootNavCtrl');
        this.getdata();
    }
    //获取数据
    FocusUser.prototype.getdata = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu/myfork";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "id=" + this.UserService._user._id, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.items = res.json();
        });
    };
    //查看TA的个人主页
    FocusUser.prototype.pushPersonPage = function (_id) {
        this.rootNavCtrl.push('Person', {
            _id: _id
        });
    };
    return FocusUser;
}());
FocusUser = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-focus-user',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/focus-user/focus-user.html"*/'<ion-content>\n    <ion-list>\n\n        <ion-item *ngFor="let item of items" (click)="pushPersonPage( item.uid );">\n            <ion-avatar item-left>\n                <img [src]="item.uuserimg">\n            </ion-avatar>\n            <h2>{{item.uname}}</h2>\n        </ion-item>\n\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/focus-user/focus-user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]])
], FocusUser);

//# sourceMappingURL=focus-user.js.map

/***/ })

});
//# sourceMappingURL=27.main.js.map