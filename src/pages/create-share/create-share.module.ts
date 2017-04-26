import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateShare } from './create-share';

@NgModule({
  declarations: [
    CreateShare,
  ],
  imports: [
    IonicPageModule.forChild(CreateShare),
  ],
  exports: [
    CreateShare
  ]
})
export class CreateShareModule {}
