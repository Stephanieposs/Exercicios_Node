//Mockup Maquete Modelo
const usuarios = [
    {id:1, nome: "Stephanie", senha: "1234"},
    {id:2, nome: "Fabio", senha: "1234567"},
    {id:3, nome: "Amanda", senha: "amanda123"},
    {id:4, nome: "Joseane", senha: "josi12"},
    {id:5,nome: "Erick", senha: "erick12345"}
] 

function buscarUsuarioPorId(id) {
    return usuarios.filter(usuario => usuario.id == id)[0]
}

function buscarIndexUsuarioPorId(id) {
    return usuarios.findIndex(usuario => usuario.id == id)
}

function getUsuarios() {
    return usuarios
}

export {buscarIndexUsuarioPorId, buscarUsuarioPorId, getUsuarios}