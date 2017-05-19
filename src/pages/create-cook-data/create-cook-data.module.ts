import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCookData } from './create-cook-data';
import { Camera } from '@ionic-native/camera';
import { Transfer, TransferObject } from '@ionic-native/transfer';

@NgModule({
  declarations: [
    CreateCookData,
  ],
  imports: [
    IonicPageModule.forChild(CreateCookData),
  ],
  exports: [
    CreateCookData
  ],
  providers: [
    Camera,
    Transfer,
    TransferObject
  ]
})
export class CreateCookDataModule {}
