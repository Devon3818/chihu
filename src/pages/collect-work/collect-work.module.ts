import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectWork } from './collect-work';

@NgModule({
  declarations: [
    CollectWork,
  ],
  imports: [
    IonicPageModule.forChild(CollectWork),
  ],
  exports: [
    CollectWork
  ]
})
export class CollectWorkModule {}
