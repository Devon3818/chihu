import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = 'HomePage';
  tab2Root: any = 'DiscoverPage';
  tab3Root: any = 'BroadcastPage';
  tab4Root: any = 'MessagesPage';
  tab5Root: any = 'MorePage';

  constructor() {

  }
}
