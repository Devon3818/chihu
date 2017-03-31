import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { MorePage } from '../more/more';
import { MessagesPage } from '../messages/messages';
import { DiscoverPage } from '../discover/discover';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = DiscoverPage;
  tab3Root: any = AboutPage;
  tab4Root: any = MessagesPage;
  tab5Root: any = MorePage;

  constructor() {

  }
}
