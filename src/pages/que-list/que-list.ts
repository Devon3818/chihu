import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the QueList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-que-list',
  templateUrl: 'que-list.html',
})
export class QueList {

  items = [];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueList');
  }

  getdata() {
    let url = "http://www.devonhello.com/chihu/queslist";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "len=" + this.items.length, {
      headers: headers
    })
      .subscribe((res) => {
        //alert(JSON.stringify(res.json()));
        this.items = this.items.concat(res.json());
      });
  }

  //打开页面
  pushQuestionPage(_id) {
    this.navCtrl.push('Question',{
      _id: _id
    });
  }

}
