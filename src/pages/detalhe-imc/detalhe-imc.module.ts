import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheImcPage } from './detalhe-imc';

@NgModule({
  declarations: [
    DetalheImcPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheImcPage),
  ],
})
export class DetalheImcPageModule {}
