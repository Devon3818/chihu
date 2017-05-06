import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllDiscover } from './all-discover';

@NgModule({
  declarations: [
    AllDiscover,
  ],
  imports: [
    IonicPageModule.forChild(AllDiscover),
  ],
  exports: [
    AllDiscover
  ]
})
export class AllDiscoverModule {}
