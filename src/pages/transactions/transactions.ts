import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Transaction} from "../../app/models/Transaction";

/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {
  listTransactions = [];
  transactionTest = new Transaction();
  transactionTest2 = new Transaction();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionsPage');
    this.init();
  }

  init(){
    this.transactionTest.from="toto";
    this.transactionTest.to="tata";
    this.transactionTest.amount=200;
    this.transactionTest.timestamp=1539600000;
    this.transactionTest.date= new Date(this.transactionTest.timestamp*1000).toDateString()

    this.listTransactions.push(this.transactionTest);

    this.transactionTest2.from="tata";
    this.transactionTest2.to="toto";
    this.transactionTest2.amount=40;
    this.transactionTest2.timestamp=1539900000;
    this.transactionTest2.date= new Date(this.transactionTest2.timestamp*1000).toDateString()

    this.listTransactions.push(this.transactionTest2);

  }

}
