import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  //数据
  data:any = [
    {
      _id:  '1',
      uid:  '1',
      name: 'Devon',
      userimg:  'https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100',
      time: '10-10',
      mark: {like:324,cont:56},
      img:  [
        {src:'http://s2.cdn.xiachufang.com/5e23cfa42e7011e7947d0242ac110002_1500w_1000h.jpg?imageView2/2/w/660/interlace/1/q/90',width:'660',height:'440'},
        {src:'http://s2.cdn.xiachufang.com/74fab86c8afd11e6b87c0242ac110003_640w_643h.jpg?imageView2/2/w/660/interlace/1/q/90',width:'640',height:'643'},
        {src:'http://s1.cdn.xiachufang.com/361876ac0ec411e7947d0242ac110002_1280w_720h.jpg@2o_50sh_1pr_1l_660w_90q_1wh',width:'660',height:'371'},
      ],
      text: '香橙米蛋糕（纸杯蛋糕）,闻得到尝得到的最迷人的柑橘气息~~~'
    },
    {
      _id:  '1',
      uid:  '1',
      name: 'Devon',
      userimg:  'https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100',
      time: '10-10',
      mark: {like:324,cont:56},
      img:  [
        {src:'http://s2.cdn.xiachufang.com/5e23cfa42e7011e7947d0242ac110002_1500w_1000h.jpg?imageView2/2/w/660/interlace/1/q/90',width:'660',height:'440'},
      ],
      text: '香橙米蛋糕（纸杯蛋糕）,闻得到尝得到的最迷人的柑橘气息~~~'
    },
    {
      _id:  '1',
      uid:  '1',
      name: 'Devon',
      userimg:  'https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100',
      time: '10-10',
      mark: {like:324,cont:56},
      img:  [
        {src:'http://s2.cdn.xiachufang.com/5e23cfa42e7011e7947d0242ac110002_1500w_1000h.jpg?imageView2/2/w/660/interlace/1/q/90',width:'660',height:'440'},
        {src:'http://s2.cdn.xiachufang.com/74fab86c8afd11e6b87c0242ac110003_640w_643h.jpg?imageView2/2/w/660/interlace/1/q/90',width:'640',height:'643'},
      ],
      text: '香橙米蛋糕（纸杯蛋糕）,闻得到尝得到的最迷人的柑橘气息~~~'
    },
    {
      _id:  '1',
      uid:  '1',
      name: 'Devon',
      userimg:  'https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100',
      time: '10-10',
      mark: {like:324,cont:56},
      img:  [
        {src:'http://s2.cdn.xiachufang.com/5e23cfa42e7011e7947d0242ac110002_1500w_1000h.jpg?imageView2/2/w/660/interlace/1/q/90',width:'660',height:'440'},
        {src:'http://s2.cdn.xiachufang.com/74fab86c8afd11e6b87c0242ac110003_640w_643h.jpg?imageView2/2/w/660/interlace/1/q/90',width:'640',height:'643'},
        {src:'http://s1.cdn.xiachufang.com/361876ac0ec411e7947d0242ac110002_1280w_720h.jpg@2o_50sh_1pr_1l_660w_90q_1wh',width:'660',height:'371'},
      ],
      text: '香橙米蛋糕（纸杯蛋糕）,闻得到尝得到的最迷人的柑橘气息~~~'
    },
    {
      _id:  '1',
      uid:  '1',
      name: 'Devon',
      userimg:  'https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100',
      time: '10-10',
      mark: {like:324,cont:56},
      img:  [
        {src:'http://s2.cdn.xiachufang.com/5e23cfa42e7011e7947d0242ac110002_1500w_1000h.jpg?imageView2/2/w/660/interlace/1/q/90',width:'660',height:'440'},
        {src:'http://s2.cdn.xiachufang.com/74fab86c8afd11e6b87c0242ac110003_640w_643h.jpg?imageView2/2/w/660/interlace/1/q/90',width:'640',height:'643'},
        {src:'http://s1.cdn.xiachufang.com/361876ac0ec411e7947d0242ac110002_1280w_720h.jpg@2o_50sh_1pr_1l_660w_90q_1wh',width:'660',height:'371'},
      ],
      text: '香橙米蛋糕（纸杯蛋糕）,闻得到尝得到的最迷人的柑橘气息~~~'
    }
  ];

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
    pushOpenSharePage( _id ){
      this.navCtrl.push( 'OpenShare',{
        _id: _id
      } );
    }

    doInfinite(infiniteScroll) {
    //alert('Begin async operation');

    setTimeout(() => {

      infiniteScroll.complete();
    }, 3000);
  }

}
