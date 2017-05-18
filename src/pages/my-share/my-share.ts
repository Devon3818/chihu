import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-my-share',
  templateUrl: 'my-share.html',
})
export class MyShare {

  data: any = [];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public UserService: UserService) {
    this.getdata();
  }

  getdata() {
    let url = "http://www.devonhello.com/chihu/my_share";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id="+this.UserService._user._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json();
      });
  }

  //查看分享
  pushOpenSharePage(_id) {

    this.navCtrl.push('OpenShare', {
      _id: _id
    });
  }

}
