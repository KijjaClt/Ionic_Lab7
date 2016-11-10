import {
  Component
} from '@angular/core';
import {
  ModalController,
  NavController,
  LoadingController,
  ToastController 
} from 'ionic-angular';
import {
  AddPage
} from '../add-page/add-page'
import {
  DetailPage
} from '../detail-page/detail-page';
import {
  EditPage
} from '../edit-page/edit-page';
import {
  MyStorage
} from '../../providers/my-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public service: MyStorage, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    this.service.getData().then((todos) => {
      this.presentLoading();
      if (todos) {
        this.items = JSON.parse(todos);
      }

    });
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      duration: 1000
    });
    loader.present();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Delete Successfully',
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }

  ionViewDidLoad() {

  }

  addItem() {
    let addModal = this.modalCtrl.create(AddPage);

    addModal.onDidDismiss((item) => {

      if (item) {
        this.saveItem(item);
      }

    });

    addModal.present();

  }

  editItem(item) {
    let addModal = this.modalCtrl.create(EditPage, {
      item
    });
    let index = this.items.indexOf(item);
    addModal.onDidDismiss((item) => {

      if (item) {
        if (index > -1) {
          this.items[index] = item;
        }
        this.service.save(this.items);
      }
    });

    addModal.present();
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      this.presentToast();
    }

    this.service.save(this.items);

  }

  saveItem(item) {
    this.items.push(item);
    this.service.save(this.items);

  }

  viewItem(item) {
    this.presentLoading();
    this.navCtrl.push(DetailPage, {
      item: item
    });
  }
}
