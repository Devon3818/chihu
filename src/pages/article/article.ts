import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';

/*
  Generated class for the Article page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-article',
  templateUrl: 'article.html'
})
export class ArticlePage {

  @ViewChild(Content) content: Content;

  title = '';
  tabanimate:boolean = false;
  tabbule:boolean = false;
  old_scrollTop = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ref: ChangeDetectorRef) {}

  ionViewDidLoad() {
    this.content.enableScrollListener();
  }

  onScroll($event: any){
        
        let scrollTop = $event.scrollTop;

        if(scrollTop > 110 && (this.old_scrollTop - scrollTop) < 0 ) {
          if(!this.tabanimate){
            this.tabanimate = true;
          }
          
          
        }else{
          this.tabanimate = false;
          if(!this.tabbule && scrollTop >150){
            this.tabbule = true;
            this.title = '家常豆腐';
          }
          if(scrollTop <= 150){
            this.tabbule = false;
            this.title = '';
          }
        }
        this.old_scrollTop = scrollTop;
        this.ref.detectChanges();
    }

}
