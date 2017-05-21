import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-my-basic',
  templateUrl: 'my-basic.html',
})
export class MyBasic {

  img = '';
  name = '';
  sex = '';
  dec = '';
  city = '';
  job = '';
  id;
  jobs = [ "餐饮", "宾馆", "电讯业", "房地产", "服务", "服装业", "公益组织", "建筑业", "教育", "计算机",  "会计", "美容", "媒体", "旅游业", "律师", "体育运动", "设计", "银行", "金融"];
  len = this.jobs.length;
  malert:any = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public UserService: UserService,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController
  ) {
    this.id = this.UserService._user._id;
    this.img = this.UserService._user.userimg;
    this.name = this.UserService._user.nickname;
    this.sex = this.UserService._user.sex;
    this.dec = this.UserService._user.dec;
    this.city = this.UserService._user.city;
    this.job = this.UserService._user.job;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  doRadio(){
    this.malert = this.alertCtrl.create();

    for(var i=0; i < this.len; i++){
      this.malert.addInput({
        type: 'radio',
        label: this.jobs[i],
        value: this.jobs[i]
      });
    }

    this.malert.setTitle('行业');
    this.malert.addButton('取消');
    this.malert.addButton({
      text: '确定',
      handler: (data: any) => {
        this.job = data;
      }
    });
    this.malert.present();
  }

  save(){

  }

}
