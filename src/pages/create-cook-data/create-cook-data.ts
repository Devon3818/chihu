import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkService } from '../../service/work_service';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the CreateCookData page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-cook-data',
  templateUrl: 'create-cook-data.html'
})
export class CreateCookDataPage {

  title = '';
  items = [1,2,3,2];
  isReordering: boolean = false;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public WorkService: WorkService) {
    this.title = this.WorkService._title;
    //this.showPrompt();
  }

  reorderItems(indexes) {
    let element = this.items[indexes.from];
    this.items.splice(indexes.from, 1);
    this.items.splice(indexes.to, 0, element);
  }

  edit() {
    this.isReordering = !this.isReordering;
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: '食材',
      message: "输入你要添加的材料和用量，例如：鸡蛋，一只",
      inputs: [
        {
          name: 'name',
          placeholder: '材料：如鸡蛋'
        },
        {
          name: 'len',
          placeholder: '用量：如一只'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
          }
        },
        {
          text: '添加',
          handler: data => { 
            alert(data.name);
            alert(data.len);
          }
        }
      ]
    });
    prompt.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCookDataPage');
  }

}
