// Bem no início do arquivo app.module.ts
// import { NgxMaskModule, IConfig } from 'ngx-mask'
// export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CTRLLISTComponent } from './CRTL_F/ctrl-list/ctrl-list.component';
import { CrtlFormComponent } from './CRTL_F/crtl-form/crtl-form.component';
import { FormsModule } from '@angular/forms';

import { MetaListComponent } from './meta/meta-list/meta-list.component';
// import { LancamentoListComponent } from './lancamento/lancamento-list/lancamento-list.component';
import { MetaFormComponent } from './meta/meta-form/meta-form.component';
import { DespesaListComponent } from './despesa/despesa-list/despesa-list.component';
import { DespesaFormComponent } from './despesa/despesa-form/despesa-form.component';
import { PositivoListComponent } from './positivo/positivo-list/positivo-list.component';
import { PositivoFormComponent } from './positivo/positivo-form/positivo-form.component';
import { AlertaListComponent } from './alerta/alerta-list/alerta-list.component';
import { AlertaFormComponent } from './alerta/alerta-form/alerta-form.component';
 


@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainMenuComponent,
    MainFooterComponent,
     CrtlFormComponent,
 
    CTRLLISTComponent,
    MetaListComponent,
    MetaFormComponent,
    DespesaListComponent,
    DespesaFormComponent,
    PositivoListComponent,
    PositivoFormComponent,
    AlertaListComponent,
    AlertaFormComponent 
 
  ],
  imports: [
    MaterialModule,  
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
 
    // NgxMaskModule.forRoot() 
 
  ],
  providers: [
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
