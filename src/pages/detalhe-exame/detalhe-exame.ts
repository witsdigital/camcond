import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the DetalheExamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-exame',
  templateUrl: 'detalhe-exame.html',
})
export class DetalheExamePage {

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 1000
    });
    loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheExamePage');
  }

}
