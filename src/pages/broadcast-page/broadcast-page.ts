import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-broadcast-page',
  templateUrl: 'broadcast-page.html',
})
export class BroadcastPage {

  page1: any = 'Inform';
  page2: any = 'Support';
  page3: any = 'Attention';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BroadcastPage');
  }

}
