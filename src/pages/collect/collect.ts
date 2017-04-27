import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CollectQuestion } from '../collect-question/collect-question';
import { CollectWork } from '../collect-work/collect-work';

/**
 * Generated class for the Collect page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-collect',
  templateUrl: 'collect.html',
})
export class Collect {

  page1: any = CollectQuestion;
  page2: any = CollectWork;

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Collect');
  }

}
