webpackJsonp([24],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ServiceProvider = (function () {
    function ServiceProvider(http) {
        this.http = http;
        this.api = 'http://www.meupainel.com.br/ted2/';
        console.log('Hello ServiceProvider Provider');
    }
    ServiceProvider.prototype.getDicas = function () {
        return this.http.get(this.api + 'noticia/getappdicas').map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.getNoticias = function () {
        return this.http.get(this.api + 'noticia/getappnews/').map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.getEspecialistas = function () {
        return this.http.get(this.api + 'especialista/getapp/').map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.getEventos = function () {
        return this.http.get(this.api + 'eventos/getapp/').map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.getUnidades = function () {
        return this.http.get(this.api + 'unidades/getapp/').map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.getConvenios = function () {
        return this.http.get(this.api + 'convenios/getapp/').map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.getExames = function (id) {
        return this.http.get(this.api + 'exames/getappid/' + id).map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.getEventoImg = function (key) {
        return this.http.get(this.api + 'eventos/getappimg/' + key).map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.postDatas = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(_this.api + 'api/apiLogin.php', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ServiceProvider.prototype.postExame = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(_this.api + 'preagendamento/setapp', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ServiceProvider.prototype.postMensagem = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(_this.api + 'chat/newmensagem', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ServiceProvider.prototype.getMensagens = function () {
        return this.http.get(this.api + 'chat/getmensagens/').map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.newChat = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(_this.api + 'chat/newchat', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ServiceProvider.prototype.getHorarios = function (id) {
        return this.http.get(this.api + 'horarios/getapp/' + id).map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.getHorariosDetalhes = function (id, id2) {
        return this.http.get(this.api + 'horarios/getappdetalhes/?id=' + id + '&id2=' + id2).map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.setHorarios = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(_this.api + 'horarios/setapp', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return ServiceProvider;
}());
ServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ServiceProvider);

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheCalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_service_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetalheCalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalheCalendarioPage = (function () {
    function DetalheCalendarioPage(service, navCtrl, navParams) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = JSON.parse(localStorage.getItem('userData'));
        this.item = navParams.get("item");
        this.getHorarioDetalhes();
    }
    DetalheCalendarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalheCalendarioPage');
        console.log(this.item);
    };
    DetalheCalendarioPage.prototype.getHorarioDetalhes = function () {
        var _this = this;
        this.service.getHorariosDetalhes(this.user.id, this.item.id).subscribe(function (data) {
            _this.event = data;
            console.log(_this.event);
        }, function (erro) {
            console.log(erro);
        });
    };
    return DetalheCalendarioPage;
}());
DetalheCalendarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-detalhe-calendario',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\detalhe-calendario\detalhe-calendario.html"*/'<!--\n  Generated template for the DetalheCalendarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar color="primary">\n    <ion-title>Detalhe do agendamento</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div >\n     Nome do medicamento: {{item.medicamento}}<br>\n     Data de inicio: {{item.data_inicio}}<br>\n     Horario de inicio: {{item.horario_inicio}}<br>\n     Intervalo entre uso da medicação: {{item.intervalo_uso}}<br>\n     Duração: {{item.duracao}} dias\n     <ion-item *ngFor="let p of event" (click)="openHorarios(p)">\n        {{p.data}}  \n      </ion-item>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\detalhe-calendario\detalhe-calendario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */]])
], DetalheCalendarioPage);

//# sourceMappingURL=detalhe-calendario.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_service_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navParams, service, navCtrl) {
        this.navParams = navParams;
        this.service = service;
        this.navCtrl = navCtrl;
        this.getMensagens();
        this.user = JSON.parse(localStorage.getItem('userData'));
    }
    ChatPage.prototype.enviar = function () {
        var m = {
            texto: this.mensagem
        };
        console.log(m);
    };
    ChatPage.prototype.enviarMensagem = function () {
        var _this = this;
        this.setmensagem = [
            {
                mensagem: this.mensagem,
                data: new Date(),
                id1: this.user[0].id_usuario,
                id2: 4
            }
        ];
        this.service.postMensagem(this.setmensagem[0]).then(function (result) {
            _this.setmensagem = result;
            if (_this.setmensagem.mensage == 1) {
                console.log("sucesso");
            }
            else {
                console.log("erro");
            }
        }, function (error) {
        });
    };
    ChatPage.prototype.getMensagens = function () {
        var _this = this;
        setInterval(function () {
            _this.service.getMensagens().subscribe(function (data) {
                _this.lista = data;
            }, function (erro) {
                console.log(erro);
            });
        }, 500);
    };
    return ChatPage;
}());
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\chat\chat.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Atendimento</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item no-lines *ngFor="let item of lista">\n      <div class="position" *ngIf="item.id_user == user[0].id_usuario">\n        <p>{{item.mensagem}}</p>\n        <h6>{{item.data | date:\'HH:mm\'}}</h6>\n      </div>\n      <div class="position1" *ngIf="item.id_user != user[0].id_usuario">\n          <p>{{item.mensagem}}</p>\n          <h6>{{item.data | date:\'HH:mm\'}}</h6>\n        </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-item no-lines>\n    <ion-input type="text" (keyup.enter)="enviarMensagem(); mensagem=\'\'" [(ngModel)]="mensagem" placeholder="Mensagem"></ion-input>\n    <button ion-button item-right>\n    <ion-icon name="send" (click)="enviarMensagem(); mensagem=\'\'"></ion-icon>  \n  </button>  \n    </ion-item> \n  </ion-toolbar>\n</ion-footer>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\chat\chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConveniosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_service_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ConveniosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConveniosPage = (function () {
    function ConveniosPage(loadingCtrl, service, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.convenios = this.getConvenios();
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
            duration: 1000
        });
        loader.present();
    }
    ConveniosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConveniosPage');
    };
    ConveniosPage.prototype.getConvenios = function () {
        var _this = this;
        this.service.getConvenios().subscribe(function (data) {
            _this.convenios = data;
            console.log(data);
        }, function (erro) {
            console.log(erro);
        });
    };
    return ConveniosPage;
}());
ConveniosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-convenios',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\convenios\convenios.html"*/'<!--\n  Generated template for the ConveniosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Convenios</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let item of convenios"><img src="http://www.inebmed.com.br/{{item.imgtumb}}"></button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\convenios\convenios.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */]])
], ConveniosPage);

//# sourceMappingURL=convenios.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheEspecPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetalheEspecPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalheEspecPage = (function () {
    function DetalheEspecPage(loadingCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
            duration: 1000
        });
        loader.present();
        this.ct = navParams.get("ct");
        console.log(this.ct);
        loader.dismiss();
    }
    DetalheEspecPage.prototype.ionViewDidLoad = function () {
    };
    return DetalheEspecPage;
}());
DetalheEspecPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detalhe-espec',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\detalhe-espec\detalhe-espec.html"*/'<!--\n  Generated template for the DetalheEspecPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Especialista</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<div align="center" class="blocoimg">\n    <img class="imgespec" src="http://www.inebmed.com.br/{{ct.img}}"/>\n</div>\n<div align="center" class="detalhe">\n  <div class="nome-perfil" > {{ct.nome}}</div>\n  <div class="email-perfil" >  {{ct.especialidade}}</div>\n\n</div>\n\n<ion-row class="iconsaction">\n  <ion-col>\n      <a href="tel:{{ct.telefone}}" target="_self"> <img class="imgespec" src="assets/telephone.png"/></a>\n\n\n  </ion-col>\n  <ion-col>\n      <a href="mailto:{{ct.email}}" target="_self"> <img class="imgespec" src="assets/sendmail.png"/></a>\n\n  </ion-col>\n  <ion-col>\n  <img class="imgespec" src="assets/map.png"/>\n  </ion-col>\n\n</ion-row>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\detalhe-espec\detalhe-espec.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
], DetalheEspecPage);

//# sourceMappingURL=detalhe-espec.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheEventosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_service_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetalheEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalheEventosPage = (function () {
    function DetalheEventosPage(loadingCtrl, service, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
            duration: 1000
        });
        loader.present();
        this.ct = navParams.get("ct");
        this.evento = this.getEvento(this.ct.key);
    }
    DetalheEventosPage.prototype.ionViewDidLoad = function () {
    };
    DetalheEventosPage.prototype.getEvento = function (key) {
        var _this = this;
        this.service.getEventoImg(key).subscribe(function (data) {
            _this.evento = data;
            console.log(data);
        }, function (erro) {
            console.log(erro);
        });
    };
    return DetalheEventosPage;
}());
DetalheEventosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-detalhe-eventos',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\detalhe-eventos\detalhe-eventos.html"*/'<!--\n  Generated template for the DetalheEventosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title >Evento</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngFor="let img of evento">\n\n      <img class="detalhe-evento" src="{{img.src}}" imageViewer>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\detalhe-eventos\detalhe-eventos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */]])
], DetalheEventosPage);

