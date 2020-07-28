const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Department = require('../models/department');


// ----------------------------------------Get all department---------------------------------
router.get('/',  (req, res) =>{
    res.json("This is router get all");
});

// ----------------------------------------Get single department------------------------------
router.get('/:id', (req, res) =>{
    res.json("This is router get single");
});

// -----------------------------------------Create department---------------------------------
router.post('/', async (req, res) =>{
    const dept = new Department({
        Dept_Id: new mongoose.Types.ObjectId(),
        Dept_Name: req.body.deptName,
        Dept_Head: req.body.deptHead,
        Sections: req.body.section,
        Dept_heirarchy_rank: req.body.deptHrank
    });
    try{
        const newDept = await dept.save();
        res.json("Department is created successfully");
    }
    catch(err){
        console.log(err);
        res.status(404).json('Error creating Department');
    }
    
});

// -----------------------------------------Update department---------------------------------
router.put('/:id',(req,res)=>{
    console.log(req.params.txt);
    res.json("This is Put");
});

// ------------------------------------------Delete department--------------------------------
router.delete('/:id',(req,res)=>{
    console.log(req.params.txt);
    res.json("This is Delete");
})

module.exports = router;
