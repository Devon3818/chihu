import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateShare } from './create-share';
import { Camera } from '@ionic-native/camera';

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
    Camera
  ]
})
export class CreateShareModule {}
