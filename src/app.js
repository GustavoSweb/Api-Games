const express = require("express")
const app = express()


const bodyParser = require("body-parser")

const database = require("./config/database/database")
const Games = require("./models/Games")
const User = require("./models/User")
/*
User.create({
    name:"Gustavo",
    email:"gustavo@gmail.com",
    password:"gustavo"
})

*/


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(require("cors")())

app.use("/", require("./router/Games"))
app.use("/", require("./router/User"))


async function main(){
    try{
        await database.authenticate()
        console.log("Banco de dados conectado")
    }catch(err){
        console.error(err)
    }
}

main()

const PORT = process.env.PORT || 8081
app.listen(PORT, ()=>{
    console.log("Servidor Rodando")
})