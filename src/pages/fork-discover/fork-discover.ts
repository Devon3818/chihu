import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-fork-discover',
  templateUrl: 'fork-discover.html',
})
export class ForkDiscover {

  rootNavCtrl: NavController;
  //数据
  data: any = [];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public UserService: UserService) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.getforkdata();
  }

  getforkdata() {

    let url = "http://www.devonhello.com/chihu/share";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "len=1", {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json();
        //this.UserService.presentLoadingDismiss();
      });
  }

  //查看分享
  pushOpenSharePage(_id) {

    this.rootNavCtrl.push('OpenShare', {
      _id: _id
    });
  }

}
