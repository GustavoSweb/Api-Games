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

app.get("/games", async (req, res)=>{
    try{
        const games = await Games.findAll()
        res.statusCode = 200
        res.json(games)
    }catch(err){
        res.sendStatus(500)
    }
})

app.get("/game/:id", async (req, res)=>{
    const {id} = req.params

    if (isNaN(id)) return res.sendStatus(400)

    try{
        const game = await Games.findByPk(id)
        if(!game) return res.sendStatus(404)
        res.json(game)
    }catch(err){
        res.sendStatus(500)
    }



})
app.listen(8081, ()=>{
    console.log("Servidor Rodando")
})