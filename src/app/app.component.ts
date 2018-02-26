import { PerfilPage } from './../pages/perfil/perfil';
import { LoginPage } from './../pages/login/login';
import { UnidadesPage } from './../pages/unidades/unidades';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConveniosPage } from './../pages/convenios/convenios';
import { SaudePage } from './../pages/saude/saude';
import { EspecialistasPage } from './../pages/especialistas/especialistas';
import { NoticiasPage } from './../pages/noticias/noticias';
import { HomePage } from './../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  @ViewChild(Nav) nav: Nav;
  perfil: [{title: string, component: any}];
  noticias: [{title: string, component: any}];
  home: [{title: string, component: any}];
  saude: [{title: string, component: any}];
  especialistas: [{title: string, component: any}];
  convenios: [{title: string, component: any}];
  unidades: [{title: string, component: any}];
  login: [{title: string, component: any}];

    rootPage = HomePage;
    user:any;
    dadosUser:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

if(localStorage.getItem('userData')){
this.user = true;
  this.dadosUser = JSON.parse(localStorage.getItem('userData'));

}else{
  this.user = false;

}

    this.perfil = [
      {title: "Perfil", component: PerfilPage}
    ]

    this.noticias = [
      {title: "Noticias", component: NoticiasPage}
    ]

    this.home = [
      {title: "Home", component: this.rootPage}
    ]
    this.especialistas = [
      {title: "Especilistas", component: EspecialistasPage}
    ]
    this.saude = [
      {title: "Saude", component: SaudePage}
    ]

    this.convenios = [
      {title: "Convenios", component: ConveniosPage}
    ]
    this.unidades = [
      {title: "Unidades", component: UnidadesPage}
    ]

    this.login = [
      {title: "Login", component: LoginPage }
    ]


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }



  openPages(page:{title: string, component:any}): void {
    this.nav.setRoot(page.component);
  }

  openPagesPush(page:{title: string, component:any}): void {
    this.nav.push(page.component);
  }

  sair(){
    localStorage.removeItem('userData');
    if(localStorage.getItem('userData')){

    this.user = true;

    }else{
      this.user = false;

    }
        this.nav.setRoot(HomePage);
    }

}
