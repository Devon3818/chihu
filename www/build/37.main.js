webpackJsonp([37],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article__ = __webpack_require__(373);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ArticleModule = (function () {
    function ArticleModule() {
    }
    return ArticleModule;
}());
ArticleModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__article__["a" /* Article */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__article__["a" /* Article */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__article__["a" /* Article */]
        ]
    })
], ArticleModule);

//# sourceMappingURL=article.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Article = (function () {
    function Article(plt, http, navCtrl, navParams, ref, UserService) {
        this.plt = plt;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = ref;
        this.UserService = UserService;
        this.title = '';
        this.tabanimate = false;
        this.tabbule = false;
        this.old_scrollTop = 0;
        this.pswpElement = null;
        this.gallery = null;
        this.itemsimg = null;
        this.ishide = true;
        this.data = {};
        this._id = this.navParams.get("_id");
        this.getdata();
    }
    Article.prototype.getdata = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu/article_dec";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "id=" + this._id, {
            headers: headers
        })
            .subscribe(function (res) {
            //alert(JSON.stringify(res.json()));
            _this.data = res.json()[0];
            _this.checkfork();
        });
    };
    //检查是否已经关注
    Article.prototype.checkfork = function () {
        var _this = this;
        if (!this.UserService._user._id) {
            this.navCtrl.push('Login');
        }
        else {
            var url = "http://www.devonhello.com/chihu/checkfork";
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id, {
                headers: headers
            })
                .subscribe(function (res) {
                //alert(JSON.stringify(res.json()));
                if (res.json().length == "0") {
                    _this.ishide = false;
                }
            });
        }
    };
    //关注
    Article.prototype.fork = function () {
        var _this = this;
        if (!this.UserService._user._id) {
            this.navCtrl.push('Login');
            return true;
        }
        if (this.ishide) {
            alert("已关注");
        }
        else {
            var url = "http://www.devonhello.com/chihu/forkuser";
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.name + "&uname=" + this.data['name'] + "&userimg=" + this.UserService._user.userimg + "&uuserimg=" + this.data['userimg'], {
                headers: headers
            })
                .subscribe(function (res) {
                //alert(JSON.stringify(res.json()));
                if (res.json()['result']['ok'] == 1) {
                    _this.ishide = true;
                    alert("关注成功");
                }
            });
        }
    };
    //感谢
    Article.prototype.thank = function () {
        if (!this.UserService._user._id) {
            this.navCtrl.push('Login');
            return true;
        }
        if (this.UserService._user._id == this.data['uid']) {
            alert("不能自己感谢自己");
            return true;
        }
        var url = "http://www.devonhello.com/chihu/thank";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.name + "&type=1" + "&userimg=" + this.UserService._user.userimg + "&artid=" + this._id + "&title=" + this
            .data['title'], {
            headers: headers
        })
            .subscribe(function (res) {
            //alert(JSON.stringify(res.json()));
            if (res.json()['result']['ok'] == 1) {
                alert("感谢成功");
            }
        });
    };
    Article.prototype.ionViewDidLoad = function () {
        this.content.enableJsScroll();
    };
    Article.prototype.pushPersonPage = function (_id) {
        this.navCtrl.push('Person', {
            _id: _id
        });
    };
    Article.prototype.openComments = function () {
        this.navCtrl.push('Comments');
    };
    Article.prototype.onScroll = function ($event) {
        var scrollTop = $event.scrollTop;
        if (scrollTop > 110 && (this.old_scrollTop - scrollTop) < 0) {
            if (!this.tabanimate) {
                this.tabanimate = true;
            }
        }
        else {
            this.tabanimate = false;
            if (!this.tabbule && scrollTop > 150) {
                this.tabbule = true;
                this.title = '家常豆腐';
            }
            if (scrollTop <= 150) {
                this.tabbule = false;
                this.title = '';
            }
        }
        this.old_scrollTop = scrollTop;
        this.ref.detectChanges();
    };
    //查看步骤图
    Article.prototype.pswpElementInit = function (idx) {
        if (this.pswpElement == null) {
            this.pswpElement = document.querySelectorAll('.pswp')[0];
        }
        var _that = this;
        var items = [];
        // define options (if needed)
        var options = {
            // optionName: 'option value'
            // for example:
            index: idx * 1 // start at first slide
        };
        var len = this.data.work.length;
        for (var i = 0; i < len; i++) {
            var objs = {};
            objs["src"] = this.data["work"][i]["src"];
            objs["w"] = this.data["work"][i]["width"];
            objs["h"] = this.data["work"][i]["height"];
            objs["title"] = "步骤 " + (i + 1) + "：" + this.data["work"][i]["text"];
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
    return Article;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Content */])
], Article.prototype, "content", void 0);
Article = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-article',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/article/article.html"*/'<!--\n  Generated template for the Article page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border [class.animate]="tabanimate">\n\n    <ion-navbar color="tran" [class.bule]="tabbule">\n        <ion-title>{{data.title}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n              <ion-icon name="share"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button icon-only>\n              <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content (ionScroll)="onScroll($event)">\n    <section class="dv_banner" [style.background]="\'url(\'+data.workbanner+\')\'"></section>\n    <section class="user">\n        <img (click)="pushPersonPage( data.uid );" [src]="data.userimg" />\n        <section (click)="pushPersonPage( data.uid );" class="data">\n            <h4>{{data.name}}</h4>\n            <p>创建于：{{data.time}}</p>\n        </section>\n        <section [hidden]="ishide" class="fork" (click)="fork();">＋ 关注</section>\n        <section [hidden]="!ishide" class="fork nofork">＋ 关注</section>\n    </section>\n\n    <section class="dv_content">\n        <h3>{{data.title}}</h3>\n        <p>{{data.text}}</p>\n        <h6>用料：</h6>\n\n        <ion-row *ngFor="let item of data.food">\n            <ion-col>\n                <div>{{item.name}}</div>\n            </ion-col>\n            <ion-col>\n                <div>{{item.len}}</div>\n            </ion-col>\n        </ion-row>\n\n\n        <h6>做法：</h6>\n        <div *ngFor="let item of data.work; let i=index">\n            <p><span>{{i+1}}：</span>{{item.text}}</p>\n            <section *ngIf="item.src != \'\'" class="dv_imgs" (click)="pswpElementInit(i);" [style.background]="\'url(\'+item.src+\')\'"></section>\n        </div>\n        <h6 *ngIf="data.tip != \'\'">提示：</h6>\n        <section *ngIf="data.tip != \'\'" class="dv_tips">\n            <p>{{data.tip}}</p>\n        </section>\n\n    </section>\n\n</ion-content>\n\n<ion-footer [class.footanimate]="tabanimate">\n    <ion-toolbar color=\'fff\'>\n        <div class="dv_f" (click)="openComments();">\n            <ion-icon name="text"></ion-icon>\n            123\n        </div>\n        <div class="dv_f">\n            <ion-icon name="star-outline"></ion-icon>\n            收藏\n            <!--star-->\n        </div>\n        <div class="dv_f" (click)="thank();">\n            <ion-icon name="heart-outline"></ion-icon>\n            感谢\n            <!--heart-->\n        </div>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n<!-- Root element of PhotoSwipe. Must have class pswp. -->\n<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">\n\n    <!-- Background of PhotoSwipe. \n         It\'s a separate element as animating opacity is faster than rgba(). -->\n    <div class="pswp__bg"></div>\n\n    <!-- Slides wrapper with overflow:hidden. -->\n    <div class="pswp__scroll-wrap">\n\n        <!-- Container that holds slides. \n            PhotoSwipe keeps only 3 of them in the DOM to save memory.\n            Don\'t modify these 3 pswp__item elements, data is added later on. -->\n        <div class="pswp__container">\n            <div class="pswp__item"></div>\n            <div class="pswp__item"></div>\n            <div class="pswp__item"></div>\n        </div>\n\n        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->\n        <div class="pswp__ui pswp__ui--hidden">\n\n            <div class="pswp__top-bar">\n\n                <!--  Controls are self-explanatory. Order can be changed. -->\n\n                <div class="pswp__counter"></div>\n\n                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>\n\n                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>\n\n                <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->\n                <!-- element will get class pswp__preloader--active when preloader is running -->\n                <div class="pswp__preloader">\n                    <div class="pswp__preloader__icn">\n                        <div class="pswp__preloader__cut">\n                            <div class="pswp__preloader__donut"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">\n                <div class="pswp__share-tooltip"></div>\n            </div>\n\n            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">\n            </button>\n\n            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">\n            </button>\n\n            <div class="pswp__caption">\n                <div class="pswp__caption__center"></div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/article/article.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]])
], Article);

//# sourceMappingURL=article.js.map

/***/ })

});
//# sourceMappingURL=37.main.js.map