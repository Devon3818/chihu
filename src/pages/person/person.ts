import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { UserService } from '../../service/user.service';
import { Headers, Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class Person {

  @ViewChild(Content) content: Content;

  page1: any = 'Perhome';
  page2: any = 'Perparticular';
  isme:boolean = true;
  name:'';
  userimg:'';
  _id = 0;
  chatParams = {
    _id: this._id
  };

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public ref: ChangeDetectorRef, public UserService: UserService) {
    if (this.navParams.get("_id") && this.UserService._user._id && this.navParams.get("_id") != this.UserService._user._id) {
      this._id = this.navParams.get("_id");
      this.chatParams._id = this._id;
      this.getdata();
      this.isme = false;
    } else {
      this.name = this.UserService._user.name;
      this.userimg = this.UserService._user.userimg;
    }
    this.UserService.presentLoadingDefault();
  }

  getdata() {

    let url = "http://www.devonhello.com/chihu/getuserdata";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id+'', {
      headers: headers
    })
      .subscribe((res) => {
        this.name = res.json()[0].name;
        this.userimg = res.json()[0].userimg;
      });
  }

  chart(){
    this.navCtrl.push('Chat', {
      _id: this._id,
      name: this.name,
      userimg: this.userimg
    })
  }

}
