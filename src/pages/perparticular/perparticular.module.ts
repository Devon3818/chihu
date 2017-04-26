import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Perparticular } from './perparticular';

@NgModule({
  declarations: [
    Perparticular,
  ],
  imports: [
    IonicPageModule.forChild(Perparticular),
  ],
  exports: [
    Perparticular
  ]
})
export class PerparticularModule {}
