import { Component, OnInit } from '@angular/core';
 import { AlertaService } from '../alerta.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alerta-list',
  templateUrl: './alerta-list.component.html',
  styleUrls: ['./alerta-list.component.scss']
})
export class AlertaListComponent implements OnInit {

    alertas: any = []

    displayedColumns:string[] = ['data','mensagem', 'categoria','editar','excluir']
constructor(private alertaSrv:AlertaService,
    private snackBar: MatSnackBar) { }

  async ngOnInit() {
       this.alertas = await this.alertaSrv.listar()
       console.log(this.alertas)
/*
//validação das datas 
 const repeticao = 2;
const date = new Date()
const validacaoDate = date.getDate() 
  let hoje = (`${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()}`);
console.log("--------------Pré VALIDAÇÃO-------------------")
 if(validacaoDate< 10)  hoje = (`0${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()}`)
    
 
console.log(  hoje)
console.log(  this.alertas[0].data)
do {
      for(let i = 0 ; i < this.alertas.length ; i++){
       console.log('---------INSIDE FOR I='+ i ) 
console.log("--------------Pré IF-------------------")
            if( this.alertas[i].data == hoje || repeticao > 1 ) {
                   console.log("--------------Inside IF-------------------") 
                   console.log("--------------  the condition is true my friend-------------------") 
                          this.ngOnInit()
                         this.snackBar.open('é hoje',' OK',{duration:1})
                   console.log(this.alertas[i].data)
            }else console.log('Wasn\'\ t true BRO')
    }
        

} while (repeticao < 1);
  */

  }
    async excluir(id:string){
        if(confirm('Deseja excluir esse item')){
            try{
                await this.alertaSrv.excluir(id)

                this.ngOnInit()
                this.snackBar.open('Excluido com sucesso',' OK',{duration:5000})

            }catch(erro){
                console.error(erro)
                   this.snackBar.open('Não foi possivel excluir',' OK',{duration:5000})


           }
        }
}
}