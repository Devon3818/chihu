import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateShare } from './create-share';
import { Camera } from '@ionic-native/camera';
import { Transfer, TransferObject } from '@ionic-native/transfer';

@NgModule({
  declarations: [
    CreateShare,
  ],
  imports: [
    IonicPageModule.forChild(CreateShare),
  ],
  exports: [
    CreateShare
  ],
  providers: [
    Camera,
    Transfer,
    TransferObject
  ]
})
export class CreateShareModule {}
