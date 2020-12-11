// const CategoriaPositivo = require('../models/CategoriaPositivo')
const CategoriaPositivo = require('../models/CategoriaPositivo')
const controller = {}//obj vazio para inserir as funções

//metodo novo() implementando o CREATE
controller.novo = async (req, res) => {
    try {
        //envia os dados dentro de req.body para inserir no bd
        await CategoriaPositivo.create(req.body)
        //http 201 : Criado
        res.status(201).end()
    }
    catch (erro) {
        console.error(erro)
        //HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

//metodo listar() -RETRIEVE
controller.listar = async (req, res) => {
    try {
        //await Curso.find() // sem parametros retorna tudo

        let dados = await CategoriaPositivo.find()
        res.send(dados)//vai com status http 200: ok  200 = padrão
    } catch (erro) {
        console.error(erro)
        res.status(500).send(erro)
    }
}
controller.obterUm = async(req,res) => {
    const id = req.params.id // Captura o Id
    let obj = await CategoriaPositivo.findById(id)

    if(obj)res.send(obj) //se o objeto vier preenchido entao o retornamos
    else res.status(404).end() // se voltar vazio retornará ocodigo 404
}
//metodo atualizar(), implementado o update
controller.atualizar = async (req, res) => {
    try {
        //isolar o id do objeto
        const id = req.body._id

        let obj = await CategoriaPositivo.findByIdAndUpdate(id, req.body)//Busca o objeto pelo id e, encontrando-o substitui o conteudo por req.body

        if (obj) res.status(204).end() // se encontrou e substitui retorna http 204: no content

        else res.status(404).end() //caso contrario, retorna 404 not found... 
    } catch (erro) {
        console.error(erro)

        res.status(500).end
    }
}

//metodo excluir, DELETE SEM WHERE
controller.excluir= async (req,res) =>{
   try{
    //isolando o id para exclusao 
    const id=req.body._id
    let obj = await CategoriaPositivo.findByIdAndDelete(id)
    if(obj)res.send(204).end()//se encontrar o id ira exclui-lo em seguida
    else res.status(404).end()//objeto nao encontrado
}
catch(erro){
    console.error(erro)
}
}
module.exports = controller