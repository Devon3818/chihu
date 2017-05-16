import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events, Content, TextInput } from 'ionic-angular';
import { JPushService } from '../../service/jPush.service';
import { UserService } from '../../service/user.service';

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

    msgList = [];
    editorMsg = '';
    toUserName = "";
    targid;
    targuserimg;
    myuserimg;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public events: Events,
        public ref: ChangeDetectorRef,
        public JPushService: JPushService,
        public UserService: UserService
    ) {
        this.targid = this.navParams.get('_id');
        this.toUserName = this.navParams.get('name');
        this.targuserimg = this.navParams.get('userimg');
        this.myuserimg = this.UserService._user.userimg;
        this.JPushService.inRoom = true;
        this.JPushService.msgListTHIS = this;
        //this.getAllMessages();
    }


    ionViewWillLeave() {
        this.JPushService.inRoom = false;
        this.JPushService.msgListTHIS = null;
    }

    sendMsg() {
        if (this.editorMsg == '') {
            return true;
        }
        var mjson = {
            'name': this.UserService._user.name,
            'userimg': this.myuserimg,
            'toUserName': this.toUserName,
            'targuserimg': this.targuserimg,
            'cont': this.editorMsg,
        };
        //this.JPushService.JPIMsendSingleTextMessage("5919672950c7445c1d4b17de","hello jp1");
        this.JPIMsendSingleCustomMessage(this.targid, JSON.stringify(mjson));
        this.editorMsg = '';
    }

    JPIMsendSingleCustomMessage(username, JsonStr) {
        var _that = this;
        window.JMessage.sendSingleCustomMessage(username, JsonStr, null,
            function (response) {
                var message = JSON.parse(response);
                //alert(response);
                //_that.msgList.push(message);
                _that.pushNewMsg(message);
            }, function (errorMsg) {
                alert(errorMsg);	// 输出错误信息。
            });
    }

    pushNewMsg(message) {
        this.msgList.push(message);
        //this.editorMsg = '';
        this.scrollToBottom();

    }

    getAllMessages() {
        var _that = this;
        window.JMessage.getAllMessages('single', this.targid, null,
            function (response) {
                var messages = JSON.parse(response);
                //alert(response);
                //alert(messages[0]['direct']);
                //alert(messages[0]['content']['contentStringMap']['cont']);
                _that.msgList = messages;
                _that.content.scrollToBottom();
            }, function (errorMsg) {
                console.log(errorMsg)	// 输出错误信息。
            })
    }

    scrollToBottom() {
        if (this.content.scrollToBottom) {
            this.content.scrollToBottom();
        }
        this.messageInput.setFocus();
    }

}
