import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-hot-answer',
  templateUrl: 'hot-answer.html',
})
export class HotAnswer {

  //数据存储
  items = [];

  constructor(
    public http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public UserService: UserService
  ) {
    this.getdata();
  }

  //获取数据
  getdata() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/hot_answer";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "type=0", {
      headers: headers
    })
      .subscribe((res) => {
        this.items = this.items.concat(res.json());
        this.UserService.presentLoadingDismiss();
      });
  }

  //查看TA的个人主页
  pushQuestionPage(_id) {
    this.navCtrl.push('Question', {
      _id: _id
    });
  }

  //打开文章页面
  pushAnswerPage(_id) {
    this.navCtrl.push('AnswerPage', {
      _id: _id
    });
  }

}
