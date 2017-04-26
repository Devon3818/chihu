import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCookTitle } from './create-cook-title';

@NgModule({
  declarations: [
    CreateCookTitle,
  ],
  imports: [
    IonicPageModule.forChild(CreateCookTitle),
  ],
  exports: [
    CreateCookTitle
  ]
})
export class CreateCookTitleModule {}
