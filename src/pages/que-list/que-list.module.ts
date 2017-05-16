import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QueList } from './que-list';

@NgModule({
  declarations: [
    QueList,
  ],
  imports: [
    IonicPageModule.forChild(QueList),
  ],
  exports: [
    QueList
  ]
})
export class QueListModule {}
