import { Component, OnInit } from '@angular/core';
import { LancamentoService } from '../lancamento.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lancamento-list',
  templateUrl: './lancamento-list.component.html',
  styleUrls: ['./lancamento-list.component.scss']
})
export class LancamentoListComponent implements OnInit {

    lancamentos: any = []

    displayedColumns:string[] = ['data','nome','categoria','valor','conta','controle','editar','excluir']
constructor(private lancamentoSrv: LancamentoService,
    private snackBar: MatSnackBar) { }

  async ngOnInit() {
       this.lancamentos = await this.lancamentoSrv.listar()
       console.log(this.lancamentos)
  }
    async excluir(id:string){
        if(confirm('Deseja excluir esse item')){
            try{
                await this.lancamentoSrv.excluir(id)

                this.ngOnInit()
                this.snackBar.open('Excluido com sucesso',' OK',{duration:5000})

            }catch(erro){
                console.error(erro)
                   this.snackBar.open('Não foi possivel excluir',' OK',{duration:5000})


           }
        }
}
}