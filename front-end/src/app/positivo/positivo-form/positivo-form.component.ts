import { Component, OnInit } from '@angular/core';
// import {MatDatepicker} from '@angular/material/datepicker';
import { NgForm } from '@angular/forms';
import { PositivoService } from '../positivo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CRTLFService } from 'src/app/CRTL_F/crtl-f.service';

@Component({
  selector: 'app-positivo-form',
  templateUrl: './positivo-form.component.html',
  styleUrls: ['./positivo-form.component.scss']
})
export class PositivoFormComponent implements OnInit {

    title:string ='Nova Receita'

    positivo: any = {}
 
		
		
		
    //variaveis para armazenar as listagens de entidades relacionadas
    categorias:any=[] // final no plural para vetor
    
			
		
		
      
        

  constructor(
      private catSrv:CRTLFService,
      private positivoSrv: PositivoService,
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
            this.positivo = await this.positivoSrv.obterUm(this.actRoute.snapshot.params['id'])
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
    }catch(erro){
         console.error(erro)
            this.snackBar.open('Erro ao carregar os dados','OK',{duration:5000})
    }
  }
 async salvar(form: NgForm){
      try{
          if(form.valid)
          if(this.positivo._id){
            // se ja existir vira update: /
            await this.positivoSrv.atualizar(this.positivo)
          }
          else
        //enviar os dados para o back
        await this.positivoSrv.novo(this.positivo)
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


