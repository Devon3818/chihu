import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { AppVersion } from '@ionic-native/app-version';
import { FileOpener } from '@ionic-native/file-opener';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
    SuperTabsModule
  ],
  exports: [
    TabsPage
  ],
  providers: [
    AppVersion,
    FileOpener,
    Transfer,
    TransferObject,
    File
  ]
})
export class TabsModule {}
