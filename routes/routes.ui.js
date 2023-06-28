const express = require("express");
const router = express.Router();
const CC = require("currency-converter-lt");

// const secureUI = (req, res, next) => {
//   console.log("i am middleware");
//   next();
// };

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get(
  "/converter/:currency1/:currency2/:value",
  // secureUI,
  async (req, res) => {
    const { currency1, currency2, value } = req.params;
    const currencyConverter = new CC({
      from: currency1,
      to: currency2,
      amount: Number(value),
    });
    const result = await currencyConverter.convert();
    res.send(
      `Currency Price of ${value} ${currency1} in ${currency2} is ${result}`
    );
  }
);

module.exports = router;