import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

/*
  Generated class for the Answer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-answer',
  templateUrl: 'answer.html'
})
export class AnswerPage {

  @ViewChild(Content) content: Content;

  tabanimate:boolean = false;
  old_scrollTop = 0;
  _that;
  title = "回答";
  data:any = {};
    _id;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public ref: ChangeDetectorRef, public UserService: UserService) {
    this._that = this;
    this._id = this.navParams.get( "_id" );
    this.getdata();
  }

  getdata(){
    let url = "http://www.devonhello.com/chihu/answer_dec";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id="+this._id, {
      headers: headers
    })
      .subscribe((res) => {
        //alert(JSON.stringify(res.json()));
        this.data = res.json()[0];
      });
  }

  ionViewDidLoad() {
    this.content.enableJsScroll();
  }

  openComments(){
    this.navCtrl.push( 'Comments' );
  }

  pushPersonPage(){
    this.navCtrl.push( 'Person' );
  }

  //关注
  fork(){
    let url = "http://www.devonhello.com/chihu/forkuser";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid="+this.data['uid']+"&id="+this._id+"&name="+this.UserService._user.name+"&userimg="+this.UserService._user.userimg, {
      headers: headers
    })
      .subscribe((res) => {
        //alert(JSON.stringify(res.json()));
        if(res.json()['result']['ok']==1){
          alert("关注成功");
        }
      });
  }

  //感谢
  thank(){
    if (!this.UserService._user._id) {
      this.navCtrl.push('Login');
      return true;
    }
    if (this.UserService._user._id == this.data['uid']) {
      alert("不能自己感谢自己");
      return true;
    }
    
    let url = "http://www.devonhello.com/chihu/thank";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid="+this.data['uid']+"&id="+this._id+"&name="+this.UserService._user.name+"&type=0"+"&userimg="+this.UserService._user.userimg+"&artid="+this.data['_id']+"&title="+this
    .data['title'], {
      headers: headers
    })
      .subscribe((res) => {
        //alert(JSON.stringify(res.json()));
        if(res.json()['result']['ok']==1){
          alert("感谢成功");
        }
      });
  }


  onScroll($event: any){
        
        let scrollTop = $event.scrollTop;

        if(scrollTop > 110 && (this.old_scrollTop - scrollTop) < 0 ) {
          if(!this.tabanimate){
            this.tabanimate = true;
          }
          
        }else{
          this.tabanimate = false;
          if(scrollTop > 100){
            this.title = this.data.title;
          }else{
            this.title = "回答";
          }
        }
        this.old_scrollTop = scrollTop;
        this.ref.detectChanges();
    }

}
