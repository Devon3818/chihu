webpackJsonp([18],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_work__ = __webpack_require__(401);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWorkModule", function() { return MyWorkModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyWorkModule = (function () {
    function MyWorkModule() {
    }
    return MyWorkModule;
}());
MyWorkModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_work__["a" /* MyWork */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_work__["a" /* MyWork */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__my_work__["a" /* MyWork */]
        ]
    })
], MyWorkModule);

//# sourceMappingURL=my-work.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyWork; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyWork = (function () {
    function MyWork(http, navCtrl, navParams, UserService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserService = UserService;
        this.items = [];
        this.getdata();
    }
    MyWork.prototype.getdata = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu/my_work";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "id=" + this.UserService._user._id, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.items = res.json();
        });
    };
    MyWork.prototype.pushArticlePage = function (_id) {
        this.navCtrl.push('Article', {
            _id: _id
        });
    };
    return MyWork;
}());
MyWork = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-my-work',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/my-work/my-work.html"*/'<ion-header>\n\n    <ion-navbar color="bule">\n        <ion-title>我的作品</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <section class="dv_item" *ngFor="let item of items">\n        <section class="dv_item_head">\n            <img [src]="item.userimg" />\n            <p>{{item.name}} 分享的作品</p>\n        </section>\n        <section (click)="pushArticlePage( item._id );" class="dv_item_banner" [style.background]="\'url(\'+item.workbanner+\')\'"></section>\n        <h6 (click)="pushArticlePage( item._id );">{{item.title}}</h6>\n\n        <p (click)="pushArticlePage( item._id );">{{item.text}}</p>\n        <section class="dv_item_bottom">\n            <p>{{item.mark.think}} 感谢 • {{item.mark.collect}} 收藏 • {{item.mark.cont}} 评论</p>\n        </section>\n    </section>\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/my-work/my-work.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]])
], MyWork);

//# sourceMappingURL=my-work.js.map

/***/ })

});
//# sourceMappingURL=18.main.js.map