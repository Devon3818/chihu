import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FocusQuestionPage } from '../focus-question/focus-question';
import { FocusUserPage } from '../focus-user/focus-user';

/*
  Generated class for the Focus page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-focus',
  templateUrl: 'focus.html'
})
export class FocusPage {

  page1: any = FocusQuestionPage;
  page2: any = FocusUserPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FocusPage');
  }

}
