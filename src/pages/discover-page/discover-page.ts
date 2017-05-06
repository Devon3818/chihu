import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the DiscoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-discover-page',
  templateUrl: 'discover-page.html',
})
export class DiscoverPage {

  page1: any = 'AllDiscover';
  page2: any = 'ForkDiscover';

  constructor() {}

}
