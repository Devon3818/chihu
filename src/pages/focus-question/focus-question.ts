import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { QuestionPage } from '../question/question';

/*
  Generated class for the FocusQuestion page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-focus-question',
  templateUrl: 'focus-question.html'
})
export class FocusQuestionPage {

  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}

  //打开页面
    pushQuestionPage(){
      
      let modal = this.modalCtrl.create(QuestionPage,{
      
    });
    modal.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FocusQuestionPage');
  }

}
