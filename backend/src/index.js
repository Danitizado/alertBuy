const express = require('express');
const routes = require('./routes');

const port = 8000;

const app = express();

app.use(express.json())

app.use(routes)

app.listen(port, function () {
    console.log("\x1b[30m", "\x1b[46m", `The app is listening on port ${port}!`, "\x1b[0m");
    
  });