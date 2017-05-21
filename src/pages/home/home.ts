import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, Content } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Content) content: Content;

  tabanimate: boolean = false;
  spanisload: boolean = false;
  old_scrollTop = 0;
  new_scrollTop = 0;

  //数据
  items = [];

  constructor(
    public http: Http,
    public navCtrl: NavController,
    public ref: ChangeDetectorRef,
    public UserService: UserService
  ) {
    this.getdata();
  }

  //获取数据
  getdata() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/home";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "len=1", {
      headers: headers
    })
      .subscribe((res) => {
        this.items = this.items.concat(res.json());
        this.UserService.presentLoadingDismiss();
      });
  }

  openSearch() {
    this.navCtrl.push('Search');
  }

  ionViewDidLoad() {
    this.content.enableJsScroll();
  }

  onScroll($event: any) {

    var scrollTop = $event.scrollTop;

    if (scrollTop > 50 && (this.old_scrollTop - scrollTop) < 0) {
      if (!this.tabanimate) {
        this.tabanimate = true;
      }

    } else {
      this.tabanimate = false;
    }
    this.old_scrollTop = scrollTop;
    this.ref.detectChanges();
  }

  //打开页面
  pushAnswerPage(_id) {
    this.navCtrl.push('AnswerPage', {
      _id: _id
    });
  }

  //打开页面
  pushQuestionPage(_id) {
    this.navCtrl.push('Question', {
      _id: _id
    });
  }

  //打开页面
  pushArticlePage(_id) {
    this.navCtrl.push('Article', {
      _id: _id
    });
  }

  //创建菜谱
  CreateCook() {
    this.checkLogin('CreateCookTitle')
    //this.navCtrl.push('Login');
  }

  //提问
  CreateQuestion() {
    this.checkLogin('CreateQuestionTitle');
    //this.navCtrl.push('CreateQuestionType');
  }

  //分享
  CreateShare() {
    this.checkLogin('CreateShare');
    //this.navCtrl.push('CreateShare');
  }

  //检查登录状态
  checkLogin(page) {

    if (this.UserService._user._id) {
      this.navCtrl.push(page);
    } else {
      this.navCtrl.push('Login');
    }
  }
  doInfinite(infiniteScroll) {
    alert('Begin async operation');

    setTimeout(() => {

      infiniteScroll.complete();
    }, 3000);
  }

  ionViewWillLeave() {
    this.UserService.presentLoadingDismiss();
  }

}
