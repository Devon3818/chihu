import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events, Content, TextInput } from 'ionic-angular';
import { JPushService } from '../../service/jPush.service';
import { UserService } from '../../service/user.service';

declare var window;
@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class Chat {

    @ViewChild(Content) content: Content;
    @ViewChild('chat_input') messageInput: TextInput;

    //聊天数据列表
    msgList = [];
    //输入文本信息
    editorMsg = '';
    //目标用户吗
    toUserName = "";
    //目标id
    targid;
    //目标头像
    targuserimg;
    //我的头像
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
        //设置极光服务属性，目前进入房间单聊
        this.JPushService.inRoom = true;
        //设置this指向到极光服务
        this.JPushService.msgListTHIS = this;
    }


    ionViewWillLeave() {
        //退出页面，设置极光服务以退出房间，this指向报废
        this.JPushService.inRoom = false;
        this.JPushService.msgListTHIS = null;
    }

    //发送信息
    sendMsg() {
        if (this.editorMsg == '') {
            return true;
        }
        var mjson = {
            'name': this.UserService._user.nickname,
            'userimg': this.myuserimg,
            'toUserName': this.toUserName,
            'targuserimg': this.targuserimg,
            'cont': this.editorMsg,
        };
        this.JPIMsendSingleCustomMessage(this.targid, JSON.stringify(mjson));
        this.editorMsg = '';
    }

    //极光发送自定义信息
    JPIMsendSingleCustomMessage(username, JsonStr) {
        var _that = this;
        window.JMessage.sendSingleCustomMessage(username, JsonStr, null,
            function (response) {
                var message = JSON.parse(response);
                _that.pushNewMsg(message);
            }, function (errorMsg) {
                alert(errorMsg);	// 输出错误信息。
            });
    }

    //推入信息到数据
    pushNewMsg(message) {
        this.msgList.push(message);
        this.scrollToBottom();

    }

    scrollToBottom() {
        if (this.content.scrollToBottom) {
            this.content.scrollToBottom();
        }
        this.messageInput.setFocus();
    }

}
