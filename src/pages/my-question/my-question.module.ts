import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyQuestion } from './my-question';

@NgModule({
  declarations: [
    MyQuestion,
  ],
  imports: [
    IonicPageModule.forChild(MyQuestion),
  ],
  exports: [
    MyQuestion
  ]
})
export class MyQuestionModule {}
