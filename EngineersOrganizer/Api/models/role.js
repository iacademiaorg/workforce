var mongoose=require('mongoose');
const validator = require('validator');
var Schema=mongoose.Schema;

var roleSchema= new Schema({
    role_id:{
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    role_name:{
        type: String,
        required: true
    },
    role_heirarchy_rank:{
        type: Number,
        required: true
    }
});

var Role= mongoose.model('Role',roleSchema);
module.exports= Role;