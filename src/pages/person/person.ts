import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { PerparticularPage } from '../perparticular/perparticular';
import { PerhomepagePage } from '../perhomepage/perhomepage';

/*
  Generated class for the Person page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var $:any;
@Component({
  selector: 'page-person',
  templateUrl: 'person.html'
})
export class PersonPage {

  @ViewChild(Content) content: Content;

  page1: any = PerhomepagePage;
  page2: any = PerparticularPage;
  old_scrollTop = 0;
  maxtop = 0;
  _that;
  opacity = 1;
  dv_perhome;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ref: ChangeDetectorRef) { }

  ionViewDidLoad() {
    this.content.enableScrollListener();
  }

  ionViewDidEnter(){
    this.content.enableScrollListener();
    this.dv_perhome = $("#dv_perhome");
    this.dv_perhome.addClass("overflow");
  }

  onScroll($event: any) {

    let scrollTop = $event.scrollTop;
    //console.log(scrollTop);
    if(scrollTop>=150){
      setTimeout(()=>{
        this.dv_perhome.removeClass("overflow");
      },400);
      
    }else{
      this.dv_perhome.addClass("overflow");
    }

    if (this.old_scrollTop - scrollTop < 0) {

      if (scrollTop >= 100) {
        this.opacity = 0;
      } else {
        this.opacity -= scrollTop / 1000;
      }

      this.maxtop -= (scrollTop - this.old_scrollTop);
      if (this.maxtop <= 0) {
        this.maxtop = 0;
      }

    } else {



      if (scrollTop == 0) {
        this.maxtop = 0;
        this.opacity = 1
        this.dv_perhome.addClass("overflow");
      } else {
        this.maxtop += (this.old_scrollTop - scrollTop);

        this.opacity += this.maxtop / 1000;

      }

    }
    this.old_scrollTop = scrollTop;
    this.ref.detectChanges();
  }

}
