import {
  Injectable
} from '@angular/core';
import {
  Storage
} from '@ionic/storage';
// import 'rxjs/add/operator/map';

/*
  Generated class for the MyStorage provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MyStorage {

  constructor(public storage: Storage) {
    // console.log('Hello Data Provider');
  }

  getData() {
    return this.storage.get('todos');
  }

  save(data) {

    let newData = JSON.stringify(data);
    this.storage.set('todos', newData);
  }


}
