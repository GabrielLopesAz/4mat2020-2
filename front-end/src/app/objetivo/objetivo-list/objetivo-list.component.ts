import { Component, OnInit } from '@angular/core';
import { ObjetivoService } from '../objetivo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-objetivo-list',
  templateUrl: './objetivo-list.component.html',
  styleUrls: ['./objetivo-list.component.scss']
})
export class ObjetivoListComponent implements OnInit {

    objetivos: any = []

    displayedColumns:string[] = ['nome','descricao','Categoria','objetivo','atual','editar','excluir']
constructor(private objetivoSrv: ObjetivoService,
    private snackBar: MatSnackBar) { }

  async ngOnInit() {
       this.objetivos = await this.objetivoSrv.listar()
       console.log(this.objetivos)
  }
    async excluir(id:string){
        if(confirm('Deseja excluir esse item')){
            try{
                await this.objetivoSrv.excluir(id)

                this.ngOnInit()
                this.snackBar.open('Excluido com sucesso',' OK',{duration:5000})

            }catch(erro){
                console.error(erro)
                   this.snackBar.open('Não foi possivel excluir',' OK',{duration:5000})


           }
        }
}
}