//# sourceMappingURL=detalhe-eventos.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheExamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetalheExamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalheExamePage = (function () {
    function DetalheExamePage(loadingCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
            duration: 1000
        });
        loader.present();
    }
    DetalheExamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalheExamePage');
    };
    return DetalheExamePage;
}());
DetalheExamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detalhe-exame',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\detalhe-exame\detalhe-exame.html"*/'<!--\n  Generated template for the DetalheExamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>detalheExame</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\detalhe-exame\detalhe-exame.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
], DetalheExamePage);

//# sourceMappingURL=detalhe-exame.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheImcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetalheImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalheImcPage = (function () {
    function DetalheImcPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = navParams.get("item");
    }
    DetalheImcPage.prototype.ionViewDidLoad = function () {
    };
    return DetalheImcPage;
}());
DetalheImcPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detalhe-imc',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\detalhe-imc\detalhe-imc.html"*/'<!--\n  Generated template for the DetalheImcPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Resultado</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n  <div class="conteudo" *ngFor="let item of item">\n    <img src="{{item.img}}"><br><br>\n    <h1>Imc: {{item.imc | number:\'2.2\'}}</h1>\n    <p>{{item.mensagem}}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\detalhe-imc\detalhe-imc.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
], DetalheImcPage);

//# sourceMappingURL=detalhe-imc.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DicasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detalhe_not_detalhe_not__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DicasPage = (function () {
    function DicasPage(loadingCtrl, service, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dicas = this.getDicas();
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
            duration: 1000
        });
        loader.present();
    }
    DicasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticiasPage');
    };
    DicasPage.prototype.getDicas = function () {
        var _this = this;
        this.service.getDicas().subscribe(function (data) {
            _this.dicas = data;
            console.log(data);
        }, function (erro) {
            console.log(erro);
        });
    };
    DicasPage.prototype.openPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detalhe_not_detalhe_not__["a" /* DetalheNotPage */], {
            ct: item
        });
    };
    return DicasPage;
}());
DicasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-dicas',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\dicas\dicas.html"*/'<!--\n  Generated template for the EspecialistasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    \n        <ion-navbar color="primary">\n            <ion-title>Dicas</ion-title>\n          </ion-navbar>\n    </ion-header>\n    \n    <ion-content class="home">\n\n\n\n<div class="" *ngIf="dicas && dicas.length">\n\n\n\n  <div class="slidepatro">\n    <div class="titcat">\n      Destaques\n    </div>\n\n    <ion-slides *ngIf="dicas && dicas.length" padding paginationType autoplay="3000" loop slidesPerView="3">\n      <ion-slide (click)="openPage(dest)" *ngFor="let dest of dicas | slice:0:5; let i=index">\n        <img src="http://www.inebmed.com.br/{{dest.imgtumb}}" />\n        <p class="titdest">{{dest.titulo | slice:0:30}}...</p>\n      </ion-slide>\n\n\n\n\n    </ion-slides>\n\n  </div>\n\n  <div class="titcat">\n    Todas notícias\n\n  </div>\n  <ion-list>\n    <ion-item text-wrap (click)="openPage(item)" *ngFor="let item of dicas | slice:5; let i=index">\n      <ion-avatar item-start>\n        <img class="imgavatar" src="http://www.inebmed.com.br/{{item.imgtumb}}" />\n      </ion-avatar>\n      <div class="titulonot">{{item.titulo}}</div>\n      <p>{{item.data}}</p>\n    </ion-item>\n  </ion-list>\n</div>\n\n\n      </ion-content>'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\dicas\dicas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavParams */]])
], DicasPage);

//# sourceMappingURL=dicas.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnderecoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EnderecoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnderecoPage = (function () {
    function EnderecoPage(loadingCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
            duration: 1000
        });
        loader.present();
        this.item = navParams.get("item");
    }
    EnderecoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnderecoPage');
    };
    return EnderecoPage;
}());
EnderecoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-endereco',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\endereco\endereco.html"*/'<!--\n  Generated template for the EnderecoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Endereço</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list class="end">\n    <ion-item text-wrap><b>Endereço:</b><br> {{item.endereco}}</ion-item>\n    <ion-item><b>Bairro:</b><br> {{item.bairro}}</ion-item>\n    <ion-item><b>Cidade:</b><br> {{item.cidade}}</ion-item>\n    <ion-item><b>Telefone:</b><br> {{item.telefone}}</ion-item>\n    <ion-item><b>Email:</b><br> {{item.email}}</ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\endereco\endereco.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
], EnderecoPage);

//# sourceMappingURL=endereco.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventCalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_service_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EventCalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventCalendarioPage = (function () {
    function EventCalendarioPage(service, toastCtrl, navCtrl, navParams, viewCtrl) {
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.event = { id_usuario: '' };
        this.user = JSON.parse(localStorage.getItem('userData'));
    }
    EventCalendarioPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    EventCalendarioPage.prototype.save = function () {
        var _this = this;
        this.event.id_usuario = this.user.id;
        this.service.setHorarios(this.event).then(function (result) {
            _this.mensage = result;
            if (_this.mensage.mensage == 1) {
                var toast = _this.toastCtrl.create({
                    message: 'Evento adicionado com sucesso',
                    duration: 3000,
                    position: 'middle',
                    cssClass: "toast-success"
                });
                toast.present();
                _this.viewCtrl.dismiss(_this.event);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Error',
                    duration: 3000,
                    position: 'middle',
                    cssClass: "toast-error"
                });
                toast.present();
            }
        }, function (error) {
        });
    };
    return EventCalendarioPage;
}());
EventCalendarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-event-calendario',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\event-calendario\event-calendario.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-buttons start>\n        <button ion-button icon-only (click)="cancel()">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Agendar</ion-title>\n    </ion-navbar>\n  </ion-header>\n   \n  <ion-content>\n    <ion-list>\n      <ion-item>\n          <ion-label>Medicamento:</ion-label><br>\n        <ion-input type="text" placeholder="" [(ngModel)]="event.med"></ion-input>\n      </ion-item>\n\n      <br>\n      <ion-item>\n        <ion-label>Horario inicial:</ion-label><br>\n        <ion-datetime cancelText="Voltar" doneText="Ok" displayFormat="HH:mm:ss" pickerFormat="HH:mm:ss" [(ngModel)]="event.horario_inicio"></ion-datetime>\n      </ion-item>\n\n      <br>\n      <ion-item>\n          <ion-label>Intervalo entre o uso:</ion-label><br>\n          <ion-select placeholder="Intervalo entre o uso:" [(ngModel)]="event.intervalo_uso">\n              <ion-option value="01:00:00">01 hora</ion-option>\n              <ion-option value="02:00:00">02 horas</ion-option>\n              <ion-option value="03:00:00">03 horas</ion-option>\n              <ion-option value="04:00:00">04 horas</ion-option>\n              <ion-option value="05:00:00">05 horas</ion-option>\n              <ion-option value="06:00:00">06 horas</ion-option>\n              <ion-option value="07:00:00">07 horas</ion-option>\n              <ion-option value="08:00:00">08 horas</ion-option>\n              <ion-option value="09:00:00">09 horas</ion-option>\n              <ion-option value="10:00:00">10 horas</ion-option>\n              <ion-option value="11:00:00">11 horas</ion-option>\n              <ion-option value="12:00:00">12 horas</ion-option>\n            </ion-select>\n      </ion-item>\n\n        <br>\n      <ion-item>\n        <ion-label>Data de inicio:</ion-label><br>\n        <ion-datetime cancelText="Voltar" doneText="Ok" displayFormat="DD/MM/YYYY" pickerFormat="DD/MMM/YYYY" [(ngModel)]="event.data_inicio" [min]="minDate"></ion-datetime>\n      </ion-item>\n      <br>\n      <ion-item>\n        <ion-label>Duração em dias:</ion-label><br>\n        <ion-input type="tel" placeholder="" [(ngModel)]="event.duracao"></ion-input>\n      </ion-item>\n\n    </ion-list>\n    <br>\n    <button ion-button full icon-left [disabled]="!event.med ||!event.horario_inicio ||!event.data_inicio ||!event.intervalo_uso ||!event.duracao " (click)="save()">\n      <ion-icon name="checkmark"></ion-icon> Adicionar\n    </button>\n  </ion-content>'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\event-calendario\event-calendario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* ViewController */]])
], EventCalendarioPage);

