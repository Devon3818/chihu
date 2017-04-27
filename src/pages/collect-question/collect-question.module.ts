import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectQuestion } from './collect-question';

@NgModule({
  declarations: [
    CollectQuestion,
  ],
  imports: [
    IonicPageModule.forChild(CollectQuestion),
  ],
  exports: [
    CollectQuestion
  ]
})
export class CollectQuestionModule {}
