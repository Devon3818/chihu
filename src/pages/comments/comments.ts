import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class Comments {

  items = [1, 1, 1];
  id;
  data: any = {};
  ishide: boolean = true;
  type;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public UserService: UserService
  ) {
    this.id = this.navParams.get('id');
    this.type = this.navParams.get('type');
    this.getComment();
  }

  ionViewDidEnter() {
    this.getComment();
  }

  //获取评论
  getComment() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/see_comment";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "&id=" + this.id + "&type=" + this.type, {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json()[0];
        if (this.data['commarr'].length > 0) {
          this.ishide = false;
        }
        this.UserService.presentLoadingDismiss();
      });
  }

  sendComment(pl, comid, targetname, targetid, _id, reply) {
    if (!this.UserService._user._id) {
      this.navCtrl.push('Login');
      return true;
    }

    if (targetid == this.UserService._user._id) {
      this.UserService.showAlert("抱歉，不能回复自己...");
      return true;
    }

    this.navCtrl.push('SendComment', {
      pl: pl,
      artid: this.data['artid'],
      comid: comid,
      type: this.type,
      targetname: targetname,
      targetid: targetid,
      _id: _id,
      reply: reply
    });
  }

  //查看TA的个人主页
  pushPersonPage(_id) {
    this.navCtrl.push('Person', {
      _id: _id
    });
  }


}
