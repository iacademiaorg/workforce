var mongoose=require('mongoose');
const validator = require('validator');
var Schema=mongoose.Schema;

var sectSchema= new Schema({
    section_id:{
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    section_name:{
        type: String,
        required: true
    },
    section_incharge:{
        type: Schema.Types.ObjectId,
        required: true,
        ref:'Employee'
    },
    Dept_Id:{
        type: Schema.Types.ObjectId,
        required: true,
        ref:'Department'
    }
});


var Section= mongoose.model('Section',sectSchema);
module.exports= Section;