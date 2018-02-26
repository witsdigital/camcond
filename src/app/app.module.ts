import { DetalheCalendarioPage } from './../pages/detalhe-calendario/detalhe-calendario';
import { CalendarioPage } from './../pages/calendario/calendario';
import { EventCalendarioPage } from './../pages/event-calendario/event-calendario';
import { NgCalendarModule } from 'ionic2-calendar';
import { Network } from '@ionic-native/network';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { IonicImageViewerModule } from 'ionic-img-viewer';
import { HttpModule } from '@angular/http';
import { ServiceProvider } from '../providers/service/service';

import { DetalheImcPage } from './../pages/detalhe-imc/detalhe-imc';
import { CalImcPage } from './../pages/cal-imc/cal-imc';
import { DetalheExamePage } from './../pages/detalhe-exame/detalhe-exame';
import { GetUnidadesPage } from './../pages/get-unidades/get-unidades';
import { DetalheEventosPage } from './../pages/detalhe-eventos/detalhe-eventos';
import { DetalheDicasPage } from './../pages/detalhe-dicas/detalhe-dicas';
import { ExameListPage } from './../pages/exame-list/exame-list';
import { EnderecoPage } from './../pages/endereco/endereco';
import { ChatPage } from './../pages/chat/chat';
import { DetalheNotPage } from './../pages/detalhe-not/detalhe-not';
import { ExamePage } from './../pages/exame/exame';
import { LocalizacaoPage } from './../pages/localizacao/localizacao';
import { DetalheEspecPage } from './../pages/detalhe-espec/detalhe-espec';
import { LoginPage } from './../pages/login/login';
import { ConveniosPage } from './../pages/convenios/convenios';
import { DicasPage } from './../pages/dicas/dicas';
import { UnidadesPage } from './../pages/unidades/unidades';
import { EventosPage } from './../pages/eventos/eventos';
import { PerfilPage } from './../pages/perfil/perfil';
import { NoticiasPage } from './../pages/noticias/noticias';
import { SaudePage } from './../pages/saude/saude';
import { EspecialistasPage } from './../pages/especialistas/especialistas';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { OpenpdfPage} from './../pages/openpdf/openpdf';




@NgModule({
  declarations: [
    
    OpenpdfPage,
    MyApp,
    EspecialistasPage,
    HomePage,
    SaudePage,
    NoticiasPage,
    EventosPage,
    PerfilPage,
    UnidadesPage,
    DicasPage,
    ConveniosPage,
    LoginPage,
    ExamePage,
    LocalizacaoPage,
    DetalheEspecPage,
    DetalheDicasPage,
    DetalheEventosPage,
    DetalheNotPage,
    GetUnidadesPage,
    EnderecoPage,
    ExameListPage,
    DetalheExamePage,
    CalImcPage,
    DetalheImcPage,
    ChatPage,
    EventCalendarioPage,
    CalendarioPage,
    DetalheCalendarioPage
  ],
  imports: [
    PdfViewerModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
     NgCalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EspecialistasPage,
    HomePage,
    OpenpdfPage,
    SaudePage,
    NoticiasPage,
    UnidadesPage,
    PerfilPage,
    EventosPage,
    DicasPage,
    ConveniosPage,
    LoginPage,
    ExamePage,
    LocalizacaoPage,
    DetalheEspecPage,
    DetalheDicasPage,
    DetalheEventosPage,
    DetalheNotPage,
    GetUnidadesPage,
    EnderecoPage,
    ExameListPage,
    DetalheExamePage,
    CalImcPage,
    DetalheImcPage,
    ChatPage,
    EventCalendarioPage,
    CalendarioPage,
    DetalheCalendarioPage
  ],
  providers: [
    DocumentViewer,
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    SocialSharing,
    Network
  ]
})
export class AppModule {}
