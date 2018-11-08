import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GitsonProvider} from "../../providers/gitson/gitson";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public gitsonProvider : GitsonProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  searchUser($user){

    console.log('prout')
    //TEMPORARY, TO TEST GET HTTP
    this.gitsonProvider.getUrl()
      .then(data => {
          console.log(data)
      })

  }

}
