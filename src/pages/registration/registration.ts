import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  goToMain() {
    this.navCtrl.setRoot(MenuPage);
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Deseja pular?',
      message: 'Seus dados são importantes para o nosso controle de visitas.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Pular',
          handler: () => {
            this.goToMain();
          }
        }
      ]
    });
    alert.present();
  }

}
