import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-meta-list',
  templateUrl: './meta-list.component.html',
  styleUrls: ['./meta-list.component.scss']
})
export class MetaListComponent implements OnInit {

    metas: any = []

    displayedColumns:string[] = ['Categoria','Meta','Gasto','mes','editar','excluir']
constructor(private metaSrv: MetaService,
    private snackBar: MatSnackBar) { }

  async ngOnInit() {
       this.metas = await this.metaSrv.listar()
       console.log(this.metas)
  }
    async excluir(id:string){
        if(confirm('Deseja excluir esse item')){
            try{
                await this.metaSrv.excluir(id)

                this.ngOnInit()
                this.snackBar.open('Excluido com sucesso',' OK',{duration:5000})

            }catch(erro){
                console.error(erro)
                   this.snackBar.open('Não foi possivel excluir',' OK',{duration:5000})


           }
        }
}
}