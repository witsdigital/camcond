import { Http } from '@angular/http';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, LoadingController, ToastController, ModalController } from 'ionic-angular';
import {HomePage} from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  logar:any=[];
  data:any = {};
  dados:any;

  responseData : any;
  userData:any = {};

  constructor(public viewctrl:ViewController, public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, public toastCtrl:ToastController, public service: ServiceProvider,public http: Http,public modalCtrl: ModalController ) {


    if(localStorage.getItem('userData')){
  this.navCtrl.setRoot(HomePage);

}


  }
  close(){
    this.viewctrl.dismiss();

  }

  lg(dados){
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 6000
    });
    loader.present();

    if(!dados.login || !dados.senha){
      let toast = this.toastCtrl.create({
        message: 'Preencha os campos corretamente',
        duration: 3000,
        position: 'top',
		cssClass: "toast-error"
      });
        loader.dismiss();
      toast.present();
    }else{
        this.service.postDatas(this.userData,'signup').then((result) => {
         this.responseData = result;
         console.log(this.responseData.permissao);
         if(this.responseData.permissao==0){
           let toast = this.toastCtrl.create({
             message: 'Login/Senha inválido',
             duration: 3000,
             position: 'top',
          cssClass: "toast-error"
           });
          loader.dismiss();
           toast.present();

         }else{
           localStorage.setItem('userData', JSON.stringify(this.responseData));
  this.navCtrl.setRoot(HomePage);
           let toast = this.toastCtrl.create({
             message: 'Bem-Vindo',
             duration: 3000,
             position: 'top',
          cssClass: "toast-success"
           });
             loader.dismiss();
           toast.present();
           window.location.reload();

         }


       }, (err) => {
         // Error log
       });



    }



  }

  ionViewDidLoad() {

  }

}
