import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-my-question',
  templateUrl: 'my-question.html',
})
export class MyQuestion {

  items = [];
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
    let url = "http://www.devonhello.com/chihu/my_question";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this.uid, {
      headers: headers
    })
      .subscribe((res) => {
        this.items = res.json();
        this.UserService.presentLoadingDismiss();
      });
  }

  //打开页面
  pushQuestionPage(_id) {
    this.navCtrl.push('Question', {
      _id: _id
    });
  }

  ionViewWillLeave() {
    this.UserService.presentLoadingDismiss();
  }

}
