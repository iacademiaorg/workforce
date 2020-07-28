var mongoose=require('mongoose');
const validator = require('validator');
var Schema=mongoose.Schema;


var zonSchema= new Schema({
    Zone_Id:{
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    State: {
        type: String,
        required: true
    },
    District:{
        type: String,
        required: true
    },
    Taluk:{
        type: String,
        required: true
    },
    pinCode:{
        type: Number,
        required: true
    }

});

var Zone = mongoose.model('Zone',zonSchema);
module.exports= Zone;