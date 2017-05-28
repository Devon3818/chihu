import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-hot-work',
  templateUrl: 'hot-work.html',
})
export class HotWork {

  items = [];

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
    let url = "http://www.devonhello.com/chihu/hot_work";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "type=1", {
      headers: headers
    })
      .subscribe((res) => {
        this.items = res.json();
        this.UserService.presentLoadingDismiss();
      });
  }

  pushArticlePage(_id) {
    this.navCtrl.push('Article', {
      _id: _id
    });
  }

  ionViewWillLeave() {
    this.UserService.presentLoadingDismiss();
  }

}
