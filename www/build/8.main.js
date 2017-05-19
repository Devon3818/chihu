webpackJsonp([8],{

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_cook_data__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(369);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCookDataModule", function() { return CreateCookDataModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateCookDataModule = (function () {
    function CreateCookDataModule() {
    }
    return CreateCookDataModule;
}());
CreateCookDataModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_cook_data__["a" /* CreateCookData */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_cook_data__["a" /* CreateCookData */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__create_cook_data__["a" /* CreateCookData */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]
        ]
    })
], CreateCookDataModule);

//# sourceMappingURL=create-cook-data.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Camera; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
 * @name Camera
 * @description
 * Take a photo or capture video.
 *
 * Requires and the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).
 *
 * @usage
 * ```typescript
 * import { Camera, CameraOptions } from '@ionic-native/camera';
 *
 * constructor(private camera: Camera) { }
 *
 * ...
 *
 *
 * const options: CameraOptions = {
 *   quality: 100,
 *   destinationType: this.camera.DestinationType.DATA_URL,
 *   encodingType: this.camera.EncodingType.JPEG,
 *   mediaType: this.camera.MediaType.PICTURE
 * }
 *
 * this.camera.getPicture(options).then((imageData) => {
 *  // imageData is either a base64 encoded string or a file URI
 *  // If it's base64:
 *  let base64Image = 'data:image/jpeg;base64,' + imageData;
 * }, (err) => {
 *  // Handle error
 * });
 * ```
 * @interfaces
 * CameraOptions
 * CameraPopoverOptions
 */
