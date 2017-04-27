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
  old_scrollTop = 0;
  new_scrollTop = 0;
  _that;
  
  constructor(public http: Http, public navCtrl: NavController,storage: Storage,public ref: ChangeDetectorRef,public ImService: ImService,public UserService: UserService) {
      this._that = this;
    
  }

  push(){
    this.navCtrl.push(AboutPage);
  }

  ionViewDidLoad() {
    this.content.enableJsScroll();
  }

  onScroll($event: any) {

    let scrollTop = $event.scrollTop;

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
    this.checkLogin( CreateCookTitle )
  }

  //提问
  CreateQuestion() {
    this.checkLogin(CreateQuestionType);
  }

  //分享
  CreateShare() {
    this.checkLogin(CreateShare);
  }

  //检查登录状态
  checkLogin(page){
    if(this.UserService._user.id){
      this.navCtrl.push( page );
    }else{
      this.navCtrl.push( Login );
    }
  }

}
