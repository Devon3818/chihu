import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Support } from './support';

@NgModule({
  declarations: [
    Support,
  ],
  imports: [
    IonicPageModule.forChild(Support),
  ],
  exports: [
    Support
  ]
})
export class SupportModule {}
