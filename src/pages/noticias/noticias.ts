import { DetalheNotPage } from './../detalhe-not/detalhe-not';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {


  noticias:any;


  constructor(public loadingCtrl: LoadingController, public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiasPage');
    this.getNoticias();
  }

  getNoticias(){
    this.service.getNoticias().subscribe((data)=>{
      this.noticias = data;
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
