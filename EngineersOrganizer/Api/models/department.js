const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;
const deptSchema = new Schema({
    Dept_Id: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    Dept_Name: {
        type: String,
        required: true
    },
    Dept_Head: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Employee'
    },
    Sections: [{
        type: Schema.Types.ObjectId,
        ref: 'Section'
    }],
    Dept_heirarchy_rank: {
        type: Number,
        required: true
    }
});

var Department = mongoose.model('Department', deptSchema);
module.exports = Department;