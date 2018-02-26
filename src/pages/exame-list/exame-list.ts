import { DetalheExamePage } from './../detalhe-exame/detalhe-exame';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { OpenpdfPage} from './../openpdf/openpdf';

/**
 * Generated class for the ExameListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exame-list',
  templateUrl: 'exame-list.html',
})
export class ExameListPage {

item: any;
exames: any;
filtro = 1;

  constructor( public loadingCtrl: LoadingController, private document: DocumentViewer, public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 1000
    });
    loader.present();
    this.item = JSON.parse(localStorage.getItem('userData'));
    this.exames = this.getExames(this.item.id);

  }
  openpdf(lk){
    this.navCtrl.push(OpenpdfPage, { link:'http://inebmed.com.br/'+lk});
  }
  openFile(file){

    this.navCtrl.push(OpenpdfPage, { link: 'http://inebmed.com.br/' + file });

  }

  ionViewDidLoad() {
    console.log(this.exames);
  }
  filtrar(dado){
    this.filtro = dado;
  }


  getExames(key) {
    this.service.getExames(key).subscribe((data)=>{
      this.exames = data;
      console.log(data);
    },(erro)=>{
      console.log(erro);
    });

  }

  openPage(item){
    this.navCtrl.push(DetalheExamePage, {
        item: item
    })
}

}
