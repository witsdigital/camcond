import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventCalendarioPage } from './event-calendario';

@NgModule({
  declarations: [
    EventCalendarioPage,
  ],
  imports: [
    IonicPageModule.forChild(EventCalendarioPage),
  ],
})
export class EventCalendarioPageModule {}
