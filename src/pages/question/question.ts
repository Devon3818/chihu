import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

/**
 * Generated class for the Question page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class Question {

  //问题id：590b2e8cd65af8b34dd02f31
  //问题数据库表明：answer   

  @ViewChild(Content) content: Content;

  title = '很多it大牛在我这个年龄时已经很厉害了？';
  tabanimate: boolean = false;
  _that;
  list: any = []
  data: any = {
    _id: "_id",
    uid: "uid",
    name: "Devon2",
    userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
    title: "鱼香肉丝怎么做？",
    text: "鱼香肉丝怎么做？辣中带酸，酸中带甜，甜中带咸，咸中又带鲜……味道丰富而不杂腻！恰似女儿心，捉摸不透，又飘忽不定，似近又远，偶尔火辣又偶尔羞涩……",
    time: "10-10",
  };
  _id;
  ishide:boolean = true;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public ref: ChangeDetectorRef, public UserService: UserService) {
    this._id = this.navParams.get("_id");
    this.getdata();
  }

  getdata() {
    let url = "http://www.devonhello.com/chihu/question";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id, {
      headers: headers
    })
      .subscribe((res) => {
        //alert(JSON.stringify(res.json()));
        this.data = res.json()[0];
        this.checkfork();
        this.getanswer();
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
        //alert(JSON.stringify(res.json()));
        this.list = res.json();
      });
  }

  //检查是否已经关注
  checkfork() {

    if (!this.UserService._user._id) {
          this.navCtrl.push('Login');
          return true;
        }

    let url = "http://www.devonhello.com/chihu/checkforkquestion";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "artid=" + this._id + "&id=" + this.UserService._user._id, {
      headers: headers
    })
      .subscribe((res) => {
        //alert(JSON.stringify(res.json()));
        if(res.json().length == "0"){
          this.ishide = false;
        }
      });
  }

  //关注问题
  fork() {

    if (!this.UserService._user._id) {
          this.navCtrl.push('Login');
          return true;
        }

    let url = "http://www.devonhello.com/chihu/forkquestion";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.data['uid'] + "&artid=" + this._id + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.name + "&userimg=" + this.UserService._user.userimg + "&title=" + this.data['title'], {
      headers: headers
    })
      .subscribe((res) => {
        //alert(JSON.stringify(res.json()));
        if (res.json()['result']['ok'] == 1) {
          alert("关注成功");
        }

      });
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

}
