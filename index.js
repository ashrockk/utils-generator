const express = require('express');

const app = express();

const indexRouter = require('./routes');

app.use((req, res, next) => {
    
})

app.listen(8000, () => {
  console.log("Server running on port 8000");
});