//# sourceMappingURL=event-calendario.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_service_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detalhe_eventos_detalhe_eventos__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventosPage = (function () {
    function EventosPage(loadingCtrl, service, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventos = this.getEventos();
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
            duration: 1000
        });
        loader.present();
    }
    EventosPage.prototype.ionViewDidLoad = function () {
    };
    EventosPage.prototype.getEventos = function () {
        var _this = this;
        this.service.getEventos().subscribe(function (data) {
            _this.eventos = data;
        }, function (erro) {
            console.log(erro);
        });
    };
    EventosPage.prototype.openPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__detalhe_eventos_detalhe_eventos__["a" /* DetalheEventosPage */], {
            ct: item
        });
    };
    return EventosPage;
}());
EventosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-eventos',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\eventos\eventos.html"*/'<!--\n  Generated template for the EventosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Eventos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page">\n\n\n  <div *ngFor="let item of eventos" (click)=openPage(item)>\n    <ion-card>\n    <img src="assets/camera.jpg"/>\n    <div class="card-title">{{item.titulo}}</div>\n    <div class="card-subtitle">{{item.data | date:\'dd-MM-yyyy\'}}</div>\n  </ion-card>\n\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\eventos\eventos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavParams */]])
], EventosPage);

//# sourceMappingURL=eventos.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExameListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detalhe_exame_detalhe_exame__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__openpdf_openpdf__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ExameListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExameListPage = (function () {
    function ExameListPage(loadingCtrl, document, service, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.document = document;
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.filtro = 1;
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
            duration: 1000
        });
        loader.present();
        this.item = JSON.parse(localStorage.getItem('userData'));
        this.exames = this.getExames(this.item.id);
    }
    ExameListPage.prototype.openpdf = function (lk) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__openpdf_openpdf__["a" /* OpenpdfPage */], { link: 'http://inebmed.com.br/' + lk });
    };
    ExameListPage.prototype.openFile = function (file) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__openpdf_openpdf__["a" /* OpenpdfPage */], { link: 'http://inebmed.com.br/' + file });
    };
    ExameListPage.prototype.ionViewDidLoad = function () {
        console.log(this.exames);
    };
    ExameListPage.prototype.filtrar = function (dado) {
        this.filtro = dado;
    };
    ExameListPage.prototype.getExames = function (key) {
        var _this = this;
        this.service.getExames(key).subscribe(function (data) {
            _this.exames = data;
            console.log(data);
        }, function (erro) {
            console.log(erro);
        });
    };
    ExameListPage.prototype.openPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detalhe_exame_detalhe_exame__["a" /* DetalheExamePage */], {
            item: item
        });
    };
    return ExameListPage;
}());
ExameListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-exame-list',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\exame-list\exame-list.html"*/'<!--\n  Generated template for the ExameListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Lista de exames</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n          <ion-label>Mês:</ion-label>\n          <ion-select interface="popover">\n            <ion-option value="Patologias" (ionSelect)="filtrar(1); pesquisa=\'\';">Janeiro</ion-option>\n            <ion-option value="fev" (ionSelect)="filtrar(2); pesquisa=\'\';">Fevereiro</ion-option>\n            <ion-option value="mar" (ionSelect)="filtrar(3); pesquisa=\'\';">Março</ion-option>\n            <ion-option value="abril" (ionSelect)="filtrar(4); pesquisa=\'\';">Abril</ion-option>\n            <ion-option value="mai" (ionSelect)="filtrar(5); pesquisa=\'\';">Maio</ion-option>\n            <ion-option value="jun" (ionSelect)="filtrar(6); pesquisa=\'\';">Junho</ion-option>\n            <ion-option value="jul" (ionSelect)="filtrar(7); pesquisa=\'\';">Julho</ion-option>\n            <ion-option value="ago" (ionSelect)="filtrar(8); pesquisa=\'\';">Agosto</ion-option>\n            <ion-option value="set" (ionSelect)="filtrar(9); pesquisa=\'\';">Setembro</ion-option>\n            <ion-option value="out" (ionSelect)="filtrar(10); pesquisa=\'\';">Outubro</ion-option>\n            <ion-option value="nov" (ionSelect)="filtrar(11); pesquisa=\'\';">Novembro</ion-option>\n            <ion-option value="dez" (ionSelect)="filtrar(12); pesquisa=\'\';">Dezembro</ion-option>\n\n          </ion-select>\n        </ion-item>\n<div *ngIf="exames" class="">\n      <ion-row>\n        <ion-col col-6 *ngFor="let p of exames" (click)="openFile(p.patch+\'/\'+p.arquivo)">\n          <ion-card *ngIf="p.mes == filtro">\n        <ion-card-header>\n      {{p.descricao}}\n        </ion-card-header>\n        <ion-card-content>\n          <img class="iconexame" src="assets/pdf.png" alt="">\n      <div class="itemdetalhe">\n           <ion-icon name="calendar"></ion-icon> {{p.data}}\n      </div>\n        </ion-card-content>\n      </ion-card>\n        </ion-col>\n      </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\exame-list\exame-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__["a" /* DocumentViewer */], __WEBPACK_IMPORTED_MODULE_1__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavParams */]])
], ExameListPage);

//# sourceMappingURL=exame-list.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenpdfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OpenpdfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OpenpdfPage = (function () {
    function OpenpdfPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pdfSrc = this.navParams.get('link');
    }
    OpenpdfPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpenpdfPage');
    };
    return OpenpdfPage;
}());
OpenpdfPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-openpdf',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\openpdf\openpdf.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>openpdf</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<div class="pdfload"><pdf-viewer [fit-to-page]="false" [src]="pdfSrc" [render-text]="true" [original-size]="true"></pdf-viewer></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\openpdf\openpdf.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
], OpenpdfPage);

//# sourceMappingURL=openpdf.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExamePage = (function () {
    function ExamePage(formBuilder, loadingCtrl, toastCtrl, service, navCtrl, navParams) {
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dados = [];
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
            duration: 1000
        });
        loader.present();
    }
    ExamePage.prototype.ionViewDidLoad = function () {
    };
    ExamePage.prototype.cadastrarExame = function (dados) {
        var _this = this;
        this.exame = [
            {
                nome: dados.nome,
                data: dados.data,
                email: dados.email,
                cpf: dados.cpf,
                sexo: dados.sexo,
                tp_consulta: dados.tp_consulta,
                telefone: dados.telefone,
                periodo: dados.periodo
            }
        ];
        this.service.postExame(this.exame[0]).then(function (result) {
            _this.mensage = result;
            if (_this.mensage.mensage == 1) {
                var toast = _this.toastCtrl.create({
                    message: 'Exame solicitado com sucesso',
                    duration: 3000,
                    position: 'middle',
                    cssClass: "toast-success"
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Error',
                    duration: 3000,
                    position: 'middle',
                    cssClass: "toast-error"
                });
                toast.present();
            }
        }, function (error) {
        });
    };
    return ExamePage;
}());
ExamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-exame',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\exame\exame.html"*/'<!--\n  Generated template for the ExamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Pré-agenda</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="conteudo">\n  <ion-item><ion-input class="imput" [(ngModel)]="dados.nome" type="text" placeholder="Nome Completo *" required=""></ion-input></ion-item>\n  <ion-item><ion-input class="imput" [(ngModel)]="dados.cpf" type="tel" placeholder="CPF *" name="cpf"  required=""></ion-input></ion-item>\n  <ion-item><ion-input class="imput" [(ngModel)]="dados.email" type="email" placeholder="Email *" name="email"  required=""></ion-input></ion-item>\n  <ion-item><ion-input class="imput" [(ngModel)]="dados.telefone" type="tel" placeholder="Telefone *" name="telefone"  required=""></ion-input></ion-item>\n  <ion-item><ion-datetime displayFormat="DD/MM/YYYY" doneText="Ok" cancelText="Voltar" [(ngModel)]="dados.data" placeholder="Data *" required=""></ion-datetime></ion-item>\n  \n  <ion-item>\n  <ion-select class="imput1" [(ngModel)]="dados.sexo" name="sexo" placeholder="Genero">\n      <ion-option value="f">Feminino</ion-option>\n      <ion-option value="m">Masculino</ion-option>\n      <ion-option value="o">Outro</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-select class="imput1" [(ngModel)]="dados.tp_consulta" name="tp_consulta" placeholder="Tipo de consulta">\n        <ion-option value="1">Plano de saúde</ion-option>\n        <ion-option value="2">Paticular</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n    <ion-select class="imput1" [(ngModel)]="dados.periodo" name="periodo" placeholder="Periodo Preferencial">\n        <ion-option value="0">Indiferente</ion-option>\n        <ion-option value="1">Manhã</ion-option>\n        <ion-option value="2">Tarde</ion-option>\n      </ion-select>\n    </ion-item>\n    \n<button class="entrar" (click)="cadastrarExame(dados)" ion-button color="secundary" [disabled]="!dados.nome ||!dados.data ||!dados.email ||!dados.telefone ||!dados.cpf ||!dados.sexo || !dados.periodo || !dados.tp_consulta" >Enviar</button>\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\exame\exame.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["s" /* NavParams */]])
], ExamePage);

