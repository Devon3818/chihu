import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnswerPage } from '../answer/answer';
import { QuestionPage } from '../question/question';
import { ArticlePage } from '../article/article';

/*
  Generated class for the Discover page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var $: any;
declare var Swiper: any;
@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {

  oSwiper1:any = null;
  oSwiper2:any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.oSwiper1 = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        // 如果需要分页器
        pagination: '.swiper-pagination',
      });

      this.oSwiper2 = new Swiper('.swiper-container2', {
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 7,
        freeMode: true
      });
  }

  //打开页面
    pushAnswerPage(){
      this.navCtrl.push( AnswerPage );
    }

    //打开页面
    pushQuestionPage(){
      this.navCtrl.push( QuestionPage );
    }

    //打开页面
    pushArticlePage(){
      this.navCtrl.push( ArticlePage );
    }

}
