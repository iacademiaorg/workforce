var mongoose=require('mongoose');
const validator = require('validator');
var Schema=mongoose.Schema;
var EmpSchema= new Schema({
    Emp_id: {
        type:Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    Emp_First_Name: {
        type:String,
        required:[true,'First name is required...'],
        trim: true
    },
    Emp_last_Name: {
        type:String, 
        required:[true,'Last name is required...'],
        trim: true
    },
    DOB: {
        type: Date,
        required: true
    },
    Join_Date: {
        type: Date,
        required: true
    },
    Phone_No: { 
        type:Number,
        required: [true,'Employee phone number is required...']
    },
    work_email: {
        type: String,
        validate:{
            validator: validator.isEmail,
            message : 'Invalid Email Id...'
        }
    },
    Address:{
        type: String,
        required: [true,'Address is required...']
    },
    Performance_Rating:{
        type: Number,
        min: 1,
        max: 100
    },
    DepartmentId:{
        type: Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    SectionId:{
        type: Schema.Types.ObjectId,
        ref: 'Section',
        required: true
    },
    ProjectId:{
        type: Schema.Types.ObjectId,
        ref:'Project',
        required: true
    },
    RoleId:{
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    superior:{
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    zone:{
        type: Schema.Types.ObjectId,
        ref:'Zone',
        required: true
    }
});

var Employee= mongoose.model('Employee',EmpSchema);
module.exports= Employee;
