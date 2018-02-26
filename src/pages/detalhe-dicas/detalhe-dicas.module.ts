import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheDicasPage } from './detalhe-dicas';

@NgModule({
  declarations: [
    DetalheDicasPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheDicasPage),
  ],
})
export class DetalheDicasPageModule {}
