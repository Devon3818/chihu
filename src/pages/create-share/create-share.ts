import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CreateShare page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-share',
  templateUrl: 'create-share.html'
})
export class CreateSharePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  send(){
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateSharePage');
  }

}
