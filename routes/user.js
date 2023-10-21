const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

router.post("/", userController.create);
router.get("/", userController.findAll);
router.get("/:id", userController.findOne);
router.delete("/:id", userController.destroy);

module.exports = router;
