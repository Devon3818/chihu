import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AttentionPage } from '../attention/attention';
import { InformPage } from '../inform/inform';
import { SupportPage } from '../support/support';

declare var $:any;
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  page1: any = InformPage;
  page2: any = SupportPage;
  page3: any = AttentionPage;

  _that;

  constructor(public navCtrl: NavController) {
    this._that = this;
  }

}
