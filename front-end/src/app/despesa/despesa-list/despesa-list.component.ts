import { Component, OnInit } from '@angular/core';
import { DespesaService } from '../despesa.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-despesa-list',
  templateUrl: './despesa-list.component.html',
  styleUrls: ['./despesa-list.component.scss']
})
export class DespesaListComponent implements OnInit {

    despesas: any = []

    displayedColumns:string[] = ['data','nome','valor','categoria','editar','excluir']
constructor(private despesaSrv: DespesaService,
    private snackBar: MatSnackBar) { }

  async ngOnInit() {
       this.despesas = await this.despesaSrv.listar()
       console.log(this.despesas)
  }
    async excluir(id:string){
        if(confirm('Deseja excluir esse item')){
            try{
                await this.despesaSrv.excluir(id)

                this.ngOnInit()
                this.snackBar.open('Excluido com sucesso',' OK',{duration:5000})

            }catch(erro){
                console.error(erro)
                   this.snackBar.open('Não foi possivel excluir',' OK',{duration:5000})


           }
        }
}
}