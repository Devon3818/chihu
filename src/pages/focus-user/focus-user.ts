import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { PersonPage } from '../person/person';

/*
  Generated class for the FocusUser page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-focus-user',
  templateUrl: 'focus-user.html'
})
export class FocusUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}

  //打开ta资料
  pushPersonPage(){
    let modal = this.modalCtrl.create(PersonPage,{
      
    });
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FocusUserPage');
  }

}
