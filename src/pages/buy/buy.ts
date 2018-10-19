import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the BuyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
})
export class BuyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyPage');
  }

  sendTransaction($amount) {
    //TODO : Contacter l'API et proposer la transaction. L'API répondra true ou False
    if (true) {
      this.navCtrl.popToRoot();
    }
    else {
      const alert = this.alertCtrl.create({
        title: 'Erreur',
        subTitle: 'La transaction a échoué. Vérifiez les données saisies et réessayez.',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
