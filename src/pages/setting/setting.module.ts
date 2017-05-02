import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Setting } from './setting';
import { AppVersion } from '@ionic-native/app-version';

@NgModule({
  declarations: [
    Setting,
  ],
  imports: [
    IonicPageModule.forChild(Setting),
  ],
  exports: [
    Setting
  ],
  providers: [
    AppVersion
  ]
})
export class SettingModule {}
