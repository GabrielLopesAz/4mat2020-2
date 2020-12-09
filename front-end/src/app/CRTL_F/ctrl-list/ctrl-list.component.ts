import { Component, OnInit } from '@angular/core';
import { CRTLFService } from '../crtl-f.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ctrl-list',
  templateUrl: './ctrl-list.component.html',
  styleUrls: ['./ctrl-list.component.scss']
})
export class CTRLLISTComponent implements OnInit {

    categorias: any = []

    displayedColumns:string[] = ['nome','editar','excluir']
constructor(private CatSrv: CRTLFService,
    private snackBar: MatSnackBar) { }

  async ngOnInit() {
       this.categorias = await this.CatSrv.listar()
       console.log(this.categorias)
  }
    async excluir(id:string){
        if(confirm('Deseja excluir esse item')){
            try{
                await this.CatSrv.excluir(id)

                this.ngOnInit()
                this.snackBar.open('Excluido com sucesso',' OK',{duration:5000})

            }catch(erro){
                console.error(erro)
                   this.snackBar.open('Não foi possivel excluir',' OK',{duration:5000})


           }
        }
}
}