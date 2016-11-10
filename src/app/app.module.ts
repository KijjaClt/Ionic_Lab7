import {
  NgModule
} from '@angular/core';
import {
  IonicApp,
  IonicModule
} from 'ionic-angular';
import {
  MyApp
} from './app.component';
import {
  HomePage
} from '../pages/home/home';
import {
  AddPage
} from '../pages/add-page/add-page';
import {
  EditPage
} from '../pages/edit-page/edit-page';
import {
  DetailPage
} from '../pages/detail-page/detail-page';
import {
  Storage
} from '@ionic/storage';
import {
  MyStorage
} from '../providers/my-storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPage,
    DetailPage,
    EditPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPage,
    DetailPage,
    EditPage
  ],
  providers: [Storage, MyStorage]
})
export class AppModule {}
