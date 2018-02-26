import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the DetalheEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-eventos',
  templateUrl: 'detalhe-eventos.html',
})
export class DetalheEventosPage {

  
  ct: any;
  evento: any;
  
  constructor(public loadingCtrl: LoadingController, public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 1000
    });
    loader.present();
    
    this.ct = navParams.get("ct");
    this.evento = this.getEvento(this.ct.key);
  }

  ionViewDidLoad() {
    
  }

  getEvento(key) {
    this.service.getEventoImg(key).subscribe((data)=>{
      this.evento = data;
      console.log(data);
    },(erro)=>{
      console.log(erro);
    });

  }


}
