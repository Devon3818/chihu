import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../service/user.service';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var QQSDK: any;
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams, public UserService: UserService, public http: Http) {

  }

  QQinit() {
    var args = { client: '' },
      _that = this;
    args.client = QQSDK.ClientType.QQ;//QQSDK.ClientType.QQ,QQSDK.ClientType.TIM;
    QQSDK.checkClientInstalled(function () {
      _that.QQlogin();
    }, function () {
      // if installed QQ Client version is not supported sso,also will get this error
      alert('client is not installed');
    }, args);
  }

  QQlogin() {
    var args = { client: '' },
        _that = this;
    args.client = QQSDK.ClientType.QQ;//QQSDK.ClientType.QQ,QQSDK.ClientType.TIM;
    QQSDK.ssoLogin(function (result) {
      alert('token is ' + result.access_token);
      alert('userid is ' + result.userid);
      alert('expires_time is ' + new Date(parseInt(result.expires_time)) + ' TimeStamp is ' + result.expires_time);
      _that.getQQuser(result.access_token, result.userid);
  }, function (failReason) {
      alert(failReason);
    }, args);
  }

  //获取qq用户信息
  getQQuser(accessToken, userId) {
    var _that = this;
    var url = 'https://graph.qq.com/user/get_user_info?access_token=' + accessToken + '&oauth_consumer_key=' + '1105594635' + '&openid=' + userId;

    this.http.get(url)
      .subscribe((res) => {
        alert(JSON.stringify(res.json()));
        var sex = res.json()['gender'] == "男" ? 0 : 1;
        _that.UserService.setUser( res.json()['nickname'], accessToken, sex, res.json()['figureurl_2'] );
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
