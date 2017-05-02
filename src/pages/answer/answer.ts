import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

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
  data:any = {
      _id:  "_id",
      uid:  "uid",
      name: "Devon2",
      userimg:  "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
      title:  "鱼香肉丝怎么做？",
      workbanner: "http://s2.cdn.xiachufang.com/b89670e8873311e6a9a10242ac110002_690w_459h.jpg?imageView2/2/w/660/interlace/1/q/90",
      text: "鱼香肉丝怎么做？辣中带酸，酸中带甜，甜中带咸，咸中又带鲜……味道丰富而不杂腻！恰似女儿心，捉摸不透，又飘忽不定，似近又远，偶尔火辣又偶尔羞涩……鱼香肉丝怎么做？辣中带酸，酸中带甜，甜中带咸，咸中又带鲜……味道丰富而不杂腻！恰似女儿心，捉摸不透，又飘忽不定，似近又远，偶尔火辣又偶尔羞涩……鱼香肉丝怎么做？辣中带酸，酸中带甜，甜中带咸，咸中又带鲜……味道丰富而不杂腻！恰似女儿心，捉摸不透，又飘忽不定，似近又远，偶尔火辣又偶尔羞涩……",
      time: "10-10",
      type: "0"
    };
    _id;
    uid;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ref: ChangeDetectorRef) {
    this._that = this;
    this._id = this.navParams.get( "_id" );
    this.uid = this.navParams.get( "uid" );
  }

  ionViewDidLoad() {
    this.content.enableJsScroll();
  }

  pushPersonPage(){
    this.navCtrl.push( 'Person' );
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
