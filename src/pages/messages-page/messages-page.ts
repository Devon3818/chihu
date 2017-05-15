import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../service/user.service';

/**
 * Generated class for the MessagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var window;
@IonicPage()
@Component({
  selector: 'page-messages-page',
  templateUrl: 'messages-page.html',
})
export class MessagesPage {

  list: any = [];
  nomessage: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public UserService: UserService) {

  }

  pushChatPage() {
    this.navCtrl.push('Chat', {
      _id: 1
    });
  }

  getAllMessages() {
    if (this.UserService._user._id) {
      var _that = this;
      window.JMessage.getAllSingleConversation(
        function (response) {
          alert( JSON.parse(response).length );
          alert(response);
        }, function (errorMsg) {
          alert(errorMsg);	// 输出错误信息。
        });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }

  ionViewDidEnter() {
    if (this.UserService._user._id) {
      this.getAllMessages();
    }
  }

}
