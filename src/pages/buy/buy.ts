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

  sendTransaction($cardnumber, $month, $year, $cryp, $amount) {
    if (typeof $cardnumber !== 'undefined' && typeof $month !== 'undefined' && typeof $year !== 'undefined' && typeof $cryp !== 'undefined' && typeof $amount !== 'undefined' ) {
      if (this.checkFields($cardnumber, $month, $year, $cryp)) {
        //TODO : Contacter l'API et proposer la transaction. L'API répondra true ou False
        if (true === true) {
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
    else {
      const alert = this.alertCtrl.create({
        title: 'Champs vides',
        subTitle: 'Merci de remplir tous les champs',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  //Vérification des champs
  checkFields(cardnumber, month, year, cryp) {
    if (!this.checkCardInfoIntegrity(12, 19, cardnumber) || !this.checkCardInfoIntegrity(3, 4, cryp) || !this.checkCardInfoValue(0, 9999, cryp)) {
      const alert = this.alertCtrl.create({
        title: 'Erreur',
        subTitle: 'Le numéro de carte bancaire est erroné. Vérifiez les données et recommencez.',
        buttons: ['OK']
      });
      alert.present();
      return false;
    }
    else if (!this.checkCardInfoIntegrity(1, 2, month) || !this.checkCardInfoValue(1, 12, month) || !this.checkCardInfoIntegrity(4, 4, year) || !this.checkCardInfoValue(2018, 2050, year)) {
      const alert = this.alertCtrl.create({
        title: 'Erreur',
        subTitle: 'La date est erronée. Vérifiez les données et recommencez.',
        buttons: ['OK']
      });
      alert.present();
      return false;
    }
    else {
      return true;
    }
  }
  checkCardInfoIntegrity($min, $max, $number) {
    $number = parseInt($number);
    if ($number.length < $min || $number.length > $max) {
      return false;
    }
    else {
      return true;
    }
  }

  checkCardInfoValue($min, $max, $number) {
    $number = parseInt($number);
    if ($number < $min || $number > $max) {
      return false;
    }
    else {
      return true;
    }
  }

}
