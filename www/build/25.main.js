webpackJsonp([25],{

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discover_page__ = __webpack_require__(381);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageModule", function() { return DiscoverPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DiscoverPageModule = (function () {
    function DiscoverPageModule() {
    }
    return DiscoverPageModule;
}());
DiscoverPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__discover_page__["a" /* DiscoverPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__discover_page__["a" /* DiscoverPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__discover_page__["a" /* DiscoverPage */]
        ]
    })
], DiscoverPageModule);

//# sourceMappingURL=discover-page.module.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiscoverPage = (function () {
    function DiscoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.oSwiper1 = null;
        this.oSwiper2 = null;
        //数据
        this.data = [
            {
                _id: '1',
                uid: '1',
                name: 'Devon',
                userimg: 'https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100',
                time: '10-10',
                mark: { like: 324, cont: 56 },
                img: [
                    { src: 'http://s2.cdn.xiachufang.com/5e23cfa42e7011e7947d0242ac110002_1500w_1000h.jpg?imageView2/2/w/660/interlace/1/q/90', width: '660', height: '440' },
                    { src: 'http://s2.cdn.xiachufang.com/74fab86c8afd11e6b87c0242ac110003_640w_643h.jpg?imageView2/2/w/660/interlace/1/q/90', width: '640', height: '643' },
                    { src: 'http://s1.cdn.xiachufang.com/361876ac0ec411e7947d0242ac110002_1280w_720h.jpg@2o_50sh_1pr_1l_660w_90q_1wh', width: '660', height: '371' },
                ],
                text: '香橙米蛋糕（纸杯蛋糕）,闻得到尝得到的最迷人的柑橘气息~~~'
            },
            {
                _id: '1',
                uid: '1',
                name: 'Devon',
                userimg: 'https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100',
                time: '10-10',
                mark: { like: 324, cont: 56 },
                img: [
                    { src: 'http://s2.cdn.xiachufang.com/5e23cfa42e7011e7947d0242ac110002_1500w_1000h.jpg?imageView2/2/w/660/interlace/1/q/90', width: '660', height: '440' },
                ],
                text: '香橙米蛋糕（纸杯蛋糕）,闻得到尝得到的最迷人的柑橘气息~~~'
            },
            {
                _id: '1',
                uid: '1',
                name: 'Devon',
                userimg: 'https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100',
                time: '10-10',
                mark: { like: 324, cont: 56 },
                img: [
                    { src: 'http://s2.cdn.xiachufang.com/5e23cfa42e7011e7947d0242ac110002_1500w_1000h.jpg?imageView2/2/w/660/interlace/1/q/90', width: '660', height: '440' },
                    { src: 'http://s2.cdn.xiachufang.com/74fab86c8afd11e6b87c0242ac110003_640w_643h.jpg?imageView2/2/w/660/interlace/1/q/90', width: '640', height: '643' },
                ],
                text: '香橙米蛋糕（纸杯蛋糕）,闻得到尝得到的最迷人的柑橘气息~~~'
            },
            {
                _id: '1',
                uid: '1',
                name: 'Devon',
                userimg: 'https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100',
                time: '10-10',
                mark: { like: 324, cont: 56 },
                img: [
                    { src: 'http://s2.cdn.xiachufang.com/5e23cfa42e7011e7947d0242ac110002_1500w_1000h.jpg?imageView2/2/w/660/interlace/1/q/90', width: '660', height: '440' },
                    { src: 'http://s2.cdn.xiachufang.com/74fab86c8afd11e6b87c0242ac110003_640w_643h.jpg?imageView2/2/w/660/interlace/1/q/90', width: '640', height: '643' },
                    { src: 'http://s1.cdn.xiachufang.com/361876ac0ec411e7947d0242ac110002_1280w_720h.jpg@2o_50sh_1pr_1l_660w_90q_1wh', width: '660', height: '371' },
                ],
                text: '香橙米蛋糕（纸杯蛋糕）,闻得到尝得到的最迷人的柑橘气息~~~'
            },
            {
                _id: '1',
                uid: '1',
                name: 'Devon',
                userimg: 'https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100',
                time: '10-10',
                mark: { like: 324, cont: 56 },
                img: [
                    { src: 'http://s2.cdn.xiachufang.com/5e23cfa42e7011e7947d0242ac110002_1500w_1000h.jpg?imageView2/2/w/660/interlace/1/q/90', width: '660', height: '440' },
                    { src: 'http://s2.cdn.xiachufang.com/74fab86c8afd11e6b87c0242ac110003_640w_643h.jpg?imageView2/2/w/660/interlace/1/q/90', width: '640', height: '643' },
                    { src: 'http://s1.cdn.xiachufang.com/361876ac0ec411e7947d0242ac110002_1280w_720h.jpg@2o_50sh_1pr_1l_660w_90q_1wh', width: '660', height: '371' },
                ],
                text: '香橙米蛋糕（纸杯蛋糕）,闻得到尝得到的最迷人的柑橘气息~~~'
            }
        ];
    }
    DiscoverPage.prototype.ionViewDidLoad = function () {
        this.oSwiper1 = new Swiper('.swiper-container', {
            loop: true,
            autoplay: 5000,
            autoplayDisableOnInteraction: false,
            // 如果需要分页器
            pagination: '.swiper-pagination',
        });
    };
    //查看分享
    DiscoverPage.prototype.pushOpenSharePage = function (_id) {
        this.navCtrl.push('OpenShare', {
            _id: _id
        });
    };
    DiscoverPage.prototype.doInfinite = function (infiniteScroll) {
        //alert('Begin async operation');
        setTimeout(function () {
            infiniteScroll.complete();
        }, 3000);
    };
    return DiscoverPage;
}());
DiscoverPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-discover-page',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/discover-page/discover-page.html"*/'<!--\n  Generated template for the Discover page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="bule">\n        <ion-title>发现</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div class="swiper-container">\n        <div class="swiper-wrapper">\n\n            <div class="swiper-slide" style="background: url(\'http://s2.cdn.xiachufang.com/5545a57208d411e7947d0242ac110002_1080w_808h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90\') no-repeat center"></div>\n            <div class="swiper-slide" style="background: url(\'http://s2.cdn.xiachufang.com/d93388e0234611e7947d0242ac110002_3264w_2176h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90\') no-repeat center"></div>\n            <div class="swiper-slide" style="background: url(\'http://s1.cdn.xiachufang.com/b69e09c6881f11e6b87c0242ac110003_600w_600h.jpg@2o_50sh_1pr_1l_490w_260h_1c_1e_90q_1wh\') no-repeat center"></div>\n            <div class="swiper-slide" style="background: url(\'http://s2.cdn.xiachufang.com/bbfd36ca235c11e7bc9d0242ac110002_6000w_4000h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90\') no-repeat center"></div>\n\n        </div>\n        <!-- 如果需要分页器 -->\n        <div class="swiper-pagination"></div>\n    </div>\n\n    <section class="dv_box">\n        <div class="dv_items">\n            <i class="iconfont icon-document" color="icon-telephone"></i>\n            <p>专栏</p>\n        </div>\n        <div class="dv_items">\n            <i class="iconfont icon-notebook" color="icon-notebook"></i>\n            <p>文章</p>\n        </div>\n        <div class="dv_items">\n            <i class="iconfont icon-basket" color="icon-shop"></i>\n            <p>商城</p>\n        </div>\n        <div class="dv_items">\n            <i class="iconfont icon-trophy" color="icon-pencil"></i>\n            <p>活动</p>\n        </div>\n    </section>\n\n    <ion-list>\n        <ion-list-header>\n            <p>分享时刻</p>\n            <!--<i style="float: right">查看全部</i>-->\n            <span>分享我们此时此刻的心情...</span>\n        </ion-list-header>\n    </ion-list>\n\n\n    <section class="dv_hot_q dv_hot_w">\n\n        <!--重复-->\n        <section *ngFor="let item of data" class="dv_item" (click)="pushOpenSharePage( item._id );">\n            <section class="dv_item_head">\n                <img [src]="item.userimg" />\n                <p>{{item.name}} 分享了心情</p>\n                <span class="time">{{item.time}}</span>\n            </section>\n\n            <section class="wrap">\n                <div *ngFor="let item2 of item.img" class="imgs" [style.background]="\'url(\'+item2.src+\')\'"></div>\n            </section>\n\n            <p>{{item.text}}</p>\n            <section class="dv_item_bottom">\n                <p>{{item.mark.like}} 点赞 • {{item.mark.cont}} 评论</p>\n            </section>\n        </section>\n\n\n    </section>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/discover-page/discover-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], DiscoverPage);

//# sourceMappingURL=discover-page.js.map

/***/ })

});
//# sourceMappingURL=25.main.js.map