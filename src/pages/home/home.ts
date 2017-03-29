import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { AnswerPage } from '../answer/answer';
import { QuestionPage } from '../question/question';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Content) content: Content;

  tabanimate:boolean = false;
  old_scrollTop = 0;
  new_scrollTop = 0;
  _that;
  
  constructor(public navCtrl: NavController, public ref: ChangeDetectorRef) {
    this._that = this;
  }

  ionViewDidLoad() {
      this.content.enableScrollListener();
  }

  onScroll($event: any){
        
        let scrollTop = $event.scrollTop;

        if(scrollTop > 50 && (this.old_scrollTop - scrollTop) < 0 ) {
          if(!this.tabanimate){
            this.tabanimate = true;
          }
          
        }else{
          this.tabanimate = false;
        }
        this.old_scrollTop = scrollTop;
        this.ref.detectChanges();
    }

    //打开页面
    pushAnswerPage(){
      this.navCtrl.push( AnswerPage );
    }

    //打开页面
    pushQuestionPage(){
      this.navCtrl.push( QuestionPage );
    }

}
