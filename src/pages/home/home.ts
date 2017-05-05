import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, Content } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Headers, Http } from '@angular/http';
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

  //数据
  items = [];


  constructor(public http: Http, public navCtrl: NavController, storage: Storage, public ref: ChangeDetectorRef, public ImService: ImService, public UserService: UserService) {
    this._that = this;
    this.getdata();
  }

  getdata(){
    let url = "http://www.devonhello.com/chihu/home";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "len=1", {
      headers: headers
    })
      .subscribe((res) => {
        //alert(JSON.stringify(res.json()));
        this.items = this.items.concat(res.json());
      });
  }

  push() {
    this.navCtrl.push('AboutPage');
  }

  ionViewDidLoad() {
    this.content.enableJsScroll();
  }

  onScroll($event: any) {

    this.isload = false;
    this.loadX = "-50px";

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
  pushAnswerPage( _id ) {
    this.navCtrl.push('AnswerPage',{
      _id: _id
    });
  }

  //打开页面
  pushQuestionPage(_id) {
    this.navCtrl.push('Question',{
      _id: _id
    });
  }

  //打开页面
  pushArticlePage( _id ) {
    this.navCtrl.push('Article',{
      _id: _id
    });
  }

  //创建菜谱
  CreateCook() {
    this.checkLogin( 'CreateCookTitle' )
    //this.navCtrl.push('Login');
  }

  //提问
  CreateQuestion() {
    this.checkLogin('CreateQuestionType');
    //this.navCtrl.push('CreateQuestionType');
  }

  //分享
  CreateShare() {
    this.checkLogin('CreateShare');
    //this.navCtrl.push('CreateShare');
  }

  //检查登录状态
  checkLogin(page) {
    
    if (this.UserService._user.id) {
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
        _that.loadX = "-50px";
      }, 5000);
    } else {
      _that.isload = false;
      _that.loadX = "-50px";
    }
    this.checkload = false;

  }

  ionViewDidEnter(){
    
  }

}
