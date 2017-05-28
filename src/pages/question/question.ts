import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class Question {

  //问题id：590b2e8cd65af8b34dd02f31
  //问题数据库表明：answer   

  @ViewChild(Content) content: Content;

  title = '';
  tabanimate: boolean = false;
  _that;
  list: any = []
  data: any = {};
  _id;
  ishide: boolean = true;

  constructor(
    public http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public ref: ChangeDetectorRef,
    public UserService: UserService
  ) {
    this._id = this.navParams.get("_id");
    this.getdata();
  }

  getdata() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/question";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json()[0];
        this.title = this.data['title'];
        this.checkfork();
      });
  }

  getanswer() {
    let url = "http://www.devonhello.com/chihu/answer_list";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.list = res.json();
        this.UserService.presentLoadingDismiss();
      });
  }

  //检查是否已经关注
  checkfork() {

    if (this.UserService._user._id) {
      let url = "http://www.devonhello.com/chihu/checkforkquestion";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "artid=" + this._id + "&id=" + this.UserService._user._id, {
        headers: headers
      })
        .subscribe((res) => {
          if (res.json().length == "0") {
            this.ishide = false;
          }
          this.getanswer();
        });
    }else{
      this.getanswer();
    }
  }

  //关注问题
  fork() {
    if (!this.UserService._user._id) {
      this.navCtrl.push('Login');
      return true;
    }

    if (this.ishide) {
      alert("已关注");
    } else {
      this.UserService.presentLoadingDefault();
      let url = "http://www.devonhello.com/chihu/forkquestion";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "uid=" + this.data['uid'] + "&artid=" + this._id + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.nickname + "&userimg=" + this.UserService._user.userimg + "&title=" + this.data['title'], {
        headers: headers
      })
        .subscribe((res) => {
          if (res.json()['result']['ok'] == 1) {
            this.ishide = true;
            this.UserService.presentLoadingDismiss();
            alert("关注成功");
          }

        });
    }


  }

  //打开页面
  pushAnswerPage(_id) {
    this.navCtrl.push('AnswerPage', {
      _id: _id
    });
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

  add(){
    if(!this.UserService._user._id){
      this.navCtrl.push('Login');
      return true;
    }
    this.navCtrl.push('SendAnswer',{
      id: this._id,
      title: this.title
    });
  }

  ionViewWillLeave() {
    this.UserService.presentLoadingDismiss();
  }

}
