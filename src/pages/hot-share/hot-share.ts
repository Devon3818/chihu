import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-hot-share',
  templateUrl: 'hot-share.html',
})
export class HotShare {

  data: any = [];

  constructor(
    public http: Http, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public UserService: UserService
  ) 
  {
    this.getdata();
  }

  getdata() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/hot_share";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "", {
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
