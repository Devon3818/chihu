import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Collect } from './collect';

@NgModule({
  declarations: [
    Collect,
  ],
  imports: [
    IonicPageModule.forChild(Collect),
  ],
  exports: [
    Collect
  ]
})
export class CollectModule {}
