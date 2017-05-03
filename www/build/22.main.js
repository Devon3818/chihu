webpackJsonp([22],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(385);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_im_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_user_service__ = __webpack_require__(246);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(http, navCtrl, storage, ref, ImService, UserService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.ref = ref;
        this.ImService = ImService;
        this.UserService = UserService;
        this.tabanimate = false;
        this.isload = false;
        this.spanisload = false;
        this.old_scrollTop = 0;
        this.new_scrollTop = 0;
        this.ontouchstartY = 0;
        this.ontouchmoveY = 0;
        this.loadX = "-50px";
        this.checkload = true;
        this.itimer = null;
        //数据
        this.items = [];
        this._that = this;
        this.getdata();
    }
    HomePage.prototype.getdata = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu/home";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "len=1", {
            headers: headers
        })
            .subscribe(function (res) {
            //alert(JSON.stringify(res.json()));
            _this.items = _this.items.concat(res.json());
        });
    };
    HomePage.prototype.push = function () {
        this.navCtrl.push('AboutPage');
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.content.enableJsScroll();
    };
    HomePage.prototype.onScroll = function ($event) {
        this.isload = false;
        this.loadX = "-50px";
        var scrollTop = $event.scrollTop;
        console.log($event.scrollTop);
        if ($event.scrollTop == 0 && !this.checkload) {
            this.checkload = true;
        }
        if (scrollTop > 50 && (this.old_scrollTop - scrollTop) < 0) {
            if (!this.tabanimate) {
                this.tabanimate = true;
            }
        }
        else {
            this.tabanimate = false;
        }
        this.old_scrollTop = scrollTop;
        this.ref.detectChanges();
    };
    //打开页面
    HomePage.prototype.pushAnswerPage = function (_id, uid, type) {
        this.navCtrl.push('AnswerPage', {
            _id: _id,
            uid: uid,
            type: type
        });
    };
    //打开页面
    HomePage.prototype.pushQuestionPage = function () {
        this.navCtrl.push('Question');
    };
    //打开页面
    HomePage.prototype.pushArticlePage = function (_id, uid, type) {
        this.navCtrl.push('Article', {
            _id: _id,
            uid: uid,
            type: type
        });
    };
    //创建菜谱
    HomePage.prototype.CreateCook = function () {
        //this.checkLogin( CreateCookTitle )
        this.navCtrl.push('CreateCookTitle');
    };
    //提问
    HomePage.prototype.CreateQuestion = function () {
        //this.checkLogin(CreateQuestionType);
        this.navCtrl.push('CreateQuestionType');
    };
    //分享
    HomePage.prototype.CreateShare = function () {
        //this.checkLogin(CreateShare);
        this.navCtrl.push('CreateShare');
    };
    //检查登录状态
    HomePage.prototype.checkLogin = function (page) {
        if (this.UserService._user.id) {
            this.navCtrl.push(page);
        }
        else {
            this.navCtrl.push('Login');
        }
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        alert('Begin async operation');
        setTimeout(function () {
            infiniteScroll.complete();
        }, 3000);
    };
    HomePage.prototype.ontouchstart = function ($event) {
        //console.log($event.touches[0].clientY);
        clearTimeout(this.itimer);
        this.ontouchstartY = $event.touches[0].clientY;
        this.spanisload = false;
    };
    HomePage.prototype.ontouchmove = function ($event) {
        if (!this.checkload && this.old_scrollTop != 0) {
            return false;
        }
        this.ontouchmoveY = Math.floor($event.touches[0].clientY - this.ontouchstartY);
        if (this.ontouchmoveY >= 105) {
            this.ontouchmoveY = 105;
        }
        this.loadX = this.ontouchmoveY + 'px';
    };
    HomePage.prototype.ontouchend = function ($event) {
        this.isload = true;
        this.spanisload = true;
        var _that = this;
        if (this.ontouchmoveY >= 105) {
            this.itimer = setTimeout(function () {
                _that.isload = false;
                _that.loadX = "-50px";
            }, 5000);
        }
        else {
            _that.isload = false;
            _that.loadX = "-50px";
        }
        this.checkload = false;
    };
    return HomePage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Content */])
], HomePage.prototype, "content", void 0);
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/home/home.html"*/'<ion-header [class.animate]="tabanimate">\n    <ion-navbar color="bule">\n\n        <ion-searchbar placeholder="搜索"></ion-searchbar>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="content" (touchend)="ontouchend($event)" (touchmove)="ontouchmove($event)" (touchstart)="ontouchstart($event)" (ionScroll)="onScroll($event)">\n\n    <span class="dv_load" [class.dv_load_tran]="spanisload" [style.top]="loadX">\n        <span class="ouro">\n            <span class="left">\n                <span [class.load_move]="isload" class="anim"></span>\n    </span>\n    <span class="right">\n                <span [class.load_move]="isload" class="anim"></span>\n    </span>\n    </span>\n    </span>\n\n    <!--重复-->\n    <section class="dv_item" *ngFor="let item of items">\n        <section class="dv_item_head">\n            <img [src]="item.userimg" />\n            <p *ngIf="item.type == \'0\'">{{item.name}} 回答了问题</p>\n            <p *ngIf="item.type == \'1\'">{{item.name}} 分享的作品</p>\n        </section>\n        <section *ngIf="item.type == \'1\'" (click)="pushArticlePage( item._id, item.uid, item.type );" class="dv_item_banner" [style.background]="\'url(\'+item.workbanner+\')\'"></section>\n        <h6 *ngIf="item.type == \'0\'" (click)="pushQuestionPage( item._id, item.uid, item.type );">{{item.title}}</h6>\n        <h6 *ngIf="item.type == \'1\'" (click)="pushArticlePage( item._id, item.uid, item.type );">{{item.title}}</h6>\n        <div *ngIf="item.type == \'0\'" (click)="pushAnswerPage( item._id, item.uid, item.type );">\n            <p>{{item.text}}</p>\n            <section class="dv_item_bottom">\n                <p>{{item.mark.think}} 感谢 • {{item.mark.collect}} 收藏 • {{item.mark.cont}} 评论</p>\n            </section>\n        </div>\n        <p *ngIf="item.type == \'1\'" (click)="pushArticlePage( item._id, item.uid, item.type );">{{item.text}}</p>\n        <section *ngIf="item.type == \'1\'" class="dv_item_bottom">\n            <p>{{item.mark.think}} 感谢 • {{item.mark.collect}} 收藏 • {{item.mark.cont}} 评论</p>\n        </section>\n    </section>\n\n    <!--发布按钮-->\n    <ion-fab right bottom edge #327eff>\n        <button ion-fab><ion-icon name="arrow-dropup"></ion-icon></button>\n        <ion-fab-list side="top">\n            <button (click)="CreateQuestion()" ion-fab><ion-icon name="help"></ion-icon></button>\n            <button (click)="CreateShare()" ion-fab><ion-icon name="images"></ion-icon></button>\n            <button (click)="CreateCook()" ion-fab><ion-icon name="clipboard"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_4__service_im_service__["a" /* ImService */], __WEBPACK_IMPORTED_MODULE_5__service_user_service__["a" /* UserService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=22.main.js.map