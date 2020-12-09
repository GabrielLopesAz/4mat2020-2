const mongoose = require('mongoose')
const data = new Date()
const mes = (data.getMonth()) + 1 
const ano=data.getFullYear(data)
console.log(`${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`)
console.log(typeof mes)

const esquema = mongoose.Schema({
    categoria:{
        type:mongoose.ObjectId,ref:'Categoria',
        required:true ,
        index:{unique:true}
        
    },
    valor_Def:{
        type:Number,
        required:true,
        min:0
    },
    valor_Gasto:{
        type:Number,
        required:true,
        dafault:0
    },
    mes:{
        type: Number,
        default:mes,
        enum:[1,2,3,4,5,6,7,8,9,10,11,12]
    },
    ano:{
         type:Number,
        default: parseInt(ano)
    }
    
})
//Parametros  do mongoose.model
/*
1- nome do model
2- a constante do SCHEMA A esquema
3-o nome da coleçao/tabela no bd que vai receber os objetos
*/
module.exports = mongoose.model('Meta',esquema,'Metas')


