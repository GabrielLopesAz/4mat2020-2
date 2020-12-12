import { Component, OnInit } from '@angular/core';
// import {MatDatepicker} from '@angular/material/datepicker';
import { NgForm } from '@angular/forms';
import { LancamentoService } from '../lancamento.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CRTLFService } from 'src/app/CRTL_F/crtl-f.service';
import { ContaService } from 'src/app/conta/conta.service';

@Component({
  selector: 'app-lancamento-form',
  templateUrl: './lancamento-form.component.html',
  styleUrls: ['./lancamento-form.component.scss']
})
export class LancamentoFormComponent implements OnInit {

    title:string ='Nova Receita'

    lancamento: any = {}
 
		
		
		
    //variaveis para armazenar as listagens de entidades relacionadas
    categorias:any=[] // final no plural para vetor
    contas:any=[]
			
		
		
      
        

  constructor(
      private contaSrv:ContaService,
      private catSrv:CRTLFService,
      private lancamentoSrv: LancamentoService,
      private snackBar:MatSnackBar,
      private location:Location,
      private actRoute: ActivatedRoute
  ) { }

  async ngOnInit()  {
    //vendo se na routa possui algum id
    if(this.actRoute.snapshot.params['id']){
        //tras as infos do back 
        try{
            //trazendo os dados
            this.lancamento = await this.lancamentoSrv.obterUm(this.actRoute.snapshot.params['id'])
            //mudando o titulo da pagina
            this.title='Editando'

        }catch(erro){
            console.error(erro)
            this.snackBar.open('Erro ao carregar os dados','OK',{duration:5000})
        }
    }
    // carregar as listagens de entidades relacionadas
    try{
        this.categorias = await this.catSrv.listar()
        this.contas = await this.contaSrv.listar()
    }catch(erro){
         console.error(erro)
            this.snackBar.open('Erro ao carregar os dados','OK',{duration:5000})
    }
  }
 async salvar(form: NgForm){
      try{
          if(form.valid)
          if(this.lancamento._id){
            // se ja existir vira update: /
            await this.lancamentoSrv.atualizar(this.lancamento)
          }
          else
        //enviar os dados para o back
        await this.lancamentoSrv.novo(this.lancamento)
    // dar um feedback 
        this.snackBar.open('Dados salvos com sucesso', 'OK' ,{duration:5000})
    // voltar a tela
    this.location.back()

        }catch(erro){
            console.error(erro)
            this.snackBar.open('Não foi possivel salvar os dados', 'OK' ,{duration:5000})

        }
}
  
  voltar(form: NgForm){
    let result = true 
        // form.dirty = formulário "sujo", não salvo (via código)
    // form.touched = o conteúdo de algum campo foi alterado (via usuário)
    if(form.dirty && form.touched){
        result = confirm('Deseja voltar ? ')
    }
    if(result) this.location.back() //se estiver com os campos limpos voltara
}
}


