import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Question } from './question';

@NgModule({
  declarations: [
    Question,
  ],
  imports: [
    IonicPageModule.forChild(Question),
  ],
  exports: [
    Question
  ]
})
export class QuestionModule {}
