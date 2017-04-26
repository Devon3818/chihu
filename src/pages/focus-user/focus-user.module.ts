import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FocusUser } from './focus-user';

@NgModule({
  declarations: [
    FocusUser,
  ],
  imports: [
    IonicPageModule.forChild(FocusUser),
  ],
  exports: [
    FocusUser
  ]
})
export class FocusUserModule {}
