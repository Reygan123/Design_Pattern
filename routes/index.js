const express = require("express");
const router = express.Router();
const moviesRouter = require("./movies");
const userRouter = require("./user");

router.use("/movies", moviesRouter);
router.use("/user", userRouter);

module.exports = router;
