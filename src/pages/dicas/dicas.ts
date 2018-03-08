
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DetalheDicasPage } from '../detalhe-dicas/detalhe-dicas';

@IonicPage()
@Component({
  selector: 'page-dicas',
  templateUrl: 'dicas.html',
})
export class DicasPage {
  
  
  publicacoes:any;

  dados: any;

  menu;


  constructor(public loadingCtrl: LoadingController, public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 1000
    });
    loader.present();
    this.getPublicacao();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiasPage');
  }

  getPublicacao(){
    this.service.getPublicacao().subscribe((data)=>{
      this.dados = data;
      this.publicacoes = this.dados;
    console.log(data);
    },(erro)=>{
      console.log(erro);
    });

  }

  openPage(item){
    this.navCtrl.push(DetalheDicasPage, {
        ct: item
    })
}

}
