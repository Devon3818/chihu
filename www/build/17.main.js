webpackJsonp([17],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__open_share__ = __webpack_require__(402);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenShareModule", function() { return OpenShareModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OpenShareModule = (function () {
    function OpenShareModule() {
    }
    return OpenShareModule;
}());
OpenShareModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__open_share__["a" /* OpenShare */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__open_share__["a" /* OpenShare */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__open_share__["a" /* OpenShare */]
        ]
    })
], OpenShareModule);

//# sourceMappingURL=open-share.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenShare; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OpenShare = (function () {
    function OpenShare(plt, http, navCtrl, navParams, ref, UserService) {
        this.plt = plt;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = ref;
        this.UserService = UserService;
        this.title = '';
        this.tabanimate = false;
        this.gallery = null;
        this.pswpElement = null;
        this.data = {
            _id: '',
            uid: '',
            name: '',
            userimg: '',
            time: '',
            mark: { like: 0, cont: 0 },
            img: [],
            text: ''
        };
        this._id = this.navParams.get('_id');
        this.UserService.presentLoadingDefault();
        this.getdata();
    }
    OpenShare.prototype.getdata = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu/share_dec";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "id=" + this._id, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.data = res.json()[0];
            _this.title = res.json()[0]['name'] + ' 分享了心情';
            _this.UserService.presentLoadingDismiss();
        });
    };
    //点赞
    OpenShare.prototype.like = function () {
        var _this = this;
        if (!this.UserService._user._id) {
            this.navCtrl.push('Login');
            return true;
        }
        if (this.UserService._user._id == this.data['uid']) {
            this.UserService.showAlert("❌ 抱歉，不能为自己点赞");
            return true;
        }
        this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu/thank";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.name + "&type=2" + "&userimg=" + this.UserService._user.userimg + "&artid=" + this._id + "&title=" + this
            .data['text'], {
            headers: headers
        })
            .subscribe(function (res) {
            if (res.json()['result']['ok'] == 1) {
                _this.UserService.presentLoadingDismiss();
                _this.UserService.showAlert("👍 点赞成功");
            }
        });
    };
    //点击图片查看
    OpenShare.prototype.pswpElementInit = function (ind) {
        if (this.pswpElement == null) {
            this.pswpElement = document.querySelectorAll('.pswp')[0];
        }
        var _that = this;
        // define options (if needed)
        var options = {
            // optionName: 'option value'
            // for example:
            index: ind * 1 // start at first slide
        };
        var items = [];
        var len = this.data.img.length;
        for (var i = 0; i < len; i++) {
            var objs = {};
            objs["src"] = this.data["img"][i]["src"];
            objs["w"] = this.data["img"][i]["width"];
            objs["h"] = this.data["img"][i]["height"];
            objs["title"] = this.data["text"];
            items.push(objs);
        }
        // Initializes and opens PhotoSwipe
        this.gallery = new PhotoSwipe(this.pswpElement, PhotoSwipeUI_Default, items, options);
        this.gallery.listen('close', function () {
            if (_that.UserService.isopenimg) {
                _that.UserService.isopenimg = false;
            }
        });
        this.gallery.init();
        this.UserService.galleryOBJ = this.gallery;
        this.UserService.isopenimg = true;
    };
    OpenShare.prototype.ionViewDidLoad = function () {
        this.content.enableJsScroll();
    };
    OpenShare.prototype.onScroll = function ($event) {
        var scrollTop = $event.scrollTop;
        if (scrollTop > 250) {
            if (!this.tabanimate) {
                this.tabanimate = true;
            }
        }
        else {
            this.tabanimate = false;
        }
        this.ref.detectChanges();
    };
    return OpenShare;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Content */])
], OpenShare.prototype, "content", void 0);
OpenShare = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-open-share',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/open-share/open-share.html"*/'<ion-header>\n\n    <ion-navbar color="bule">\n        <ion-title [class.animate]="tabanimate">\n            {{title}}\n            <p>{{data.mark.like}} 个点赞</p>\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n              <ion-icon name="share"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button icon-only>\n              <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content class="content" (ionScroll)="onScroll($event)">\n\n    <section class="dv_top_ban">\n\n        <section class="dv_item_2">\n            <section class="dv_item_head">\n                <img [src]="data.userimg" />\n                <p>{{data.name}} 分享了心情</p>\n                <span class="time">{{data.time}}</span>\n            </section>\n\n            <section class="wrap">\n                <div *ngFor="let item of data.img; let i=index" (click)="pswpElementInit(i);" class="imgs" [style.background]="\'url(\'+item.src+\')\'"></div>\n            </section>\n\n        </section>\n\n        <p>{{data.text}}</p>\n        <ion-row>\n            <ion-col>\n                <button ion-button icon-left clear small>\n                  <ion-icon name="eye"></ion-icon>\n                  <div>{{data.mark.like}}</div>\n                </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button icon-left clear small>\n                  <ion-icon name="text"></ion-icon>\n                  <div>{{data.mark.cont}}</div>\n                </button>\n            </ion-col>\n            <ion-col center text-center>\n                <button ion-button outline (click)="like();">点赞</button>\n            </ion-col>\n            <ion-col center text-center>\n                <button ion-button outline>评论</button>\n            </ion-col>\n        </ion-row>\n    </section>\n\n    <ion-list>\n        <ion-list-header>\n            {{data.mark.cont}} 个评论\n        </ion-list-header>\n    </ion-list>\n\n    <section class="dv_list">\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。</p>\n            <section class="dv_item_bottom">\n                <p>会话列表</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。</p>\n            <section class="dv_item_bottom">\n                <p>会话列表</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。</p>\n            <section class="dv_item_bottom">\n                <p>会话列表</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。</p>\n            <section class="dv_item_bottom">\n                <p>会话列表</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。</p>\n            <section class="dv_item_bottom">\n                <p>会话列表</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。</p>\n            <section class="dv_item_bottom">\n                <p>会话列表</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。</p>\n            <section class="dv_item_bottom">\n                <p>会话列表</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。</p>\n            <section class="dv_item_bottom">\n                <p>会话列表</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。</p>\n            <section class="dv_item_bottom">\n                <p>会话列表</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。</p>\n            <section class="dv_item_bottom">\n                <p>会话列表</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。</p>\n            <section class="dv_item_bottom">\n                <p>会话列表</p>\n            </section>\n        </section>\n    </section>\n\n</ion-content>\n\n\n\n<!-- Root element of PhotoSwipe. Must have class pswp. -->\n<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">\n\n    <!-- Background of PhotoSwipe. \n         It\'s a separate element as animating opacity is faster than rgba(). -->\n    <div class="pswp__bg"></div>\n\n    <!-- Slides wrapper with overflow:hidden. -->\n    <div class="pswp__scroll-wrap">\n\n        <!-- Container that holds slides. \n            PhotoSwipe keeps only 3 of them in the DOM to save memory.\n            Don\'t modify these 3 pswp__item elements, data is added later on. -->\n        <div class="pswp__container">\n            <div class="pswp__item"></div>\n            <div class="pswp__item"></div>\n            <div class="pswp__item"></div>\n        </div>\n\n        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->\n        <div class="pswp__ui pswp__ui--hidden">\n\n            <div class="pswp__top-bar">\n\n                <!--  Controls are self-explanatory. Order can be changed. -->\n\n                <div class="pswp__counter"></div>\n\n                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>\n\n                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>\n\n                <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->\n                <!-- element will get class pswp__preloader--active when preloader is running -->\n                <div class="pswp__preloader">\n                    <div class="pswp__preloader__icn">\n                        <div class="pswp__preloader__cut">\n                            <div class="pswp__preloader__donut"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">\n                <div class="pswp__share-tooltip"></div>\n            </div>\n\n            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">\n            </button>\n\n            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">\n            </button>\n\n            <div class="pswp__caption">\n                <div class="pswp__caption__center"></div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/open-share/open-share.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]])
], OpenShare);

//# sourceMappingURL=open-share.js.map

/***/ })

});
//# sourceMappingURL=17.main.js.map