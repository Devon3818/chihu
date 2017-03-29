import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { PublicServe } from '../public.serve';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  _that;

  constructor(public navCtrl: NavController, public publicServeCtrl: PublicServe) {
    
  }

}
