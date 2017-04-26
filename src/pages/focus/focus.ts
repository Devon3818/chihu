import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FocusQuestion } from '../focus-question/focus-question';
import { FocusUser } from '../focus-user/focus-user';

/**
 * Generated class for the Focus page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-focus',
  templateUrl: 'focus.html',
})
export class Focus {

  page1: any = FocusQuestion;
  page2: any = FocusUser;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Focus');
  }

}
