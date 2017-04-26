import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { A } from './a';

@NgModule({
  declarations: [
    A,
  ],
  imports: [
    IonicPageModule.forChild(A),
  ],
  exports: [
    A
  ]
})
export class AModule {}
