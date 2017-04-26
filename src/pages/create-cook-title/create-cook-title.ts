import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateCookData } from '../create-cook-data/create-cook-data';

/**
 * Generated class for the CreateCookTitle page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-cook-title',
  templateUrl: 'create-cook-title.html',
})
export class CreateCookTitle {

  title = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //继续
  next(){
    //this.WorkService._title = this.title;
    //alert(this.WorkService._title);
    this.navCtrl.push( CreateCookData );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCookTitle');
  }

}
