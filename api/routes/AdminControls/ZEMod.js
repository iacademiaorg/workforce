const express = require('express');
const ZonalEngineerModFunction = express.Router();
const mongoose = require('mongoose');
const ZonalEngineer = require('../../models/ZonalEngineerschema');
//Imported models
//const Admin = require('../models/admin');

ZonalEngineerModFunction.get('/', (req,res) =>{
    res.send("We are on ZonalEngineerMod");
  })


//ZonalEngineer Data Functions
//View All ZonalEngineers                            //Verified to be working
ZonalEngineerModFunction.get("/ViewAllZonalEngineers", async (req,res) =>{
    try{
        const ZonalEngineers = await ZonalEngineer.find();
        res.send(ZonalEngineers);
    }
    catch(err){
        res.send(err);
        console.log(err);
    }
})

//Modify a ZonalEngineer Data                        //Verified to be working
ZonalEngineerModFunction.patch("/EditZonalEngineer", async (req,res) => {
    const ZonalEngineerID = req.body.ZEID;
    
    try{
        const updatedZonalEngineerData  = await ZonalEngineer.updateOne(
            { _id: ZonalEngineerID },
            { $set: {
                _id: new mongoose.Types.ObjectId(),
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
                AccountID: req.body.AccountID,
                Experience: req.body.Experience
            }
        })
        res.send(updatedZonalEngineerData);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
})
//Delete ZonalEngineer                               //Verified to be working
ZonalEngineerModFunction.delete("/DeleteZonalEngineer", async(req,res) => {
    const ZonalEngineerID = req.body.ZEID;
    try{
        const removedZonalEngineer = await ZonalEngineer.remove({ _id: ZonalEngineerID });
        res.send(removedZonalEngineer);
    }catch(err){
        console.log(err);
        res.send(err);
    }
})

module.exports = ZonalEngineerModFunction