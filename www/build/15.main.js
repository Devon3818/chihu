webpackJsonp([15],{

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more_page__ = __webpack_require__(389);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePageModule", function() { return MorePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MorePageModule = (function () {
    function MorePageModule() {
    }
    return MorePageModule;
}());
MorePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__more_page__["a" /* MorePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__more_page__["a" /* MorePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__more_page__["a" /* MorePage */]
        ]
    })
], MorePageModule);

//# sourceMappingURL=more-page.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__(253);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
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
 * Generated class for the MorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MorePage = (function () {
    function MorePage(navCtrl, navParams, UserService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserService = UserService;
        this.name = '';
        this.mimg = '';
        this.init();
    }
    MorePage.prototype.init = function () {
        this.name = this.UserService._user.name;
        this.mimg = this.UserService._user.img;
    };
    MorePage.prototype.ionViewDidEnter = function () {
        this.init();
    };
    MorePage.prototype.pushPerson = function () {
        //this.checkLogin( Person );
        this.navCtrl.push('Person');
    };
    MorePage.prototype.pushFocusPage = function () {
        //this.checkLogin( Focus );
        this.navCtrl.push('Focus');
    };
    MorePage.prototype.pushCollectPage = function () {
        //this.checkLogin( Collect );
        this.navCtrl.push('Collect');
    };
    MorePage.prototype.pushMySharePage = function () {
        //this.checkLogin( MyShare );
        this.navCtrl.push('MyShare');
    };
    MorePage.prototype.pushMyQuestionPage = function () {
        //this.checkLogin( MyQuestion );
        this.navCtrl.push('MyQuestion');
    };
    MorePage.prototype.pushMyWorkPage = function () {
        //this.checkLogin( MyWork );
        this.navCtrl.push('MyWork');
    };
    MorePage.prototype.pushSettingPage = function () {
        this.navCtrl.push('Setting');
    };
    MorePage.prototype.clear = function () {
        this.UserService.clearStorage();
        alert("清除用户缓存成功！");
    };
    //检查登录状态
    MorePage.prototype.checkLogin = function (page) {
        //alert(this.UserService._user.id);
        if (this.UserService._user.id) {
            this.navCtrl.push(page);
        }
        else {
            this.navCtrl.push('Login');
        }
    };
    MorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MorePage');
    };
    return MorePage;
}());
MorePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-more-page',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/more-page/more-page.html"*/'<!--\n  Generated template for the More page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="bule">\n        <ion-title>更多</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content">\n    <section class="dv_data" (click)="pushPerson();">\n        <img [src]="mimg" />\n        <section class="dv_name_wrap">\n            <h5>{{name}}</h5>\n            <p>查看或编辑个人主页</p>\n        </section>\n    </section>\n\n    <ion-list no-border>\n\n        <ion-item (click)="pushFocusPage();">\n            <ion-icon name=\'eye\' item-left color="h"></ion-icon>\n            我的关注\n        </ion-item>\n        <ion-item (click)="pushCollectPage();">\n            <ion-icon name=\'star\' item-left color="h"></ion-icon>\n            我的收藏\n        </ion-item>\n        <ion-item (click)="pushMySharePage();">\n            <ion-icon name=\'document\' item-left color="h"></ion-icon>\n            我的分享\n        </ion-item>\n        <ion-item (click)="pushMyQuestionPage();">\n            <ion-icon name=\'time\' item-left color="h"></ion-icon>\n            我的提问\n        </ion-item>\n        <ion-item (click)="pushMyWorkPage();">\n            <ion-icon name=\'bookmarks\' item-left color="h"></ion-icon>\n            我的作品\n        </ion-item>\n        <ion-item>\n            <ion-icon name=\'play\' item-left color="h"></ion-icon>\n            我的评论\n        </ion-item>\n        <ion-item (click)="pushSettingPage();">\n            <ion-icon name=\'school\' item-left color="h"></ion-icon>\n            设置\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/more-page/more-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]])
], MorePage);

//# sourceMappingURL=more-page.js.map

/***/ })

});
//# sourceMappingURL=15.main.js.map