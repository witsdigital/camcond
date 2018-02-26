import { ServiceProvider } from './../../providers/service/service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import * as moment from 'moment';
/**
 * Generated class for the EventCalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-calendario',
  templateUrl: 'event-calendario.html',
})
export class EventCalendarioPage {

  mensage;
  
  event:any = { id_usuario: ''};
 user:any;

  constructor(public service: ServiceProvider, public toastCtrl: ToastController, public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController) {
    this.user = JSON.parse(localStorage.getItem('userData'));
  }
 
  cancel() {
    this.viewCtrl.dismiss();
  }
 
  save() {
    
    this.event.id_usuario = this.user.id;

    this.service.setHorarios(this.event).then((result)=>{
      this.mensage = result;
      if(this.mensage.mensage == 1){
        let toast = this.toastCtrl.create({
          message: 'Evento adicionado com sucesso',
          duration: 3000,
          position: 'middle',
       cssClass: "toast-success"
        });
        toast.present();
        this.viewCtrl.dismiss(this.event);
    
    
      }else{
        let toast = this.toastCtrl.create({
          message: 'Error',
          duration: 3000,
          position: 'middle',
       cssClass: "toast-error"
        });
        toast.present();
      }
    },(error)=>{
    
    });



  }
 
}