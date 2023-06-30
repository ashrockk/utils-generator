const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Hello from API" });
});
router.post("/form",(req,res,next) => {
res.json({msg:"Hello from form api"});
});
module.exports = router;