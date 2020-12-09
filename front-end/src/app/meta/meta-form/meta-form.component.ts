import { Component, OnInit } from '@angular/core';
// import {MatDatepicker} from '@angular/material/datepicker';
import { NgForm } from '@angular/forms';
import { MetaService } from '../meta.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CRTLFService } from 'src/app/CRTL_F/crtl-f.service';

@Component({
  selector: 'app-meta-form',
  templateUrl: './meta-form.component.html',
  styleUrls: ['./meta-form.component.scss']
})
export class MetaFormComponent implements OnInit {

    title:string ='Nova Meta'

    meta: any = {}

    // mes: any = [
    //     {valor:1	,descr:'01'},
    //     {valor:2,descr:'02'},
    //     {valor:3,descr:'03'},
    //     {valor:4,descr:'04'},
    //     {valor:5,descr:'05'},
    //     {valor:6	,descr:'06'},
    //     {valor:7	,descr:'07'},
    //     {valor:08	,descr:'08'},
    //     {valor:09 ,descr:'09'},
    //     {valor:10 ,descr:'10'},
    //     {valor:11	,descr:'11'},
    //     {valor:12	,descr:'12'}

    // ]
   
		
		
		
    //variaveis para arnazenar as listagens de entidades relacionadas
    categorias:any=[] // final no plural para vetor
    
			
		
		
      
        

  constructor(
      private catSrv:CRTLFService,
      private metaSrv: MetaService,
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
            this.meta = await this.metaSrv.obterUm(this.actRoute.snapshot.params['id'])
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
          if(this.meta._id){
            // se ja existir vira update: /
            await this.metaSrv.atualizar(this.meta)
          }
          else
        //enviar os dados para o back
        await this.metaSrv.novo(this.meta)
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


