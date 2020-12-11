import { Component, OnInit } from '@angular/core';
import { BancoService } from '../banco.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-banco-list',
  templateUrl: './banco-list.component.html',
  styleUrls: ['./banco-list.component.scss']
})
export class BancoListComponent implements OnInit {

    bancos: any = []

    displayedColumns:string[] = ['sigla','nome','codigo','editar','excluir']
constructor(private bancoSrv: BancoService,
    private snackBar: MatSnackBar) { }

  async ngOnInit() {
       this.bancos = await this.bancoSrv.listar()
       console.log(this.bancos)
  }
    async excluir(id:string){
        if(confirm('Deseja excluir esse item')){
            try{
                await this.bancoSrv.excluir(id)

                this.ngOnInit()
                this.snackBar.open('Excluido com sucesso',' OK',{duration:5000})

            }catch(erro){
                console.error(erro)
                   this.snackBar.open('Não foi possivel excluir',' OK',{duration:5000})


           }
        }
}
}