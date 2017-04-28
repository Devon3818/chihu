import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ImService } from './im.service';
import { Platform } from 'ionic-angular';

@Injectable()
export class UserService {

    public _init: any = {
        name: "吃乎君",
        img: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
        id: null,
        sex: null
}
    public _user: any;

    constructor(public storage: Storage, public ImService: ImService, public Platform: Platform) {
        this._user = this._init;
        this.storage.ready().then(() => {
            
            //this.storageGet();
           
        });
    }

    //更新用户数据,录入缓存
    setUser(name, id, img, sex) {
        //alert("头像："+img);
        this._user.id = id;
        this._user.name = name;
        this._user.img = img;
        this._user.sex = sex;
        this.storage.set('user', this._user);
        this.storageGet();
    }

    //获取缓存
    storageGet() {
        var _that = this;
        _that.storage.get('user').then((val) => {
            
            if (val && val.id) {
                //alert(val.name);
                _that._user = val;
                _that.ImService.gettoken(val.id, val.name);
            } else {
                alert("未登录");
            }


        })
    }

    //清除缓存
    clearStorage(){
        this.ImService.disconnect();
        this.storage.clear();
        this._user = this._init;
        //this.Platform.exitApp();
    }


}
