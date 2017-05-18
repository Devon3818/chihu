import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-discover-page',
  templateUrl: 'discover-page.html',
})
export class DiscoverPage {

  page1: any = 'AllDiscover';
  page2: any = 'ForkDiscover';

  constructor(public UserService: UserService) {
    this.UserService.presentLoadingDefault();
  }

}
