const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');


const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/Admin');

const app = express();

mongoose.connect('mongodb://localhost:27017/Homepage', {useNewUrlParser: true, useUnifiedTopology: true});


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//TODO

app.use("/user", userRoutes);
app.use("/Admin", adminRoutes);




app.listen(3000, function() {
  console.log("Server started on port 3000");
});
