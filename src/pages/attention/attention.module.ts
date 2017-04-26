import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Attention } from './attention';

@NgModule({
  declarations: [
    Attention,
  ],
  imports: [
    IonicPageModule.forChild(Attention),
  ],
  exports: [
    Attention
  ]
})
export class AttentionModule {}
