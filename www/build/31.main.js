webpackJsonp([31],{

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(372);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatModule = (function () {
    function ChatModule() {
    }
    return ChatModule;
}());
ChatModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* Chat */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* Chat */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* Chat */]
        ]
    })
], ChatModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_im_service__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
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
 * Generated class for the Chat page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Chat = (function () {
    function Chat(navCtrl, navParams, events, ref, ImService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.ref = ref;
        this.ImService = ImService;
        this.msgList = [1, 1, 1, 1];
        this.editorMsg = '';
        this.toUserName = "Devon";
    }
    Chat.prototype.ionViewWillLeave = function () {
        // unsubscribe
        this.events.unsubscribe('chat:received');
    };
    Chat.prototype.sendMsg = function () {
        this.ImService.sendTextMessage("1122", "Tomy$Devon$这是一条我发的信息,这是一条我发的信息,这是一条我发的信息$1111");
        this.pushNewMsg();
        this.messageInput.setFocus();
    };
    Chat.prototype.pushNewMsg = function () {
        this.msgList.push(1);
        this.editorMsg = '';
        this.scrollToBottom();
    };
    Chat.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 300);
    };
    return Chat;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Content */])
], Chat.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])('chat_input'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* TextInput */])
], Chat.prototype, "messageInput", void 0);
Chat = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/chat/chat.html"*/'<!--\n  Generated template for the Chat page.\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="bule">\n        <ion-title>{{toUserName}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div class="message-wrap">\n\n        <div *ngFor="let msg of msgList" class="message right">\n            <img class="user-img" alt="" src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n            <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>\n            <div class="msg-detail">\n                <div class="msg-info">\n                    <p>3:15</p>\n                </div>\n                <div class="msg-content">\n                    <span class="triangle"></span>\n                    <p class="line-breaker ">cordova CLI: 6.4.0 Ionic Framework Version: 3.0.0 Ionic CLI Version: 2.2.1 Ionic App Lib Version: 2.2.0</p>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</ion-content>\n\n<ion-footer no-border>\n    <ion-grid class="input-wrap">\n        <ion-row>\n\n            <ion-col col-10>\n                <ion-textarea #chat_input placeholder="Text Input" [(ngModel)]="editorMsg" (keyup.enter)="sendMsg()" (focus)="scrollToBottom()"></ion-textarea>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button clear icon-only item-right (click)="sendMsg()">\n          <ion-icon  name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n        </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Events */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ChangeDetectorRef */],
        __WEBPACK_IMPORTED_MODULE_2__service_im_service__["a" /* ImService */]])
], Chat);

//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=31.main.js.map