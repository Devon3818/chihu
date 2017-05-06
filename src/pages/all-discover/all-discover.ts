import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the AllDiscover page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var $: any;
declare var Swiper: any;
@IonicPage()
@Component({
  selector: 'page-all-discover',
  templateUrl: 'all-discover.html',
})
export class AllDiscover {

  oSwiper1: any = null;
  oSwiper2: any = null;
  rootNavCtrl: NavController;
  //数据
  data: any = [];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.getdata();
  }

  getdata() {
    let url = "http://www.devonhello.com/chihu/share";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "len=1", {
      headers: headers
    })
      .subscribe((res) => {
        //alert(JSON.stringify(res.json()));
        this.data = this.data.concat(res.json());
      });
  }

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
  pushOpenSharePage(_id) {

    this.rootNavCtrl.push('OpenShare', {
      _id: _id
    });
  }

  doInfinite(infiniteScroll) {
    //alert('Begin async operation');

    setTimeout(() => {

      infiniteScroll.complete();
    }, 3000);
  }

}
