import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

/**
 * Generated class for the MyWork page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
        alert(JSON.stringify(res.json()));
        
        this.items = res.json();
        alert(this.items.length);
      });
  }

  pushArticlePage( _id ) {
    this.navCtrl.push('Article',{
      _id: _id
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyWork');
  }

}
