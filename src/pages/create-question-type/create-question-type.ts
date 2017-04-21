import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreateQuestionTitlePage } from '../create-question-title/create-question-title';

/*
  Generated class for the CreateQuestionType page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-question-type',
  templateUrl: 'create-question-type.html'
})
export class CreateQuestionTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  next(){
    this.navCtrl.push( CreateQuestionTitlePage );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateQuestionTypePage');
  }

}
