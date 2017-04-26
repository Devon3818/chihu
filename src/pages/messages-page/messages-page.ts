import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chat } from '../chat/chat';

/**
 * Generated class for the MessagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-messages-page',
  templateUrl: 'messages-page.html',
})
export class MessagesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushChatPage(){
      this.navCtrl.push( Chat );
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }

}
