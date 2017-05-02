import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Collect } from './collect';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    Collect,
  ],
  imports: [
    IonicPageModule.forChild(Collect),
    SuperTabsModule.forRoot(),
    SuperTabsModule
  ],
  exports: [
    Collect
  ]
})
export class CollectModule {}
