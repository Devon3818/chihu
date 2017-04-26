import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateQuestionTitle } from './create-question-title';

@NgModule({
  declarations: [
    CreateQuestionTitle,
  ],
  imports: [
    IonicPageModule.forChild(CreateQuestionTitle),
  ],
  exports: [
    CreateQuestionTitle
  ]
})
export class CreateQuestionTitleModule {}
