import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-more-page',
  templateUrl: 'more-page.html',
})
export class MorePage {

  name:any='';
  mimg:any='';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public UserService: UserService
    ) {
    this.init();
  }

  init(){
    this.name = this.UserService._user.name;
    this.mimg = this.UserService._user.userimg;
  }

  ionViewDidEnter() {
    this.init();
  }

  pushPerson(){
    this.checkLogin( 'Person' );
    //this.navCtrl.push( 'Person' );
  }

  pushFocusPage(){
    this.checkLogin( 'Focus' );
    //this.navCtrl.push( 'Focus' );
  }

  pushCollectPage(){
    this.checkLogin( 'Collect' );
    //this.navCtrl.push( 'Collect' );
  }

  pushMySharePage(){
    this.checkLogin( 'MyShare' );
    //this.navCtrl.push( 'MyShare' );
  }

  pushMyQuestionPage(){
    this.checkLogin( 'MyQuestion' );
    //this.navCtrl.push( 'MyQuestion' );
  }

  pushMyWorkPage(){
    this.checkLogin( 'MyWork' );
    //this.navCtrl.push( 'MyWork' );
  }

  pushSettingPage(){
    this.navCtrl.push( 'Setting' );
  }

  pushMyAnswerPage(){
    this.checkLogin( 'MyAnswer' );
  }

  pushMyLikePage(){
    this.checkLogin( 'MyLike' );
  }

  clear(){
    this.UserService.clearStorage();
    alert("清除用户缓存成功！");
  }

  //检查登录状态
  checkLogin(page){
    //alert(this.UserService._user.id);
    if(this.UserService._user._id){
      this.navCtrl.push( page );
    }else{
      this.navCtrl.push( 'Login' );
    }
  }

}
