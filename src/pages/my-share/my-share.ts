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
  uid: any;

  constructor(
    public http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public UserService: UserService
  ) {
    if (this.navParams.get('id')) {
      this.uid = this.navParams.get('id');
    } else {
      this.uid = this.UserService._user._id;
    }

    this.getdata();
  }

  getdata() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/my_share";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this.uid, {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json();
        this.UserService.presentLoadingDismiss();
      });
  }

  //查看分享
  pushOpenSharePage(_id) {

    this.navCtrl.push('OpenShare', {
      _id: _id
    });
  }

}
