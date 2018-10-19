import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyPage } from '../buy/buy';
import { ContactsPage } from '../contacts/contacts';
import {SendPage} from "../send/send";
import {TransactionsPage} from "../transactions/transactions";
import {LoginPage} from "../login/login";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  changePage(params) {
    switch (params) {
      case 'buy': {
        this.navCtrl.push(BuyPage);
        break;
      }
      case 'send':{
        this.navCtrl.push(SendPage);
        break;
      }
      case 'history':{
        this.navCtrl.push(TransactionsPage);
        break;
      }
    }
  }

  closeConnexion(){
    this.navCtrl.setRoot(LoginPage);
  }

}
