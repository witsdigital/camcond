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


  chat: any;
  user: any;
  user2;

  constructor(public service: ServiceProvider, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    
    this.user = JSON.parse(localStorage.getItem('userData'));
    
    if(localStorage.getItem('userData')){
          this.user2 = true;
          }else{
            this.user2 = false;
          }

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



  abrirChat(){
    
    this.chat = [
      {
        user1: this.user[0].id_usuario,
        user2: 4
      }
    ];

  this.service.newChat(this.chat[0]).then((result)=>{
    this.chat = result;
    if(this.chat.mensage == 1){
      console.log("sucesso");
      this.navCtrl.push(ChatPage, {
        users: this.chat 
      });
    }else{
      console.log("erro");
    }
  },(error)=>{
  
  });


  
  
      
    }

}
