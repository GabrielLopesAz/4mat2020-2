import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CTRLLISTComponent } from './CRTL_F/ctrl-list/ctrl-list.component';
import { CrtlFormComponent } from './CRTL_F/crtl-form/crtl-form.component';
import { MetaListComponent } from './meta/meta-list/meta-list.component';
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
import { SobreNosComponent } from './sobre-nos/sobre-nos/sobre-nos.component';

/* Criação das rotas para ligação front com back */
const routes: Routes = [ 
    {path:'categoria', component:CTRLLISTComponent},
    {path:'categoria/:id', component: CrtlFormComponent },
    {path:'categoria/novo', component: CrtlFormComponent  },
    
    {path:'meta', component: MetaListComponent},
    {path:'meta/novo', component:MetaFormComponent },
    {path:'meta/:id', component:MetaFormComponent },

    {path:'objetivo', component:ObjetivoListComponent},
    {path:'objetivo/novo', component:ObjetivoFormComponent},
    {path:'objetivo/:id', component:ObjetivoFormComponent},

    {path:'despesa', component:DespesaListComponent},
    {path:'despesa/novo',component:DespesaFormComponent},
    {path:'despesa/:id',component:DespesaFormComponent},

     {path:'positivo',component:PositivoListComponent} ,
     {path:'positivo/novo',component:PositivoFormComponent},
     {path:'positivo/:id',component:PositivoFormComponent},

     {path:'alerta',component:AlertaListComponent},
     {path:'alerta/novo', component:AlertaFormComponent},
     {path:'alerta/:id', component:AlertaFormComponent},

     {path:'banco', component:BancoListComponent},
     {path:'banco/novo', component:BancoFormComponent},
     {path:'banco/:id', component: BancoFormComponent},

     {path:'conta', component:ContaListComponent},
     {path:'conta/novo', component: ContaFormComponent },
     {path:'conta/:id', component:ContaFormComponent  },

    {path:'lancamento', component: LancamentoListComponent},
    {path:'lancamento/novo', component: LancamentoFormComponent},
    {path:'lancamento/:id', component: LancamentoFormComponent},

    {path:'aboutUs', component:SobreNosComponent}
]

/* Criação das rotas para ligação front com back */
// const routes: Routes = [
//     {path:'categoria', component:CTRLLISTComponent},
//     {path:'categoria/:id', component: CrtlFormComponent },
//     {path:'categoria/novo', component: CrtlFormComponent  }
    
 
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
