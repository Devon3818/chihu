import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkItem } from './work-item';
import { Camera } from '@ionic-native/camera';
import { Transfer, TransferObject } from '@ionic-native/transfer';

@NgModule({
  declarations: [
    WorkItem,
  ],
  imports: [
    IonicPageModule.forChild(WorkItem),
  ],
  exports: [
    WorkItem
  ],
  providers: [
    Camera,
    Transfer,
    TransferObject
  ]
})
export class WorkItemModule {}
