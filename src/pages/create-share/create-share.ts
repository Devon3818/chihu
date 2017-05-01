import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

/**
 * Generated class for the CreateShare page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-share',
  templateUrl: 'create-share.html',
})
export class CreateShare {

  ishide = false;
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, private camera: Camera, public alertCtrl: AlertController) {
  }

  send() {
    this.navCtrl.popToRoot();
  }

  //长按删除事件
  pressEvent(idx) {
    //alert(idx);
    this.showConfirm(idx);
  }

  //删除提示
  showConfirm(idx) {
    let confirm = this.alertCtrl.create({
      title: '提示',
      message: '是否删除此照片?',
      buttons: [
        {
          text: '在想想',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            this.items.splice(idx, 1);
            if (this.items.length < 3) {
              this.ishide = false;
            }
          }
        }
      ]
    });
    confirm.present();
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
      //alert(imageData);
      _that.items.push(imageData);
      if (_that.items.length >= 3) {
        _that.ishide = true;
      }
    }, (err) => {
      // Handle error
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateShare');
  }

}
