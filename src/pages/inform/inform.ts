import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../service/user.service';

@IonicPage()
@Component({
  selector: 'page-inform',
  templateUrl: 'inform.html',
})
export class Inform {

  items = [];
  nomessage:boolean = true;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public UserService: UserService) {
  }

}
