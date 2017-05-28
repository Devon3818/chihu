import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-collect',
  templateUrl: 'collect.html',
})
export class Collect {

  page1: any = 'CollectQuestion';
  page2: any = 'CollectWork';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public UserService: UserService
  ) {
  }

  ionViewWillLeave() {
    this.UserService.presentLoadingDismiss();
  }

}
