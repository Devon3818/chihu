import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Setting } from './setting';
import { FileOpener } from '@ionic-native/file-opener';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';

@NgModule({
  declarations: [
    Setting,
  ],
  imports: [
    IonicPageModule.forChild(Setting),
  ],
  exports: [
    Setting
  ],
  providers: [
    FileOpener,
    Transfer,
    TransferObject,
    File
  ]
})
export class SettingModule {}
