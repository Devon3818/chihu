import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';

/*
  Generated class for the OpenShare page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var PhotoSwipe: any;
declare var PhotoSwipeUI_Default: any;
@Component({
  selector: 'page-open-share',
  templateUrl: 'open-share.html'
})
export class OpenSharePage {

  @ViewChild(Content) content: Content;

  title = 'Devon 分享了心情';
  tabanimate:boolean = false;
  _that;
  gallery: any = null;
  pswpElement: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ref: ChangeDetectorRef) {
    this._that = this;
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
    this.content.enableScrollListener();
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
