import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { WorkService } from '../../service/work_service';

/**
 * Generated class for the CreateCookData page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-cook-data',
  templateUrl: 'create-cook-data.html',
})
export class CreateCookData {

  title = '';
  items = [];
  foods = [];
  items2 = [1,2,3,4];
  isReordering: boolean = false;
  sphide:boolean = false;
  banner = "assets/icon/work_banner.png";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, private camera: Camera, public actionSheetCtrl: ActionSheetController, public WorkService: WorkService) {
    this.title = this.WorkService._title;
    this.init();
  }

  init(){
    this.items = this.WorkService._item;
  }

  ionViewDidEnter() {
    this.init();
  }

  reorderItems(indexes) {
    let element = this.items[indexes.from];
    this.items.splice(indexes.from, 1);
    this.items.splice(indexes.to, 0, element);
  }

  edit() {
    this.sphide = !this.sphide;
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
            this.foods.push(1); 
            //alert(data.name);
            //alert(data.len);
          }
        }
      ]
    });
    prompt.present();
  }

  //发布
  send(){
    this.navCtrl.popToRoot();
  }

  //长按删除事件
  pressEvent(idx){
    //alert(idx);
    this.showConfirm();
  }

  //删除步骤／食材提示
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
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
      _that.banner = imageData;
    }, (err) => {
      // Handle error
    });
  }

  //添加步骤
  addItem(){
    this.navCtrl.push( 'WorkItem', {
      idx: -1
    } );
  }

  //修改步骤信息
  editItem(idx){
    this.navCtrl.push( 'WorkItem', {
      idx: idx
    } );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCookData');
  }

}
