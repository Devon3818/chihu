import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../service/user.service';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the Perparticular page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perparticular',
  templateUrl: 'perparticular.html',
})
export class Perparticular {

  user: any = {}
  _id;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public UserService: UserService) {
    this.user = this.UserService._user;
    if (this.UserService.otherID) {
      this._id = this.UserService.otherID;
    } else {
      this._id = this.UserService._user._id;
    }
    this.getdata();
  }

  getdata() {

    let url = "http://www.devonhello.com/chihu/getuserdata";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.user = res.json()[0];
      });
  }


}
