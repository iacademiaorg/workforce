//Imported modules
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Imported models
const Admin = require('../models/admin');
const ZonalEngineer = require('../models/ZonalEngineer');

router.get('/', (req,res) =>{
    res.send("We are on Admin");
  })

//Admin Functions

//Creation of New Admin                     // Verified to be working
router.post("/signup", (req,res) => {
    const admin = new Admin({
        _id: new mongoose.Types.ObjectId(),
        AdminEMail: req.body.AdminEMail,
        AdminPassword: req.body.AdminPassword
    });
    admin.save(function(err,admin){
        if(err){
            console.log(err);
            res.send(err);
            console.log(req.body);
            return
        }
        console.log("New admin created");
        res.send(admin);
    })
})

//Admin Login and verification              //Verified to be working
router.post("/login", (req,res) => {
    const AdminID = req.body.AdminID;
    const ZonalEngineername = req.body.ZonalEngineername;
    const Password = req.body.password;

    Admin.findOne({_id:AdminID}, function(err, foundAdmin){
        if(err){
          res.send("<h1>got clicked</h1>");
          console.log(err);
        }else{
          if(foundAdmin){
            if(foundAdmin.AdminEMail === ZonalEngineername){
                if(foundAdmin.AdminPassword === Password){
                    res.send("logged in");
                }
                else{
                    res.send("ZonalEngineername and Password Mismatch");
                }
            }
            else{
                res.send("ZonalEngineername and ID Mismatch");
            }
          }
          else{
              res.send("No Such admin exists");
          }
        }
    
      });

});
//Middleware for various fields
const ZonalEngineerModRoutes = require("./AdminControls/ZonalEngineerMod");
const ZonalEngineerModRoutes = require("./AdminControls/ZonalEngineerMod");
router.use("/ZonalEngineerMod",ZonalEngineerModRoutes);
router.use("/ZonalEngineerMod",ZonalEngineerModRoutes);
/*
//ZonalEngineer Data Functions
//View All ZonalEngineers                            //Verified to be working
router.get("/ViewAllZonalEngineers", async (req,res) =>{
    try{
        const ZonalEngineers = await ZonalEngineer.find();
        res.send(ZonalEngineers);
    }
    catch(err){
        res.send(err);
        console.log(err);
    }
})

//Modify a ZonalEngineer Data
router.patch("/EditZonalEngineer", async (req,res) => {
    const ZonalEngineerID = req.body.UID;
    
    try{
        const updatedZonalEngineerData  = await ZonalEngineer.updateOne(
            { _id: ZonalEngineerID },
            { $set: {
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
            }
        })
        res.send(updatedZonalEngineerData);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
})

*/
module.exports = router;