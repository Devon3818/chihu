import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotShare } from './hot-share';

@NgModule({
  declarations: [
    HotShare,
  ],
  imports: [
    IonicPageModule.forChild(HotShare),
  ],
  exports: [
    HotShare
  ]
})
export class HotShareModule {}
