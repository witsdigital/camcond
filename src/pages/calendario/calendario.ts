import { DetalheCalendarioPage } from './../detalhe-calendario/detalhe-calendario';
import { ServiceProvider } from './../../providers/service/service';
import { EventCalendarioPage } from './../event-calendario/event-calendario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html',
})
export class CalendarioPage {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  event:any;
  user;

  constructor(public service: ServiceProvider, public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController) {
    this.user = JSON.parse(localStorage.getItem('userData'));
    this.gethorarios();



  }

  addEvent() {
    let modal = this.modalCtrl.create(EventCalendarioPage, {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;

        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);

        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }

  gethorarios(){

    this.service.getHorarios(this.user.id).subscribe((data)=>{
      this.event = data;
      console.log(this.event);
    },(erro)=>{
      console.log(erro);
    });

  }




  openHorarios(p) {
    this.navCtrl.push(DetalheCalendarioPage, {
      item: p
    });
  }



}
