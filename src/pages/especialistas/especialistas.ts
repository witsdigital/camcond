import { DetalheEspecPage } from './../detalhe-espec/detalhe-espec';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the EspecialistasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-especialistas',
  templateUrl: 'especialistas.html',
})
export class EspecialistasPage {


  especialistas:any = this.getEspecialistas();


  constructor(public loadingCtrl: LoadingController, public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 1000
    });
    loader.present();
  }

  ionViewDidLoad() {

  }

  getEspecialistas(){
    this.service.getEspecialistas().subscribe((data)=>{
      this.especialistas = data;
    },(erro)=>{
      console.log(erro);
    });

  }

  openPage(item){
    this.navCtrl.push(DetalheEspecPage, {
        ct: item
    })
}


}
