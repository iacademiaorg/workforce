var mongoose=require('mongoose');
const validator = require('validator');
var Schema=mongoose.Schema;

var vacSchema= new Schema({
    Role_Id:{
        type: Schema.Types.ObjectId,
        ref: 'Role'
    },
    Department_Id:{
        type: Schema.Types.ObjectId,
        ref:'Department'
    },
    No_Of_Vacancies:{
        type: Number,
        required: true
    }
});

var Vacancy= mongoose.model('Vacancy',vacSchema);
module.exports= Vacancy;