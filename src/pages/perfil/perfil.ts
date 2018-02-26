import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  dadosUser: any;
  
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 1000
    });
    loader.present();
    this.dadosUser = JSON.parse(localStorage.getItem('userData'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  sair(){
    localStorage.removeItem('userData');
        this.navCtrl.setRoot(HomePage);
    }


}
