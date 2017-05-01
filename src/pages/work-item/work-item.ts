import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkService } from '../../service/work_service';

/**
 * Generated class for the WorkItem page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-work-item',
  templateUrl: 'work-item.html',
})
export class WorkItem {

  idx = 0;
  banner = 'assets/icon/work_item.png';
  text = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public WorkService: WorkService) {
    this.idx = this.navParams.get('idx');
    if (this.idx != -1) {
      this.banner = this.WorkService._item[this.idx]['imgsrc'];
      this.text = this.WorkService._item[this.idx]['text'];
    }
  }

  send() {

    this.WorkService._item.push({
      imgsrc: this.banner,
      text: this.text
    });
    this.navCtrl.pop();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkItem');
  }

}