//# sourceMappingURL=exame.js.map

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		378,
		23
	],
	"../pages/convenios/convenios.module": [
		379,
		22
	],
	"../pages/detalhe-calendario/detalhe-calendario.module": [
		380,
		21
	],
	"../pages/detalhe-dicas/detalhe-dicas.module": [
		381,
		20
	],
	"../pages/detalhe-espec/detalhe-espec.module": [
		382,
		19
	],
	"../pages/detalhe-eventos/detalhe-eventos.module": [
		383,
		18
	],
	"../pages/detalhe-exame/detalhe-exame.module": [
		384,
		17
	],
	"../pages/detalhe-imc/detalhe-imc.module": [
		385,
		16
	],
	"../pages/detalhe-not/detalhe-not.module": [
		386,
		15
	],
	"../pages/dicas/dicas.module": [
		387,
		14
	],
	"../pages/endereco/endereco.module": [
		388,
		13
	],
	"../pages/especialistas/especialistas.module": [
		389,
		12
	],
	"../pages/event-calendario/event-calendario.module": [
		390,
		11
	],
	"../pages/eventos/eventos.module": [
		391,
		10
	],
	"../pages/exame-list/exame-list.module": [
		392,
		9
	],
	"../pages/exame/exame.module": [
		393,
		8
	],
	"../pages/get-unidades/get-unidades.module": [
		394,
		7
	],
	"../pages/login/login.module": [
		395,
		6
	],
	"../pages/noticias/noticias.module": [
		396,
		5
	],
	"../pages/openpdf/openpdf.module": [
		397,
		4
	],
	"../pages/perfil/perfil.module": [
		398,
		3
	],
	"../pages/saude/saude.module": [
		399,
		2
	],
	"../pages/unidades/unidades.module": [
		400,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 190;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LocalizacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocalizacaoPage = (function () {
    function LocalizacaoPage(geolocation, navCtrl, navParams) {
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = this.navParams.get('item');
        console.log(this.item.latitude);
    }
    LocalizacaoPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var mapOptions = {
                zoom: 18,
                mapTypeId: 'roadmap',
                disableDefaultUI: true,
                styles: [
                    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                    {
                        featureType: 'administrative.locality',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'poi',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'geometry',
                        stylers: [{ color: '#263c3f' }]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#6b9a76' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry',
                        stylers: [{ color: '#38414e' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry.stroke',
                        stylers: [{ color: '#212a37' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#9ca5b3' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry',
                        stylers: [{ color: '#746855' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry.stroke',
                        stylers: [{ color: '#114692' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#ccc' }]
                    },
                    {
                        featureType: 'transit',
                        elementType: 'geometry',
                        stylers: [{ color: '#114692' }]
                    },
                    {
                        featureType: 'transit.station',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'geometry',
                        stylers: [{ color: '#17263c' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#515c6d' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.stroke',
                        stylers: [{ color: '#17263c' }]
                    }
                ]
            };
            var mapDiv = document.getElementById('map');
            _this.map = new google.maps.Map(mapDiv, mapOptions);
            _this.calcRoute(resp.coords.latitude, resp.coords.longitude);
        });
    };
    LocalizacaoPage.prototype.calcRoute = function (lat, long) {
        var _this = this;
        var directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(this.map);
        var origin = new google.maps.LatLng(lat, long);
        var destination = new google.maps.LatLng(this.item.latitude, this.item.longitude);
        var directionsService = new google.maps.DirectionsService();
        var params = {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(params, function (result, status) {
            directionsRenderer.setDirections(result);
            _this.getAddress(destination, function (result) {
                _this.endereco = result;
                console.log(_this.endereco);
            });
        });
    };
    LocalizacaoPage.prototype.getAddress = function (latLng, successCallback) {
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({
            location: latLng
        }, function (results, status) {
            console.log(results);
            successCallback(results[0].formatted_address);
        });
    };
    LocalizacaoPage.prototype.ionViewDidLoad = function () {
        /*this.geolocation.getCurrentPosition().then((resp) => {
      
          this.showMap(resp.coords.latitude,resp.coords.longitude);
            this.getalldist(resp.coords.latitude,resp.coords.longitude);
          }).catch((error) => {
            console.log('Error getting location', error);
          });*/
        this.loadMap();
    };
    LocalizacaoPage.prototype.geoDist = function (origin, destination) {
        var distance = geolib.getDistance(origin, destination);
    };
    LocalizacaoPage.prototype.getalldist = function (lat, long) {
        console.log(geolib.convertUnit('km', geolib.getDistanceSimple({ latitude: -14.8641461, longitude: -40.8240219 }, { latitude: lat, longitude: long }), 2));
    };
    LocalizacaoPage.prototype.showMap = function (lat, long) {
        var LatLng = new google.maps.LatLng(lat, long);
        var mapOptions = {
            center: LatLng,
            zoom: 15,
        };
        var element = document.getElementById('map');
        var map = new google.maps.Map(element, mapOptions);
        var marker = new google.maps.Marker({
            position: LatLng
        });
        marker.setMap(map);
    };
    return LocalizacaoPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], LocalizacaoPage.prototype, "mapRef", void 0);
LocalizacaoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-localizacao',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\localizacao\localizacao.html"*/'\n  <ion-header>\n      \n        <ion-navbar color="primary">\n          <ion-title>Localização</ion-title>\n        </ion-navbar>\n      \n      </ion-header>\n      \n      \n      <ion-content>\n          <div class="boxend">\n              <div  class="boend">\n            \n              {{endereco}}\n              </div>\n            </div>\n            <div id="map"></div>\n      </ion-content>\n      '/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\localizacao\localizacao.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
], LocalizacaoPage);

//# sourceMappingURL=localizacao.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detalhe_calendario_detalhe_calendario__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_calendario_event_calendario__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalendarioPage = (function () {
    function CalendarioPage(service, navCtrl, modalCtrl, alertCtrl) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.user = JSON.parse(localStorage.getItem('userData'));
        this.gethorarios();
    }
    CalendarioPage.prototype.addEvent = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__event_calendario_event_calendario__["a" /* EventCalendarioPage */], { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                var eventData = data;
                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);
                var events_1 = _this.eventSource;
                events_1.push(eventData);
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = events_1;
                });
            }
        });
    };
    CalendarioPage.prototype.gethorarios = function () {
        var _this = this;
        this.service.getHorarios(this.user.id).subscribe(function (data) {
            _this.event = data;
            console.log(_this.event);
        }, function (erro) {
            console.log(erro);
        });
    };
    CalendarioPage.prototype.openHorarios = function (p) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detalhe_calendario_detalhe_calendario__["a" /* DetalheCalendarioPage */], {
            item: p
        });
    };
    return CalendarioPage;
}());
CalendarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-calendario',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\calendario\calendario.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>\n        Medicamentos\n      </ion-title>\n\n    </ion-navbar>\n  </ion-header>\n   \n  <ion-content>\n            <ion-item *ngFor="let p of event" (click)="openHorarios(p)">\n              Medicamento: {{p.medicamento}}<br>\n                Data de inicio: {{p.data_inicio | date:\'dd-MM-yyyy\' }}<br>\n                 Intervalo de uso: {{p.intervalo_uso}}\n                \n            </ion-item>\n  </ion-content>\n  <ion-footer>\n    <div class="add">\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addEvent()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </div>\n  </ion-footer>\n\n\n\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\calendario\calendario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]])
], CalendarioPage);

