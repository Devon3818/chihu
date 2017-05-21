import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Platform } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

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

  //头部导航标题
  title = '';
  //底部导航class运动控制属性
  tabanimate: boolean = false;
  //头部导航class运动控制属性
  tabbule: boolean = false;
  old_scrollTop = 0;
  //PhotoSwipeUI 的dom对象存储
  pswpElement = null;
  //PhotoSwipe对象存储
  gallery: any = null;
  //文章id
  _id;
  //是否关注
  ishide: boolean = true;
  //数据存储
  data: any = {};
  iscoll: boolean = false;
  isthank: boolean = false;

  constructor(
    public plt: Platform,
    public http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public ref: ChangeDetectorRef,
    public UserService: UserService
  ) {
    this._id = this.navParams.get("_id");
    this.UserService.presentLoadingDefault();
    this.getdata();
  }

  //获取文章数据
  getdata() {
    let url = "http://www.devonhello.com/chihu/article_dec";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json()[0];
        if (this.UserService._user._id) {
          this.checkfork();
        }else{
          this.UserService.presentLoadingDismiss();
        }
      });
  }

  //检查是否已经关注
  checkfork() {

    if (this.UserService._user._id != this.data['uid']) {
      let url = "http://www.devonhello.com/chihu/checkfork";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id, {
        headers: headers
      })
        .subscribe((res) => {
          if (res.json().length == "0") {
            this.ishide = false;
          }
          this.checkcoll();
        });
    } else {
      this.UserService.presentLoadingDismiss();
    }

  }

  //关注
  fork() {

    if (!this.UserService._user._id) {
      //未登录跳转登陆
      this.navCtrl.push('Login');
      return true;
    }

    if (this.ishide) {
      this.UserService.showAlert("已关注");
    } else {
      this.UserService.presentLoadingDefault();
      let url = "http://www.devonhello.com/chihu/forkuser";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.nickname + "&uname=" + this.data['name'] + "&userimg=" + this.UserService._user.userimg + "&uuserimg=" + this.data['userimg'], {
        headers: headers
      })
        .subscribe((res) => {
          if (res.json()['result']['ok'] == 1) {
            this.ishide = true;
            this.UserService.presentLoadingDismiss();
            this.UserService.showAlert("关注成功");
          }
        });
    }

  }

  //感谢
  thank() {
    if (!this.UserService._user._id) {
      //未登录跳转登陆
      this.navCtrl.push('Login');
      return true;
    }
    if (this.UserService._user._id == this.data['uid']) {
      this.UserService.showAlert("无需感谢自己");
      return true;
    }
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/thank";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.nickname + "&type=1" + "&userimg=" + this.UserService._user.userimg + "&artid=" + this._id + "&title=" + this
      .data['title'], {
        headers: headers
      })
      .subscribe((res) => {
        if (res.json()['result']['ok'] == 1) {
          this.UserService.presentLoadingDismiss();
          this.isthank = true;
          this.UserService.showAlert("感谢成功");
        }
      });
  }

  //收藏
  collect() {
    if (!this.UserService._user._id) {
      //未登录跳转登陆
      this.navCtrl.push('Login');
      return true;
    }
    if (this.UserService._user._id == this.data['uid']) {
      this.UserService.showAlert("无需收藏自己的作品");
      return true;
    }
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/coll_article";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "_id=" + this.data['_id'] + "&uid=" + this.UserService._user._id + "&name=" + this.data['name'] + "&type=1" + "&userimg=" + this.data['userimg'] + "&title=" + this.data['title'] + "&text=" + this.data['text'] + "&workbanner=" + this.data['workbanner'], {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json()['result']['ok'] == 1) {
          this.UserService.presentLoadingDismiss();
          this.iscoll = true;
          this.UserService.showAlert("收藏成功");
        }
      });
  }

  //检查是否已经关注
  checkthank() {

    let url = "http://www.devonhello.com/chihu/checkthank";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "artid=" + this.data['_id'] + "&id=" + this.UserService._user._id, {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json().length != "0") {
          this.isthank = true;
        }
        this.UserService.presentLoadingDismiss();
      });


  }

  //检查是否已经收藏
  checkcoll() {

    let url = "http://www.devonhello.com/chihu/checkcollart";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "artid=" + this.data['_id'] + "&uid=" + this.UserService._user._id + "&type=1", {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json().length != "0") {
          this.iscoll = true;
        }
        this.checkthank();
      });


  }

  discollect() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/discoll_article";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "artid=" + this._id + "&uid=" + this.UserService._user._id + "&type=1", {
      headers: headers
    })
      .subscribe((res) => {
        this.iscoll = false;
        this.UserService.presentLoadingDismiss();
        this.UserService.showAlert("取消收藏成功");

      });
  }


  ionViewDidLoad() {
    this.content.enableJsScroll();
  }

  //查看TA的个人页面
  pushPersonPage(_id) {
    this.navCtrl.push('Person', {
      _id: _id
    });
  }

  //查看或评论页面
  openComments() {
    this.navCtrl.push('Comments');
  }

  //滚动监听
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
        this.title = this.data['title'];
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
  pswpElementInit(idx) {
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

    for (var i = 0; i < len; i++) {
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
      if (_that.UserService.isopenimg) {
        _that.UserService.isopenimg = false;
      }
    });
    this.gallery.init();
    this.UserService.galleryOBJ = this.gallery;
    this.UserService.isopenimg = true;



  }

  ionViewWillLeave() {
    this.UserService.presentLoadingDismiss();
  }

}
