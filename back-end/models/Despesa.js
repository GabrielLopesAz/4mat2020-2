const mongoose = require('mongoose')
const data = new Date()

const esquema = mongoose.Schema({
    nome:{
        type:String,
        required:true // not null
    },
    valor: { //tem o enum
        type: Number,
        required:true,
        min:0
    },
    data:{
        type: String,
        default:`${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`
    },
    categoria:{
        type: mongoose.ObjectId,ref:'Categoria',
        required:true,
        default:'Outros'
    },
    controle:{
        type:String,
        default:'Despesa'
    }
})
/*,index{unique:true} > deixe jeito fica unico */
//Parametros  do mongoose.model
/*
1- nome do model
2- a constante do SCHEMA A esquema
3-o nome da coleçao/tabela no bd que vai receber os objetos
*/
module.exports = mongoose.model('Despesa',esquema,'Lancamentos')


 


