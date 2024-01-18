import { Router } from "express";
import AutorController from "./controllers/AutorController.js"

const router = Router()


//Consultando Autores/Autor (Read)
router.get("/usuario", AutorController.index)
router.get("/usuario/:nome", AutorController.show)
//Salvando autor (Create)
router.post("/usuario", AutorController.store)
//Alterando Autor (Update)
router.put("/usuario/:nome", AutorController.update)
//Apagando Autor (Delete)
router.delete("/usuario/:nome", AutorController.delete)




export default router