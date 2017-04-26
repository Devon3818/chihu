import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Person } from './person';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    Person,
  ],
  imports: [
    IonicPageModule.forChild(Person),
    SuperTabsModule
  ],
  exports: [
    Person
  ]
})
export class PersonModule {}
