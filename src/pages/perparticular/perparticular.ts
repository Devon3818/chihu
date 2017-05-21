import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UserService } from '../../service/user.service';
import { Headers, Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-perparticular',
  templateUrl: 'perparticular.html',
})
export class Perparticular {

  user: any = {}
  ishide: boolean = false;
  isme: boolean = true;
  _id;
  rootNavCtrl: NavController;

  constructor(
    public http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public UserService: UserService,
    public modalCtrl: ModalController
  ) {
    this.user = this.UserService._user;
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this._id = this.navParams.data._id;
    if (this.UserService._user._id && this._id == this.UserService._user._id) {
      this.isme = true;
    } else {
      this.isme = false;
      this.ishide = false;
    }

    this.getdata();
  }

  getdata() {

    let url = "http://www.devonhello.com/chihu/getuserdata";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.user = res.json()[0];
        if (this.UserService._user._id) {
          this.checkfork();
        } else {
          this.UserService.presentLoadingDismiss();
        }
      });
  }

  //检查是否已经关注
  checkfork() {

    let url = "http://www.devonhello.com/chihu/checkfork";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this._id + "&id=" + this.UserService._user._id, {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json().length != "0") {
          this.ishide = true;
        }
        this.UserService.presentLoadingDismiss();
      });
  }

  //关注
  fork() {

    if (!this.UserService._user._id) {
      this.rootNavCtrl.push('Login');
      return true;
    }

    if (this.ishide) {
      this.UserService.showAlert("已关注");
    } else {
      this.UserService.presentLoadingDefault();
      let url = "http://www.devonhello.com/chihu/forkuser";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "uid=" + this._id + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.nickname + "&uname=" + this.user['name'] + "&userimg=" + this.UserService._user.userimg + "&uuserimg=" + this.user['userimg'], {
        headers: headers
      })
        .subscribe((res) => {
          if (res.json()['result']['ok'] == 1) {
            this.ishide = true;
            this.UserService.presentLoadingDismiss();
            this.UserService.showAlert("关注成功");
          }
        });
    }

  }

  //取消关注
  disfork() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/disfork_user";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this._id + "&id=" + this.UserService._user._id, {
      headers: headers
    })
      .subscribe((res) => {

        this.ishide = false;
        this.UserService.presentLoadingDismiss();
        this.UserService.showAlert("取消关注成功");

      });

  }

  baseic() {
    let modal = this.modalCtrl.create('MyBasic');
    modal.present();
  }

}
