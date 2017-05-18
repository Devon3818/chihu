import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-my-work',
  templateUrl: 'my-work.html',
})
export class MyWork {

  items = [];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public UserService: UserService) {
    this.getdata();
  }

  getdata(){
    let url = "http://www.devonhello.com/chihu/my_work";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id="+this.UserService._user._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.items = res.json();
      });
  }

  pushArticlePage( _id ) {
    this.navCtrl.push('Article',{
      _id: _id
    });
  }

}
