import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { PublicServe } from '../public.serve';

declare var $:any;
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  page1: any = ContactPage;
  page2: any = ContactPage;
  page3: any = ContactPage;

  _that;

  constructor(public navCtrl: NavController, public publicServeCtrl: PublicServe) {
    this._that = this;
  }

}
