import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../service/user.service';
import { Headers, Http } from '@angular/http';

declare var QQSDK: any;
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  name: '';
  pass: '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public UserService: UserService, 
    public http: Http
    ) {

  }

  login() {

    if (!this.name || !this.pass) {
      return true;
    }

    let url = "http://www.devonhello.com/chihu/login";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "name=" + this.name + "&pass=" + this.pass, {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json()[0]['_id']) {
          this.UserService.setUser(res.json()[0]);
          this.navCtrl.pop();
        }
      });
  }

  //注册
  regist() {
    this.navCtrl.push('Regist');
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
      if (result.userid) {
        _that.getQQuser(result.access_token, result.userid);
      }
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
        //_that.UserService.setUser( res.json()['nickname'], accessToken, res.json()['figureurl_2'], sex );
      });

  }

  ionViewWillLeave() {
    this.UserService.presentLoadingDismiss();
  }

}
