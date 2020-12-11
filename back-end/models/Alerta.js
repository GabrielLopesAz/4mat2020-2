const mongoose = require('mongoose')
const data = new Date()
const mes = (data.getMonth()) + 1 
const ano=data.getFullYear(data)
console.log(`${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`)
console.log(typeof mes)

const esquema = mongoose.Schema({
   
    data:{
        type:String,
        required:true,
        default:(`${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`)
    },
    mensagem:{
        type:String,
        required:true 
    },
     categoria:{
        type:mongoose.ObjectId,ref:'Categoria'
    }
  
})
//Parametros  do mongoose.model
/*
1- nome do model
2- a constante do SCHEMA A esquema
3-o nome da coleçao/tabela no bd que vai receber os objetos
*/
module.exports = mongoose.model('Alerta',esquema,'Alertas')


