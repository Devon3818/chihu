import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAnswer } from './my-answer';

@NgModule({
  declarations: [
    MyAnswer,
  ],
  imports: [
    IonicPageModule.forChild(MyAnswer),
  ],
  exports: [
    MyAnswer
  ]
})
export class MyAnswerModule {}
