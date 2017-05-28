import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-focus-question',
  templateUrl: 'focus-question.html',
})
export class FocusQuestion {

  rootNavCtrl: NavController;
  //数据存储
  items = [];
  id: any;

  constructor(
    public http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public UserService: UserService
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.id = this.navParams.data._id;
    this.getdata();
  }

  //查看TA的个人主页
  pushQuestionPage(_id) {
    this.rootNavCtrl.push('Question', {
      _id: _id
    });
  }

  //关注的问题
  getdata() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/getforkquestion";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this.id, {
      headers: headers
    })
      .subscribe((res) => {
        this.UserService.presentLoadingDismiss();
        this.items = res.json();
      });
  }

}
