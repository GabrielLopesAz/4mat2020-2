import { Component, OnInit } from '@angular/core';
import { PositivoService } from '../positivo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-positivo-list',
  templateUrl: './positivo-list.component.html',
  styleUrls: ['./positivo-list.component.scss']
})
export class PositivoListComponent implements OnInit {

    positivos: any = []

    displayedColumns:string[] = ['data','nome','valor','categoria','editar','excluir']
constructor(private positivoSrv: PositivoService,
    private snackBar: MatSnackBar) { }

  async ngOnInit() {
       this.positivos = await this.positivoSrv.listar()
       console.log(this.positivos)
  }
    async excluir(id:string){
        if(confirm('Deseja excluir esse item')){
            try{
                await this.positivoSrv.excluir(id)

                this.ngOnInit()
                this.snackBar.open('Excluido com sucesso',' OK',{duration:5000})

            }catch(erro){
                console.error(erro)
                   this.snackBar.open('Não foi possivel excluir',' OK',{duration:5000})


           }
        }
}
}