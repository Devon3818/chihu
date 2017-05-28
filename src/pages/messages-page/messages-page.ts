import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../service/user.service';

declare var window;
@IonicPage()
@Component({
  selector: 'page-messages-page',
  templateUrl: 'messages-page.html',
})
export class MessagesPage {

  list: any = [];
  nomessage: boolean = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public UserService: UserService
    ) {
    this.getAllMessages();
  }

  pushChatPage(_id, type, idx) {

    var name, userimg;

    if (type == 'send') {
      name = this.list[idx].latestMessage.content.contentStringMap.toUserName;
      userimg = this.list[idx].latestMessage.content.contentStringMap.targuserimg;
    } else {
      name = this.list[idx].latestMessage.content.contentStringMap.name;
      userimg = this.list[idx].latestMessage.content.contentStringMap.userimg;
    }

    this.navCtrl.push('Chat', {
      _id: _id,
      name: name,
      userimg: userimg
    });
  }

  getAllMessages() {
    if (this.UserService._user._id) {
      var _that = this;
      window.JMessage.getAllSingleConversation(
        function (response) {
          var jpdata = JSON.parse(response),
            len = jpdata.length;
          if (len != '0') {
            _that.nomessage = false;
            _that.list = jpdata;
          }

        }, function (errorMsg) {
          alert(errorMsg);	// 输出错误信息。
        });
    }

  }

  ionViewDidEnter() {
    this.getAllMessages();
  }

  ionViewWillLeave() {
    this.UserService.presentLoadingDismiss();
  }

}
