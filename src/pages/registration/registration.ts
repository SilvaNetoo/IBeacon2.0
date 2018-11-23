import { Component } from '@angular/core';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../app/providers/auth.firebase';
import { FirebaseService } from '../../app/providers/firease.service';
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

  angularVoteCount: number;
  reactVoteCount: number;
  vueVoteCount: number;
  hasVoted: boolean = false;
  updating: boolean = false;
  fsRef: AngularFirestoreDocument<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private firebase: AuthService, private afs: FirebaseService) {
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

  async loginWithGoogleAccount() {
    await this.afs.get().subscribe(response => {
      console.log(response.payload.data()); 
    });
  }

  ngOnInit() { }

}
