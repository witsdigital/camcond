import { GetUnidadesPage } from './../get-unidades/get-unidades';
import { ExamePage } from './../exame/exame';
import { LoginPage } from './../login/login';
import { EventosPage } from './../eventos/eventos';
import { DicasPage } from './../dicas/dicas';
import { PerfilPage } from './../perfil/perfil';
import { NoticiasPage } from './../noticias/noticias';
import { EspecialistasPage } from './../especialistas/especialistas';
import { SaudePage } from './../saude/saude';
import { ExameListPage } from '../exame-list/exame-list';
import { Component } from '@angular/core';
import { NavController, ModalController, MenuController, ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  perfil: [{title: string, component: any}];
  noticias: [{title: string, component: any}];
  dicas: [{title: string, component: any}];
  unidades: [{title: string, component: any}];
  saude: [{title: string, component: any}];
  eventos: [{title: string, component: any}];
  especialistas: [{title: string, component: any}];
  login: [{title: string, component: any}];
  exame: [{title: string, component: any}];
  exameList: [{title: string, component: any}];
  status: any = [];
  user:any;

  constructor(public modalCtrl: ModalController,public toastCtrl: ToastController, public network: Network, public navCtrl: NavController, public menuCtrl: MenuController) {
    if(localStorage.getItem('userData')){

    this.user = true;

    }else{
      this.user = false;

    }

  this.perfil = [
    {title: "Perfil", component: PerfilPage}
  ]
  this.unidades = [
    {title: "Unidades", component: GetUnidadesPage}
  ]
  this.dicas = [
    {title: "Dicas", component: DicasPage}
  ]
  this.noticias = [
    {title: "noticias", component: NoticiasPage}
  ]
  this.eventos = [
    {title: "Eventos", component: EventosPage}
  ]

  this.saude = [
    {title: "Saude", component: SaudePage}
  ]

  this.especialistas = [
    {title: "Especialistas", component: EspecialistasPage}
  ]
  this.login = [
    {title: "Login", component: LoginPage}
  ]
  this.exame = [
    {title: "Exame", component: ExamePage}
  ]
  this.exameList = [
    {title: "Exames", component: ExameListPage}
  ]






  this.network.onDisconnect().subscribe(() => {
    let toast = this.toastCtrl.create({
      message: 'Ops, sem conexão com a internet.',
      duration: 3000,
      position: 'middle'
    });

  toast.present();
  this.status = "desconectado";

  });

  this.network.onConnect().subscribe(() => {
    let toast = this.toastCtrl.create({
      message: 'Conectado',
      duration: 1000,
      position: 'middle'
    });

  toast.present();
    console.log('network connected!');
    this.status = "conectado"
    // We just got a connection but we need to wait briefly
     // before we determine the connection type. Might need to wait.
    // prior to doing any api requests as well.
    setTimeout(() => {
      if (this.network.type === 'wifi') {
        console.log('we got a wifi connection, woohoo!');
      }
    }, 3000);
  });





  }


 openMenu() {
  this.menuCtrl.enable(true, 'menu1');
   this.menuCtrl.open();
 }

 openlogin(){
   let modal = this.modalCtrl.create(LoginPage);
   modal.onDidDismiss(data => {


   });
   modal.present();
 }

  openPages(page) {
  if(page.component == PerfilPage ){
    if(localStorage.getItem('userData')){
        this.navCtrl.push(page.component);
    }else{
      let toast = this.toastCtrl.create({
        message: 'Você não esta logado',
        duration: 3000,
        position: 'top',
    cssClass: "toast-error"
      });

    toast.present();
    }
  }else{
          this.navCtrl.push(page.component);

  }

  }


}
