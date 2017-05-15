import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events, Content, TextInput } from 'ionic-angular';
import { JPushService } from '../../service/jPush.service';

/**
 * Generated class for the Chat page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var window;
@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class Chat {

    @ViewChild(Content) content: Content;
    @ViewChild('chat_input') messageInput: TextInput;

    msgList = [1, 1, 1, 1];
    editorMsg = '';
    toUserName = "Devon";
    targid;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public events: Events,
        public ref: ChangeDetectorRef,
        public JPushService: JPushService
    ) {
        this.targid = this.navParams.get('_id');
        this.JPushService.inRoom = true;
        alert(this.targid);
        this.onReceiveCustomMessage();
    }


    ionViewWillLeave() {
        this.JPushService.inRoom = false;
    }

    onReceiveCustomMessage() {
        var _that = this;
        document.addEventListener('jmessage.onReceiveCustomMessage', function (msg) {
            if (_that.JPushService.inRoom) {
                alert("child:" + JSON.stringify(msg));
            }

        }, false);
    }

    sendMsg() {
        var mjson = {
            'name': 'devon',
            'cont': 'hello'
        };
        //this.JPushService.JPIMsendSingleTextMessage("5919672950c7445c1d4b17de","hello jp1");
        this.JPushService.JPIMsendSingleCustomMessage(this.targid, JSON.stringify(mjson));
        this.pushNewMsg();
        this.messageInput.setFocus();
    }

    pushNewMsg() {
        this.msgList.push(1);
        this.editorMsg = '';
        this.scrollToBottom();
    }

    scrollToBottom() {
        setTimeout(() => {
            if (this.content.scrollToBottom) {
                this.content.scrollToBottom();
            }
        }, 300)
    }

}
