import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCookData } from './create-cook-data';
import { Camera } from '@ionic-native/camera';

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
    Camera
  ]
})
export class CreateCookDataModule {}
