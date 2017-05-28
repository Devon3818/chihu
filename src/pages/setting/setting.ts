import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserService } from '../../service/user.service';
import { Headers, Http } from '@angular/http';
import { FileOpener } from '@ionic-native/file-opener';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class Setting {

  Version = '';
  ishide:boolean = true;
  apkDownloadUrl='';

  fileTransfer: TransferObject;

  constructor(
    public fileOpener: FileOpener, 
    public transfer: Transfer, 
    public http: Http,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public UserService: UserService, 
    public alertCtrl: AlertController, 
    public file: File
    ) {
    this.Version = this.UserService.Version;
    if(this.UserService._user._id){
      this.ishide = false;
    }
  }

  out() {
    this.UserService.clearStorage();
    this.navCtrl.pop();
  }

  //app版本获取
  getAppVersion() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu/appversion";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "", {
      headers: headers
    })
      .subscribe((res) => {
        //alert(res.json()[0]["v"]);
        if (res.json()[0]["v"] != this.UserService.Version) {
          //可升级
          this.apkDownloadUrl = res.json()[0]["url"];
          this.fileTransfer = this.transfer.create();
          this.AppV();
        }else{
          this.UserService.presentLoadingDismiss();
          this.UserService.showAlert("已经是最新版了...");
        }
      });
  }

  //下载最新版本
  download() {
    var _that = this;
    var apkurl = this.file.externalDataDirectory + 'chihu.apk';
    this.fileTransfer.download(this.apkDownloadUrl, apkurl).then((entry) => {
      //打开apk
      this.fileOpener.open(apkurl, 'application/vnd.android.package-archive')
        .then(() => console.log('File is opened'))
        .catch(e => alert('Error：' + e));

    }, (error) => {
      // handle error
    });

  }

  AppV() {

    this.UserService.presentLoadingDismiss();
    let alert = this.alertCtrl.create({
      title: '提示',
      message: '是否要更新到最新版本?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            this.download();
            this.UserService.showAlert("新版吃乎正在后台下载中...稍后安装");
          }
        }
      ]
    });

    alert.present();
  }

  ionViewWillLeave() {
    this.UserService.presentLoadingDismiss();
  }

}
