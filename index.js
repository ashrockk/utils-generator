const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose
.connect("mongodb://localhost:27017/")
.then(() => 
{
    console.log("Connected")
}
).catch((err)=>{
console.log(err)
});

const app = express();

// mongodb connection


const indexRouter = require("./routes");
//  Setting up third party middlewares
app.use(morgan("short"));
app.use(cors());

// Json data capture
app.use(bodyParser.json());

// Form data capture
app.use(bodyParser.urlencoded({extended: true}));

// Setting up the EJS Templating
app.set("view engine", "ejs");
app.set("views", "./views");

// serving the static files
app.use(express.static("public"));

// Trying to test the application level error handling
app.get("/broken", (req, res, next) => {
    throw new Error ("Broken")
});

app.use("/", indexRouter);
// app.use((req, res, next)) => {
//     console.log("Request Received at " +Date.now());
//     next();
// });

// Application level error handler
app.use((err, req, res, next)  => {
    console.log(err);
    res.status(500).send("Something Went Wrong");
});

app.listen(3000, () => {
    console.log("Server running on port 8000");
});