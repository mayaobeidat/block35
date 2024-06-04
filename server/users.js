const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getFavoritesByUserId,
  getSingleUserById,
  postFavoriteByUserId,
  deleteFavoriteByUserId,
} = require("./db");

router.get("/", async (req, res, next) => {
  try {
    res.send(await getAllUsers());
  } catch (err) {
    next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    res.send(await getSingleUserById(req.params.id));
  } catch (err) {
    next(err);
  }
});
router.get("/:id/favorites", async (req, res, next) => {
  try {
    res.send(await getFavoritesByUserId(req.params.id));
  } catch (err) {
    next(err);
  }
});
router.post("/:userId/favorites", async (req, res, next) => {
  try {
    res.send(await postFavoriteByUserId(req.body));
  } catch (err) {
    next(err);
  }
});
router.delete("/:userId/favorites/:id", async (req, res, next) => {
  try {
    res.send(await deleteFavoriteByUserId(req.params.id));
  } catch (err) {
    next(err);
  }
});
module.exports = router;