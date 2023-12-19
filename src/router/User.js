const express = require("express");
const Router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const JWTpassword = "djgskdhfgfjdkfhgkdhfgjsdfnlgsndfjgnskdjfgkjdnf";

Router.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  if (!email)
    return res.status(400).json({ err: "Email invalido ou Indefinido!!" });

  const user = await User.findOne({ where: { email } });

  if (!user)
    return res
      .status(404)
      .json({ err: "E-mail enviado não existe na base de dados" });

  if (password != user.password)
    return res.status(401).json({ err: "Credenciais invalidas" });
  jwt.sign(
    { id: user.id, email: user.email },
    JWTpassword,
    { expiresIn: "72h" },
    (err, token) => {
      if (err) return res.sendStatus(501);
      res.status(200).json({ token });
    }
  );
});

module.exports = Router;
