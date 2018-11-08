import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the GitsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GitsonProvider {

  apiUrl ="https://raw.githubusercontent.com/Aveias/mobilapp/dev/resources/raw/config.json";

  constructor(public http: HttpClient) {
    console.log('Hello GitsonProvider Provider');
  }

  getUrl(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }

}
