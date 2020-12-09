import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CTRLLISTComponent } from './CRTL_F/ctrl-list/ctrl-list.component';
import { CrtlFormComponent } from './CRTL_F/crtl-form/crtl-form.component';
import { MetaListComponent } from './meta/meta-list/meta-list.component';
import { LancamentoListComponent } from './lancamento/lancamento-list/lancamento-list.component';
import { MetaFormComponent } from './meta/meta-form/meta-form.component';
import { DespesaListComponent } from './despesa/despesa-list/despesa-list.component';
import { DespesaFormComponent } from './despesa/despesa-form/despesa-form.component';
import { PositivoListComponent } from './positivo/positivo-list/positivo-list.component';
import { PositivoFormComponent } from './positivo/positivo-form/positivo-form.component';
// import { PositivoListComponent } from './positivo/positivo-list/positivo-list.component';
// import { PositivoFormComponent } from './positivo/positivo-form/positivo-form.component'; 

/* Criação das rotas para ligação front com back */
const routes: Routes = [ 
    {path:'categoria', component:CTRLLISTComponent},
    {path:'categoria/:id', component: CrtlFormComponent },
    {path:'categoria/novo', component: CrtlFormComponent  },
    
    {path:'meta', component: MetaListComponent},
    {path:'meta/novo', component:MetaFormComponent },
    {path:'meta/:id', component:MetaFormComponent },

    {path:'despesa', component:DespesaListComponent},
    {path:'despesa/novo',component:DespesaFormComponent},
    {path:'despesa/:id',component:DespesaFormComponent},

     {path:'positivo',component:PositivoListComponent} ,
     {path:'positivo/novo',component:PositivoFormComponent},
     {path:'positivo/:id',component:PositivoFormComponent},

    {path:'lancamento', component: LancamentoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
