var mongoose=require('mongoose');
const validator = require('validator');
var Schema=mongoose.Schema;

var projectSchema= new Schema({
    Proj_Id: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    Proj_Name:{
        type: String,
        required: true
    },
    Client:{
        type: String
    },
    Proj_Lead:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Employee'
    },
    Start_Date: {
        type: Date,
        required: true
    },
    Deadline:{
        type: Date,
        required: true
    }

});

Project= mongoose.model('Project',projectSchema);
module.exports=Project;