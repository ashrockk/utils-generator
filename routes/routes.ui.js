const express = require("express");
const router = express.Router();
const CC = require("currency-converter-lt");

router.get("/", (req, res) => {
  res.render('index');
});

router.get("/about", (req, res) => {
  res.render('about');
});

router.get("/contact", (req, res) => {
  res.render('contact');
});

router.get("/gallery", (req, res) => {
  res.render('gallery');
});

router.get("/services", (req, res) => {
  res.render('services');
});

module.exports = router;