webpackJsonp([6],{

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_share__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(368);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateShareModule", function() { return CreateShareModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateShareModule = (function () {
    function CreateShareModule() {
    }
    return CreateShareModule;
}());
CreateShareModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_share__["a" /* CreateShare */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_share__["a" /* CreateShare */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__create_share__["a" /* CreateShare */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]
        ]
    })
], CreateShareModule);

//# sourceMappingURL=create-share.module.js.map

/***/ }),

/***/ 368:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Promise)
    ], Camera.prototype, "getPicture", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS']
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Promise)
    ], Camera.prototype, "cleanup", null);
    Camera = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Plugin */])({
            pluginName: 'Camera',
            plugin: 'cordova-plugin-camera',
            pluginRef: 'navigator.camera',
            repo: 'https://github.com/apache/cordova-plugin-camera',
            platforms: ['Android', 'BlackBerry', 'Browser', 'Firefox', 'FireOS', 'iOS', 'Windows', 'Windows Phone 8', 'Ubuntu']
        }), 
        __metadata('design:paramtypes', [])
    ], Camera);
    return Camera;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(368);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateShare; });
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
 * Generated class for the CreateShare page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CreateShare = (function () {
    function CreateShare(navCtrl, navParams, actionSheetCtrl, camera, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.ishide = false;
        this.items = [];
    }
    CreateShare.prototype.send = function () {
        this.navCtrl.popToRoot();
    };
    //长按删除事件
    CreateShare.prototype.pressEvent = function (idx) {
        //alert(idx);
        this.showConfirm(idx);
    };
    //删除提示
    CreateShare.prototype.showConfirm = function (idx) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '提示',
            message: '是否删除此照片?',
            buttons: [
                {
                    text: '在想想',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        _this.items.splice(idx, 1);
                        if (_this.items.length < 3) {
                            _this.ishide = false;
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    CreateShare.prototype.presentActionSheet = function () {
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
    CreateShare.prototype.seleImgType = function (type) {
        var _that = this;
        this.camera.getPicture({
            quality: 90,
            allowEdit: true,
            sourceType: type,
            correctOrientation: true,
        }).then(function (imageData) {
            //alert(imageData);
            _that.items.push(imageData);
            if (_that.items.length >= 3) {
                _that.ishide = true;
            }
        }, function (err) {
            // Handle error
        });
    };
    CreateShare.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateShare');
    };
    return CreateShare;
}());
CreateShare = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'page-create-share',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/create-share/create-share.html"*/'<!--\n  Generated template for the CreateShare page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>分享</ion-title>\n        <ion-buttons end (click)="send();">\n            <ion-title>发送</ion-title>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-textarea placeholder="这一刻的想法..."></ion-textarea>\n\n    <div (press)="pressEvent(i)" *ngFor="let item of items; let i=index" class="imgs" [style.background]="\'url(\'+ item +\')\'"></div>\n\n    <div [hidden]="ishide" (click)="presentActionSheet();" class="imgs" [style.background]="\'url(assets/icon/addimg.png)\'"></div>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.0.1/chihu/src/pages/create-share/create-share.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* AlertController */]])
], CreateShare);

//# sourceMappingURL=create-share.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map