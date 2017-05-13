import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

/**
 * Generated class for the FocusQuestion page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-focus-question',
  templateUrl: 'focus-question.html',
})
export class FocusQuestion {

  rootNavCtrl: NavController;

  items = [];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public UserService: UserService) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.getdata();
  }

  pushQuestionPage( _id ){
    this.rootNavCtrl.push( 'Question',{
      _id: _id
    } );
  }

  //关注问题
  getdata() {
    let url = "http://www.devonhello.com/chihu/getforkquestion";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this.UserService._user._id, {
      headers: headers
    })
      .subscribe((res) => {
        //alert(JSON.stringify(res.json()));
        this.items = res.json();
      });
  }

}
