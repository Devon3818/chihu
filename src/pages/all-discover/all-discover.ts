import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

declare var $: any;
declare var Swiper: any;
@IonicPage()
@Component({
  selector: 'page-all-discover',
  templateUrl: 'all-discover.html',
})
export class AllDiscover {

  //存储swiper对象
  oSwiper: any = null;
  rootNavCtrl: NavController;
  //数据
  data: any = [];

  constructor(
    public http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public UserService: UserService
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.getdata();
  }

  //获取分享数据
  getdata() {
    let url = "http://www.devonhello.com/chihu/share";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "len=1", {
      headers: headers
    })
      .subscribe((res) => {
        this.data = this.data.concat(res.json());
        this.UserService.presentLoadingDismiss();
      });
  }

  ionViewDidLoad() {
    this.oSwiper = new Swiper('.swiper-container', {
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

  //问题列表
  pushQueList() {
    this.rootNavCtrl.push('QueList');
  }

  pushHotWork() {
    this.rootNavCtrl.push('HotWork');
  }

  pushHotAnswer() {
    this.rootNavCtrl.push('HotAnswer');
  }

  pushHotShare() {
    this.rootNavCtrl.push('HotShare');
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      infiniteScroll.complete();
    }, 3000);
  }

}
