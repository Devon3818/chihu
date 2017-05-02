webpackJsonp([33],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article__ = __webpack_require__(369);
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

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
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
    function Article(navCtrl, navParams, ref) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = ref;
        this.title = '';
        this.tabanimate = false;
        this.tabbule = false;
        this.old_scrollTop = 0;
        this.pswpElement = null;
        this.gallery = null;
        this.itemsimg = null;
        this.data = {
            _id: "_id",
            uid: "uid",
            name: "Devon1",
            userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
            title: "鱼香肉丝",
            workbanner: "http://s2.cdn.xiachufang.com/b89670e8873311e6a9a10242ac110002_690w_459h.jpg?imageView2/2/w/660/interlace/1/q/90",
            text: "辣中带酸，酸中带甜，甜中带咸，咸中又带鲜……味道丰富而不杂腻！恰似女儿心，捉摸不透，又飘忽不定，似近又远，偶尔火辣又偶尔羞涩……",
            time: "10-10",
            food: [
                { name: '里脊肉', len: '250克' },
                { name: '青红辣椒', len: '各一个' },
                { name: '红萝卜', len: '1/3根' },
                { name: '干木耳', len: '30克' },
                { name: '郫县豆瓣酱', len: '	2汤匙' },
                { name: '蒜瓣', len: '两粒' },
                { name: '姜蓉', len: '少许' },
                { name: '泡椒', len: '八个' },
                { name: '葱白', len: '	两段' },
                { name: '盐', len: '一小勺' },
                { name: '糖', len: '一汤匙' },
                { name: '香醋', len: '一汤匙' },
                { name: '酱油', len: '两汤匙' },
                { name: '料酒', len: '少量' },
                { name: '油', len: '适量' },
                { name: '淀粉', len: '2汤匙' },
                { name: '清水', len: '3汤匙' },
            ],
            work: [
                { text: '木耳泡发，里脊肉切丝，用少许盐，糖抓均匀，一小勺淀粉上浆后用一小勺油拌匀封备用，木耳，辣椒，红萝卜也切丝备用，用糖、香醋，料酒，酱油，清水调成酱汁，比例约为：1：1：0.3：2：3', img: 'http://s1.cdn.xiachufang.com/697289a88c6911e6b87c0242ac110003_223w_149h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '223', height: '149' },
                { text: '锅烧热，倒入少许油，倒入瘦肉滑油', img: 'http://s1.cdn.xiachufang.com/69963a6a8c6911e6a9a10242ac110002_224w_151h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '224', height: '151' },
                { text: '肉身变白装起备用', img: 'http://s2.cdn.xiachufang.com/69a8c52c8c6911e6b87c0242ac110003_223w_152h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '223', height: '152' },
                { text: '锅里留油，放少许蒜末，爆香后放入木耳快炒几秒', img: 'http://s2.cdn.xiachufang.com/69eb99928c6911e6a9a10242ac110002_224w_150h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '224', height: '158' },
                { text: '加入红萝卜继续炒几秒至变软即可装起备用', img: 'http://s1.cdn.xiachufang.com/6a1445e08c6911e6b87c0242ac110003_224w_148h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '224', height: '148' },
                { text: '锅里再次放入少许油，放入蒜末、切碎的泡椒、葱白、姜末爆香', img: 'http://s2.cdn.xiachufang.com/6a26cd508c6911e6b87c0242ac110003_226w_152h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '226', height: '152' },
                { text: '舀入两汤匙郫县豆瓣酱', img: 'http://s2.cdn.xiachufang.com/6ab65dda8c6911e6a9a10242ac110002_222w_152h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '222', height: '152' },
                { text: '炒出红油', img: 'http://s1.cdn.xiachufang.com/6b1cd5928c6911e6b87c0242ac110003_226w_153h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '226', height: '153' },
                { text: '加入滑好的肉丝，翻炒均匀', img: 'http://s2.cdn.xiachufang.com/6b44cac08c6911e6b87c0242ac110003_222w_148h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '222', height: '148' },
                { text: '倒入青红椒丝', img: 'http://s1.cdn.xiachufang.com/6b693d888c6911e6a9a10242ac110002_223w_151h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '223', height: '151' },
                { text: '翻炒片刻后倒入之前炒好的红萝卜和黑木耳丝', img: 'http://s2.cdn.xiachufang.com/6b7c20608c6911e6b87c0242ac110003_223w_151h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '223', height: '151' },
                { text: '再倒入之前兑好的酱汁（酱汁中可以加入3汤匙的清水），再次翻炒均匀', img: 'http://s2.cdn.xiachufang.com/6b9cc3ec8c6911e6b87c0242ac110003_220w_149h.jpg?imageView2/2/w/300/interlace/1/q/90', width: '220', height: '149' },
                { text: '少许淀粉加水兑好勾薄芡后即可装起享用', img: 'http://s1.cdn.xiachufang.com/6c01ab7c8c6911e6a9a10242ac110002_224w_148h.jpg@2o_50sh_1pr_1l_300w_90q_1wh', width: '224', height: '148' },
            ],
            tip: "1、步骤中提到的比例为大约，具体请根据个人口味稍作调整，要以自己喜欢的口感为准。 2、豆瓣酱一定要炒出红油再倒入肉丝，要不油色会相差比较远，亮泽度也会较差 3、酱汁提前兑好，在肉丝下锅炒均匀后立即可以倒入锅中，避免临时找酱汁引起遗漏 4、整个菜只需要很少的盐，只有在腌制肉丝的时候放一点点，因为酱油比较咸，豆瓣酱也咸，泡椒、香醋都有盐分 5、勾芡别太厚重，吃起来会腻，因为有酸，甜咸鲜味，搭配很均衡，所以，这道菜虽然看着红油很亮，其实并不太辣。",
            type: "1"
        };
        this._id = this.navParams.get("_id");
        this.uid = this.navParams.get("uid");
    }
    Article.prototype.ionViewDidLoad = function () {
        this.content.enableJsScroll();
    };
    Article.prototype.pushPersonPage = function () {
        this.navCtrl.push('Person');
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
            objs["src"] = this.data["work"][i]["img"];
            objs["w"] = this.data["work"][i]["width"];
            objs["h"] = this.data["work"][i]["height"];
            objs["title"] = "步骤 " + (i + 1) + "：" + this.data["work"][i]["text"];
            items.push(objs);
        }
        // Initializes and opens PhotoSwipe
        this.gallery = new PhotoSwipe(this.pswpElement, PhotoSwipeUI_Default, items, options);
        this.gallery.init();
    };
    return Article;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Content */])
], Article.prototype, "content", void 0);
Article = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-article',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/article/article.html"*/'<!--\n  Generated template for the Article page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border [class.animate]="tabanimate">\n\n    <ion-navbar color="tran" [class.bule]="tabbule">\n        <ion-title>{{data.title}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n              <ion-icon name="share"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button icon-only>\n              <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content (ionScroll)="onScroll($event)">\n    <section class="dv_banner" [style.background]="\'url(\'+data.workbanner+\')\'"></section>\n    <section class="user">\n        <img (click)="pushPersonPage();" src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n        <section (click)="pushPersonPage();" class="data">\n            <h4>{{data.name}}</h4>\n            <p>创建于：{{data.time}}</p>\n        </section>\n        <section class="fork">＋ 关注</section>\n    </section>\n\n    <section class="dv_content">\n        <h3>{{data.title}}</h3>\n        <p>{{data.text}}</p>\n        <h6>用料：</h6>\n\n        <ion-row *ngFor="let item of data.food">\n            <ion-col>\n                <div>{{item.name}}</div>\n            </ion-col>\n            <ion-col>\n                <div>{{item.len}}</div>\n            </ion-col>\n        </ion-row>\n\n\n        <h6>做法：</h6>\n        <div *ngFor="let item of data.work; let i=index">\n            <p><span>{{i+1}}：</span>{{item.text}}</p>\n            <section class="dv_imgs" (click)="pswpElementInit(i);" [style.background]="\'url(\'+item.img+\')\'"></section>\n        </div>\n        <h6>提示：</h6>\n        <section class="dv_tips">\n            <p>{{data.tip}}</p>\n        </section>\n\n    </section>\n\n</ion-content>\n\n<ion-footer [class.footanimate]="tabanimate">\n    <ion-toolbar color=\'fff\'>\n        <div class="dv_f">\n            <ion-icon name="text"></ion-icon>\n            123\n        </div>\n        <div class="dv_f">\n            <ion-icon name="star-outline"></ion-icon>\n            收藏\n            <!--star-->\n        </div>\n        <div class="dv_f">\n            <ion-icon name="heart-outline"></ion-icon>\n            感谢\n            <!--heart-->\n        </div>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n<!-- Root element of PhotoSwipe. Must have class pswp. -->\n<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">\n\n    <!-- Background of PhotoSwipe. \n         It\'s a separate element as animating opacity is faster than rgba(). -->\n    <div class="pswp__bg"></div>\n\n    <!-- Slides wrapper with overflow:hidden. -->\n    <div class="pswp__scroll-wrap">\n\n        <!-- Container that holds slides. \n            PhotoSwipe keeps only 3 of them in the DOM to save memory.\n            Don\'t modify these 3 pswp__item elements, data is added later on. -->\n        <div class="pswp__container">\n            <div class="pswp__item"></div>\n            <div class="pswp__item"></div>\n            <div class="pswp__item"></div>\n        </div>\n\n        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->\n        <div class="pswp__ui pswp__ui--hidden">\n\n            <div class="pswp__top-bar">\n\n                <!--  Controls are self-explanatory. Order can be changed. -->\n\n                <div class="pswp__counter"></div>\n\n                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>\n\n                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>\n\n                <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->\n                <!-- element will get class pswp__preloader--active when preloader is running -->\n                <div class="pswp__preloader">\n                    <div class="pswp__preloader__icn">\n                        <div class="pswp__preloader__cut">\n                            <div class="pswp__preloader__donut"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">\n                <div class="pswp__share-tooltip"></div>\n            </div>\n\n            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">\n            </button>\n\n            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">\n            </button>\n\n            <div class="pswp__caption">\n                <div class="pswp__caption__center"></div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/article/article.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ChangeDetectorRef */]])
], Article);

//# sourceMappingURL=article.js.map

/***/ })

});
//# sourceMappingURL=33.main.js.map