import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-collect-question',
  templateUrl: 'collect-question.html',
})
export class CollectQuestion {

  //数据存储
  items = [];
  rootNavCtrl: NavController;

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
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/my_collect_question";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this.UserService._user._id + "&type=0", {
      headers: headers
    })
      .subscribe((res) => {
        this.UserService.presentLoadingDismiss();
        this.items = this.items.concat(res.json());
      });
  }

  //查看TA的个人主页
  pushQuestionPage(_id) {
    this.rootNavCtrl.push('Question', {
      _id: _id
    });
  }

  //打开文章页面
  pushAnswerPage(_id) {
    this.rootNavCtrl.push('AnswerPage', {
      _id: _id
    });
  }

  ionViewWillLeave() {
    this.UserService.presentLoadingDismiss();
  }

}
