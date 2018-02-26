import { ServiceProvider } from './../../providers/service/service';
import { DetalheEventosPage } from './../detalhe-eventos/detalhe-eventos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {


  eventos: any  = this.getEventos();

  constructor(public loadingCtrl: LoadingController, public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 1000
    });
    loader.present();
  }

  ionViewDidLoad() {
    
  }

  getEventos(){
    this.service.getEventos().subscribe((data)=>{
      this.eventos = data;
    },(erro)=>{
      console.log(erro);
    });

  }

  openPage(item){
    this.navCtrl.push(DetalheEventosPage, {
        ct: item
    })
}

}
