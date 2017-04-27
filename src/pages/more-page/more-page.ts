import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from '../person/person';
import { Focus } from '../focus/focus';
import { Collect } from '../collect/collect';
import { MyShare } from '../my-share/my-share';
import { UserService } from '../../service/user.service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public UserService: UserService) {
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

  clear(){
    this.UserService.clearStorage();
    alert("清除用户缓存成功！");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

}
