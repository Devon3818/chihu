import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-fork-discover',
  templateUrl: 'fork-discover.html',
})
export class ForkDiscover {

  rootNavCtrl: NavController;
  //数据
  data: any = [];

  constructor(
    public http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public UserService: UserService
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    if (this.UserService._user._id) {
      this.getforkdata();
    } else {
      //this.UserService.showAlert("抱歉，请登陆");
    }
  }

  getforkdata() {

    let url = "http://www.devonhello.com/chihu/getmyforkshare";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this.UserService._user._id, {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json() != '0') {
          this.data = res.json();
        } else {
          //this.UserService.showAlert("抱歉，没有任何分享的数据");
        }

      });
  }

  //查看分享
  pushOpenSharePage(_id) {

    this.rootNavCtrl.push('OpenShare', {
      _id: _id
    });
  }

}
