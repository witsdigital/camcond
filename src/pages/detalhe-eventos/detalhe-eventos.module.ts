import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheEventosPage } from './detalhe-eventos';

@NgModule({
  declarations: [
    DetalheEventosPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheEventosPage),
  ],
})
export class DetalheEventosPageModule {}
