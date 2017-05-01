import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, Content } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { Storage } from '@ionic/storage';
import { Headers, Http } from '@angular/http';
import { AnswerPage } from '../answer/answer';
import { Question } from '../question/question';
import { Article } from '../article/article';
import { Login } from '../login/login';
import { CreateCookTitle } from '../create-cook-title/create-cook-title';
import { CreateQuestionType } from '../create-question-type/create-question-type';
import { CreateShare } from '../create-share/create-share';
import { ImService } from '../../service/im.service';
import { UserService } from '../../service/user.service';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Content) content: Content;

  tabanimate: boolean = false;
  isload: boolean = false;
  spanisload: boolean = false;
  old_scrollTop = 0;
  new_scrollTop = 0;
  _that;

  ontouchstartY = 0;
  ontouchmoveY = 0;
  loadX: any = "-50px";
  checkload = true;
  itimer:any = null;


  constructor(public http: Http, public navCtrl: NavController, storage: Storage, public ref: ChangeDetectorRef, public ImService: ImService, public UserService: UserService) {
    this._that = this;

  }

  push() {
    this.navCtrl.push(AboutPage);
  }

  ionViewDidLoad() {
    this.content.enableJsScroll();
  }

  onScroll($event: any) {

    this.isload = false;
    this.loadX = 0;

    let scrollTop = $event.scrollTop;
    console.log($event.scrollTop);
    if ($event.scrollTop == 0 && !this.checkload) {
      this.checkload = true;
    }

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
  pushAnswerPage() {
    this.navCtrl.push(AnswerPage);
  }

  //打开页面
  pushQuestionPage() {
    this.navCtrl.push(Question);
  }

  //打开页面
  pushArticlePage() {
    this.navCtrl.push(Article);
  }

  //创建菜谱
  CreateCook() {
    //this.checkLogin( CreateCookTitle )
    this.navCtrl.push(CreateCookTitle);
  }

  //提问
  CreateQuestion() {
    //this.checkLogin(CreateQuestionType);
    this.navCtrl.push(CreateQuestionType);
  }

  //分享
  CreateShare() {
    //this.checkLogin(CreateShare);
    this.navCtrl.push(CreateShare);
  }

  //检查登录状态
  checkLogin(page) {
    if (this.UserService._user.id) {
      this.navCtrl.push(page);
    } else {
      this.navCtrl.push(Login);
    }
  }
  doInfinite(infiniteScroll) {
    alert('Begin async operation');

    setTimeout(() => {

      infiniteScroll.complete();
    }, 3000);
  }

  ontouchstart($event: any) {
    //console.log($event.touches[0].clientY);
    clearTimeout(this.itimer);
    this.ontouchstartY = $event.touches[0].clientY;
    this.spanisload = false;

  }

  ontouchmove($event: any) {
    if (!this.checkload && this.old_scrollTop != 0) {
      return false;
    }
    this.ontouchmoveY = Math.floor($event.touches[0].clientY - this.ontouchstartY);

    if (this.ontouchmoveY >= 105) {
      this.ontouchmoveY = 105;
    }
    this.loadX = this.ontouchmoveY + 'px';
  }

  ontouchend($event: any) {
    this.isload = true;
    this.spanisload = true;
    var _that = this;

    if (this.ontouchmoveY >= 105) {
      this.itimer = setTimeout(() => {
        _that.isload = false;
        _that.loadX = 0;
      }, 5000);
    } else {
      _that.isload = false;
      _that.loadX = 0;
    }
    this.checkload = false;

  }

}
