webpackJsonp([13],{

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_share__ = __webpack_require__(391);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyShareModule", function() { return MyShareModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyShareModule = (function () {
    function MyShareModule() {
    }
    return MyShareModule;
}());
MyShareModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_share__["a" /* MyShare */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_share__["a" /* MyShare */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__my_share__["a" /* MyShare */]
        ]
    })
], MyShareModule);

//# sourceMappingURL=my-share.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyShare; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MyShare page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MyShare = (function () {
    function MyShare(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyShare.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyShare');
    };
    //查看分享
    MyShare.prototype.pushOpenSharePage = function () {
        this.navCtrl.push('OpenShare');
    };
    return MyShare;
}());
MyShare = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-my-share',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/my-share/my-share.html"*/'<!--\n  Generated template for the MyShare page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar color="bule">\n        <ion-title>我的分享</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <section class="dv_hot_q dv_hot_w">\n        <!--重复-->\n        <section class="dv_item" (click)="pushOpenSharePage();">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon 分享了心情</p>\n                <span class="time">昨天 3:30</span>\n            </section>\n\n            <section class="wrap">\n                <div class="imgs" [style.background]="\'url(http://www.runoob.com/wp-content/uploads/2015/07/5a7d00514af1e464221c677c15e8e990.png)\'"></div>\n\n                <div class="imgs" [style.background]="\'url(https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100)\'"></div>\n\n                <div class="imgs" [style.background]="\'url(https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100)\'"></div>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 赞同 • 677评论 • 关注问题</p>\n            </section>\n        </section>\n\n        <!--重复-->\n        <section class="dv_item" (click)="pushOpenSharePage();">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon 分享了心情</p>\n                <span class="time">昨天 3:30</span>\n            </section>\n            <section class="wrap">\n                <div class="imgs" [style.background]="\'url(http://www.runoob.com/wp-content/uploads/2015/07/5a7d00514af1e464221c677c15e8e990.png)\'"></div>\n            </section>\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 点赞 • 677评论</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item" (click)="pushOpenSharePage();">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon 分享了心情</p>\n                <span class="time">昨天 3:30</span>\n            </section>\n            <section class="wrap">\n                <div class="imgs" [style.background]="\'url(http://www.runoob.com/wp-content/uploads/2015/07/5a7d00514af1e464221c677c15e8e990.png)\'"></div>\n\n                <div class="imgs" [style.background]="\'url(https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100)\'"></div>\n            </section>\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 点赞 • 677评论</p>\n            </section>\n        </section>\n\n        <!--重复-->\n        <section class="dv_item" (click)="pushOpenSharePage();">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon 分享了作品</p>\n            </section>\n            <section class="wrap">\n                <div class="imgs" [style.background]="\'url(http://www.runoob.com/wp-content/uploads/2015/07/5a7d00514af1e464221c677c15e8e990.png)\'"></div>\n\n                <div class="imgs" [style.background]="\'url(https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100)\'"></div>\n            </section>\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 点赞 • 677评论</p>\n            </section>\n        </section>\n    </section>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/my-share/my-share.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MyShare);

//# sourceMappingURL=my-share.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map