import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-answer',
  templateUrl: 'answer.html'
})
export class AnswerPage {

  @ViewChild(Content) content: Content;
  //头部导航动画class属性控制
  tabanimate: boolean = false;
  old_scrollTop = 0;
  //头部导航显示
  title = "回答";
  //数据存储
  data: any = {};
  //文章id
  _id;
  //关注隐藏控制属性
  ishide: boolean = true;
  iscoll: boolean = false;
  isthank: boolean = false;

  constructor(
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
    let url = "http://www.devonhello.com/chihu/answer_dec";

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

  ionViewDidLoad() {
    this.content.enableJsScroll();
  }

  //查看或评论页面
  openComments() {
    this.navCtrl.push('Comments');
  }

  //查看TA的个人主页
  pushPersonPage(_id) {
    this.navCtrl.push('Person', {
      _id: _id
    });
  }

  //查看问题的详细资料
  pushQuestionPage(_id) {
    this.navCtrl.push('Question', {
      _id: _id
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

  //检查是否已经收藏
  checkcoll() {

    let url = "http://www.devonhello.com/chihu/checkcollart";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "artid=" + this.data['_id'] + "&uid=" + this.UserService._user._id + "&type=0", {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json().length != "0") {
          this.iscoll = true;
        }
        this.checkthank();
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

  //关注
  fork() {

    //判断是否登陆
    if (!this.UserService._user._id) {
      //未登录跳转登陆页面，pass
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

      this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.name + "&uname=" + this.data['name'] + "&userimg=" + this.UserService._user.userimg + "&uuserimg=" + this.data['userimg'], {
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

  //收藏
  collect() {
    if (!this.UserService._user._id) {
      //未登录跳转登陆
      this.navCtrl.push('Login');
      return true;
    }
    if (this.UserService._user._id == this.data['uid']) {
      this.UserService.showAlert("无需收藏自己的回答");
      return true;
    }
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/coll_article";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "_id=" + this.data['_id'] + "&uid=" + this.UserService._user._id + "&name=" + this.data['name'] + "&type=0" + "&userimg=" + this.data['userimg'] + "&title=" + this.data['title'] + "&text=" + this.data['text'] + "&dec=" + this.data['dec'] + "&answerid=" + this.data['answerid'], {
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

  discollect() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/discoll_article";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "artid=" + this._id + "&uid=" + this.UserService._user._id + "&type=0", {
      headers: headers
    })
      .subscribe((res) => {
        this.iscoll = false;
        this.UserService.presentLoadingDismiss();
        this.UserService.showAlert("取消收藏成功");

      });
  }

  //感谢
  thank() {

    //判断是否登陆
    if (!this.UserService._user._id) {
      //未登录跳转登陆页面，pass
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

    this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.name + "&type=0" + "&userimg=" + this.UserService._user.userimg + "&artid=" + this._id + "&title=" + this
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

  //滚动监听，改变头部状态栏动画运动
  onScroll($event: any) {

    let scrollTop = $event.scrollTop;

    if (scrollTop > 110 && (this.old_scrollTop - scrollTop) < 0) {
      if (!this.tabanimate) {
        this.tabanimate = true;
      }

    } else {
      this.tabanimate = false;
      if (scrollTop > 100) {
        this.title = this.data.title;
      } else {
        this.title = "回答";
      }
    }
    this.old_scrollTop = scrollTop;
    this.ref.detectChanges();
  }

  ionViewWillLeave() {
    this.UserService.presentLoadingDismiss();
  }

}
