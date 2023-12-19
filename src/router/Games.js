const express = require("express");
const Router = express.Router();
const Games = require("../models/Games");

const auth = require("../middlewares/Auth")


Router.get("/games", async (req, res) => {
  try {
    const games = await Games.findAll();
    res.statusCode = 200;
    res.json(games);
  } catch (err) {
    res.sendStatus(500);
  }
});

Router.get("/game/:id", async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) return res.sendStatus(400);

  try {
    const game = await Games.findByPk(id);
    if (!game) return res.sendStatus(404);
    res.json(game);
  } catch (err) {
    res.sendStatus(500);
  }
});

Router.post("/game",auth, async (req, res) => {
  const { title, year, price } = req.body;

  if (!title || !year || !price) return res.sendStatus(400);
  if (isNaN(year) || isNaN(price)) return res.sendStatus(400);
  try {
    await Games.create(req.body);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
});
Router.delete("/game/:id",auth, async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) return res.sendStatus(400);

  try {
    const game = await Games.findByPk(id);
    if (!game) return res.sendStatus(404);
    await game.destroy();
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
});
Router.put("/game/:id",auth, async (req, res) => {
  const { id } = req.params;
  const { year, price } = req.body;

  if (isNaN(id)) return res.sendStatus(400);

  try {
    if (isNaN(year) || isNaN(price)) return res.sendStatus(400);
    const game = await Games.update(req.body, { where: { id } });
    if (game == 0) return res.sendStatus(404);

    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
});
module.exports = Router;
