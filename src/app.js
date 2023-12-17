const express = require("express")
const app = express()

const bodyParser = require("body-parser")

const database = require("./config/database/database")
const Games = require("./models/Games")


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

async function main(){
    try{
        await database.authenticate()
        console.log("Banco de dados conectado")
    }catch(err){
        console.error(err)
    }
}

main()

app.listen(8081, ()=>{
    console.log("Servidor Rodando")
})