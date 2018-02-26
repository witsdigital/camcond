import { FormBuilder } from '@angular/forms';
import { HomePage } from './../home/home';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-exame',
  templateUrl: 'exame.html',
})
export class ExamePage {
  
  dados:any = [];
  mensage:any;
  exame:any;

  constructor(public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {

    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 1000
    });
    loader.present();
    
  }

  ionViewDidLoad() {
    
  }



cadastrarExame(dados){
  
  this.exame = [
    {
      nome: dados.nome, 
      data: dados.data,
      email: dados.email,
      cpf: dados.cpf,
      sexo: dados.sexo,
      tp_consulta: dados.tp_consulta,
      telefone: dados.telefone,
      periodo: dados.periodo 
    }
  ];

this.service.postExame(this.exame[0]).then((result)=>{
  this.mensage = result;
  if(this.mensage.mensage == 1){
    let toast = this.toastCtrl.create({
      message: 'Exame solicitado com sucesso',
      duration: 3000,
      position: 'middle',
   cssClass: "toast-success"
    });

    toast.present();
    this.navCtrl.setRoot(HomePage);


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
