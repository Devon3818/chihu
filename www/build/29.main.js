webpackJsonp([29],{

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_question_type__ = __webpack_require__(387);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuestionTypeModule", function() { return CreateQuestionTypeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateQuestionTypeModule = (function () {
    function CreateQuestionTypeModule() {
    }
    return CreateQuestionTypeModule;
}());
CreateQuestionTypeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_question_type__["a" /* CreateQuestionType */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_question_type__["a" /* CreateQuestionType */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__create_question_type__["a" /* CreateQuestionType */]
        ]
    })
], CreateQuestionTypeModule);

//# sourceMappingURL=create-question-type.module.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateQuestionType; });
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
 * Generated class for the CreateQuestionType page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CreateQuestionType = (function () {
    function CreateQuestionType(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreateQuestionType.prototype.next = function () {
        this.navCtrl.push('CreateQuestionTitle');
    };
    CreateQuestionType.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateQuestionType');
    };
    return CreateQuestionType;
}());
CreateQuestionType = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-create-question-type',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/create-question-type/create-question-type.html"*/'<!--\n  Generated template for the CreateQuestionType page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>提问</ion-title>\n        <ion-buttons end (click)="next();">\n            <ion-title>下一步</ion-title>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list-header>\n        问题标签\n    </ion-list-header>\n    <ion-list>\n\n\n        <ion-item>\n            <ion-label>家常菜</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>快手菜</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>下饭菜</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>素菜</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>大鱼大肉</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>下酒菜</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>小清新</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>创意菜</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>减肥</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>美容</ion-label>\n            <ion-checkbox color="secondary"></ion-checkbox>\n        </ion-item>\n\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/create-question-type/create-question-type.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CreateQuestionType);

//# sourceMappingURL=create-question-type.js.map

/***/ })

});
//# sourceMappingURL=29.main.js.map