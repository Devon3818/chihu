import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendComment } from './send-comment';

@NgModule({
  declarations: [
    SendComment,
  ],
  imports: [
    IonicPageModule.forChild(SendComment),
  ],
  exports: [
    SendComment
  ]
})
export class SendCommentModule {}
