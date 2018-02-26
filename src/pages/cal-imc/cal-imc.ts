import { DetalheImcPage } from './../detalhe-imc/detalhe-imc';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-cal-imc',
  templateUrl: 'cal-imc.html',
})
export class CalImcPage {

  dados = [];
  msg: [{imc: number, mensagem: string, img: string }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  calcular(dados){
    let imc = dados.peso/(dados.altura*dados.altura);

    if (imc<17) {
      this.msg = [{imc:imc, mensagem:"Muito abaixo do peso", img:"./assets/images/imc_01.png"}];
    }
    if(imc>=17 && imc<=18.49){
      this.msg = [{imc: imc, mensagem:"Abaixo do peso", img:"./assets/images/imc_01.png"}];
    }
    if(imc>=18.5 && imc<24.99){
      this.msg = [{imc: imc, mensagem:"Peso Normal", img:"./assets/images/imc_02.png"}];
    }
    if (imc>=25 && imc<=29.9){
      this.msg = [{imc: imc, mensagem:"Acima do peso", img:"./assets/images/imc_03.png"}];
    }
    if(imc>=30 && imc<=34.9) {
      this.msg = [{imc: imc, mensagem:"Obesidade grau I", img:"./assets/images/imc_04.png"}];

    }
    if(imc>=35 && imc<40){
      this.msg = [{imc: imc, mensagem:"Obesidade grau II", img:"./assets/images/imc_04.png"}];
    }
    if (imc>=40){
      this.msg = [{imc: imc, mensagem:"Obesidade grau III", img:"./assets/images/imc_05.png"}];
    }

    this.navCtrl.push(DetalheImcPage, {
    item: this.msg
    })
  }

}
