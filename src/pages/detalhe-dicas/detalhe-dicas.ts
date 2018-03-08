import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the DetalheDicasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-dicas',
  templateUrl: 'detalhe-dicas.html',
})
export class DetalheDicasPage  {
  
  ct: any;

  dados: any;

  constructor(public service: ServiceProvider, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    this.ct = navParams.get("ct");
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 1000
    });
    loader.present();
    this.getPublicacaoPDF();
    
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheDicasPage');
  }


  getPublicacaoPDF(){
    
    this.service.getPublicacaoPDF(this.ct.id).then((data)=>{
      this.dados = data;
    console.log(data);
    },(erro)=>{
      console.log(erro);
    });
  }


  openURL(url) {
    InAppBrowser.open(url,'_system','location=yes');
}


}
