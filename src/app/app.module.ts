import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout/layout.module'
// import { ProdutoModule } from './produto/produto.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './layout/material/material.module'
import { CadastroComponent } from './produto/cadastro/cadastro.component';
import { ListagemComponent } from './produto/listagem/listagem.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FirestoreModule } from './firestore/firestore.module';
import { DataPipe } from './shared/pipes/data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent,
    DataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FirestoreModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }, DataPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }


// providers: [{provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
