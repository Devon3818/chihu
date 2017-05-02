webpackJsonp([9],{

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perparticular__ = __webpack_require__(395);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerparticularModule", function() { return PerparticularModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PerparticularModule = (function () {
    function PerparticularModule() {
    }
    return PerparticularModule;
}());
PerparticularModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__perparticular__["a" /* Perparticular */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perparticular__["a" /* Perparticular */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__perparticular__["a" /* Perparticular */]
        ]
    })
], PerparticularModule);

//# sourceMappingURL=perparticular.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Perparticular; });
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
 * Generated class for the Perparticular page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Perparticular = (function () {
    function Perparticular(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Perparticular.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Perparticular');
    };
    return Perparticular;
}());
Perparticular = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-perparticular',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/perparticular/perparticular.html"*/'<!--\n  Generated template for the Perparticular page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="content overflow" id="dv_perpart">\n    <section class="dv_ban_top">\n        <div class="dv_ban_top_div">\n            <p>关注的话题</p>\n            <h2>12</h2>\n        </div>\n        <div class="dv_ban_top_div">\n            <p>我关注的人</p>\n            <h2>12</h2>\n        </div>\n        <div class="dv_ban_top_div">\n            <p>关注我的人</p>\n            <h2>123245</h2>\n        </div>\n        <p>多it大牛在我这个年龄时已经很厉害了，我该怎么做才能变成他们那样的人，我一直在思考</p>\n        <ion-row>\n            <ion-col>\n                <button ion-button icon-left clear small>\n                  <ion-icon name="eye"></ion-icon>\n                  <div>7147</div>\n                </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button icon-left clear small>\n                  <ion-icon name="text"></ion-icon>\n                  <div>123</div>\n                </button>\n            </ion-col>\n            <ion-col center text-center>\n                <button ion-button>关注</button>\n            </ion-col>\n        </ion-row>\n    </section>\n\n    <ion-list no-border>\n\n        <ion-item>\n            <ion-icon name=\'eye\' item-left color="h"></ion-icon>\n            性别\n            <ion-note item-right>\n                男\n            </ion-note>\n        </ion-item>\n        <ion-item>\n            <ion-icon name=\'star\' item-left color="h"></ion-icon>\n            学历\n            <ion-note item-right>\n                大专\n            </ion-note>\n        </ion-item>\n        <ion-item>\n            <ion-icon name=\'document\' item-left color="h"></ion-icon>\n            居住地\n            <ion-note item-right>\n                中国\n            </ion-note>\n        </ion-item>\n        <ion-item>\n            <ion-icon name=\'time\' item-left color="h"></ion-icon>\n            行业\n            <ion-note item-right>\n                计算机\n            </ion-note>\n        </ion-item>\n\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/perparticular/perparticular.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Perparticular);

//# sourceMappingURL=perparticular.js.map

/***/ })

});
//# sourceMappingURL=9.main.js.map