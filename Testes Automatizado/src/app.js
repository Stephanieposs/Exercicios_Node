import express  from "express";

const app = express()

app.get("/user", (req,res)=>{
    res.status(200).json({msn:"Ola"})
})

app.post("/user", (req,res)=>{
    res.status(200).json({id:req.body.id, nome: req.body.nome})
})