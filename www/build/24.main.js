webpackJsonp([24],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fork_discover__ = __webpack_require__(386);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForkDiscoverModule", function() { return ForkDiscoverModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForkDiscoverModule = (function () {
    function ForkDiscoverModule() {
    }
    return ForkDiscoverModule;
}());
ForkDiscoverModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__fork_discover__["a" /* ForkDiscover */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fork_discover__["a" /* ForkDiscover */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__fork_discover__["a" /* ForkDiscover */]
        ]
    })
], ForkDiscoverModule);

//# sourceMappingURL=fork-discover.module.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForkDiscover; });
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
 * Generated class for the ForkDiscover page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ForkDiscover = (function () {
    function ForkDiscover(http, navCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //数据
        this.data = [];
        this.rootNavCtrl = navParams.get('rootNavCtrl');
        this.getforkdata();
    }
    ForkDiscover.prototype.getforkdata = function () {
        var _that = this;
        var url = "http://www.devonhello.com/chihu/share";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "len=1", {
            headers: headers
        })
            .subscribe(function (res) {
            //alert(JSON.stringify(res.json()));
            _that.data = res.json(); //now *ngFor is not working
            //alert(_that.forkdata.length);
        });
    };
    //查看分享
    ForkDiscover.prototype.pushOpenSharePage = function (_id) {
        this.rootNavCtrl.push('OpenShare', {
            _id: _id
        });
    };
    return ForkDiscover;
}());
ForkDiscover = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-fork-discover',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/fork-discover/fork-discover.html"*/'<!--\n  Generated template for the ForkDiscover page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n\n    <section class="dv_hot_q dv_hot_w">\n\n        <!--重复-->\n        <section *ngFor="let item of data" class="dv_item" (click)="pushOpenSharePage( item._id );">\n            <section class="dv_item_head">\n                <img [src]="item.userimg" />\n                <p>{{item.name}} 分享了心情</p>\n                <span class="time">{{item.time}}</span>\n            </section>\n\n            <section class="wrap">\n                <div *ngFor="let item2 of item.img" class="imgs" [style.background]="\'url(\'+item2.src+\')\'"></div>\n            </section>\n\n            <p>{{item.text}}</p>\n            <section class="dv_item_bottom">\n                <p>{{item.mark.like}} 点赞 • {{item.mark.cont}} 评论</p>\n            </section>\n        </section>\n\n\n    </section>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/fork-discover/fork-discover.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ForkDiscover);

//# sourceMappingURL=fork-discover.js.map

/***/ })

});
//# sourceMappingURL=24.main.js.map