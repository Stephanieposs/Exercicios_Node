import {buscarIndexUsuarioPorId,buscarUsuarioPorId , getUsuarios} from "../database/conexao.js"
import AutorRepositories from "../repositories/AutorRepositories.js"

class AutorController{

    /**
     * Lista Tudo
     */
    index(req, res){
        //lógica de consulta ao Banco de dados 
        //autors 
        let usuarios = AutorRepositories.findAll()
        res.status(200).send(usuarios)
    }

    /**
     * Listar por Id
     */
    show(req, res){
        //lógica de consulta ao Banco de dados 
        //autors 
        let usuario = AutorRepositories.findById(req.params.id)
        res.status(200).json(usuario)
    }

    /**
     * Salvar Novo Registro
     */
    store(req, res){
        AutorRepositories.create(req.body)
        res.status(201).send("Usuário cadastrado com sucesso")
    }

    /**
     * Atualizar Registro 
     */
    update(req, res){
        /*
        let indexUsuario = buscarIndexUsuarioPorNome(req.params.nome)
        let usuarios = getUsuarios()
        usuarios[indexUsuario].nome = req.body.nome
        usuarios[indexUsuario].senha = req.body.senha
        */
       let usuario = AutorRepositories.update(req.params.id, req.body)
        res.status(200).json(usuario)
    }

    /**
     * Deletar Registro
     */
    delete(req, res){
        //let indexUsuario = buscarIndexUsuarioPorNome(req.params.nome)
        //getUsuarios().splice(indexUsuario, 1)
        AutorRepositories.delete(req.body.id)
        res.status(200).send(`Usuário ${req.params.id} excluído com sucesso!`)
    }


}

//padrao Singleton (Design Patterns)
export default new AutorController

