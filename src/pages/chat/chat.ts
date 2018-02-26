import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  
  
  lista: any;
  mensagem: string;
  setmensagem: any;
  user: any;

  constructor (public navParams: NavParams, public service: ServiceProvider, public navCtrl: NavController) {
    this.getMensagens();
    this.user = JSON.parse(localStorage.getItem('userData'));
  }

  enviar(){
    let m = {
      texto: this.mensagem
    };

    console.log(m);
  }



  enviarMensagem(){
    
    this.setmensagem = [
      {
        mensagem: this.mensagem,
        data: new Date(),
        id1: this.user[0].id_usuario,
        id2: 4

      }
    ];
  
    this.service.postMensagem(this.setmensagem[0]).then((result)=>{
      this.setmensagem = result;
      if(this.setmensagem.mensage == 1){
    
        console.log("sucesso");
    
      }else{
        console.log("erro");
      }
    },(error)=>{
    
    });
  

  
  
      
    }



    getMensagens(){



      setInterval(() => {
        this.service.getMensagens().subscribe((data)=>{
          this.lista = data;
        },(erro)=>{
          console.log(erro);
        });
  
  
      }, 500);
      
  
    }









}
