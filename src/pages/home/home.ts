import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, Content } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { Storage } from '@ionic/storage';
import { Headers, Http } from '@angular/http';
import { AnswerPage } from '../answer/answer';
import { Question } from '../question/question';
import { Article } from '../article/article';
import { CreateCookTitle } from '../create-cook-title/create-cook-title';
import { CreateQuestionType } from '../create-question-type/create-question-type';
import { CreateShare } from '../create-share/create-share';


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
  
  constructor(public http: Http, public navCtrl: NavController,storage: Storage,public ref: ChangeDetectorRef) {
      this._that = this;
    storage.ready().then(() => {

       // set a key/value
       storage.set('name', 'Max');

       // Or to get a key/value pair
       storage.get('age').then((val) => {
         //alert('Your age is:  '+ val);
       })
     });
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
    this.navCtrl.push(CreateCookTitle);
  }

  //提问
  CreateQuestion() {
    
    this.navCtrl.push(CreateQuestionType);
  }

  //分享
  CreateShare() {
    
    this.navCtrl.push(CreateShare);
  }

}
