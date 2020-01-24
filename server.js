const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const app = express();
const colors = require("colors");
const PORT = process.env.PORT || 5700;

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());

// CONNECT TO THE DB
mongoose.connect('mongodb://localhost:27017', 
{ useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true },
() => console.log("you have connected to the DB".rainbow));

// ROUTES

// UNIVERSAL ERROR HANDLER
app.use((err, req, res, next) => {
    console.error(err)
    return res.status(500).send({errMsg: err.message })
});

// SERVER LISTENING
app.listen(PORT, () => {
    console.log(`Server is running on ${ PORT }`.random)
})
