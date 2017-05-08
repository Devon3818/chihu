import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../service/user.service';

/**
 * Generated class for the Perparticular page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perparticular',
  templateUrl: 'perparticular.html',
})
export class Perparticular {

  user:any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, public UserService: UserService) {
    this.user = this.UserService._user;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perparticular');
  }

}
