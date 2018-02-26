import { UnidadesPage } from './../unidades/unidades';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the GetUnidadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-unidades',
  templateUrl: 'get-unidades.html',
})
export class GetUnidadesPage {


  unidades:any;


  constructor(public loadingCtrl: LoadingController, public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {

  this.unidades = this.getUnidades();
  }

  ionViewDidLoad() {

  }

  getUnidades(){
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 15000
    });
    loader.present();
    this.service.getUnidades().subscribe((data)=>{
      this.unidades = data;
          loader.dismiss();
    },(erro)=>{
      console.log(erro);
    });

  }

  openPage(item){
    this.navCtrl.push(UnidadesPage, {
        item: item
    })
}
}
