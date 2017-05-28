import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-que-list',
  templateUrl: 'que-list.html',
})
export class QueList {

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
    let url = "http://www.devonhello.com/chihu/queslist";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "len=" + this.items.length, {
      headers: headers
    })
      .subscribe((res) => {
        this.items = this.items.concat(res.json());
        this.UserService.presentLoadingDismiss();
      });
  }

  //打开页面
  pushQuestionPage(_id) {
    this.navCtrl.push('Question',{
      _id: _id
    });
  }

  ionViewWillLeave() {
    this.UserService.presentLoadingDismiss();
  }

}
