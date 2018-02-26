import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the ConveniosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-convenios',
  templateUrl: 'convenios.html',
})
export class ConveniosPage {
  convenios: any = this.getConvenios();


  constructor(public loadingCtrl: LoadingController, public service:ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 1000
    });
    loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConveniosPage');
  }

  getConvenios(){
    this.service.getConvenios().subscribe((data)=>{
      this.convenios = data;
    console.log(data);
    },(erro)=>{
      console.log(erro);
    });

  }

}
