webpackJsonp([10],{

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support__ = __webpack_require__(411);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportModule", function() { return SupportModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SupportModule = (function () {
    function SupportModule() {
    }
    return SupportModule;
}());
SupportModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__support__["a" /* Support */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__support__["a" /* Support */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__support__["a" /* Support */]
        ]
    })
], SupportModule);

//# sourceMappingURL=support.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Support; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Support = (function () {
    function Support(http, navCtrl, navParams, UserService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserService = UserService;
        this.items = [];
        this.nomessage = false;
        this.rootNavCtrl = navParams.get('rootNavCtrl');
        this.getdata();
    }
    Support.prototype.ionViewDidEnter = function () {
        this.getdata();
    };
    Support.prototype.getdata = function () {
        var _this = this;
        if (!this.UserService._user._id) {
            this.items = [];
            return true;
        }
        var url = "http://www.devonhello.com/chihu/getthank";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "uid=" + this.UserService._user._id, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.items = res.json();
            if (res.json().length == '0') {
                _this.nomessage = true;
            }
        });
    };
    Support.prototype.open = function (artid, type) {
        switch (type) {
            case '0':
                this.rootNavCtrl.push('AnswerPage', {
                    _id: artid
                });
                break;
            case '1':
                this.rootNavCtrl.push('Article', {
                    _id: artid
                });
                break;
            case '2':
                this.rootNavCtrl.push('OpenShare', {
                    _id: artid
                });
                break;
            default:
                break;
        }
    };
    Support.prototype.pushPersonPage = function (_id) {
        this.rootNavCtrl.push('Person', {
            _id: _id
        });
    };
    return Support;
}());
Support = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-support',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/support/support.html"*/'<ion-content [class.nomessage]="nomessage">\n\n    <ion-list>\n\n        <ion-item *ngFor="let item of items">\n            <ion-avatar item-left (click)="pushPersonPage( item.id )">\n                <img [src]="item.userimg">\n            </ion-avatar>\n            <div (click)="open( item.artid, item.type );">\n                <h2>{{item.conttext}}</h2>\n                <p>{{item.title}}</p>\n            </div>\n        </ion-item>\n\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/support/support.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]])
], Support);

//# sourceMappingURL=support.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map