import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CRTLFService } from '../crtl-f.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-crtl-form',
  templateUrl: './crtl-form.component.html',
  styleUrls: ['./crtl-form.component.scss']
})
export class CrtlFormComponent implements OnInit {

    title:string ='Nova Categoria'

    categoria: any = {}

  constructor(
      private catSrv: CRTLFService,
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
            this.categoria = await this.catSrv.obterUm(this.actRoute.snapshot.params['id'])
            //mudando o titulo da pagina
            this.title='Editando'

        }catch(erro){
            console.error(erro)
            this.snackBar.open('Erro ao carregar os dados','OK',{duration:5000})
        }
    }
  }
 async salvar(form: NgForm){
      try{
          if(form.valid)
          if(this.categoria._id){
            // se ja existir vira update: /
            await this.catSrv.atualizar(this.categoria)
          }
          else
        //enviar os dados para o back
        await this.catSrv.novo(this.categoria)
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