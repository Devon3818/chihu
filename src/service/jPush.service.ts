import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

declare var window;
declare var JPushPlugin;
@Injectable()
export class JPushService {

  public headers: Headers;
  isInitJP = false;


  constructor(public http: Http) {
    this.init();
  }


  init() {
    var _that = this;
    
    //启动极光推送
    if (window.plugins && window.plugins.jPushPlugin && !this.isInitJP) {
      this.isInitJP = true;
      window.plugins.jPushPlugin.init();
      window.plugins.jPushPlugin.isPushStopped(function (result) {
        if (result == 0) {
          // 开启
          //设置别名监听
          document.addEventListener("jpush.setTagsWithAlias", (event) => {
            alert(JSON.stringify(event));
          }, false)
          //监听点击状态栏通知
          document.addEventListener("jpush.openNotification", (event) => {
            alert(JSON.stringify(event));
          }, false)

        } else {
          // 关闭
          alert("关闭");
        }
      })

    }
  }

  jpush_setAlias(Alias){
    window.plugins.jPushPlugin.setAlias(Alias);
  }

}