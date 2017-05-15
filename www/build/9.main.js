webpackJsonp([9],{

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work_item__ = __webpack_require__(409);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkItemModule", function() { return WorkItemModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WorkItemModule = (function () {
    function WorkItemModule() {
    }
    return WorkItemModule;
}());
WorkItemModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__work_item__["a" /* WorkItem */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__work_item__["a" /* WorkItem */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__work_item__["a" /* WorkItem */]
        ]
    })
], WorkItemModule);

//# sourceMappingURL=work-item.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_work_service__ = __webpack_require__(248);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkItem; });
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
 * Generated class for the WorkItem page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WorkItem = (function () {
    function WorkItem(navCtrl, navParams, WorkService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.WorkService = WorkService;
        this.idx = 0;
        this.banner = 'assets/icon/work_item.png';
        this.text = '';
        this.idx = this.navParams.get('idx');
        if (this.idx != -1) {
            this.banner = this.WorkService._item[this.idx]['imgsrc'];
            this.text = this.WorkService._item[this.idx]['text'];
        }
    }
    WorkItem.prototype.send = function () {
        this.WorkService._item.push({
            imgsrc: this.banner,
            text: this.text
        });
        this.navCtrl.pop();
    };
    WorkItem.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkItem');
    };
    return WorkItem;
}());
WorkItem = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-work-item',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/work-item/work-item.html"*/'<!--\n  Generated template for the WorkItem page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>步骤详情</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <section class="work_top">\n        <section (click)="presentActionSheet();" class="work_banner" [style.background]="\'url(\'+ banner +\')\'"></section>\n        <ion-textarea [(ngModel)]="text" placeholder="输入这道美食的详细步骤"></ion-textarea>\n    </section>\n    <button (click)="send();" class="dv_button" ion-button icon-left round outline>确定</button>\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/work-item/work-item.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_work_service__["a" /* WorkService */]])
], WorkItem);

//# sourceMappingURL=work-item.js.map

/***/ })

});
//# sourceMappingURL=9.main.js.map