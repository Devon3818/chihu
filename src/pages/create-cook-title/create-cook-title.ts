import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkService } from '../../service/work_service';
import { CreateCookDataPage } from '../create-cook-data/create-cook-data';

/*
  Generated class for the CreateCookTitle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-cook-title',
  templateUrl: 'create-cook-title.html'
})
export class CreateCookTitlePage {

  title = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public WorkService: WorkService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCookTitlePage');
  }

  //继续
  next(){
    this.WorkService._title = this.title;
    //alert(this.WorkService._title);
    this.navCtrl.push( CreateCookDataPage );
  }

}
