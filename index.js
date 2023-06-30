const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const ejs = require("ejs");

const app = express();

const indexRouter = require("./routes");

// Setting up the third party middlewares
app.use(morgan("short"));
app.use(cors());

// Setting up the EJS Templating
app.set("view engine", "ejs");
app.set("views", "./views");

//serving the static files

app.use(express.static("public"));
app.get("/broken", (req, res, next) => {
  throw new Error("Broken");
});
  

app.use("/", indexRouter);

//Application level error handler
app.user(err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something is wrong but IDK.");
};


app.listen(8000, () => {
  console.log("Server running on port 8000");
});