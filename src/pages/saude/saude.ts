import { CalendarioPage } from './../calendario/calendario';
import { ServiceProvider } from './../../providers/service/service';
import { ChatPage } from './../chat/chat';
import { CalImcPage } from './../cal-imc/cal-imc';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the SaudePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saude',
  templateUrl: 'saude.html',
})
export class SaudePage {


  videos: any;
  user: any;
  user2;

  constructor(public service: ServiceProvider, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    
    this.getTvCamara();

    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 1000
    });
    loader.present();
  }

  ionViewDidLoad() {
   
  }
  imc(){
    this.navCtrl.push(CalImcPage);
  }

  horarios(){
    this.navCtrl.push(CalendarioPage);
  }

  getTvCamara(){
    this.service.getTvCamara().subscribe((data)=>{
      this.videos = data;
    console.log(data);
    },(erro)=>{
      console.log(erro);
    });

  }

}
