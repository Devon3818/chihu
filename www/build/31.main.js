webpackJsonp([31],{

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments__ = __webpack_require__(380);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsModule", function() { return CommentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommentsModule = (function () {
    function CommentsModule() {
    }
    return CommentsModule;
}());
CommentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__comments__["a" /* Comments */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comments__["a" /* Comments */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__comments__["a" /* Comments */]
        ]
    })
], CommentsModule);

//# sourceMappingURL=comments.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comments; });
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
 * Generated class for the Comments page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Comments = (function () {
    function Comments(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [1, 1, 1];
    }
    Comments.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Comments');
    };
    return Comments;
}());
Comments = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-comments',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/comments/comments.html"*/'<!--\n  Generated template for the Comments page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="bule">\n        <ion-title>评论</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <section class="dv_list">\n        <!--重复-->\n        <section class="dv_item" *ngFor="let item of items">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。</p>\n            <section class="dv_item_bottom">\n                <p class="dv_fr">会话列表</p>\n                <p class="dv_fl">10-10</p>\n            </section>\n        </section>\n\n    </section>\n\n</ion-content>\n\n<ion-footer no-border>\n    <ion-grid class="input-wrap">\n        <ion-row>\n\n            <ion-col col-10>\n                <ion-textarea #chat_input placeholder="Text Input" [(ngModel)]="editorMsg" (keyup.enter)="sendMsg()" (focus)="scrollToBottom()"></ion-textarea>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button clear icon-only item-right (click)="sendMsg()">\n          <ion-icon  name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n        </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/comments/comments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Comments);

//# sourceMappingURL=comments.js.map

/***/ })

});
//# sourceMappingURL=31.main.js.map