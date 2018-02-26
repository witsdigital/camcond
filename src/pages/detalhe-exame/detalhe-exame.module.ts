import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheExamePage } from './detalhe-exame';

@NgModule({
  declarations: [
    DetalheExamePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheExamePage),
  ],
})
export class DetalheExamePageModule {}
