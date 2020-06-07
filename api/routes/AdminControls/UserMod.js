const express = require('express');
const ZonalEngineerModFunction = express.Router();
const mongoose = require('mongoose');
const ZonalEngineer = require('../../models/ZonalEngineer')
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
//Delete ZonalEngineer                               //Verified to be working
ZonalEngineerModFunction.delete("/DeleteZonalEngineer", async(req,res) => {
    const ZonalEngineerID = req.body.UID;
    try{
        const removedZonalEngineer = await ZonalEngineer.remove({ _id: ZonalEngineerID });
        res.send(removedZonalEngineer);
    }catch(err){
        console.log(err);
        res.send(err);
    }
})

module.exports = ZonalEngineerModFunction