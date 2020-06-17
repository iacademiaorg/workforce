const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const Ajv = require('ajv');
const fs = require('fs');

const ajv = new Ajv();

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/Admin');
const port = 3000;
const app = express();

mongoose.connect('mongodb://localhost:27017/Homepage', {useNewUrlParser: true, useUnifiedTopology: true});

app.put('/:id',async(req,res) => {
  const updateData = req.body;
  try {
    const valid = ajv.validate(UserSchema, updateData);
    if(!valid) {
      res.send(400).json({errors: ajv.errors});
      return;
    }
  } catch(ex) {
    res.status(500);
    return;
  }
  res.status(200).send('that was okay!');
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));
app.use(express.json());

//TODO

app.use("/user", userRoutes);
app.use("/Admin", adminRoutes);




app.listen(port, () => console.log('Server on port ${port}!'));
