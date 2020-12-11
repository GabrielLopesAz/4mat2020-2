const mongoose = require('mongoose')

const data = new Date()

const esquema = mongoose.Schema({
    nomeReceita:{
        type:String ,
        required:true // not null
    },
    valorReceita: { //tem o enum
        type: Number,
        required:true,
        min:0
    },
    dataReceita:{
        type: Date,
        default:`${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`
    },
    categoriaReceita:{
       type: mongoose.ObjectId,ref:'Categoria',
        required:true,
        default:'Outros'
    },
    controleReceita:{
        type:String,
        default:'Receita'
    }
})
//Parametros  do mongoose.model
/*
1- nome do model
2- a constante do SCHEMA A esquema
3-o nome da coleçao/tabela no bd que vai receber os objetos
*/ 

module.exports = mongoose.model('Positivo',esquema,'Lancamentos')


