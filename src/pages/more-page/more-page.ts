import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from '../person/person';
import { Focus } from '../focus/focus';
import { Collect } from '../collect/collect';
import { MyShare } from '../my-share/my-share';

/**
 * Generated class for the MorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-more-page',
  templateUrl: 'more-page.html',
})
export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushPerson(){
    this.navCtrl.push( Person );
  }

  pushFocusPage(){
    this.navCtrl.push( Focus );
  }

  pushCollectPage(){
    this.navCtrl.push( Collect );
  }

  pushMySharePage(){
    this.navCtrl.push( MyShare );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

}
