import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OpenpdfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-openpdf',
  templateUrl: 'openpdf.html',
})
export class OpenpdfPage {
  pdfSrc:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pdfSrc = this.navParams.get('link');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenpdfPage');
  }

}