//# sourceMappingURL=calendario.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalImcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detalhe_imc_detalhe_imc__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CalImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalImcPage = (function () {
    function CalImcPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dados = [];
    }
    CalImcPage.prototype.ionViewDidLoad = function () {
    };
    CalImcPage.prototype.calcular = function (dados) {
        var imc = dados.peso / (dados.altura * dados.altura);
        if (imc < 17) {
            this.msg = [{ imc: imc, mensagem: "Muito abaixo do peso", img: "./assets/images/imc_01.png" }];
        }
        if (imc >= 17 && imc <= 18.49) {
            this.msg = [{ imc: imc, mensagem: "Abaixo do peso", img: "./assets/images/imc_01.png" }];
        }
        if (imc >= 18.5 && imc < 24.99) {
            this.msg = [{ imc: imc, mensagem: "Peso Normal", img: "./assets/images/imc_02.png" }];
        }
        if (imc >= 25 && imc <= 29.9) {
            this.msg = [{ imc: imc, mensagem: "Acima do peso", img: "./assets/images/imc_03.png" }];
        }
        if (imc >= 30 && imc <= 34.9) {
            this.msg = [{ imc: imc, mensagem: "Obesidade grau I", img: "./assets/images/imc_04.png" }];
        }
        if (imc >= 35 && imc < 40) {
            this.msg = [{ imc: imc, mensagem: "Obesidade grau II", img: "./assets/images/imc_04.png" }];
        }
        if (imc >= 40) {
            this.msg = [{ imc: imc, mensagem: "Obesidade grau III", img: "./assets/images/imc_05.png" }];
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detalhe_imc_detalhe_imc__["a" /* DetalheImcPage */], {
            item: this.msg
        });
    };
    return CalImcPage;
}());
CalImcPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-cal-imc',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\cal-imc\cal-imc.html"*/'<!--\n  Generated template for the CalImcPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Calcular IMC</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="conteudo">\n        <ion-item><ion-input class="imput" [(ngModel)]="dados.peso" type="tel" placeholder="Peso (Exemplo: 70.5)" required=""></ion-input></ion-item>\n        <ion-item><ion-input class="imput" [(ngModel)]="dados.altura" type="number" placeholder="Altura (Exemplo: 1.82)" name="altura"  required=""></ion-input></ion-item>\n\n      <button class="entrar" (click)="calcular(dados)" ion-button color="secundary" [disabled]="!dados.peso ||!dados.altura" >Calcular</button>\n\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\cal-imc\cal-imc.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */]])
], CalImcPage);

//# sourceMappingURL=cal-imc.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheDicasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetalheDicasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalheDicasPage = (function () {
    function DetalheDicasPage(loadingCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
            duration: 1000
        });
        loader.present();
        this.ct = navParams.get("ct");
        console.log(this.ct);
    }
    DetalheDicasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalheDicasPage');
    };
    return DetalheDicasPage;
}());
DetalheDicasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detalhe-dicas',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\detalhe-dicas\detalhe-dicas.html"*/'<!--\n  Generated template for the DetalheDicasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Dica</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\detalhe-dicas\detalhe-dicas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
], DetalheDicasPage);

