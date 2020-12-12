import { Component, OnInit } from '@angular/core';
import { ContaService } from '../conta.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-conta-list',
  templateUrl: './conta-list.component.html',
  styleUrls: ['./conta-list.component.scss']
})
export class ContaListComponent implements OnInit {

    contas: any = []

    displayedColumns:string[] = ['nome','descricao','tipo','saldo','editar','excluir']
constructor(private contaSrv: ContaService,
    private snackBar: MatSnackBar) { }

  async ngOnInit() {
       this.contas = await this.contaSrv.listar()
       console.log(this.contas)
  }
    async excluir(id:string){
        if(confirm('Deseja excluir esse item')){
            try{
                await this.contaSrv.excluir(id)

                this.ngOnInit()
                this.snackBar.open('Excluido com sucesso',' OK',{duration:5000})

            }catch(erro){
                console.error(erro)
                   this.snackBar.open('Não foi possivel excluir',' OK',{duration:5000})


           }
        }
}
}