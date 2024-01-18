import express from "express"
import AutorController from "./app/controllers/AutorController.js"
import router from "./app/routes.js"

const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

/*
//Consultando Autores/Autor (Read)
app.get("/usuario", AutorController.index)
app.get("/usuario/:id", AutorController.show)
//Salvando autor (Create)
app.post("/usuario", AutorController.store)
//Alterando Autor (Update)
app.put("/usuario/:id", AutorController.update)
//Apagando Autor (Delete)
app.delete("/usuario/:id", AutorController.delete)
*/

app.use(router)

export default app 