//# sourceMappingURL=detalhe-dicas.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(273);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_detalhe_calendario_detalhe_calendario__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_calendario_calendario__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_event_calendario_event_calendario__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_calendar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_img_viewer__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_service_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_detalhe_imc_detalhe_imc__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cal_imc_cal_imc__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_detalhe_exame_detalhe_exame__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_get_unidades_get_unidades__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_detalhe_eventos_detalhe_eventos__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_detalhe_dicas_detalhe_dicas__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_exame_list_exame_list__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_endereco_endereco__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_chat_chat__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_detalhe_not_detalhe_not__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_exame_exame__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_localizacao_localizacao__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_detalhe_espec_detalhe_espec__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_convenios_convenios__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_dicas_dicas__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_unidades_unidades__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_eventos_eventos__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_perfil_perfil__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_noticias_noticias__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_saude_saude__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_especialistas_especialistas__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_geolocation__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_document_viewer__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_ng2_pdf_viewer__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_ng2_pdf_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_ng2_pdf_viewer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_openpdf_openpdf__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_41__pages_openpdf_openpdf__["a" /* OpenpdfPage */],
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_34__pages_especialistas_especialistas__["a" /* EspecialistasPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_saude_saude__["a" /* SaudePage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_noticias_noticias__["a" /* NoticiasPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_eventos_eventos__["a" /* EventosPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_unidades_unidades__["a" /* UnidadesPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_dicas_dicas__["a" /* DicasPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_convenios_convenios__["a" /* ConveniosPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_exame_exame__["a" /* ExamePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_localizacao_localizacao__["a" /* LocalizacaoPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_detalhe_espec_detalhe_espec__["a" /* DetalheEspecPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_detalhe_dicas_detalhe_dicas__["a" /* DetalheDicasPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_detalhe_eventos_detalhe_eventos__["a" /* DetalheEventosPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_detalhe_not_detalhe_not__["a" /* DetalheNotPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_get_unidades_get_unidades__["a" /* GetUnidadesPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_endereco_endereco__["a" /* EnderecoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_exame_list_exame_list__["a" /* ExameListPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_detalhe_exame_detalhe_exame__["a" /* DetalheExamePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_cal_imc_cal_imc__["a" /* CalImcPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_detalhe_imc_detalhe_imc__["a" /* DetalheImcPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_event_calendario_event_calendario__["a" /* EventCalendarioPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_calendario_calendario__["a" /* CalendarioPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_detalhe_calendario_detalhe_calendario__["a" /* DetalheCalendarioPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_40_ng2_pdf_viewer__["PdfViewerModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/convenios/convenios.module#ConveniosPageModule', name: 'ConveniosPage', segment: 'convenios', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detalhe-calendario/detalhe-calendario.module#DetalheCalendarioPageModule', name: 'DetalheCalendarioPage', segment: 'detalhe-calendario', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detalhe-dicas/detalhe-dicas.module#DetalheDicasPageModule', name: 'DetalheDicasPage', segment: 'detalhe-dicas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detalhe-espec/detalhe-espec.module#DetalheEspecPageModule', name: 'DetalheEspecPage', segment: 'detalhe-espec', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detalhe-eventos/detalhe-eventos.module#DetalheEventosPageModule', name: 'DetalheEventosPage', segment: 'detalhe-eventos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detalhe-exame/detalhe-exame.module#DetalheExamePageModule', name: 'DetalheExamePage', segment: 'detalhe-exame', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detalhe-imc/detalhe-imc.module#DetalheImcPageModule', name: 'DetalheImcPage', segment: 'detalhe-imc', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detalhe-not/detalhe-not.module#DetalheNotPageModule', name: 'DetalheNotPage', segment: 'detalhe-not', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/dicas/dicas.module#DicasPageModule', name: 'DicasPage', segment: 'dicas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/endereco/endereco.module#EnderecoPageModule', name: 'EnderecoPage', segment: 'endereco', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/especialistas/especialistas.module#EspecialistasPageModule', name: 'EspecialistasPage', segment: 'especialistas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/event-calendario/event-calendario.module#EventCalendarioPageModule', name: 'EventCalendarioPage', segment: 'event-calendario', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/eventos/eventos.module#EventosPageModule', name: 'EventosPage', segment: 'eventos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/exame-list/exame-list.module#ExameListPageModule', name: 'ExameListPage', segment: 'exame-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/exame/exame.module#ExamePageModule', name: 'ExamePage', segment: 'exame', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/get-unidades/get-unidades.module#GetUnidadesPageModule', name: 'GetUnidadesPage', segment: 'get-unidades', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/noticias/noticias.module#NoticiasPageModule', name: 'NoticiasPage', segment: 'noticias', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/openpdf/openpdf.module#OpenpdfPageModule', name: 'OpenpdfPage', segment: 'openpdf', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/saude/saude.module#SaudePageModule', name: 'SaudePage', segment: 'saude', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/unidades/unidades.module#UnidadesPageModule', name: 'UnidadesPage', segment: 'unidades', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_10_ionic_img_viewer__["a" /* IonicImageViewerModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic2_calendar__["a" /* NgCalendarModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_34__pages_especialistas_especialistas__["a" /* EspecialistasPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_openpdf_openpdf__["a" /* OpenpdfPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_saude_saude__["a" /* SaudePage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_noticias_noticias__["a" /* NoticiasPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_unidades_unidades__["a" /* UnidadesPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_eventos_eventos__["a" /* EventosPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_dicas_dicas__["a" /* DicasPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_convenios_convenios__["a" /* ConveniosPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_exame_exame__["a" /* ExamePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_localizacao_localizacao__["a" /* LocalizacaoPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_detalhe_espec_detalhe_espec__["a" /* DetalheEspecPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_detalhe_dicas_detalhe_dicas__["a" /* DetalheDicasPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_detalhe_eventos_detalhe_eventos__["a" /* DetalheEventosPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_detalhe_not_detalhe_not__["a" /* DetalheNotPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_get_unidades_get_unidades__["a" /* GetUnidadesPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_endereco_endereco__["a" /* EnderecoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_exame_list_exame_list__["a" /* ExameListPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_detalhe_exame_detalhe_exame__["a" /* DetalheExamePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_cal_imc_cal_imc__["a" /* CalImcPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_detalhe_imc_detalhe_imc__["a" /* DetalheImcPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_event_calendario_event_calendario__["a" /* EventCalendarioPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_calendario_calendario__["a" /* CalendarioPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_detalhe_calendario_detalhe_calendario__["a" /* DetalheCalendarioPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_39__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_38__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["k" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_perfil_perfil__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_unidades_unidades__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_convenios_convenios__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_saude_saude__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_especialistas_especialistas__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_noticias_noticias__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */];
        if (localStorage.getItem('userData')) {
            this.user = true;
            this.dadosUser = JSON.parse(localStorage.getItem('userData'));
        }
        else {
            this.user = false;
        }
        this.perfil = [
            { title: "Perfil", component: __WEBPACK_IMPORTED_MODULE_0__pages_perfil_perfil__["a" /* PerfilPage */] }
        ];
        this.noticias = [
            { title: "Noticias", component: __WEBPACK_IMPORTED_MODULE_10__pages_noticias_noticias__["a" /* NoticiasPage */] }
        ];
        this.home = [
            { title: "Home", component: this.rootPage }
        ];
        this.especialistas = [
            { title: "Especilistas", component: __WEBPACK_IMPORTED_MODULE_9__pages_especialistas_especialistas__["a" /* EspecialistasPage */] }
        ];
        this.saude = [
            { title: "Saude", component: __WEBPACK_IMPORTED_MODULE_8__pages_saude_saude__["a" /* SaudePage */] }
        ];
        this.convenios = [
            { title: "Convenios", component: __WEBPACK_IMPORTED_MODULE_7__pages_convenios_convenios__["a" /* ConveniosPage */] }
        ];
        this.unidades = [
            { title: "Unidades", component: __WEBPACK_IMPORTED_MODULE_2__pages_unidades_unidades__["a" /* UnidadesPage */] }
        ];
        this.login = [
            { title: "Login", component: __WEBPACK_IMPORTED_MODULE_1__pages_login_login__["a" /* LoginPage */] }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPages = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openPagesPush = function (page) {
        this.nav.push(page.component);
    };
    MyApp.prototype.sair = function () {
        localStorage.removeItem('userData');
        if (localStorage.getItem('userData')) {
            this.user = true;
        }
        else {
            this.user = false;
        }
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\app\app.html"*/'\n\n\n\n\n\n<ion-menu [content]="mycontent" id="menu2" >\n\n    <ion-content class="menu">\n\n        <div *ngIf="user"  class="boxmenu">\n\n            <img src="http://www.inebmed.com.br/{{dadosUser.imgtumb}}">\n\n            <h3>{{dadosUser.nome}}</h3>\n\n            <h4>{{dadosUser.email}}</h4>\n\n        </div>\n\n        <ion-list no-lines>\n\n            <button ion-item class="item-menu" *ngFor="let p of perfil" (click)="openPages(p)" menuClose>\n\n                    <ion-icon name="home"> {{p.title}}</ion-icon>\n\n            </button>\n\n            <button ion-item class="item-menu" *ngFor="let p of home" (click)="openPages(p)" menuClose>\n\n               <ion-icon name="home"> {{p.title}}</ion-icon>\n\n            </button>\n\n            <button ion-item  class="item-menu" *ngFor="let p of noticias" (click)="openPagesPush(p)" menuClose>\n\n                    <ion-icon name="information-circle"> {{p.title}} </ion-icon>\n\n            </button>\n\n            <button ion-item class="item-menu" *ngFor="let p of especialistas" (click)="openPagesPush(p)" menuClose>\n\n                    <ion-icon name="contact"> {{p.title}}</ion-icon>\n\n            </button>\n\n            <button ion-item class="item-menu" *ngFor="let p of unidades" (click)="openPagesPush(p)" menuClose>\n\n                <ion-icon name="briefcase"> {{p.title}}</ion-icon>\n\n            </button>\n\n            <button ion-item class="item-menu" *ngFor="let p of saude" (click)="openPagesPush(p)" menuClose>\n\n                    <ion-icon name="medkit"> {{p.title}}</ion-icon>\n\n            </button>\n\n            <button ion-item class="item-menu" *ngFor="let p of convenios" (click)="openPagesPush(p)" menuClose>\n\n                <ion-icon name="contacts"> {{p.title}}</ion-icon>\n\n            </button>\n\n            <button *ngIf="user" ion-item class="item-menu" (click)="sair()" menuClose>\n\n                <ion-icon name="close"> Sair</ion-icon>\n\n            </button>\n\n            <div class="" *ngIf="!user">\n\n\n\n              <button  ion-item class="item-menu" *ngFor="let p of login" (click)="openPagesPush(p)" menuClose>\n\n                  <ion-icon name="lock"> {{p.title}}</ion-icon>\n\n              </button>\n\n            </div>\n\n\n\n            <ion-item>Feedback</ion-item>\n\n\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_unidades_get_unidades__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exame_exame__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventos_eventos__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dicas_dicas__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__perfil_perfil__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__noticias_noticias__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__especialistas_especialistas__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__saude_saude__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__exame_list_exame_list__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HomePage = (function () {
    function HomePage(modalCtrl, toastCtrl, network, navCtrl, menuCtrl) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.network = network;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.status = [];
        this.menu = 'ferramentas';
        if (localStorage.getItem('userData')) {
            this.user = true;
        }
        else {
            this.user = false;
        }
        this.perfil = [
            { title: "Perfil", component: __WEBPACK_IMPORTED_MODULE_5__perfil_perfil__["a" /* PerfilPage */] }
        ];
        this.unidades = [
            { title: "Unidades", component: __WEBPACK_IMPORTED_MODULE_0__get_unidades_get_unidades__["a" /* GetUnidadesPage */] }
        ];
        this.dicas = [
            { title: "Dicas", component: __WEBPACK_IMPORTED_MODULE_4__dicas_dicas__["a" /* DicasPage */] }
        ];
        this.noticias = [
            { title: "noticias", component: __WEBPACK_IMPORTED_MODULE_6__noticias_noticias__["a" /* NoticiasPage */] }
        ];
        this.eventos = [
            { title: "Eventos", component: __WEBPACK_IMPORTED_MODULE_3__eventos_eventos__["a" /* EventosPage */] }
        ];
        this.saude = [
            { title: "Saude", component: __WEBPACK_IMPORTED_MODULE_8__saude_saude__["a" /* SaudePage */] }
        ];
        this.especialistas = [
            { title: "Especialistas", component: __WEBPACK_IMPORTED_MODULE_7__especialistas_especialistas__["a" /* EspecialistasPage */] }
        ];
        this.login = [
            { title: "Login", component: __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */] }
        ];
        this.exame = [
            { title: "Exame", component: __WEBPACK_IMPORTED_MODULE_1__exame_exame__["a" /* ExamePage */] }
        ];
        this.exameList = [
            { title: "Exames", component: __WEBPACK_IMPORTED_MODULE_9__exame_list_exame_list__["a" /* ExameListPage */] }
        ];
        this.network.onDisconnect().subscribe(function () {
            var toast = _this.toastCtrl.create({
                message: 'Ops, sem conexão com a internet.',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
            _this.status = "desconectado";
        });
        this.network.onConnect().subscribe(function () {
            var toast = _this.toastCtrl.create({
                message: 'Conectado',
                duration: 1000,
                position: 'middle'
            });
            toast.present();
            console.log('network connected!');
            _this.status = "conectado";
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            setTimeout(function () {
                if (_this.network.type === 'wifi') {
                    console.log('we got a wifi connection, woohoo!');
                }
            }, 3000);
        });
    }
    HomePage.prototype.openMenu = function () {
        this.menuCtrl.enable(true, 'menu1');
        this.menuCtrl.open();
    };
    HomePage.prototype.openlogin = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        modal.onDidDismiss(function (data) {
        });
        modal.present();
    };
    HomePage.prototype.openPages = function (page) {
        if (page.component == __WEBPACK_IMPORTED_MODULE_5__perfil_perfil__["a" /* PerfilPage */]) {
            if (localStorage.getItem('userData')) {
                this.navCtrl.push(page.component);
            }
            else {
                var toast = this.toastCtrl.create({
                    message: 'Você não esta logado',
                    duration: 3000,
                    position: 'top',
                    cssClass: "toast-error"
                });
                toast.present();
            }
        }
        else {
            this.navCtrl.push(page.component);
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-toolbar color="danger">\n\n    <img width="100%" src="assets/menu/logo.png" alt="">\n\n\n\n\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="home">\n\n\n\n\n\n  <div class="slide">\n\n    <ion-slides autoplayDisableOnInteraction="false" autoplay="3000" loop="true" speed="1000" pager>\n\n\n\n      <ion-slide>\n\n        <img src="http://camaradecondeuba.ba.gov.br/uploads/destaque.png" alt="">\n\n      </ion-slide>\n\n\n\n\n\n    </ion-slides>\n\n\n\n  </div>\n\n\n\n  <div padding>\n\n    <ion-segment color="danger" [(ngModel)]="menu">\n\n      <ion-segment-button value="ferramentas">\n\n        Utilidades\n\n      </ion-segment-button>\n\n      <ion-segment-button value="news">\n\n        Notícias\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="menu">\n\n    <ion-list *ngSwitchCase="\'news\'">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="img/thumbnail-puppy-1.jpg">\n\n        </ion-thumbnail>\n\n        <h2>Notícias</h2>\n\n      </ion-item>\n\n      ...\n\n    </ion-list>\n\n\n\n    <ion-list class="boxicons" *ngSwitchCase="\'ferramentas\'">\n\n      <ion-row class="menuicones">\n\n        <ion-col col-4>\n\n          <div *ngFor="let p of perfil" class="">\n\n            <img (click)="openPages(p)" src="assets/menu/user.png" alt="">\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <div *ngFor="let p of perfil" class="">\n\n            <img (click)="openPages(p)" src="assets/menu/vereadores.png" alt="">\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <div *ngFor="let p of perfil" class="">\n\n            <img (click)="openPages(p)" src="assets/menu/ouvidoria.png" alt="">\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="menuicones">\n\n        <ion-col col-4>\n\n          <div *ngFor="let p of perfil" class="">\n\n            <img (click)="openPages(p)" src="assets/menu/transparencia.png" alt="">\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <div *ngFor="let p of perfil" class="">\n\n            <img (click)="openPages(p)" src="assets/menu/transmissoes.png" alt="">\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <div *ngFor="let p of perfil" class="">\n\n            <img (click)="openPages(p)" src="assets/menu/galerias.png" alt="">\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n\n\n    </ion-list>\n\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <img class="imgwits" src="assets/logow.png" />\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["o" /* MenuController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheNotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetalheNotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalheNotPage = (function () {
    function DetalheNotPage(loadingCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
            duration: 1000
        });
        loader.present();
        this.ct = navParams.get("ct");
    }
    DetalheNotPage.prototype.ionViewDidLoad = function () {
    };
    return DetalheNotPage;
}());
DetalheNotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detalhe-not',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\detalhe-not\detalhe-not.html"*/'<!--\n  Generated template for the DetalheNotPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ct.titulo}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="http://www.inebmed.com.br/{{ct.imgtumb}}">\n    </ion-avatar>\n    <h2 text-wrap>{{ct.titulo}}</h2>\n    <p>  {{ct.subtitulo}}</p>\n  </ion-item>\n\n  <img src="http://www.inebmed.com.br/{{ct.imgtumb}}">\n\n  <ion-card-content>\n  <div style="text-align: justify;" [innerHTML]="ct.conteudo"></div>\n  </ion-card-content>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="thumbs-up"></ion-icon>\n        <div>12 Likes</div>\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="share"></ion-icon>\n        <div>Compartilhar</div>\n      </button>\n    </ion-col>\n    <ion-col center text-center>\n      <ion-note>\n  {{ct.data}}\n      </ion-note>\n    </ion-col>\n  </ion-row>\n\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\detalhe-not\detalhe-not.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
], DetalheNotPage);

//# sourceMappingURL=detalhe-not.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EspecialistasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detalhe_espec_detalhe_espec__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EspecialistasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EspecialistasPage = (function () {
    function EspecialistasPage(loadingCtrl, service, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.especialistas = this.getEspecialistas();
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
            duration: 1000
        });
        loader.present();
    }
    EspecialistasPage.prototype.ionViewDidLoad = function () {
    };
    EspecialistasPage.prototype.getEspecialistas = function () {
        var _this = this;
        this.service.getEspecialistas().subscribe(function (data) {
            _this.especialistas = data;
        }, function (erro) {
            console.log(erro);
        });
    };
    EspecialistasPage.prototype.openPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detalhe_espec_detalhe_espec__["a" /* DetalheEspecPage */], {
            ct: item
        });
    };
    return EspecialistasPage;
}());
EspecialistasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-especialistas',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\especialistas\especialistas.html"*/'<!--\n  Generated template for the EspecialistasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>Especialistas</ion-title>\n      </ion-navbar>\n</ion-header>\n\n<ion-content >\n<div *ngFor="let item of especialistas" (click)="openPage(item)">\n\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n  <img src="http://www.inebmed.com.br/{{item.img}}"/>\n      </ion-avatar>\n      <h2> {{item.nome}}</h2>\n      <p> {{item.especialidade}}</p>\n    </ion-item>\n\n  </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\especialistas\especialistas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavParams */]])
], EspecialistasPage);

