import { EnderecoPage } from './../endereco/endereco';
import { LocalizacaoPage } from './../localizacao/localizacao';
import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, LoadingController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import {GetUnidadesPage} from '../get-unidades/get-unidades';
declare var window: any;
declare var $crisp: any;
var d: any;
var s: any;



/**
 * Generated class for the UnidadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unidades',
  templateUrl: 'unidades.html',
})

export class UnidadesPage {
  chat:any;
  item: any;

  constructor(public viewCtrl: ViewController,private socialSharing: SocialSharing, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {

    window.$crisp=[];

    window.CRISP_WEBSITE_ID="144b1fdf-e978-45da-adfd-186a743de485";
    (function(){
     d=document;
     s=d.createElement("script");
      s.src="https://client.crisp.chat/l.js";
      s.async=1;
      d.getElementsByTagName("ion-content")[0].appendChild(s);
      $crisp.push(["do", "chat:hide"])
    })();

    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 10000
    });
    loader.present();
    this.item = navParams.get("item");
        loader.dismiss();

  }
  teste(){
      $crisp.push(["do", "chat:show"])
      $crisp.push(["do", "chat:open"])
  }

  ionViewDidLoad() {

  }
  goBack(){
      $crisp.push(["do", "chat:hide"]);
      this.viewCtrl.dismiss(GetUnidadesPage);
  }

  openExameList(item) {
    this.navCtrl.push(EnderecoPage, {item: item});
  }

  openMap(item){
    this.navCtrl.push(LocalizacaoPage, {item: item});
  }

  share(){
    this.socialSharing.share("As melhores dicas sobre saúde em sua mão. Baixe o aplicativo da Ineb e fique por dentro!",null/*Subject*/,null/*File*/,"http://www.google.com")

    .then(() => {
  // Sharing via email is possible
  }).catch(() => {
  // Sharing via email is not possible
  });
  }

  shareWhatsapp(){
    this.socialSharing.shareViaWhatsApp("As melhores dicas sobre saúde em sua mão. Baixe o aplicativo da Ineb e fique por dentro!",null/*File*/,"http://www.google.com")

    .then(() => {
  // Sharing via email is possible
  }).catch(() => {
  // Sharing via email is not possible
  });
  }



}
