webpackJsonp([11],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(397);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionModule", function() { return QuestionModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuestionModule = (function () {
    function QuestionModule() {
    }
    return QuestionModule;
}());
QuestionModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]
        ]
    })
], QuestionModule);

//# sourceMappingURL=question.module.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
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
 * Generated class for the Question page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Question = (function () {
    function Question(navCtrl, navParams, ref) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = ref;
        this.title = '很多it大牛在我这个年龄时已经很厉害了？';
        this.tabanimate = false;
        this.data = {
            _id: "_id",
            uid: "uid",
            name: "Devon2",
            userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
            title: "鱼香肉丝怎么做？",
            text: "鱼香肉丝怎么做？辣中带酸，酸中带甜，甜中带咸，咸中又带鲜……味道丰富而不杂腻！恰似女儿心，捉摸不透，又飘忽不定，似近又远，偶尔火辣又偶尔羞涩……",
            time: "10-10",
        };
        this._that = this;
    }
    Question.prototype.ionViewDidLoad = function () {
        this.content.enableJsScroll();
    };
    Question.prototype.onScroll = function ($event) {
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
    return Question;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Content */])
], Question.prototype, "content", void 0);
Question = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-question',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/question/question.html"*/'<!--\n  Generated template for the Question page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n    <ion-navbar color="bule">\n        <ion-title [class.animate]="tabanimate">\n            {{title}}\n            <p>123 个回答</p>\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n              <ion-icon name="share"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button icon-only>\n              <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content class="content" (ionScroll)="onScroll($event)">\n\n    <section class="dv_top_ban">\n        <!--标签-->\n        <!--<span class="tips">法律</span>\n        <span class="tips">新闻</span>\n        <span class="tips">北京地铁</span>\n        <span class="tips">社会</span>-->\n\n        <h2>{{data.title}}</h2>\n        <p>{{data.text}}</p>\n        <ion-row>\n            <ion-col>\n                <button ion-button icon-left clear small>\n                  <ion-icon name="eye"></ion-icon>\n                  <div>7147</div>\n                </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button icon-left clear small>\n                  <ion-icon name="text"></ion-icon>\n                  <div>123</div>\n                </button>\n            </ion-col>\n            <ion-col center text-center>\n                <button ion-button>关注</button>\n            </ion-col>\n        </ion-row>\n    </section>\n\n    <ion-list>\n        <ion-list-header>\n            123 个回答\n        </ion-list-header>\n    </ion-list>\n\n    <section class="dv_list">\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 赞同 • 677评论 • 关注问题</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 赞同 • 677评论 • 关注问题</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 赞同 • 677评论 • 关注问题</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 赞同 • 677评论 • 关注问题</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 赞同 • 677评论 • 关注问题</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 赞同 • 677评论 • 关注问题</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 赞同 • 677评论 • 关注问题</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 赞同 • 677评论 • 关注问题</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 赞同 • 677评论 • 关注问题</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 赞同 • 677评论 • 关注问题</p>\n            </section>\n        </section>\n        <!--重复-->\n        <section class="dv_item">\n            <section class="dv_item_head">\n                <img src="https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100" />\n                <p>Devon</p>\n            </section>\n\n            <p>我该怎么做才能变成他们那样的人，我该怎么做才能变成他们那样的人。我该怎么做才能变成他们那样的人我该怎么做才能变成他们那样的人...</p>\n            <section class="dv_item_bottom">\n                <p>4.7K 赞同 • 677评论 • 关注问题</p>\n            </section>\n        </section>\n    </section>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/question/question.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ChangeDetectorRef */]])
], Question);

//# sourceMappingURL=question.js.map

/***/ })

});
//# sourceMappingURL=11.main.js.map