import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the DetalheEspecPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-espec',
  templateUrl: 'detalhe-espec.html',
})
export class DetalheEspecPage {


  ct: any;

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 1000
    });
    loader.present();
    this.ct = navParams.get("ct");
    console.log(this.ct);
  loader.dismiss();

  }

  ionViewDidLoad() {

  }



}
