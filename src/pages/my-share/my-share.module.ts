import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyShare } from './my-share';

@NgModule({
  declarations: [
    MyShare,
  ],
  imports: [
    IonicPageModule.forChild(MyShare),
  ],
  exports: [
    MyShare
  ]
})
export class MyShareModule {}
