import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ImService } from './im.service';

@Injectable()
export class UserService {

    public _user: any = {
        name: "吃乎君"
    };

    constructor(public storage: Storage, public ImService: ImService) {
        this.storage.ready().then(() => {
            
            this.storageGet();
           
        });
    }

    //更新用户数据,录入缓存
    setUser(name, id, img, sex) {
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
                alert(val.name);
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
    }


}
