import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DadosUsuarioComponent } from './dados-usuario/dados-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';
import { ContatosDataBaseService } from './servicos/contatos-data-base.service';

import { FirebaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';



@NgModule({
  declarations: [
    AppComponent,
    DadosUsuarioComponent,
    ListaUsuarioComponent,
    DetalheUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
	//AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [ContatosDataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
