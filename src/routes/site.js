const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

router.get("/search", siteController.search);

router.get("/", siteController.index); //luon de o cuoi de khong map truoc

module.exports = router;
