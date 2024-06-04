const express = require("express");
const router = express.Router();
const { getAllProducts } = require("./db");

router.get("/", async (req, res, next) => {
  try {
    res.send(await getAllProducts());
  } catch (err) {
    next(err);
  }
});
module.exports = router;