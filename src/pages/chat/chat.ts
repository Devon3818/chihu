import {Component, ViewChild, ChangeDetectorRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events, Content, TextInput } from 'ionic-angular';
import { ImService } from '../../service/im.service';

/**
 * Generated class for the Chat page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class Chat {

  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: TextInput;
  
  msgList = [1,1,1,1];
  editorMsg = '';
  toUserName = "Devon";

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public events: Events,
      public ref: ChangeDetectorRef,
      public ImService: ImService
  ) {}


    ionViewWillLeave(){
     // unsubscribe
     this.events.unsubscribe('chat:received')
  }

    sendMsg(){
        this.ImService.sendTextMessage("1122","Tomy$Devon$这是一条我发的信息,这是一条我发的信息,这是一条我发的信息$1111");
        this.pushNewMsg();      
        this.messageInput.setFocus();
    }

    pushNewMsg(){
        this.msgList.push(1);
        this.editorMsg = '';
        this.scrollToBottom();
  }

    scrollToBottom() {
        setTimeout(() => {
          if(this.content.scrollToBottom){
              this.content.scrollToBottom();
          }
        },300)
    }

}
