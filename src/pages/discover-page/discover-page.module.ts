import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiscoverPage } from './discover-page';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    DiscoverPage,
  ],
  imports: [
    IonicPageModule.forChild(DiscoverPage),
    SuperTabsModule.forRoot(),
    SuperTabsModule
  ],
  exports: [
    DiscoverPage
  ]
})
export class DiscoverPageModule {}
