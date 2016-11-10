import {
  Component
} from '@angular/core';
import {
  NavController,
  ViewController,
  NavParams
} from 'ionic-angular';

/*
  Generated class for the EditPage.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-page',
  templateUrl: 'edit-page.html'
})
export class EditPage {
  title;
  description;
  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }

  editItem() {
    let newEditItem = {
      title: this.title,
      description: this.description
    };
    this.view.dismiss(newEditItem);
  }

  close() {
    this.view.dismiss();
  }

}
