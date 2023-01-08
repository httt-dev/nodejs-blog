const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

router.get("/:slug", newsController.show);

router.get("/", newsController.index); //luon de o cuoi de khong map truoc

module.exports = router;
