import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-create-question-title',
  templateUrl: 'create-question-title.html',
})
export class CreateQuestionTitle {

  title = '';
  text = '';

  constructor(
    public http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public UserService: UserService
  ) {
  }

  send() {
    if (this.title.length && this.text.length) {
      this.postdata();
    } else {
      this.UserService.showAlert("请输入完整...");
    }
  }

  postdata() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/send_question";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.UserService._user._id + "&name=" + this.UserService._user.nickname + "&userimg=" + this.UserService._user.userimg + "&title=" + this.title + "&text=" + this.text, {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json()['result']['ok'] == '1') {
          this.UserService.presentLoadingDismiss();
          this.navCtrl.pop();
        }

      });
  }


}
