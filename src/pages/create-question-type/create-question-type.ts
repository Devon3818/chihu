import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateQuestionTitle } from '../create-question-title/create-question-title';

/**
 * Generated class for the CreateQuestionType page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-question-type',
  templateUrl: 'create-question-type.html',
})
export class CreateQuestionType {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  next(){
    this.navCtrl.push( CreateQuestionTitle );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateQuestionType');
  }

}
