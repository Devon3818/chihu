import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendAnswer } from './send-answer';

@NgModule({
  declarations: [
    SendAnswer,
  ],
  imports: [
    IonicPageModule.forChild(SendAnswer),
  ],
  exports: [
    SendAnswer
  ]
})
export class SendAnswerModule {}
