import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheCalendarioPage } from './detalhe-calendario';

@NgModule({
  declarations: [
    DetalheCalendarioPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheCalendarioPage),
  ],
})
export class DetalheCalendarioPageModule {}
