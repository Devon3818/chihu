import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Setting } from './setting';

@NgModule({
  declarations: [
    Setting,
  ],
  imports: [
    IonicPageModule.forChild(Setting),
  ],
  exports: [
    Setting
  ]
})
export class SettingModule {}
