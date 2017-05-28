import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-my-like',
  templateUrl: 'my-like.html',
})
export class MyLike {

  data: any = [];

  constructor(
    public http: Http, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public UserService: UserService
    ) {
    this.getdata();
  }

  getdata() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/my_collect_share";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this.UserService._user._id, {
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

  ionViewWillLeave() {
    this.UserService.presentLoadingDismiss();
  }


}
