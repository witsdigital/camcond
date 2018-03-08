import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ServiceProvider {

api:string = 'http://camaradecondeuba.ba.gov.br/';

  constructor(public http: Http) {

    console.log('Hello ServiceProvider Provider');
  }

  getDicas(){
    return this.http.get(this.api+'noticia/getappdicas').map(res=> res.json())
  }
  
  
  getNoticias(){
	  return this.http.get(this.api+'noticia/getall/').map(res=> res.json())
  }


  getGaleria(){
	  return this.http.get(this.api+'galeria/getapp/').map(res=> res.json())
  }

  getTvCamara(){
	  return this.http.get(this.api+'tv_camara/getapp/').map(res=> res.json())
  }

  getVereadores(){
	  return this.http.get(this.api+'vereadores/getVereadoresApp/').map(res=> res.json())
  }

  getPublicacao(){
	  return this.http.get(this.api+'publicacoes/getPublicacaoApp/').map(res=> res.json())
  }


  getEspecialistas () {
    return this.http.get(this.api+'especialista/getapp/').map(res=> res.json())
  }

  getEventos () {
    return this.http.get(this.api+'eventos/getapp/').map(res=> res.json())
  }

  getUnidades() {
    return this.http.get(this.api+'unidades/getapp/').map(res=> res.json())
  }


  getConvenios() {
    return this.http.get(this.api+'convenios/getapp/').map(res=> res.json())
  }


  getExames(id) {
    return this.http.get(this.api+'exames/getappid/'+id).map(res=> res.json())
  }

  getEventoImg(key) {
    return this.http.get(this.api+'galeria/getappimg/'+key).map(res=> res.json())
  }

  postDatas(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'api/apiLogin.php', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }

  getPublicacaoPDF(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'publicacoes/getPublicacaoPDF', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }



  postExame(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'preagendamento/setapp', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }




  postMensagem(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'chat/newmensagem', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }


  getMensagens() {
    return this.http.get(this.api+'chat/getmensagens/').map(res=> res.json())
  }


  newChat(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'chat/newchat', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }


  getHorarios(id) {
    return this.http.get(this.api+'horarios/getapp/'+id).map(res=> res.json())
  }

  getHorariosDetalhes(id, id2) {
    return this.http.get(this.api+'horarios/getappdetalhes/?id='+id+'&id2='+id2).map(res=> res.json())
  }


  setHorarios(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'horarios/setapp', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  
  }






}
