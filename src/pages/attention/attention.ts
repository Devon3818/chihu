import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

/**
 * Generated class for the Attention page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-attention',
  templateUrl: 'attention.html',
})
export class Attention {

  items = [];
  rootNavCtrl: NavController;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public UserService: UserService) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.getdata();
  }

  ionViewDidEnter() {
    this.getdata();
  }

  getdata() {

    if (!this.UserService._user._id) {
      this.items = [];
      return true;
    }

    let url = "http://www.devonhello.com/chihu/getfork";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.UserService._user._id, {
      headers: headers
    })
      .subscribe((res) => {
        //alert(JSON.stringify(res.json()));
        this.items = res.json();
      });
  }

  pushPerson(_id) {
    this.rootNavCtrl.push('Person', {
      _id: _id
    });
  }

}
