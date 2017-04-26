import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiscoverPage } from './discover-page';

@NgModule({
  declarations: [
    DiscoverPage,
  ],
  imports: [
    IonicPageModule.forChild(DiscoverPage),
  ],
  exports: [
    DiscoverPage
  ]
})
export class DiscoverPageModule {}
