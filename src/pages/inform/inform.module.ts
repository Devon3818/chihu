import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Inform } from './inform';

@NgModule({
  declarations: [
    Inform,
  ],
  imports: [
    IonicPageModule.forChild(Inform),
  ],
  exports: [
    Inform
  ]
})
export class InformModule {}
