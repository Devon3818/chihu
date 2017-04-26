import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FocusQuestion } from './focus-question';

@NgModule({
  declarations: [
    FocusQuestion,
  ],
  imports: [
    IonicPageModule.forChild(FocusQuestion),
  ],
  exports: [
    FocusQuestion
  ]
})
export class FocusQuestionModule {}
