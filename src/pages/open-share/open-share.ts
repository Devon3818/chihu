import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the OpenShare page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var PhotoSwipe: any;
declare var PhotoSwipeUI_Default: any;
@IonicPage()
@Component({
  selector: 'page-open-share',
  templateUrl: 'open-share.html',
})
export class OpenShare {

  @ViewChild(Content) content: Content;

  title = 'Devon 分享了心情';
  tabanimate:boolean = false;
  _that;
  gallery: any = null;
  pswpElement: any = null;
  data:any = {
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
    };
    _id;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ref: ChangeDetectorRef) {
    this._that = this;
    this._id = this.navParams.get( '_id' );
  }

  //点击图片查看
  pswpElementInit(ind) {

    if (this.pswpElement == null) {
      this.pswpElement = document.querySelectorAll('.pswp')[0];
    }

    // build items array
    var items: any = [
      {
        src: "http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png",
        w: 592,
        h: 396,
        title: "我的分享说明..."
      },
      {
        src: "http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png",
        w: 592,
        h: 396,
        title: "我的分享说明..."
      },
      {
        src: "http://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png",
        w: 592,
        h: 396,
        title: "我的分享说明..."
      }
    ];


    // define options (if needed)
    var options = {
      // optionName: 'option value'
      // for example:
      index: ind * 1 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    this.gallery = new PhotoSwipe(this.pswpElement, PhotoSwipeUI_Default, items, options);
    this.gallery.init();
  }

  ionViewDidLoad() {
    this.content.enableJsScroll();
  }

  onScroll($event: any){
        
        let scrollTop = $event.scrollTop;

        if(scrollTop > 250 ) {
          if(!this.tabanimate){
            this.tabanimate = true;
          }
          
        }else{
          this.tabanimate = false;
        }
        
        this.ref.detectChanges();
    }

}
