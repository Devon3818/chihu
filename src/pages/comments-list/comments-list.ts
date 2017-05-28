import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-comments-list',
  templateUrl: 'comments-list.html',
})
export class CommentsList {

  _id;
  type;
  name;
  uid;
  items = [];
  isget = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public UserService: UserService
  ) {
    this._id = this.navParams.get('_id');
    this.type = this.navParams.get('type');
    this.name = this.navParams.get('name');
    this.uid = this.navParams.get('uid');
    this.UserService.presentLoadingDefault();
    this.getComment();
  }

  //获取评论
  getComment() {

    let url = "http://www.devonhello.com/chihu/get_comment";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "&artid=" + this._id + "&type=" + this.type, {
      headers: headers
    })
      .subscribe((res) => {
        this.UserService.presentLoadingDismiss();
        this.items = res.json();
        this.isget = true;
      });
  }

  ionViewDidEnter() {
    if(this.isget){
      this.getComment();
    }
  }

  //评论
  sendComment(pl, comid) {
    if (!this.UserService._user._id) {
      this.navCtrl.push('Login');
      return true;
    }
    
    this.navCtrl.push('SendComment', {
      pl: pl,
      artid: this._id,
      comid: comid,
      type: this.type,
      targetid: this.uid
    });
  }

  //评论回复列表
  openComments(id) {
    this.navCtrl.push('Comments', {
      id: id,
      type: this.type
    });
  }
  

  //查看TA的个人主页
  pushPersonPage(_id) {
    this.navCtrl.push('Person', {
      _id: _id
    });
  }

  ionViewWillLeave() {
    this.UserService.presentLoadingDismiss();
  }

}
