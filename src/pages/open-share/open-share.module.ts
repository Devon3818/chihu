import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenShare } from './open-share';

@NgModule({
  declarations: [
    OpenShare,
  ],
  imports: [
    IonicPageModule.forChild(OpenShare),
  ],
  exports: [
    OpenShare
  ]
})
export class OpenShareModule {}
