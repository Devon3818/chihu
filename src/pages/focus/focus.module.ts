import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Focus } from './focus';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    Focus,
  ],
  imports: [
    IonicPageModule.forChild(Focus),
    SuperTabsModule
  ],
  exports: [
    Focus
  ]
})
export class FocusModule {}
