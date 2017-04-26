import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateQuestionType } from './create-question-type';

@NgModule({
  declarations: [
    CreateQuestionType,
  ],
  imports: [
    IonicPageModule.forChild(CreateQuestionType),
  ],
  exports: [
    CreateQuestionType
  ]
})
export class CreateQuestionTypeModule {}
