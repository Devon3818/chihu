import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ToastController } from 'ionic-angular';

declare var window;
declare var JPushPlugin;
@Injectable()
export class JPushService {

  public headers: Headers;
  isInitJP = false;
  inRoom = false;
  msgListTHIS: any = null;

  constructor(public http: Http, public toastCtrl: ToastController) {
    this.init();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: '你有一条私信...',
      duration: 2500,
      position: 'top'
    });
    toast.present();
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
            //alert(JSON.stringify(event));
          }, false)
          //监听点击状态栏通知
          document.addEventListener("jpush.openNotification", (event) => {
            //alert(JSON.stringify(event));
          }, false)

        } else {
          // 关闭
          alert("关闭");
        }
      })

    }

    if (window.plugins && window.plugins.NativeAudio) {

      // Preload audio resources 
      window.plugins.NativeAudio.preloadComplex('music', 'lolo.aac', 1, 1, 0, function (msg) {
      }, function (msg) {
        //alert('error: ' + msg);
      });
      
    }
  }

  play() {
    window.plugins.NativeAudio.play('music');
  }

  jpush_setAlias(Alias) {
    window.plugins.jPushPlugin.setAlias(Alias);
  }

  JPIMlogin(username, password) {
    var _that = this;
    window.JMessage.login(username + '', password + '',
      function () {
        //alert("IM登录成功");
        _that.onReceiveCustomMessage();
      }, function (errorStr) {
        alert(errorStr);	// 输出错误信息。
      });
  }

  JPIMsendSingleCustomMessage(username, JsonStr) {
    window.JMessage.sendSingleCustomMessage(username, JsonStr, null,
      function (response) {
        //var message = JSON.parse(response);
        //alert(response);
      }, function (errorMsg) {
        alert(errorMsg);	// 输出错误信息。
      });
  }

  onReceiveCustomMessage() {
    var _that = this;
    document.addEventListener('jmessage.onReceiveCustomMessage', function (msg) {
      if (!_that.inRoom) {
        //alert("root:" + JSON.stringify(msg));
        _that.presentToast();
      } else {
        if (_that.msgListTHIS) {
          _that.msgListTHIS.msgList.push(msg);
          _that.msgListTHIS.scrollToBottom();
        }
      }
      _that.play();
    }, false);
  }


}