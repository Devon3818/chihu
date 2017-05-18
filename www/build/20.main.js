webpackJsonp([20],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_question__ = __webpack_require__(399);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyQuestionModule", function() { return MyQuestionModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyQuestionModule = (function () {
    function MyQuestionModule() {
    }
    return MyQuestionModule;
}());
MyQuestionModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_question__["a" /* MyQuestion */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_question__["a" /* MyQuestion */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__my_question__["a" /* MyQuestion */]
        ]
    })
], MyQuestionModule);

//# sourceMappingURL=my-question.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyQuestion; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyQuestion = (function () {
    function MyQuestion(http, navCtrl, navParams, UserService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserService = UserService;
        this.items = [];
        this.getdata();
    }
    MyQuestion.prototype.getdata = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu/my_question";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "id=" + this.UserService._user._id, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.items = res.json();
        });
    };
    //打开页面
    MyQuestion.prototype.pushQuestionPage = function (_id) {
        this.navCtrl.push('Question', {
            _id: _id
        });
    };
    return MyQuestion;
}());
MyQuestion = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-my-question',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/my-question/my-question.html"*/'<ion-header no-border>\n\n    <ion-navbar color="bule">\n        <ion-title>我的提问</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list inset>\n        <button (click)="pushQuestionPage( item._id );" ion-item *ngFor="let item of items">\n            {{ item.title }}\n        </button>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/my-question/my-question.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]])
], MyQuestion);

//# sourceMappingURL=my-question.js.map

/***/ })

});
//# sourceMappingURL=20.main.js.map