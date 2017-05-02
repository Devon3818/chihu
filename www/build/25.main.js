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
    DiscoverPage.prototype.pushOpenSharePage = function () {
        this.navCtrl.push('OpenShare');
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
        selector: 'page-discover-page',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/discover-page/discover-page.html"*/'<!--\n  Generated template for the Discover page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="bule">\n        <ion-title>发现</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div class="swiper-container">\n        <div class="swiper-wrapper">\n\n            <div class="swiper-slide" style="background: url(\'assets/banner/banner1.png\') no-repeat center"></div>\n            <div class="swiper-slide" style="background: url(\'assets/banner/banner2.png\') no-repeat center"></div>\n            <div class="swiper-slide" style="background: url(\'assets/banner/banner3.png\') no-repeat center"></div>\n            <div class="swiper-slide" style="background: url(\'assets/banner/banner4.png\') no-repeat center"></div>\n\n        </div>\n        <!-- 如果需要分页器 -->\n        <div class="swiper-pagination"></div>\n    </div>\n\n    <section class="dv_box">\n        <div class="dv_items">\n            <i class="iconfont icon-document" color="icon-telephone"></i>\n            <p>专栏</p>\n        </div>\n        <div class="dv_items">\n            <i class="iconfont icon-notebook" color="icon-notebook"></i>\n            <p>文章</p>\n        </div>\n        <div class="dv_items">\n            <i class="iconfont icon-basket" color="icon-shop"></i>\n            <p>商城</p>\n        </div>\n        <div class="dv_items">\n            <i class="iconfont icon-trophy" color="icon-pencil"></i>\n            <p>活动</p>\n        </div>\n    </section>\n\n    <!--<ion-list>\n        <ion-list-header>\n            <p>热门内容</p>\n            <i style="float: right">查看更多</i>\n            <span>24小时内热门回答及分享</span>\n        </ion-list-header>\n    </ion-list>\n\n    <section class="dv_hot_q">\n        \n        <section class="dv_item">\n\n            <h6 (click)="pushQuestionPage();">很多it大牛在我这个年龄时已经很厉害了？</h6>\n            <div (click)="pushAnswerPage();">\n                <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n                <section class="dv_item_bottom">\n                    <p>4.7K 赞同 • 677评论 • 关注问题</p>\n                </section>\n            </div>\n        </section>\n        \n        <section class="dv_item">\n\n            <h6 (click)="pushQuestionPage();">很多it大牛在我这个年龄时已经很厉害了？</h6>\n            <div (click)="pushAnswerPage();">\n                <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n                <section class="dv_item_bottom">\n                    <p>4.7K 赞同 • 677评论 • 关注问题</p>\n                </section>\n            </div>\n        </section>\n\n    </section>-->\n\n    <ion-list>\n        <ion-list-header>\n            <p>分享时刻</p>\n            <!--<i style="float: right">查看全部</i>-->\n            <span>分享我们此时此刻的心情...</span>\n        </ion-list-header>\n    </ion-list>\n\n\n    <!--<div class="swiper-container2">\n        <div class="swiper-wrapper">\n            <div class="swiper-slide">\n                <div>\n                    <img src="http://s2.cdn.xiachufang.com/29596602897611e6a9a10242ac110002_1999w_1499h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90" />\n                    <p>家常菜</p>\n                </div>\n            </div>\n            <div class="swiper-slide">\n                <div>\n                    <img src="http://s2.cdn.xiachufang.com/29596602897611e6a9a10242ac110002_1999w_1499h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90" />\n                    <p>快手菜</p>\n                </div>\n            </div>\n            <div class="swiper-slide">\n                <div>\n                    <img src="http://s2.cdn.xiachufang.com/29596602897611e6a9a10242ac110002_1999w_1499h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90" />\n                    <p>下饭菜</p>\n                </div>\n            </div>\n            <div class="swiper-slide">\n                <div>\n                    <img src="http://s2.cdn.xiachufang.com/29596602897611e6a9a10242ac110002_1999w_1499h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90" />\n                    <p>素菜</p>\n                </div>\n            </div>\n            <div class="swiper-slide">\n                <div>\n                    <img src="http://s2.cdn.xiachufang.com/29596602897611e6a9a10242ac110002_1999w_1499h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90" />\n                    <p>大鱼大肉</p>\n                </div>\n            </div>\n            <div class="swiper-slide">\n                <div>\n                    <img src="http://s2.cdn.xiachufang.com/29596602897611e6a9a10242ac110002_1999w_1499h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90" />\n                    <p>下酒菜</p>\n                </div>\n            </div>\n            <div class="swiper-slide">\n                <div>\n                    <img src="http://s2.cdn.xiachufang.com/29596602897611e6a9a10242ac110002_1999w_1499h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90" />\n                    <p>小清新</p>\n                </div>\n            </div>\n            <div class="swiper-slide">\n                <div>\n                    <img src="http://s2.cdn.xiachufang.com/29596602897611e6a9a10242ac110002_1999w_1499h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90" />\n                    <p>创意菜</p>\n                </div>\n            </div>\n            <div class="swiper-slide">\n                <div>\n                    <img src="http://s2.cdn.xiachufang.com/29596602897611e6a9a10242ac110002_1999w_1499h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90" />\n                    <p>减肥</p>\n                </div>\n            </div>\n            <div class="swiper-slide">\n                <div>\n                    <img src="http://s2.cdn.xiachufang.com/29596602897611e6a9a10242ac110002_1999w_1499h.jpg?imageView2/1/w/490/h/260/interlace/1/q/90" />\n                    <p>美容</p>\n                </div>\n            </div>\n        </div>\n\n    </div>-->\n\n    <section class="dv_hot_q dv_hot_w">\n        <!--重复-->\n        <section class="dv_item" (click)="pushOpenSharePage();">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon 分享了心情</p>\n                <span class="time">昨天 3:30</span>\n            </section>\n\n            <section class="wrap">\n                <div class="imgs" [style.background]="\'url(http://www.runoob.com/wp-content/uploads/2015/07/5a7d00514af1e464221c677c15e8e990.png)\'"></div>\n\n                <div class="imgs" [style.background]="\'url(https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100)\'"></div>\n\n                <div class="imgs" [style.background]="\'url(https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100)\'"></div>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 赞同 • 677评论 • 关注问题</p>\n            </section>\n        </section>\n\n        <!--重复-->\n        <section class="dv_item" (click)="pushOpenSharePage();">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon 分享了心情</p>\n                <span class="time">昨天 3:30</span>\n            </section>\n            <section class="wrap">\n                <div class="imgs" [style.background]="\'url(http://www.runoob.com/wp-content/uploads/2015/07/5a7d00514af1e464221c677c15e8e990.png)\'"></div>\n            </section>\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 点赞 • 677评论</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item" (click)="pushOpenSharePage();">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon 分享了心情</p>\n                <span class="time">昨天 3:30</span>\n            </section>\n            <section class="wrap">\n                <div class="imgs" [style.background]="\'url(http://www.runoob.com/wp-content/uploads/2015/07/5a7d00514af1e464221c677c15e8e990.png)\'"></div>\n\n                <div class="imgs" [style.background]="\'url(https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100)\'"></div>\n            </section>\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 点赞 • 677评论</p>\n            </section>\n        </section>\n\n        <!--重复-->\n        <section class="dv_item" (click)="pushOpenSharePage();">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon 分享了作品</p>\n            </section>\n            <section class="wrap">\n                <div class="imgs" [style.background]="\'url(http://www.runoob.com/wp-content/uploads/2015/07/5a7d00514af1e464221c677c15e8e990.png)\'"></div>\n\n                <div class="imgs" [style.background]="\'url(https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100)\'"></div>\n            </section>\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 点赞 • 677评论</p>\n            </section>\n        </section>\n    </section>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/discover-page/discover-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], DiscoverPage);

//# sourceMappingURL=discover-page.js.map

/***/ })

});
//# sourceMappingURL=25.main.js.map