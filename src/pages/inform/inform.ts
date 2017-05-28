import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-inform',
  templateUrl: 'inform.html',
})
export class Inform {

  items = [];
  rootNavCtrl: NavController;
  nomessage: boolean = true;

  constructor(
    public http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public UserService: UserService
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.getdata();
  }

  //获取数据
  getdata() {

    if (!this.UserService._user._id) {
      //未登录
      this.items = [];
      return true;
    }

    let url = "http://www.devonhello.com/chihu/getinform";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.UserService._user._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.items = res.json();
        if (res.json().length != '0') {
          this.nomessage = false;
        }
      });
  }

  //查看TA的个人主页
  pushPerson(_id) {
    this.rootNavCtrl.push('Person', {
      _id: _id
    });
  }

  //打开文章
  pushPages(type, _id) {
    switch (type) {
      case '1':
        this.rootNavCtrl.push('Article', {
          _id: _id
        });
        break;
      case '2':
        this.rootNavCtrl.push('AnswerPage', {
          _id: _id
        });
        break;
      case '3':
        this.rootNavCtrl.push('OpenShare', {
          _id: _id
        });
        break;
      default:
        break;
    }
  }

  ionViewDidEnter() {
    this.getdata();
  }

}
