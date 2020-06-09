const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var BCRYPT_SALT_ROUNDS = 12;


const User = require("../models/user");



router.post("/signup", (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    wemail: req.body.wemail,
    wpassword: req.body.wpassword,
    wname: req.body.wname,
    wdob: req.body.wdob,
    wage: req.body.wage,
    wnearcity: req.body.wnearcity,
    waddress: req.body.waddress,
    wstate: req.body.wstate,
    wpincode: req.body.wpincode,
    wmobile: req.body.wmobile,
    woccupation: req.body.woccupation,
    wexperience: req.body.wexperience,
    wskill: req.body.wskill,
    wSecQue: req.body.wSecQue,
    wSecAns: req.body.wSecAns,
    wadhaar: req.body.wadhaar
 });
  bcrypt.hash(wpassword,BCRYPT_SALT_ROUNDS)
  .then(function(hashedPassword)
  {
    return user.save(username,hashedPassword);
  })
  .then(function(){
    res.send();
  })
  .catch(function(error){
    console.log("Error saving user:");
    console.log(error);
    next();
  })
  user.save(function(err, user) {
    if (err) return console.error(err);
    console.log(" saved to user collection.");
  });
});

router.post("/login",function(req,res){
const username=req.body.username;
const password=req.body.password;
user.getUserByUsername(username)
.then(function(user){
  return bcrypt.compare(password,user.password);
})
.then(function(samePassword){
  if(!samePassword){
    res.status(403).send();
  }
  res.send();
})
.catch(function(error){
  console.log("Error authenticating User:");
  console.log(error);
  next();
});

});





module.exports = router;
