import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenpdfPage } from './openpdf';

@NgModule({
  declarations: [
    OpenpdfPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenpdfPage),
  ],
})
export class OpenpdfPageModule {}
