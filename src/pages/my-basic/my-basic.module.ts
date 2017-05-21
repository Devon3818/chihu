import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyBasic } from './my-basic';

@NgModule({
  declarations: [
    MyBasic,
  ],
  imports: [
    IonicPageModule.forChild(MyBasic),
  ],
  exports: [
    MyBasic
  ]
})
export class MyBasicModule {}
