import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalheCalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-calendario',
  templateUrl: 'detalhe-calendario.html',
})
export class DetalheCalendarioPage {
  item: any;
  event: any;
  user;
  constructor(public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.user = JSON.parse(localStorage.getItem('userData'));
    this.item = navParams.get("item");
    this.getHorarioDetalhes();
   
    
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheCalendarioPage');
    console.log(this.item);
  }



  getHorarioDetalhes(){
    
    this.service.getHorariosDetalhes(this.user.id, this.item.id).subscribe((data)=>{
      this.event = data;
      console.log(this.event);
    },(erro)=>{
      console.log(erro);
    });

  }

}
