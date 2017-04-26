import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DiscoverPage } from '../discover-page/discover-page';
import { MorePage } from '../more-page/more-page';
import { MessagesPage } from '../messages-page/messages-page';
import { BroadcastPage } from '../broadcast-page/broadcast-page';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = DiscoverPage;
  tab3Root: any = BroadcastPage;
  tab4Root: any = MessagesPage;
  tab5Root: any = MorePage;

  constructor() {

  }
}
