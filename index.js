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

// Serving the static files
app.use(express.static('public'));

app.use("/", indexRouter);

// To test application level error handling
// app.get('/broken', (req, res, next) => {
//   throw new Error('Broken');
// });

// Application level error handling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Something went wrong');
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});