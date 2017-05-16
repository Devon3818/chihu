webpackJsonp([34],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collect_question__ = __webpack_require__(377);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectQuestionModule", function() { return CollectQuestionModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CollectQuestionModule = (function () {
    function CollectQuestionModule() {
    }
    return CollectQuestionModule;
}());
CollectQuestionModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__collect_question__["a" /* CollectQuestion */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__collect_question__["a" /* CollectQuestion */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__collect_question__["a" /* CollectQuestion */]
        ]
    })
], CollectQuestionModule);

//# sourceMappingURL=collect-question.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectQuestion; });
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
 * Generated class for the CollectQuestion page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CollectQuestion = (function () {
    function CollectQuestion(http, navCtrl, navParams, UserService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserService = UserService;
        this.items = [];
        this.rootNavCtrl = navParams.get('rootNavCtrl');
        this.getdata();
    }
    CollectQuestion.prototype.getdata = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu/my_collect_question";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "id=" + this.UserService._user._id, {
            headers: headers
        })
            .subscribe(function (res) {
            //alert(JSON.stringify(res.json()));
            _this.items = _this.items.concat(res.json());
        });
    };
    CollectQuestion.prototype.pushQuestionPage = function (_id) {
        this.rootNavCtrl.push('Question', {
            _id: _id
        });
    };
    //打开页面
    CollectQuestion.prototype.pushAnswerPage = function (_id) {
        this.rootNavCtrl.push('AnswerPage', {
            _id: _id
        });
    };
    CollectQuestion.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CollectQuestion');
    };
    return CollectQuestion;
}());
CollectQuestion = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-collect-question',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/collect-question/collect-question.html"*/'<!--\n  Generated template for the CollectQuestion page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n\n    <section class="dv_item" *ngFor="let item of items">\n        <section class="dv_item_head">\n            <img [src]="item.userimg" />\n            <p>{{item.name}} 回答了问题</p>\n        </section>\n        <h6 (click)="pushQuestionPage( item.answerid );">{{item.title}}</h6>\n        <div (click)="pushAnswerPage( item._id );">\n            <p>{{item.dec}}</p>\n            <section class="dv_item_bottom">\n                <p>{{item.mark.think}} 感谢 • {{item.mark.collect}} 收藏 • {{item.mark.cont}} 评论</p>\n            </section>\n        </div>\n    </section>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/collect-question/collect-question.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]])
], CollectQuestion);

//# sourceMappingURL=collect-question.js.map

/***/ })

});
//# sourceMappingURL=34.main.js.map