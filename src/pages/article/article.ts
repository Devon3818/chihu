import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Platform } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

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
  tabanimate: boolean = false;
  tabbule: boolean = false;
  old_scrollTop = 0;
  pswpElement = null;
  gallery: any = null;
  itemsimg:any = null;
  _id;
  uid;
  data: any = {};

  constructor(public plt: Platform, public http: Http, public navCtrl: NavController, public navParams: NavParams, public ref: ChangeDetectorRef, public UserService: UserService) {
    this._id = this.navParams.get("_id");
    this.getdata();
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

  //感谢
  thank(){
    if (!this.UserService._user._id) {
      this.navCtrl.push('Login');
      return true;
    }
    if (this.UserService._user._id == this.data['uid']) {
      alert("不能自己感谢自己");
      return true;
    }
    
    let url = "http://www.devonhello.com/chihu/thank";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid="+this.data['uid']+"&id="+this.UserService._user._id+"&name="+this.UserService._user.name+"&type=1"+"&userimg="+this.UserService._user.userimg+"&artid="+this._id+"&title="+this
    .data['title'], {
      headers: headers
    })
      .subscribe((res) => {
        //alert(JSON.stringify(res.json()));
        if(res.json()['result']['ok']==1){
          alert("感谢成功");
        }
      });
  }


  ionViewDidLoad() {
    this.content.enableJsScroll();
  }

  pushPersonPage( _id ){
    this.navCtrl.push( 'Person', {
      _id: _id
    } );
  }

  openComments(){
    this.navCtrl.push( 'Comments' );
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
      if(_that.UserService.isopenimg){
        _that.UserService.isopenimg = false;
      }
    });
    this.gallery.init();
    this.UserService.galleryOBJ = this.gallery;
    this.UserService.isopenimg = true;
    


  }

}
