import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from '../person/person';

/**
 * Generated class for the FocusUser page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-focus-user',
  templateUrl: 'focus-user.html',
})
export class FocusUser {

  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
  }

  pushPersonPage(){
    this.rootNavCtrl.push( Person );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FocusUser');
  }

}
