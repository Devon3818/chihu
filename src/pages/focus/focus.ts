import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-focus',
  templateUrl: 'focus.html',
})
export class Focus {

  page1: any = 'FocusQuestion';
  page2: any = 'FocusUser';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
