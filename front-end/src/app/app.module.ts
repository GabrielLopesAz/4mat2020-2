// Bem no início do arquivo app.module.ts
// import { NgxMaskModule, IConfig } from 'ngx-mask'
// export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Na seção de imports do app.module.ts
// Habilitar formatação de moeda e data em português
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
 

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
import { ObjetivoListComponent } from './objetivo/objetivo-list/objetivo-list.component';
import { ObjetivoFormComponent } from './objetivo/objetivo-form/objetivo-form.component';
import { BancoListComponent } from './banco/banco-list/banco-list.component';
import { BancoFormComponent } from './banco/banco-form/banco-form.component';
import { ContaListComponent } from './conta/conta-list/conta-list.component';
import { ContaFormComponent } from './conta/conta-form/conta-form.component';
import { LancamentoListComponent } from './lancamento/lancamento-list/lancamento-list.component';
import { LancamentoFormComponent } from './lancamento/lancamento-form/lancamento-form.component';
 


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
    AlertaFormComponent,
    ObjetivoListComponent,
    ObjetivoFormComponent,
    BancoListComponent,
    BancoFormComponent,
    ContaListComponent,
    ContaFormComponent,
    LancamentoListComponent,
    LancamentoFormComponent 
 
  ],
  imports: [
    MaterialModule,  
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatMomentDateModule
 
    // NgxMaskModule.forRoot() 
 
  ],
  providers: [
      // No app.module.ts, dentro seção providers
  /**** Datas em português no MatDatepicker  ****/
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  /**********************************************/  
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
