import { Component, OnInit } from '@angular/core';
// import {MatDatepicker} from '@angular/material/datepicker';
import { NgForm } from '@angular/forms';
import { ContaService } from '../conta.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BancoService } from 'src/app/banco/banco.service';

@Component({
  selector: 'app-conta-form',
  templateUrl: './conta-form.component.html',
  styleUrls: ['./conta-form.component.scss']
})
export class ContaFormComponent implements OnInit {

    title:string ='Nova Conta'

    conta: any = {}

   
		
		
		
    //variaveis para arnazenar as listagens de entidades relacionadas
    descricoes:any=[] // final no plural para vetor
    
			
		
		
      
        

  constructor(
      private descricoesSrv:BancoService,
      private contaSrv: ContaService,
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
            this.conta = await this.contaSrv.obterUm(this.actRoute.snapshot.params['id'])
            //mudando o titulo da pagina
            this.title='Editando'

        }catch(erro){
            console.error(erro)
            this.snackBar.open('Erro ao carregar os dados','OK',{duration:5000})
        }
    }
    // carregar as listagens de entidades relacionadas
    try{
        this.descricoes = await this.contaSrv.listar()
    }catch(erro){
         console.error(erro)
            this.snackBar.open('Erro ao carregar os dados','OK',{duration:5000})
    }
  }
 async salvar(form: NgForm){
      try{
          if(form.valid)
          if(this.conta._id){
            // se ja existir vira update: /
            await this.contaSrv.atualizar(this.conta)
          }
          else
        //enviar os dados para o back
        await this.contaSrv.novo(this.conta)
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


