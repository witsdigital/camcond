import { TransparenciaDetalhePage } from './../transparencia-detalhe/transparencia-detalhe';

import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DetalheDicasPage } from '../detalhe-dicas/detalhe-dicas';

@IonicPage()
@Component({
  selector: 'page-transparencia',
  templateUrl: 'transparencia.html',
})
export class TransparenciaPage {


  publicacoes: any = [];

  dados: any = [];

  menu;
  items = [];
  perpage: any = 15;
  findpage: any = 0;
  recdesp: any;

  constructor(public loadingCtrl: LoadingController, public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 1000
    });
    loader.present();
    this.getPublicacao();


  }

  ionViewDidLoad() {
    console.log(this.publicacoes);


  }

  getPublicacao() {
    this.service.getPublicacao().subscribe((data) => {
      this.dados = data;
      for (let i = 0; i < this.perpage; i++) {

        this.items.push(data[i]);
        this.findpage = i;
      }
      this.publicacoes = this.dados;
      console.log(data);
    }, (erro) => {
      console.log(erro);
    });

    this.service.getRecDesp().subscribe((data2) => {
      console.log(data2);
      this.recdesp = data2;
    });


  }

  openPage(item) {
    this.navCtrl.push(TransparenciaDetalhePage, {
      ct: item
    })
  }
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {


      if (this.dados.length - this.findpage > this.perpage) {
        this.perpage = this.perpage + 15;
        for (let i = this.findpage + 1; i < this.perpage; i++) {
          this.items.push(this.dados[i]);
          console.log('maior');
          this.findpage = i;
        }

      } else {
        for (let i = this.findpage + 1; i < this.dados.length; i++) {
          this.items.push(this.dados[i]);
        }
        console.log('menor');
      }


      this.perpage = this.findpage;
      this.findpage = this.perpage + 30;

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
