import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

/**
 * Generated class for the CollectWork page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-collect-work',
  templateUrl: 'collect-work.html',
})
export class CollectWork {

  items = [];

  rootNavCtrl: NavController;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public UserService: UserService) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.getdata();
  }

  getdata(){
    let url = "http://www.devonhello.com/chihu/my_collect_work";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id="+this.UserService._user._id, {
      headers: headers
    })
      .subscribe((res) => {
        //alert(JSON.stringify(res.json()));
        this.items = this.items.concat(res.json());
      });
  }

  pushArticlePage( _id ){
    this.rootNavCtrl.push( 'Article',{
      _id: _id
    } );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectWork');
  }

}