//# sourceMappingURL=especialistas.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetUnidadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unidades_unidades__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the GetUnidadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GetUnidadesPage = (function () {
    function GetUnidadesPage(loadingCtrl, service, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.unidades = this.getUnidades();
    }
    GetUnidadesPage.prototype.ionViewDidLoad = function () {
    };
    GetUnidadesPage.prototype.getUnidades = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
            duration: 15000
        });
        loader.present();
        this.service.getUnidades().subscribe(function (data) {
            _this.unidades = data;
            loader.dismiss();
        }, function (erro) {
            console.log(erro);
        });
    };
    GetUnidadesPage.prototype.openPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__unidades_unidades__["a" /* UnidadesPage */], {
            item: item
        });
    };
    return GetUnidadesPage;
}());
GetUnidadesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-get-unidades',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\get-unidades\get-unidades.html"*/'<!--\n  Generated template for the GetUnidadesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Unidades</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n    <ion-list>\n        <button *ngFor="let p of unidades" ion-item (click)="openPage(p)"><ion-icon name="pin"> {{p.cidade}}</ion-icon></button>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\get-unidades\get-unidades.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavParams */]])
], GetUnidadesPage);

//# sourceMappingURL=get-unidades.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__endereco_endereco__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localizacao_localizacao__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__get_unidades_get_unidades__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var d;
var s;
/**
 * Generated class for the UnidadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UnidadesPage = (function () {
    function UnidadesPage(viewCtrl, socialSharing, loadingCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = "144b1fdf-e978-45da-adfd-186a743de485";
        (function () {
            d = document;
            s = d.createElement("script");
            s.src = "https://client.crisp.chat/l.js";
            s.async = 1;
            d.getElementsByTagName("ion-content")[0].appendChild(s);
            $crisp.push(["do", "chat:hide"]);
        })();
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
            duration: 10000
        });
        loader.present();
        this.item = navParams.get("item");
        loader.dismiss();
    }
    UnidadesPage.prototype.teste = function () {
        $crisp.push(["do", "chat:show"]);
        $crisp.push(["do", "chat:open"]);
    };
    UnidadesPage.prototype.ionViewDidLoad = function () {
    };
    UnidadesPage.prototype.goBack = function () {
        $crisp.push(["do", "chat:hide"]);
        this.viewCtrl.dismiss(__WEBPACK_IMPORTED_MODULE_5__get_unidades_get_unidades__["a" /* GetUnidadesPage */]);
    };
    UnidadesPage.prototype.openExameList = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__endereco_endereco__["a" /* EnderecoPage */], { item: item });
    };
    UnidadesPage.prototype.openMap = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__localizacao_localizacao__["a" /* LocalizacaoPage */], { item: item });
    };
    UnidadesPage.prototype.share = function () {
        this.socialSharing.share("As melhores dicas sobre saúde em sua mão. Baixe o aplicativo da Ineb e fique por dentro!", null /*Subject*/, null /*File*/, "http://www.google.com")
            .then(function () {
            // Sharing via email is possible
        }).catch(function () {
            // Sharing via email is not possible
        });
    };
    UnidadesPage.prototype.shareWhatsapp = function () {
        this.socialSharing.shareViaWhatsApp("As melhores dicas sobre saúde em sua mão. Baixe o aplicativo da Ineb e fique por dentro!", null /*File*/, "http://www.google.com")
            .then(function () {
            // Sharing via email is possible
        }).catch(function () {
            // Sharing via email is not possible
        });
    };
    return UnidadesPage;
}());
UnidadesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-unidades',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\unidades\unidades.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button (click)="goBack()" ion-button icon-only>\n        <ion-icon name="ios-arrow-back-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Unidades</ion-title>\n\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="home">\n  <span id="teste"></span>\n  <div class="imagemlogo"><img src="assets/menu/logo2.png" alt=""></div>\n  <div class="unidades">\n\n\n    <ion-row>\n      <ion-col>\n        <div  (click)="openMap(item)"><img src="assets/placeholders.png" alt="">Como chegar</div>\n      </ion-col>\n      <ion-col>\n        <div ><a href="tel:{{item.telefone}}" target="_self"><img src="assets/phone.png" alt=""></a>Ligar agora</div>\n      </ion-col>\n      <ion-col>\n        <div  (click)="openExameList(item)"> <img src="assets/home.png"  alt="">Endereço</div>\n      </ion-col>\n    </ion-row>\n\n\n\n\n    <ion-row>\n      <ion-col col-4>\n<a href="mailto:{{item.email}}"  target="_self"><img src="assets/mail.png" alt=""></a>Email\n      </ion-col>\n      <ion-col col-4>\n        <div  (click)="teste()"><img src="assets/whatsapp.png" alt="">Atendimento Online</div>\n      </ion-col>\n      <ion-col col-4>\n\n        <div  (click)="share()"><img src="assets/share.png" alt="">Compartilhar</div>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\unidades\unidades.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["y" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavParams */]])
], UnidadesPage);

