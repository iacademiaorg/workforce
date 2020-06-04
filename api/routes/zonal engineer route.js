const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/ZEschema");


router.post("/signup", (req, res, next) => {
   const ze = new ze({
      _id: new mongoose.Types.ObjectId()
      ID: req.body.ID,
      Name: req.body.Name,
      DoB: req.body.DoB,
      Gender: req.body.Gender,
      Email: req.body.Email,
      Mobileno: req.body.Mobileno,
      Alternatemobile: req.body.Alternatemobile,
      PermanentAddress: req.body.PermanentAddress,
      CurrentAddress: req.body.CurrentAddress,
      City: req.body.City,
      State: req.body.State,
      Pincode: req.body.Pincode,
      LinkedinAccount: req.body.LinkedinAccount,
      Qualification: req.body.Qualification,
      WorkingAs: req.body.WorkingAs,
      AccountID: req.body.AccountID
      Experience: req.body.Experience
     });
     ze.save(function(err, ze) {
       if (err) return console.error(err);
       console.log(" saved to ze collection.");
     });
    });
    
    
    router.post("/login", function(req, res){
    
      const username = req.body.username;
      const password = req.body.password;
      
      ze.findOne({Email:username}, function(err, foundze){
        if(err){
           res.send("<h1>got clicked</h1>");
           console.log(err)
        }else{
          if(foundze){
            if(foundze.Password === password){
              res.send("logged in");
            }
          }
        }
       
       });
     });
     
     
     
     module.exports = router;