import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public appVersion: AppVersion) {
    appVersion.getVersionNumber().then((version) => {
      this.Version = 'V'+version
      //alert(version);
    });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Setting');
  }

}
