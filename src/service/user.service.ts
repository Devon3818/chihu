import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { JPushService } from './jPush.service';
import { Platform, AlertController, LoadingController } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

@Injectable()
export class UserService {

    isopenimg: boolean = false;
    galleryOBJ = null;
    loading: any = null;
    Version = '';

    public _init: any = {
        name: "吃乎",
        userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
        _id: null,
    }
    public _user: any;

    constructor(public http: Http, public storage: Storage, public Platform: Platform, public JPushService: JPushService, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
        this._user = this._init;
        this.JPushService.init();
        this.storage.ready().then(() => {
            this.storageGet();
        });
    }

    showAlert(subTitle) {
        let alert = this.alertCtrl.create({
            title: '吃乎提示!',
            subTitle: subTitle,
            buttons: ['确定']
        });
        alert.present();
    }

    presentLoadingDefault() {
        this.loading = this.loadingCtrl.create({
            content: '吃乎正在加载中...'
        });
        this.loading.present();
    }

    presentLoadingDismiss() {
        this.loading.dismiss();
    }

    //更新用户数据,录入缓存
    setUser(obj) {
        //alert("头像："+img);
        this._user = obj;
        this.storage.set('user', this._user);
        this.storageGet();
    }

    //获取缓存
    storageGet() {
        var _that = this;
        _that.storage.get('user').then((val) => {

            if (val && val._id) {
                //alert(val._id);
                _that._user = val;
                _that.JPushService.jpush_setAlias(val._id + '');
                _that.JPushService.JPIMlogin(val._id, val._id);
                //_that.ImService.gettoken(val._id, val.name);
            } else {
                //alert("未登录");
            }


        })
    }

    //清除缓存
    clearStorage() {
        this.storage.clear();
        this._user = this._init;
        //this.Platform.exitApp();
    }

}
