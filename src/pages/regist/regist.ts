import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../service/user.service';
import { Headers, Http } from '@angular/http';

declare var window;
@IonicPage()
@Component({
  selector: 'page-regist',
  templateUrl: 'regist.html',
})
export class Regist {

  name: '';
  pass: '';
  userdata: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public UserService: UserService, public http: Http) {

  }

  registJP() {

    var name = this.userdata._id + '',
      pass = this.userdata._id + '',
      _that = this;

    if (window.JMessage) {
      
      window.JMessage.register(name, pass,
        function () {
          // 注册成功。
          _that.UserService.setUser(_that.userdata);
          _that.navCtrl.popToRoot();
        }, function (errorStr) {
          alert(errorStr);	// 输出错误信息。
        });
    }
  }

  regist() {

    if (!this.name || !this.pass) {
      return true;
    }

    let url = "http://www.devonhello.com/chihu/register";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "name=" + this.name + "&pass=" + this.pass, {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json()[0]['_id']) {
          this.userdata = res.json()[0];
          this.registJP();
        }
      });
  }

}
