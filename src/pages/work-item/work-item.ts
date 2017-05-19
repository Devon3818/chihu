import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { WorkService } from '../../service/work_service';
import { Headers, Http } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-work-item',
  templateUrl: 'work-item.html',
})
export class WorkItem {

  idx = 0;
  banner = 'assets/icon/work_item.png';
  text = '';
  fileTransfer: TransferObject;
  idata: any = {
    width: '',
    src: '',
    text: '',
    height: ''
  };

  constructor(public http: Http, public transfer: Transfer, public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, private camera: Camera, public alertCtrl: AlertController, public UserService: UserService, public WorkService: WorkService) {
    this.idx = this.navParams.get('idx');
    this.fileTransfer = this.transfer.create();
    if (this.idx != -1) {
      this.banner = this.WorkService._item[this.idx]['src'];
      this.text = this.WorkService._item[this.idx]['text'];
    }
  }

  send() {

    if (this.text.length) {
      this.idata.text = this.text;
      this.WorkService._item.push(this.idata);
      this.navCtrl.pop();
    }



  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '图片来源',
      buttons: [
        {
          text: '相册',
          icon: 'images',
          handler: () => {
            this.seleImgType(0);
          }
        },
        {
          text: '相机',
          icon: 'camera',
          handler: () => {
            this.seleImgType(1);
          }
        },
        {
          text: '取消',
          role: 'cancel',
          ionic: 'close',
          handler: () => {
            //console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  //成品图片
  seleImgType(type) {
    var _that = this;
    this.camera.getPicture({
      quality: 90,
      allowEdit: true,
      sourceType: type,
      correctOrientation: true,
    }).then((imageData) => {
      this.up(imageData)
    }, (err) => {
      // Handle error
    });
  }

  up(path) {
    this.UserService.presentLoadingDefault();
    this.fileTransfer.upload(path, "http://www.devonhello.com/chihu/upload", {})
      .then((data) => {
        // success
        //alert(JSON.stringify(data));
        var response = JSON.parse(data["response"]);
        this.idata.width = response['width'];
        this.idata.height = response['height'];
        this.idata.src = response['src'];
        this.banner = this.idata.src;
        //this.postimg.push(idata);
        //this.items.push(idata['src']);
        this.UserService.presentLoadingDismiss();
      }, (err) => {
        // error
        alert('err');
      })
  }


}
