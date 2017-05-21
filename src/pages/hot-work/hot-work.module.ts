import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotWork } from './hot-work';

@NgModule({
  declarations: [
    HotWork,
  ],
  imports: [
    IonicPageModule.forChild(HotWork),
  ],
  exports: [
    HotWork
  ]
})
export class HotWorkModule {}
