import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Perhome } from './perhome';

@NgModule({
  declarations: [
    Perhome,
  ],
  imports: [
    IonicPageModule.forChild(Perhome),
  ],
  exports: [
    Perhome
  ]
})
export class PerhomeModule {}
