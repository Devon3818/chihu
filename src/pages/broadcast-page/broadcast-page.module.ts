import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BroadcastPage } from './broadcast-page';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    BroadcastPage,
  ],
  imports: [
    IonicPageModule.forChild(BroadcastPage),
    SuperTabsModule.forRoot(),
    SuperTabsModule
  ],
  exports: [
    BroadcastPage
  ]
})
export class BroadcastPageModule {}
