import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../service/user.service';

/**
 * Generated class for the MessagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var RongIMClient: any;
@IonicPage()
@Component({
  selector: 'page-messages-page',
  templateUrl: 'messages-page.html',
})
export class MessagesPage {

  list: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public UserService: UserService) {
    
  }

  pushChatPage(targetId, targetName) {
    alert(targetId);
    alert(targetName);
    this.navCtrl.push('Chat');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }

  ionViewDidEnter() {
    if(this.UserService._user.id){
      this.getConversationList();
    }
  }

  getConversationList() {
    var _that = this;
    RongIMClient.getInstance().getConversationList({
      onSuccess: function (list) {
        //list 会话列表
        _that.list = list;
        alert(JSON.stringify(list));
      },
      onError: function (error) {
        //GetConversationList error
      }
    }, null);
  }


}
