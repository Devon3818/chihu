import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../service/user.service';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the Regist page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-regist',
  templateUrl: 'regist.html',
})
export class Regist {

  name: '';
  pass: '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public UserService: UserService, public http: Http) {
  }

  regist(){

    if(!this.name || !this.pass){
      return true;
    }

    let url = "http://www.devonhello.com/chihu/register";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "name="+this.name + "&pass="+this.pass, {
      headers: headers
    })
      .subscribe((res) => {
        //alert(JSON.stringify(res.json()));
        if(res.json()[0]['_id']){
          this.UserService.setUser( res.json()[0] );
          this.navCtrl.popToRoot();
        }
      });
  }

}
