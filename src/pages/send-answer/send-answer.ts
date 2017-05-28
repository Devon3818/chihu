import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';


@IonicPage()
@Component({
  selector: 'page-send-answer',
  templateUrl: 'send-answer.html',
})
export class SendAnswer {

  text = '';
  title = '';
  _id = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public UserService: UserService
  ) {
    this._id = this.navParams.get('id');
    this.title = this.navParams.get('title');
  }

  save() {

    if( this.text.length < 10 ){
      this.UserService.showAlert("内容太短...至少10个字符");
      return true;
    }

    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/send_answer";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.UserService._user._id + "&answerid=" + this._id + "&name=" + this.UserService._user.nickname + "&userimg=" + this.UserService._user.userimg + "&title=" + this.title + "&text=" + this.text, {
      headers: headers
    })
      .subscribe((res) => {
          this.UserService.presentLoadingDismiss();
          this.navCtrl.pop();
      });

  }

}
