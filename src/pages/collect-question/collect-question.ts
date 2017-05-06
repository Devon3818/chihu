import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the CollectQuestion page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-collect-question',
  templateUrl: 'collect-question.html',
})
export class CollectQuestion {

  items = [];

  rootNavCtrl: NavController;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.getdata();
  }

  getdata(){
    let url = "http://www.devonhello.com/chihu/my_collect_question";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=1", {
      headers: headers
    })
      .subscribe((res) => {
        //alert(JSON.stringify(res.json()));
        this.items = this.items.concat(res.json());
      });
  }


  pushQuestionPage( _id ){
    this.rootNavCtrl.push('Question',{
      _id: _id
    });
  }

  //打开页面
  pushAnswerPage( _id ) {
    this.rootNavCtrl.push('AnswerPage',{
      _id: _id
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectQuestion');
  }

}
