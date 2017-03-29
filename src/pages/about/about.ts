import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  page1: any = ContactPage;
  page2: any = ContactPage;
  page3: any = ContactPage;

  constructor(public navCtrl: NavController) {

  }

}
