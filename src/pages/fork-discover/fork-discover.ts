import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the ForkDiscover page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-fork-discover',
  templateUrl: 'fork-discover.html',
})
export class ForkDiscover {

  rootNavCtrl: NavController;
  //数据
  data: any = [];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.getforkdata();
  }

  getforkdata() {
    var _that = this;
    
    let url = "http://www.devonhello.com/chihu/share";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    this.http.post(url, "len=1", {
      headers: headers
    })
      .subscribe((res) => {
        //alert(JSON.stringify(res.json()));
        _that.data = res.json();      //now *ngFor is not working
        //alert(_that.forkdata.length);
      });
  }

  //查看分享
  pushOpenSharePage(_id) {

    this.rootNavCtrl.push('OpenShare', {
      _id: _id
    });
  }

}
