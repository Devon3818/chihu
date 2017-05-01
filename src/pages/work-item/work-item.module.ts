import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkItem } from './work-item';

@NgModule({
  declarations: [
    WorkItem,
  ],
  imports: [
    IonicPageModule.forChild(WorkItem),
  ],
  exports: [
    WorkItem
  ]
})
export class WorkItemModule {}
