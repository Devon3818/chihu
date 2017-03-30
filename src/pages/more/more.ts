import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PersonPage } from '../person/person';

/*
  Generated class for the More page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

  pushPersonPage(){
    this.navCtrl.push( PersonPage );
  }

}
