import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

declare var RongIMClient: any;
declare var RongIMLib: any;
declare var SHA1: any;
@Injectable()
export class ImService {

  public headers: Headers;

  //融云配置变量
  public rand: any;
  public now: any;
  public token: any;

  constructor(public http: Http) {
    RongIMClient.init("pwe86ga5p2uh6");
    this.init();
  }
  

  init() {

    var _that = this;

    RongIMClient.setConnectionStatusListener({
      onChanged: function (status) {
        switch (status) {
          //链接成功
          case RongIMLib.ConnectionStatus.CONNECTED:
            alert('链接成功');
            _that.clearConversations();
            break;
          //正在链接
          case RongIMLib.ConnectionStatus.CONNECTING:
            alert('正在链接');
            break;
          //重新链接
          case RongIMLib.ConnectionStatus.DISCONNECTED:
            console.log('断开连接');
            break;
          //其他设备登录
          case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
            console.log('其他设备登录');
            break;
          //网络不可用
          case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
            alert('网络不可用');
            break;
        }
      }
    });

    this.setOnReceiveMessageListener();
  }

  // 消息监听器
  setOnReceiveMessageListener() {

    var _that = this;

    RongIMClient.setOnReceiveMessageListener({
      // 接收到的消息
      onReceived: function (message) {
        // 判断消息类型
        switch (message.messageType) {
          case RongIMClient.MessageType.TextMessage:
            // 发送的消息内容将会被打印
            alert(message.content.content);
            //_that.sendTextMessage();

            break;

          default:
          // 自定义消息
          // do something...
        }
      }
    });
  }

  //生成token
  gettoken(_id: any, _name: any) {

    var time = (Date.now() / 1000);
    var _that = this;

    this.rand = Math.ceil(Math.random() * 10000000);

    this.now = parseInt(time.toString());


    this.headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      "App-Key": "pwe86ga5p2uh6",
      "Nonce": this.rand.toString(),
      "Timestamp": this.now.toString(),
      "Signature": SHA1("FjqMli2Qe0j6j" + this.rand.toString() + this.now.toString())
    });



    let url = "https://api.cn.rong.io/user/getToken.json";
    this.http.post(url, "userId=" + _id + "&name=" + _name + "&portraitUri", {
      headers: this.headers
    })
      .subscribe((res) => {
        this.token = res.json()["token"];
        //alert(this.token);
        _that.connect(res.json()["token"]);
      });
  }

  connect(token) {
    alert('链接：' + token);
    RongIMClient.connect(token, {
      onSuccess: function (userId) {
        alert("Login successfully." + userId);
      },
      onTokenIncorrect: function () {
        alert('token无效');
      },
      onError: function (errorCode) {
        var info = '';
        switch (errorCode) {
          case RongIMLib.ErrorCode.TIMEOUT:
            info = '超时';
            break;
          case RongIMLib.ErrorCode.UNKNOWN_ERROR:
            info = '未知错误';
            break;
          case RongIMLib.ErrorCode.UNACCEPTABLE_PaROTOCOL_VERSION:
            info = '不可接受的协议版本';
            break;
          case RongIMLib.ErrorCode.IDENTIFIER_REJECTED:
            info = 'appkey不正确';
            break;
          case RongIMLib.ErrorCode.SERVER_UNAVAILABLE:
            info = '服务器不可用';
            break;
        }
        alert(errorCode);
      }
    });
  }

  sendTextMessage(id, text) {
    RongIMLib.RongIMClient.getInstance().sendTextMessage(RongIMLib.ConversationType.PRIVATE, id, text, {
      onSuccess: function (data) {
        alert(JSON.stringify(data));
        //=> data {messageUId:"消息唯一Id",timestamp:"发送消息时间戳"}
        alert("SendTextMessage Successfully");
        
        //this.getConversationList();
      },
      onError: function (errorcode) {
        alert("SendTextMessage,errorcode:" + errorcode);
      }
    });
  }

  getConversationList() {
    RongIMClient.getInstance().getConversationList({
      onSuccess: function (list) {
        //list 会话列表
        alert(JSON.stringify(list));
      },
      onError: function (error) {
        //GetConversationList error
      }
    }, null);
  }

  //断开链接
  disconnect(){
    RongIMClient.getInstance().disconnect();
    alert("断开融云链接");
  }

  //清除会话列表
  clearConversations(){
    
  }

}