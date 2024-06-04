const express = require("express");
const router = express.Router();
const { getAllFavorites } = require("./db");

router.get("/", async (req, res, next) => {
  try {
    res.send(await getAllFavorites());
  } catch (err) {
    next(err);
  }
});

module.exports = router;