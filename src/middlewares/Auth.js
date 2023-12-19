const jwt = require("jsonwebtoken");

const JWTpassword = "djgskdhfgfjdkfhgkdhfgjsdfnlgsndfjgnskdjfgkjdnf";

function auth(req, res, next){
    const authToken = req.headers['authorization']
    
    if(!authToken) return res.status(401).json({err:"token invalido"})
    const token = authToken.split(' ')[1]

    jwt.verify(token, JWTpassword, (err, data)=>{
        if(err) return res.status(401).json({err:"Token invalido"})
        req.token = token
        req.logedUser = {id: data.id, email: data.email}
        next()
    })
}
module.exports = auth