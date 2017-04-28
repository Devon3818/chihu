import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyWork } from './my-work';

@NgModule({
  declarations: [
    MyWork,
  ],
  imports: [
    IonicPageModule.forChild(MyWork),
  ],
  exports: [
    MyWork
  ]
})
export class MyWorkModule {}