//# sourceMappingURL=unidades.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(viewctrl, navCtrl, loadingCtrl, navParams, toastCtrl, service, http, modalCtrl) {
        this.viewctrl = viewctrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.logar = [];
        this.data = {};
        this.userData = {};
        if (localStorage.getItem('userData')) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
    }
    LoginPage.prototype.close = function () {
        this.viewctrl.dismiss();
    };
    LoginPage.prototype.lg = function (dados) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
            duration: 6000
        });
        loader.present();
        if (!dados.login || !dados.senha) {
            var toast = this.toastCtrl.create({
                message: 'Preencha os campos corretamente',
                duration: 3000,
                position: 'top',
                cssClass: "toast-error"
            });
            loader.dismiss();
            toast.present();
        }
        else {
            this.service.postDatas(this.userData, 'signup').then(function (result) {
                _this.responseData = result;
                console.log(_this.responseData.permissao);
                if (_this.responseData.permissao == 0) {
                    var toast = _this.toastCtrl.create({
                        message: 'Login/Senha inválido',
                        duration: 3000,
                        position: 'top',
                        cssClass: "toast-error"
                    });
                    loader.dismiss();
                    toast.present();
                }
                else {
                    localStorage.setItem('userData', JSON.stringify(_this.responseData));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    var toast = _this.toastCtrl.create({
                        message: 'Bem-Vindo',
                        duration: 3000,
                        position: 'top',
                        cssClass: "toast-success"
                    });
                    loader.dismiss();
                    toast.present();
                    window.location.reload();
                }
            }, function (err) {
                // Error log
            });
        }
    };
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\login\login.html"*/'\n\n\n\n\n\n<ion-content class="login" >\n\n  <ion-icon (click)="close()"  class="closeicons" name="close-circle"></ion-icon>\n\n    <div align="center" class="">\n\n        <img class="logologin" src="assets/menu/logo2.png" alt="">\n\n      </div>\n\n\n\n\n\n  <div align="center" class="boxinput">\n\n    <ion-input class="imput" type="text" [(ngModel)]="userData.login" placeholder="Login" name="login"  required></ion-input>\n\n    <ion-input class="imput" type="password" [(ngModel)]="userData.senha" placeholder="Senha" name="senha"  required></ion-input>\n\n  <button class="entrar" (click)="lg(userData)" ion-button color="secundary" [disabled]="!userData.login ||!userData.senha" >ENTRAR</button>\n\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["y" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ModalController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = (function () {
    function PerfilPage(loadingCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
            duration: 1000
        });
        loader.present();
        this.dadosUser = JSON.parse(localStorage.getItem('userData'));
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage.prototype.sair = function () {
        localStorage.removeItem('userData');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\perfil\perfil.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Perfil</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="perfil">\n  <ion-icon class="iconoption" name="options"></ion-icon>\n\n    <div class="bloco1">\n      <img src="http://www.inebmed.com.br/{{dadosUser.imgtumb}}">\n\n  </div>\n  <div class="bloco2">\n  <div class="nome-perfil" >{{dadosUser.nome}}</div>\n  <div class="email-perfil" >   {{dadosUser.email}}</div>\n<ion-item-group>\n  <ion-item-divider color="light">Dados Pessoais</ion-item-divider>\n  <ion-item><b>Endereço: </b> {{dadosUser.endereco}}</ion-item>\n  <ion-item><b>Cidade: </b> {{dadosUser.cidade}}</ion-item>\n  <ion-item><b>Rg: </b> {{dadosUser.rg}}</ion-item>\n  <ion-item><b>Cpf: </b> {{dadosUser.cpf}}</ion-item>\n  <ion-item><b>Data Nasc.: </b> {{dadosUser.datanasci}}</ion-item>\n</ion-item-group>\n<ion-row class="iconssocial">\n  <ion-col>\n      <ion-icon name="logo-facebook"></ion-icon>\n  </ion-col>\n  <ion-col>\n      <ion-icon name="logo-instagram"></ion-icon>\n  </ion-col>\n  <ion-col>\n      <ion-icon name="share"></ion-icon>\n  </ion-col>\n  <ion-col>\n      <ion-icon name="star"></ion-icon>\n  </ion-col>\n</ion-row>\n\n  <button class="imput" ion-button (click)="sair()">Sair</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\perfil\perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detalhe_not_detalhe_not__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticiasPage = (function () {
    function NoticiasPage(loadingCtrl, service, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NoticiasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticiasPage');
        this.getNoticias();
    };
    NoticiasPage.prototype.getNoticias = function () {
        var _this = this;
        this.service.getNoticias().subscribe(function (data) {
            _this.noticias = data;
            console.log(data);
        }, function (erro) {
            console.log(erro);
        });
    };
    NoticiasPage.prototype.openPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detalhe_not_detalhe_not__["a" /* DetalheNotPage */], {
            ct: item
        });
    };
    return NoticiasPage;
}());
NoticiasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-noticias',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\noticias\noticias.html"*/'<!--\n\n  Generated template for the NoticiasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n        <ion-navbar color="primary">\n\n            <ion-title>Notícias</ion-title>\n\n          </ion-navbar>\n\n    </ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content  class="home">\n\n<div class="" *ngIf="noticias && noticias.length">\n\n\n\n\n\n\n\n  <div class="slidepatro">\n\n    <div class="titcat">\n\n      Destaques\n\n    </div>\n\n\n\n<ion-slides *ngIf="noticias && noticias.length" padding paginationType autoplay="3000" loop slidesPerView="3">\n\n<ion-slide (click)="openPage(dest)"  *ngFor="let dest of noticias | slice:0:5; let i=index"  >\n\n            <img src="http://www.inebmed.com.br/{{dest.imgtumb}}"/>\n\n            <p class="titdest">{{dest.titulo |  slice:0:30}}...</p>\n\n</ion-slide>\n\n\n\n\n\n\n\n\n\n</ion-slides>\n\n\n\n</div>\n\n\n\n<div class="titcat">\n\n  Todas notícias\n\n\n\n</div>\n\n<ion-list>\n\n  <ion-item text-wrap (click)="openPage(item)" *ngFor="let item of noticias | slice:5; let i=index">\n\n    <ion-avatar item-start>\n\n      <img class="imgavatar" src="http://www.inebmed.com.br/{{item.imgtumb}}"/>\n\n    </ion-avatar>\n\n    <div class="titulonot">{{item.titulo}}</div>\n\n    <p>{{item.data}}</p>\n\n  </ion-item>\n\n</ion-list>\n\n</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\noticias\noticias.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavParams */]])
], NoticiasPage);

//# sourceMappingURL=noticias.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaudePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendario_calendario__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cal_imc_cal_imc__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SaudePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SaudePage = (function () {
    function SaudePage(service, loadingCtrl, navCtrl, navParams) {
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = JSON.parse(localStorage.getItem('userData'));
        if (localStorage.getItem('userData')) {
            this.user2 = true;
        }
        else {
            this.user2 = false;
        }
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
            duration: 1000
        });
        loader.present();
    }
    SaudePage.prototype.ionViewDidLoad = function () {
    };
    SaudePage.prototype.imc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cal_imc_cal_imc__["a" /* CalImcPage */]);
    };
    SaudePage.prototype.horarios = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__calendario_calendario__["a" /* CalendarioPage */]);
    };
    SaudePage.prototype.abrirChat = function () {
        var _this = this;
        this.chat = [
            {
                user1: this.user[0].id_usuario,
                user2: 4
            }
        ];
        this.service.newChat(this.chat[0]).then(function (result) {
            _this.chat = result;
            if (_this.chat.mensage == 1) {
                console.log("sucesso");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */], {
                    users: _this.chat
                });
            }
            else {
                console.log("erro");
            }
        }, function (error) {
        });
    };
    return SaudePage;
}());
SaudePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'page-saude',template:/*ion-inline-start:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\saude\saude.html"*/'<!--\n\n  Generated template for the SaudePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>+Saude</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item (click)="imc()"> <ion-icon name="construct"> Calculo IMC</ion-icon></button>\n\n    <div *ngIf="user2" class="">\n\n     </div>\n\n   \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Thiago\Documents\camaracondeuba\src\pages\saude\saude.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["s" /* NavParams */]])
], SaudePage);

//# sourceMappingURL=saude.js.map

/***/ })

},[257]);
//# sourceMappingURL=main.js.map