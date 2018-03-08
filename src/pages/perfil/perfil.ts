import { DetalheEspecPage } from './../detalhe-espec/detalhe-espec';
import { ServiceProvider } from './../../providers/service/service';
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
  vereadores: any;

  
  constructor(public service: ServiceProvider, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 1000
    });
    loader.present();
    this.getVereadores();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  getVereadores(){
    this.service.getVereadores().subscribe((data)=>{
      this.vereadores = data;
    console.log(data);
    },(erro)=>{
      console.log(erro);
    });

  }

  openPage(item){
    this.navCtrl.push(DetalheEspecPage, {
        ct: item
    })
}

  sair(){
    localStorage.removeItem('userData');
        this.navCtrl.setRoot(HomePage);
    }


}
