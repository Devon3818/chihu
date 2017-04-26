import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Perhome } from '../perhome/perhome';
import { Perparticular } from '../perparticular/perparticular';

/**
 * Generated class for the Person page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class Person {

  @ViewChild(Content) content: Content;

  page1: any = Perhome;
  page2: any = Perparticular;
  old_scrollTop = 0;
  maxtop = 0;
  _that;
  opacity = 1;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public ref: ChangeDetectorRef) { }

  ionViewDidLoad() {
    this.content.enableJsScroll();
  }

  ionViewDidEnter(){
    this.content.enableJsScroll();
  }

  onScroll($event: any) {

    let scrollTop = $event.scrollTop;

    
    this.ref.detectChanges();
  }

}
