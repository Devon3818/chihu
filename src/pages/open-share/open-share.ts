import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Platform } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

declare var PhotoSwipe: any;
declare var PhotoSwipeUI_Default: any;
@IonicPage()
@Component({
  selector: 'page-open-share',
  templateUrl: 'open-share.html',
})
export class OpenShare {

  @ViewChild(Content) content: Content;

  title = '';
  tabanimate: boolean = false;
  gallery: any = null;
  pswpElement: any = null;
  data: any = {
    _id: '',
    uid: '',
    name: '',
    userimg: '',
    time: '',
    mark: { like: 0, cont: 0 },
    img: [],
    text: ''
  };
  _id;
  islike: boolean = false;

  constructor(public plt: Platform, public http: Http, public navCtrl: NavController, public navParams: NavParams, public ref: ChangeDetectorRef, public UserService: UserService) {
    this._id = this.navParams.get('_id');
    this.UserService.presentLoadingDefault();
    this.getdata();

  }

  getdata() {
    let url = "http://www.devonhello.com/chihu/share_dec";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json()[0];
        this.title = res.json()[0]['name'] + ' 分享了心情';
        if (this.UserService._user._id) {
          this.checklike();
        } else {
          this.UserService.presentLoadingDismiss();
        }

      });
  }

  //检查是否已经点赞
  checklike() {
    if (this.UserService._user._id != this.data['uid']) {
      let url = "http://www.devonhello.com/chihu/checkcollshare";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id + "&artid=" + this.data['_id'], {
        headers: headers
      })
        .subscribe((res) => {
          if (res.json().length != "0") {
            this.islike = true;
          }
          this.UserService.presentLoadingDismiss();
        });
    } else {
      this.UserService.presentLoadingDismiss();
    }

  }

  //点赞
  like() {
    if (!this.UserService._user._id) {
      this.navCtrl.push('Login');
      return true;
    }
    if (this.UserService._user._id == this.data['uid']) {
      this.UserService.showAlert("❌ 抱歉，不能为自己点赞");
      return true;
    }
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/thank";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.name + "&type=2" + "&userimg=" + this.UserService._user.userimg + "&artid=" + this._id + "&title=" + this
      .data['text'] + "&isshow=" + this.data['isshow'] + "&targetuserimg=" + this.data['userimg'] + "&time=" + this.data['time'] + "&targetname=" + this.data['name'] + "&img=" + JSON.stringify(this.data['img']), {
        headers: headers
      })
      .subscribe((res) => {
        if (res.json()['result']['ok'] == 1) {
          this.UserService.presentLoadingDismiss();
          this.islike = true;
          this.UserService.showAlert("👍 点赞成功");
        }
      });
  }

  dislike() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/discoll_share";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "artid=" + this._id + "&id=" + this.UserService._user._id + "&uid=" + this.data['uid'], {
      headers: headers
    })
      .subscribe((res) => {
        this.islike = false;
        this.UserService.presentLoadingDismiss();
        this.UserService.showAlert("取消点赞成功");

      });
  }

  //查看TA的个人主页
  pushPersonPage(_id) {
    this.navCtrl.push('Person', {
      _id: _id
    });
  }

  //点击图片查看
  pswpElementInit(ind) {

    if (this.pswpElement == null) {
      this.pswpElement = document.querySelectorAll('.pswp')[0];
    }
    var _that = this;

    // define options (if needed)
    var options = {
      // optionName: 'option value'
      // for example:
      index: ind * 1 // start at first slide
    };

    var items: any = [];

    var len = this.data.img.length;

    for (var i = 0; i < len; i++) {
      var objs = {};
      objs["src"] = this.data["img"][i]["src"];
      objs["w"] = this.data["img"][i]["width"];
      objs["h"] = this.data["img"][i]["height"];
      objs["title"] = this.data["text"];
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

  ionViewDidLoad() {
    this.content.enableJsScroll();
  }

  onScroll($event: any) {

    let scrollTop = $event.scrollTop;

    if (scrollTop > 250) {
      if (!this.tabanimate) {
        this.tabanimate = true;
      }

    } else {
      this.tabanimate = false;
    }

    this.ref.detectChanges();
  }

}
