webpackJsonp([30],{

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_cook_title__ = __webpack_require__(382);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCookTitleModule", function() { return CreateCookTitleModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateCookTitleModule = (function () {
    function CreateCookTitleModule() {
    }
    return CreateCookTitleModule;
}());
CreateCookTitleModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_cook_title__["a" /* CreateCookTitle */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_cook_title__["a" /* CreateCookTitle */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__create_cook_title__["a" /* CreateCookTitle */]
        ]
    })
], CreateCookTitleModule);

//# sourceMappingURL=create-cook-title.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_work_service__ = __webpack_require__(248);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCookTitle; });
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
 * Generated class for the CreateCookTitle page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CreateCookTitle = (function () {
    function CreateCookTitle(navCtrl, navParams, WorkService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.WorkService = WorkService;
        this.title = '';
    }
    //继续
    CreateCookTitle.prototype.next = function () {
        this.WorkService._title = this.title;
        //alert(this.WorkService._title);
        this.navCtrl.push('CreateCookData');
    };
    CreateCookTitle.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateCookTitle');
    };
    return CreateCookTitle;
}());
CreateCookTitle = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'page-create-cook-title',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/create-cook-title/create-cook-title.html"*/'<!--\n  Generated template for the CreateCookTitle page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar>\n        <ion-title>创建菜谱</ion-title>\n        <ion-buttons end (click)="next();">\n            <ion-title>继续</ion-title>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <input class="dv_work_title" [(ngModel)]="title" type="text" placeholder="写下你的菜谱名吧" />\n\n    <ion-list>\n        <ion-list-header>\n            食谱标签\n        </ion-list-header>\n\n        <ion-item>\n            <ion-label>家常菜</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>快手菜</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>下饭菜</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>素菜</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>大鱼大肉</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>下酒菜</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>小清新</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>创意菜</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>减肥</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>美容</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/create-cook-title/create-cook-title.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_work_service__["a" /* WorkService */]])
], CreateCookTitle);

//# sourceMappingURL=create-cook-title.js.map

/***/ })

});
//# sourceMappingURL=30.main.js.map