import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransparenciaDetalhePage } from './transparencia-detalhe';

@NgModule({
  declarations: [
    TransparenciaDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(TransparenciaDetalhePage),
  ],
})
export class TransparenciaDetalhePageModule {}
