import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCookData } from './create-cook-data';

@NgModule({
  declarations: [
    CreateCookData,
  ],
  imports: [
    IonicPageModule.forChild(CreateCookData),
  ],
  exports: [
    CreateCookData
  ]
})
export class CreateCookDataModule {}
