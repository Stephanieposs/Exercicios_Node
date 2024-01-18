import express from "express"
import fs from "fs"
import https from "https"


const app = express()


app.get("/", (req,res)=>{
    res.send("Olá do Https, via Express")
})


app.listen(3001, ()=>{
    console.log(`Servidor rodando em https://localhost:${3001}`);
})


const server = https.createServer({
    key: fs.readFileSync("privatekey.pem", "utf-8"),
    cert: fs.readFileSync("certificate.pem", "utf-8")
},app)

const PORT = process.env.PORT || 3002;

server.listen(3002, ()=>{
    console.log(`Servidor rodando em https://localhost:${PORT}`);
})