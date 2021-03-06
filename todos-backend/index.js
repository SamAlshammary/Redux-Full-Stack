const express = require('express');
const app = express();
const cors = require("cors"); //Cross-Origin Resource Sharing. Make a request to localhost:3001 from localhost:3000
const morgan = require("morgan");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todos");

//morgan middleware allows us to see the requests that are coming in to our backend
app.use(morgan("tiny"));

app.use(bodyParser.json());
app.use(cors());
app.use("/api/todos", todoRoutes);

//Error handlinng
app.use(function(req, res, next){
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
});


app.listen(3001,function(){
    console.log("Server Started on port 3001 !!!");
    });
