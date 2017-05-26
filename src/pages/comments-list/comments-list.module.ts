import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentsList } from './comments-list';

@NgModule({
  declarations: [
    CommentsList,
  ],
  imports: [
    IonicPageModule.forChild(CommentsList),
  ],
  exports: [
    CommentsList
  ]
})
export class CommentsListModule {}
