import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CreateQuestionTitle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-question-title',
  templateUrl: 'create-question-title.html'
})
export class CreateQuestionTitlePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  //提交问题
  send(){
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateQuestionTitlePage');
  }

}
