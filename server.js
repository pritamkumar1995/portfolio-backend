require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require('path');

const app = express();

const contactRouter = require('./route/contactRoute');

app.use(express.json());
app.use(cors());
app.use('/',contactRouter);

/*if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    app.get("*",(req,res,next)=>(
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    ))
}*/

const port = 5000;
app.listen(port, console.log("Server Listening To Port : ",port));
