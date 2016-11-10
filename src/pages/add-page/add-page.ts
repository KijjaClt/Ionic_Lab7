import {
  Component
} from '@angular/core';
import {
  NavController,
  ViewController
} from 'ionic-angular';

/*
  Generated class for the AddPage.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-page',
  templateUrl: 'add-page.html'
})
export class AddPage {
  title;
  description;

  constructor(public navCtrl: NavController, public view: ViewController) {}

  saveItem() {

    let newItem = {
      title: this.title,
      description: this.description
    };

    this.view.dismiss(newItem);

  }

  close() {
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('Hello Add Page');
  }


}
