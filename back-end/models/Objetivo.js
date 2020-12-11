const mongoose = require('mongoose')
 
const esquema = mongoose.Schema({
   nome:{
       type:String,
       required:true,
       index:{unique:true}
   },  
   descrição:{
       type:String
       
   },
    tipo:{
       type:String,
       required:true      
   },
     tipo:{
       type:Number       
   }

    
})
//Parametros  do mongoose.model
/*
1- nome do model
2- a constante do SCHEMA A esquema
3-o nome da coleçao/tabela no bd que vai receber os objetos
*/
module.exports = mongoose.model('Objetivo',esquema,'Objetivos')