webpackJsonp([13],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(404);
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

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(244);
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
    function Question(http, navCtrl, navParams, ref, UserService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = ref;
        this.UserService = UserService;
        this.title = '很多it大牛在我这个年龄时已经很厉害了？';
        this.tabanimate = false;
        this.list = [];
        this.data = {};
        this.ishide = true;
        this._id = this.navParams.get("_id");
        this.getdata();
    }
    Question.prototype.getdata = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu/question";
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
    Question.prototype.getanswer = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu/answer_list";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "id=" + this._id, {
            headers: headers
        })
            .subscribe(function (res) {
            //alert(JSON.stringify(res.json()));
            _this.list = res.json();
        });
    };
    //检查是否已经关注
    Question.prototype.checkfork = function () {
        var _this = this;
        if (!this.UserService._user._id) {
            this.navCtrl.push('Login');
        }
        else {
            var url = "http://www.devonhello.com/chihu/checkforkquestion";
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post(url, "artid=" + this._id + "&id=" + this.UserService._user._id, {
                headers: headers
            })
                .subscribe(function (res) {
                //alert(JSON.stringify(res.json()));
                if (res.json().length == "0") {
                    _this.ishide = false;
                }
                _this.getanswer();
            });
        }
    };
    //关注问题
    Question.prototype.fork = function () {
        var _this = this;
        if (!this.UserService._user._id) {
            this.navCtrl.push('Login');
            return true;
        }
        if (this.ishide) {
            alert("已关注");
        }
        else {
            var url = "http://www.devonhello.com/chihu/forkquestion";
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post(url, "uid=" + this.data['uid'] + "&artid=" + this._id + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.name + "&userimg=" + this.UserService._user.userimg + "&title=" + this.data['title'], {
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
    //打开页面
    Question.prototype.pushAnswerPage = function (_id) {
        this.navCtrl.push('AnswerPage', {
            _id: _id
        });
    };
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Content */])
], Question.prototype, "content", void 0);
Question = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-question',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/question/question.html"*/'<!--\n  Generated template for the Question page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n    <ion-navbar color="bule">\n        <ion-title [class.animate]="tabanimate">\n            {{title}}\n            <p>{{data.answer}} 个回答</p>\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n              <ion-icon name="share"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button icon-only>\n              <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content class="content" (ionScroll)="onScroll($event)">\n\n    <section class="dv_top_ban">\n        <!--标签-->\n        <!--<span class="tips">法律</span>\n        <span class="tips">新闻</span>\n        <span class="tips">北京地铁</span>\n        <span class="tips">社会</span>-->\n\n        <h2>{{data.title}}</h2>\n        <p>{{data.text}}</p>\n        <ion-row>\n            <ion-col>\n                <button ion-button icon-left clear small>\n                  <ion-icon name="eye"></ion-icon>\n                  <div>{{data.fork}}</div>\n                </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button icon-left clear small>\n                  <ion-icon name="text"></ion-icon>\n                  <div>{{data.answer}}</div>\n                </button>\n            </ion-col>\n            <ion-col center text-center>\n                <button [hidden]="ishide" ion-button (click)="fork();">＋ 关注</button>\n                <button [hidden]="!ishide" color="tabc" ion-button>＋ 关注</button>\n            </ion-col>\n        </ion-row>\n    </section>\n\n    <ion-list>\n        <ion-list-header>\n            {{data.answer}} 个回答\n        </ion-list-header>\n    </ion-list>\n\n    <section class="dv_list">\n        <!--重复-->\n        <section class="dv_item" *ngFor="let item of list">\n            <section class="dv_item_head">\n                <img [src]="item.userimg" />\n                <p>{{item.name}}</p>\n            </section>\n\n            <p (click)="pushAnswerPage( item._id );">{{item.dec}}</p>\n            <section (click)="pushAnswerPage( item._id );" class="dv_item_bottom">\n                <p>{{item.mark.think}} 感谢 • {{item.mark.collect}} 收藏 • {{item.mark.cont}} 评论</p>\n            </section>\n        </section>\n\n    </section>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/question/question.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]])
], Question);

//# sourceMappingURL=question.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map