import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Platform } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the Article page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var PhotoSwipe: any;
declare var PhotoSwipeUI_Default: any;
declare var Image: any;
@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class Article {

  @ViewChild(Content) content: Content;

  title = '';
  isopenimg:boolean = false;
  tabanimate: boolean = false;
  tabbule: boolean = false;
  old_scrollTop = 0;
  pswpElement = null;
  gallery: any = null;
  itemsimg:any = null;
  _id;
  uid;
  data: any = {};

  constructor(public plt: Platform, public http: Http, public navCtrl: NavController, public navParams: NavParams, public ref: ChangeDetectorRef) {
    this._id = this.navParams.get("_id");
    this.uid = this.navParams.get("uid");
    this.getdata();
    this.plt.registerBackButtonAction(():any =>{
      if(this.isopenimg){
        this.gallery.close();
        return false;
      }else{
        return this.navCtrl.pop();
      }
    },0)
    
  }

  getdata(){
    let url = "http://www.devonhello.com/chihu/article_dec";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id="+this._id, {
      headers: headers
    })
      .subscribe((res) => {
        //alert(JSON.stringify(res.json()));
        this.data = res.json()[0];
      });
  }

  ionViewDidLoad() {
    this.content.enableJsScroll();
  }

  pushPersonPage(){
    this.navCtrl.push( 'Person' );
  }

  onScroll($event: any) {

    let scrollTop = $event.scrollTop;

    if (scrollTop > 110 && (this.old_scrollTop - scrollTop) < 0) {
      if (!this.tabanimate) {
        this.tabanimate = true;
      }


    } else {
      this.tabanimate = false;
      if (!this.tabbule && scrollTop > 150) {
        this.tabbule = true;
        this.title = '家常豆腐';
      }
      if (scrollTop <= 150) {
        this.tabbule = false;
        this.title = '';
      }
    }
    this.old_scrollTop = scrollTop;
    this.ref.detectChanges();
  }

  //查看步骤图
  pswpElementInit(idx){
    if (this.pswpElement == null) {
      this.pswpElement = document.querySelectorAll('.pswp')[0];
    }

    var _that = this;
    var items: any = [];

    // define options (if needed)
    var options = {
      // optionName: 'option value'
      // for example:
      index: idx * 1 // start at first slide
    };
    var len = this.data.work.length;
    
    for(var i=0; i<len; i++){
      var objs = {};
      objs["src"] = this.data["work"][i]["src"];
      objs["w"] = this.data["work"][i]["width"];
      objs["h"] = this.data["work"][i]["height"];
      objs["title"] = "步骤 " + (i + 1) + "：" + this.data["work"][i]["text"];
      items.push(objs);
    }

    // Initializes and opens PhotoSwipe
    this.gallery = new PhotoSwipe(this.pswpElement, PhotoSwipeUI_Default, items, options);
    this.gallery.listen('close', function () {
      _that.isopenimg = false;
    });
    this.gallery.init();
    this.isopenimg = true;


  } 

}
