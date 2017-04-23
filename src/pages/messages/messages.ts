import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

/*
  Generated class for the Messages page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  pushChatPage(){
      this.navCtrl.push( ChatPage );
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }

}
