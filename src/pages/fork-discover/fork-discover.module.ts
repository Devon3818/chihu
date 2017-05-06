import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForkDiscover } from './fork-discover';

@NgModule({
  declarations: [
    ForkDiscover,
  ],
  imports: [
    IonicPageModule.forChild(ForkDiscover),
  ],
  exports: [
    ForkDiscover
  ]
})
export class ForkDiscoverModule {}
