import {
  Component
} from '@angular/core';
import {
  NavParams
} from 'ionic-angular';

/*
  Generated class for the DetailPage.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-page',
  templateUrl: 'detail-page.html'
})
export class DetailPage {
  title;
  description;
  
  constructor(public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('Hello Detail Page');
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }

}
