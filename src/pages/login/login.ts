import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  validLogin($username, $password) {
    if ($username === "test" && $password === "test") {
      this.navCtrl.setRoot(HomePage);
    }
    else {
      const alert = this.alertCtrl.create({
        title: 'Erreur',
        subTitle: 'Identifiant ou mot de passe erroné. Veuillez réessayer.',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
