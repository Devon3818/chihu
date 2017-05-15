webpackJsonp([14],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perparticular__ = __webpack_require__(401);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerparticularModule", function() { return PerparticularModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PerparticularModule = (function () {
    function PerparticularModule() {
    }
    return PerparticularModule;
}());
PerparticularModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__perparticular__["a" /* Perparticular */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perparticular__["a" /* Perparticular */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__perparticular__["a" /* Perparticular */]
        ]
    })
], PerparticularModule);

//# sourceMappingURL=perparticular.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Perparticular; });
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
 * Generated class for the Perparticular page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Perparticular = (function () {
    function Perparticular(http, navCtrl, navParams, UserService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserService = UserService;
        this.user = {};
        this.ishide = false;
        this.isme = true;
        this.user = this.UserService._user;
        if (this.navParams.data._id) {
            this._id = this.navParams.data._id;
            if (this.UserService._user._id && this._id != this.UserService._user._id) {
                this.isme = false;
            }
        }
        else {
            this._id = this.UserService._user._id;
        }
        this.getdata();
    }
    Perparticular.prototype.getdata = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu/getuserdata";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "id=" + this._id, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.user = res.json()[0];
            if (!_this.isme) {
                _this.checkfork();
            }
        });
    };
    //检查是否已经关注
    Perparticular.prototype.checkfork = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu/checkfork";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "uid=" + this._id + "&id=" + this.UserService._user._id, {
            headers: headers
        })
            .subscribe(function (res) {
            //alert(JSON.stringify(res.json()));
            if (res.json().length != "0") {
                _this.ishide = true;
            }
        });
    };
    //关注
    Perparticular.prototype.fork = function () {
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
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post(url, "uid=" + this._id + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.name + "&uname=" + this.user['name'] + "&userimg=" + this.UserService._user.userimg + "&uuserimg=" + this.user['userimg'], {
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
    //取消关注
    Perparticular.prototype.disfork = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu/disfork_user";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "uid=" + this._id + "&id=" + this.UserService._user._id, {
            headers: headers
        })
            .subscribe(function (res) {
            //alert(JSON.stringify(res.json()));
            if (res.json() != '0') {
                _this.ishide = false;
                alert("取消关注成功");
            }
        });
    };
    return Perparticular;
}());
Perparticular = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-perparticular',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/perparticular/perparticular.html"*/'<!--\n  Generated template for the Perparticular page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="content overflow" id="dv_perpart">\n    <section class="dv_ban_top">\n        <div class="dv_ban_top_div">\n            <p>关注的话题</p>\n            <h2>{{user.forkqus}}</h2>\n        </div>\n        <div class="dv_ban_top_div">\n            <p>我关注的人</p>\n            <h2>{{user.forkuser}}</h2>\n        </div>\n        <div class="dv_ban_top_div">\n            <p>关注我的人</p>\n            <h2>{{user.fork}}</h2>\n        </div>\n        <p>{{user.dec}}</p>\n        <ion-row>\n            <ion-col>\n                <button ion-button icon-left clear small>\n                  <ion-icon name="eye"></ion-icon>\n                  <div>{{user.work}}</div>\n                </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button icon-left clear small>\n                  <ion-icon name="text"></ion-icon>\n                  <div>{{user.share}}</div>\n                </button>\n            </ion-col>\n            <ion-col center text-center>\n                <button [hidden]="isme || ishide" (click)="fork();" ion-button>关注</button>\n                <button [hidden]="isme || !ishide" (click)="disfork();" ion-button>取消关注</button>\n            </ion-col>\n        </ion-row>\n    </section>\n\n    <ion-list no-border>\n\n        <ion-item>\n            <ion-icon name=\'eye\' item-left color="h"></ion-icon>\n            性别\n            <ion-note item-right>\n                {{user.sex}}\n            </ion-note>\n        </ion-item>\n        <ion-item>\n            <ion-icon name=\'star\' item-left color="h"></ion-icon>\n            积分\n            <ion-note item-right>\n                {{user.integral}}\n            </ion-note>\n        </ion-item>\n        <ion-item>\n            <ion-icon name=\'document\' item-left color="h"></ion-icon>\n            居住地\n            <ion-note item-right>\n                {{user.city}}\n            </ion-note>\n        </ion-item>\n        <ion-item>\n            <ion-icon name=\'time\' item-left color="h"></ion-icon>\n            行业\n            <ion-note item-right>\n                {{user.job}}\n            </ion-note>\n        </ion-item>\n\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/perparticular/perparticular.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]])
], Perparticular);

//# sourceMappingURL=perparticular.js.map

/***/ })

});
//# sourceMappingURL=14.main.js.map