var Camera = (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        _super.apply(this, arguments);
        /**
         * Constant for possible destination types
         */
        this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2
        };
        /**
         * Convenience constant
         */
        this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1
        };
        /**
         * Convenience constant
         */
        this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2
        };
        /**
         * Convenience constant
         */
        this.PictureSourceType = {
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            SAVEDPHOTOALBUM: 2
        };
        /**
         * Convenience constant
         */
        this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15
        };
        /**
         * Convenience constant
         */
        this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1
        };
    }
    /**
     * Take a picture or video, or load one from the library.
     * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
     * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
     */
    Camera.prototype.getPicture = function (options) { return; };
    /**
     * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
     * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
     * @returns {Promise<any>}
     */
    Camera.prototype.cleanup = function () { return; };
    ;
    Camera.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
    ];
    /** @nocollapse */
    Camera.ctorParameters = function () { return []; };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Cordova */])({
            callbackOrder: 'reverse'
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Promise)
    ], Camera.prototype, "getPicture", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Cordova */])({
            platforms: ['iOS']
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Promise)
    ], Camera.prototype, "cleanup", null);
    Camera = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'Camera',
            plugin: 'cordova-plugin-camera',
            pluginRef: 'navigator.camera',
            repo: 'https://github.com/apache/cordova-plugin-camera',
            platforms: ['Android', 'BlackBerry', 'Browser', 'Firefox', 'FireOS', 'iOS', 'Windows', 'Windows Phone 8', 'Ubuntu']
        }), 
        __metadata('design:paramtypes', [])
    ], Camera);
    return Camera;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* IonicNativePlugin */]));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_work_service__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_service__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCookData; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateCookData = (function () {
    function CreateCookData(http, navCtrl, alertCtrl, navParams, camera, actionSheetCtrl, WorkService, UserService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.WorkService = WorkService;
        this.UserService = UserService;
        this.title = '';
        this.items = [];
        this.foods = [];
        this.isReordering = false;
        this.sphide = false;
        this.banner = "assets/icon/work_banner.png";
        this.title = this.WorkService._title;
        this.init();
    }
    CreateCookData.prototype.init = function () {
        this.items = this.WorkService._item;
    };
    CreateCookData.prototype.ionViewDidEnter = function () {
        this.init();
    };
    CreateCookData.prototype.reorderItems = function (indexes) {
        var element = this.items[indexes.from];
        this.items.splice(indexes.from, 1);
        this.items.splice(indexes.to, 0, element);
    };
    CreateCookData.prototype.edit = function () {
        this.sphide = !this.sphide;
        this.isReordering = !this.isReordering;
    };
    CreateCookData.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: '食材',
            message: "输入你要添加的材料和用量，例如：鸡蛋，一只",
            inputs: [
                {
                    name: 'name',
                    placeholder: '材料：如鸡蛋'
                },
                {
                    name: 'len',
                    placeholder: '用量：如一只'
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                    }
                },
                {
                    text: '添加',
                    handler: function (data) {
                        _this.foods.push(1);
                        //alert(data.name);
                        //alert(data.len);
                    }
                }
            ]
        });
        prompt.present();
    };
    //发布
    CreateCookData.prototype.send = function () {
        this.navCtrl.popToRoot();
    };
    //长按删除事件
    CreateCookData.prototype.pressEvent = function (idx) {
        //alert(idx);
        this.showConfirm();
    };
    //删除步骤／食材提示
    CreateCookData.prototype.showConfirm = function () {
        var confirm = this.alertCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    CreateCookData.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '图片来源',
            buttons: [
                {
                    text: '相册',
                    icon: 'images',
                    handler: function () {
                        _this.seleImgType(0);
                    }
                },
                {
                    text: '相机',
                    icon: 'camera',
                    handler: function () {
                        _this.seleImgType(1);
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    ionic: 'close',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    //成品图片
    CreateCookData.prototype.seleImgType = function (type) {
        var _that = this;
        this.camera.getPicture({
            quality: 90,
            allowEdit: true,
            sourceType: type,
            correctOrientation: true,
        }).then(function (imageData) {
            //alert(imageData);
            _that.banner = imageData;
        }, function (err) {
            // Handle error
        });
    };
    //添加步骤
    CreateCookData.prototype.addItem = function () {
        this.navCtrl.push('WorkItem', {
            idx: -1
        });
    };
    //修改步骤信息
    CreateCookData.prototype.editItem = function (idx) {
        this.navCtrl.push('WorkItem', {
            idx: idx
        });
    };
    return CreateCookData;
}());
CreateCookData = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-create-cook-data',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/create-cook-data/create-cook-data.html"*/'<!--\n  Generated template for the CreateCookData page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar>\n        <ion-title>创建菜谱</ion-title>\n        <ion-buttons end>\n            <button (click)="edit()" ion-button icon-only>\n              <ion-icon name="reorder"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <section class="work_top">\n        <section (click)="presentActionSheet();" class="work_banner" [style.background]="\'url(\'+ banner +\')\'"></section>\n        <input class="dv_work_title" [(ngModel)]="title" type="text" placeholder="写下你的菜谱名吧" />\n    </section>\n    <ion-list-header>\n        心得：\n    </ion-list-header>\n    <ion-textarea placeholder="输入这道美食背后的故事"></ion-textarea>\n    <ion-list-header>\n        用料：\n    </ion-list-header>\n    <section class="dv_food_list">\n        <ion-row (press)="pressEvent(i)" *ngFor="let food of foods; let i=index">\n            <ion-col>\n                <div>北豆腐</div>\n            </ion-col>\n            <ion-col>\n                <div>2块 (大概380g)</div>\n            </ion-col>\n        </ion-row>\n    </section>\n    <br/>\n    <button (click)="showPrompt();" class="dv_button" ion-button round outline>添加材料</button>\n\n    <ion-list>\n        <ion-list-header>做法：（ 点击编辑步骤后，长按可删除 ）</ion-list-header>\n        <ion-item-group [reorder]="isReordering" (ionItemReorder)="reorderItems($event)">\n\n            <div class="sp" [class.sp_hide]="sphide"></div>\n\n            <ion-item (press)="pressEvent(i)" (click)="editItem(i)" *ngFor="let item of items; let i=index">\n\n                <section class="imgs" [style.background]="\'url(\'+ item.imgsrc +\')\'"></section>\n\n                <p>\n                    {{item.text}}\n                </p>\n            </ion-item>\n\n\n        </ion-item-group>\n    </ion-list>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col width-50>\n                <button (click)="addItem();" class="dv_edit_button" ion-button icon-left round outline>\n                    <ion-icon name="star"></ion-icon>\n                    添加步骤\n                </button>\n            </ion-col>\n            <ion-col width-50>\n                <button (click)="edit()" class="dv_edit_button" ion-button icon-left round outline>\n                    <ion-icon name="reorder"></ion-icon>\n                    编辑步骤\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-list-header>\n        Tip：\n    </ion-list-header>\n    <ion-textarea placeholder="温馨提示"></ion-textarea>\n\n    <button (click)="send();" class="dv_button" ion-button round outline>发布菜谱</button>\n    <br/>\n    <br/>\n    <br/>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/create-cook-data/create-cook-data.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__service_work_service__["a" /* WorkService */], __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */]])
], CreateCookData);

//# sourceMappingURL=create-cook-data.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map