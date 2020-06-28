const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

// Route includes
const movieRouter = require("./routes/movie.router");
const detailRouter = require("./routes/detail.router");
const editRouter = require("./routes/edit.router");

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use("/movies", movieRouter);
app.use("/details", detailRouter);
app.use("/edit", editRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});