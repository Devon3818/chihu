webpackJsonp([22],{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_page__ = __webpack_require__(394);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessagesPageModule = (function () {
    function MessagesPageModule() {
    }
    return MessagesPageModule;
}());
MessagesPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__messages_page__["a" /* MessagesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__messages_page__["a" /* MessagesPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__messages_page__["a" /* MessagesPage */]
        ]
    })
], MessagesPageModule);

//# sourceMappingURL=messages-page.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesPage = (function () {
    function MessagesPage(navCtrl, navParams, UserService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserService = UserService;
        this.list = [];
        this.nomessage = true;
        this.getAllMessages();
    }
    MessagesPage.prototype.pushChatPage = function (_id, type, idx) {
        var name, userimg;
        if (type == 'send') {
            name = this.list[idx].latestMessage.content.contentStringMap.toUserName;
            userimg = this.list[idx].latestMessage.content.contentStringMap.targuserimg;
        }
        else {
            name = this.list[idx].latestMessage.content.contentStringMap.name;
            userimg = this.list[idx].latestMessage.content.contentStringMap.userimg;
        }
        this.navCtrl.push('Chat', {
            _id: _id,
            name: name,
            userimg: userimg
        });
    };
    MessagesPage.prototype.getAllMessages = function () {
        if (this.UserService._user._id) {
            var _that = this;
            window.JMessage.getAllSingleConversation(function (response) {
                var jpdata = JSON.parse(response), len = jpdata.length;
                if (len != '0') {
                    _that.nomessage = false;
                    _that.list = jpdata;
                }
            }, function (errorMsg) {
                alert(errorMsg); // 输出错误信息。
            });
        }
    };
    MessagesPage.prototype.ionViewDidEnter = function () {
        this.getAllMessages();
    };
    return MessagesPage;
}());
MessagesPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-messages-page',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/messages-page/messages-page.html"*/'<!--\n  Generated template for the Messages page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="bule">\n        <ion-title>私信</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content [class.nomessage]="nomessage">\n\n    <ion-list>\n\n        <ion-item (click)="pushChatPage( item.targetId, item.latestMessage[\'direct\'], i );" *ngFor="let item of list; let i=index">\n            <ion-avatar item-left>\n                <img *ngIf="item.latestMessage[\'direct\'] == \'receive\'" [src]="item.latestMessage.content.contentStringMap.userimg">\n                <img *ngIf="item.latestMessage[\'direct\'] == \'send\'" [src]="item.latestMessage.content.contentStringMap.targuserimg">\n            </ion-avatar>\n\n            <h2 *ngIf="item.latestMessage[\'direct\'] == \'receive\'">{{item.latestMessage.content.contentStringMap.name}}</h2>\n            <h2 *ngIf="item.latestMessage[\'direct\'] == \'send\'">{{item.latestMessage.content.contentStringMap.toUserName}}</h2>\n            <p>{{item.latestMessage.content.contentStringMap.cont}}</p>\n            <ion-note item-right>{{item.lastMsgDate | date:\'jm\'}}</ion-note>\n        </ion-item>\n\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/messages-page/messages-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]])
], MessagesPage);

//# sourceMappingURL=messages-page.js.map

/***/ })

});
//# sourceMappingURL=22.main.js.map