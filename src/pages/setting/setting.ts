import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
import { UserService } from '../../service/user.service';

/**
 * Generated class for the Setting page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class Setting {

  Version = '';
  ishide:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public appVersion: AppVersion, public UserService: UserService) {
    appVersion.getVersionNumber().then((version) => {
      this.Version = 'V' + version
      //alert(version);
    });
    if(this.UserService._user._id){
      this.ishide = false;
    }
  }

  out() {
    this.UserService.clearStorage();
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Setting');
  }

}
