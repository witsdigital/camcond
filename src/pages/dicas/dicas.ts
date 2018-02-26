import { DetalheNotPage } from './../detalhe-not/detalhe-not';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dicas',
  templateUrl: 'dicas.html',
})
export class DicasPage {
  
  
  dicas:any = this.getDicas();


  constructor(public loadingCtrl: LoadingController, public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 1000
    });
    loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiasPage');
  }

  getDicas(){
    this.service.getDicas().subscribe((data)=>{
      this.dicas = data;
    console.log(data);
    },(erro)=>{
      console.log(erro);
    });

  }
  openPage(item){
    this.navCtrl.push(DetalheNotPage, {
        ct: item
    })
}

}
