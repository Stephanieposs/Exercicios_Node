import {buscarIndexUsuarioPorNome,buscarUsuarioPorNome , getUsuarios} from "../database/conexao.js"

class AutorRepository{

    //CRUD
    create(usuario){
        getUsuarios().push(usuario)
    }

    findAll(){
        return getUsuarios()
    }

    findById(id){
        return buscarUsuarioPorId(id);
    }

    update(id, usuario){
        let indexUsuario = buscarIndexUsuarioPorId(id)
        let usuarios = getUsuarios()
        usuarios[indexUsuario].nome = usuario.nome
        usuarios[indexUsuario].senha = usuario.senha

        return usuarios[indexUsuario]
    }

    delete(id){
        let indexUsuario = buscarIndexUsuarioPorNome(id)
        getUsuarios().splice(indexUsuario, 1)
    }
}

export default new AutorRepository();