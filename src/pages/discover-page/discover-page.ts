import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OpenShare } from '../open-share/open-share';

/**
 * Generated class for the DiscoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var $: any;
declare var Swiper: any;
@IonicPage()
@Component({
  selector: 'page-discover-page',
  templateUrl: 'discover-page.html',
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

  }

  //查看分享
    pushOpenSharePage(){
      this.navCtrl.push( OpenShare );
    }

    doInfinite(infiniteScroll) {
    //alert('Begin async operation');

    setTimeout(() => {

      infiniteScroll.complete();
    }, 3000);
  }

}
