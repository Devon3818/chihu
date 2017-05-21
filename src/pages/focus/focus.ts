import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-focus',
  templateUrl: 'focus.html',
})
export class Focus {

  page1: any = 'FocusQuestion';
  page2: any = 'FocusUser';
  _id = 0;
  chatParams = {
    _id: this._id
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public UserService: UserService
  ) {
    if (this.navParams.get("id")) {
      this._id = this.navParams.get("id");
      this.chatParams._id = this._id;
    } else {
      this.chatParams._id = this.UserService._user._id;
    }
  }

}
