import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-collect-work',
  templateUrl: 'collect-work.html',
})
export class CollectWork {

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
    let url = "http://www.devonhello.com/chihu/my_collect_work";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this.UserService._user._id + "&type=1", {
      headers: headers
    })
      .subscribe((res) => {
        this.items = this.items.concat(res.json());
      });
  }

  //查看TA的个人主页
  pushArticlePage(_id) {
    this.rootNavCtrl.push('Article', {
      _id: _id
    });
  }

}
