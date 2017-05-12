webpackJsonp([34],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attention__ = __webpack_require__(373);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttentionModule", function() { return AttentionModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AttentionModule = (function () {
    function AttentionModule() {
    }
    return AttentionModule;
}());
AttentionModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__attention__["a" /* Attention */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__attention__["a" /* Attention */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__attention__["a" /* Attention */]
        ]
    })
], AttentionModule);

//# sourceMappingURL=attention.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(245);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Attention; });
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
 * Generated class for the Attention page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Attention = (function () {
    function Attention(http, navCtrl, navParams, UserService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserService = UserService;
        this.items = [];
        this.rootNavCtrl = navParams.get('rootNavCtrl');
        this.getdata();
    }
    Attention.prototype.ionViewDidEnter = function () {
        this.getdata();
    };
    Attention.prototype.getdata = function () {
        var _this = this;
        if (!this.UserService._user._id) {
            this.items = [];
            return true;
        }
        var url = "http://www.devonhello.com/chihu/getfork";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "uid=" + this.UserService._user._id, {
            headers: headers
        })
            .subscribe(function (res) {
            //alert(JSON.stringify(res.json()));
            _this.items = res.json();
        });
    };
    Attention.prototype.pushPerson = function (_id) {
        this.rootNavCtrl.push('Person', {
            _id: _id
        });
    };
    return Attention;
}());
Attention = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'page-attention',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/attention/attention.html"*/'<!--\n  Generated template for the Support page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item *ngFor="let item of items" (click)="pushPerson( item.id );">\n            <ion-avatar item-left>\n                <img [src]="item.userimg">\n            </ion-avatar>\n            <h2>{{item.name}} :➕关注了你</h2>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/attention/attention.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]])
], Attention);

//# sourceMappingURL=attention.js.map

/***/ })

});
//# sourceMappingURL=34.main.js.map