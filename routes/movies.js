const express = require("express");
const router = express.Router();
const multer = require("multer");
const diskStorage = require("../middlewares/multer.js");
const moviesController = require("../controllers/moviesController.js");

router.post("/", moviesController.create);
router.get("/", moviesController.findAll);
router.get("/:id", moviesController.findOne);
router.put(
  "/upload/:id",
  multer({ storage: diskStorage }).single("image"),
  moviesController.uploadImage
);
router.delete("/:id", moviesController.destroy);

module.exports = router;
