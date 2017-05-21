import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotAnswer } from './hot-answer';

@NgModule({
  declarations: [
    HotAnswer,
  ],
  imports: [
    IonicPageModule.forChild(HotAnswer),
  ],
  exports: [
    HotAnswer
  ]
})
export class HotAnswerModule {}
