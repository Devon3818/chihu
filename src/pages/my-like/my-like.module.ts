import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyLike } from './my-like';

@NgModule({
  declarations: [
    MyLike,
  ],
  imports: [
    IonicPageModule.forChild(MyLike),
  ],
  exports: [
    MyLike
  ]
})
export class MyLikeModule {}
