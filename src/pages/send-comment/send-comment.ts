import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-send-comment',
  templateUrl: 'send-comment.html',
})
export class SendComment {

  text = '';
  pl = '';
  artid = '';
  comid = '';
  type = '';
  targetname = '';
  targetid = '';
  _id = '';
  isreply = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public UserService: UserService
  ) {
    this.pl = this.navParams.get('pl');
    this.artid = this.navParams.get('artid');
    this.comid = this.navParams.get('comid');
    this.type = this.navParams.get('type');
    this.targetname = this.navParams.get('targetname');
    this.targetid = this.navParams.get('targetid');
    this._id = this.navParams.get('_id');
    this.isreply = this.navParams.get('reply');
  }

  save() {
    if (this.text.length < 1) {
      this.UserService.showAlert("请输入评论的内容!");
      return true;
    }
    if (this.comid == '0') {
      this.postdata();
    } else {
      this.reply();
    }

  }

  postdata() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/send_comment";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.UserService._user._id + "&userimg=" + this.UserService._user.userimg + "&name=" + this.UserService._user.nickname + "&artid=" + this.artid + "&type=" + this.type + "&text=" + this.text, {
      headers: headers
    })
      .subscribe((res) => {
        
        if (res.json()['result']['ok'] == 1) {
          this.UserService.presentLoadingDismiss();
          this.navCtrl.pop();
        }
      });
  }

  //回复
  reply() {

    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/reply_comment";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "_id=" + this._id + "&name=" + this.UserService._user.nickname + "&targetname=" + this.targetname + "&targetid=" + this.targetid + "&text=" + this.text + "&uid=" + this.UserService._user._id + "&artid=" + this.artid + "&type=" + this.type + "&userimg=" + this.UserService._user.userimg + "&reply=" + this.isreply, {
      headers: headers
    })
      .subscribe((res) => {
        
        if (res.json()['ok'] == 1) {
          this.UserService.presentLoadingDismiss();
          this.navCtrl.pop();
        }
      });
  }

}
