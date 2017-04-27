import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Regist } from './regist';

@NgModule({
  declarations: [
    Regist,
  ],
  imports: [
    IonicPageModule.forChild(Regist),
  ],
  exports: [
    Regist
  ]
})
export class RegistModule {}
