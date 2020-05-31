var mongoose = require('mongoose');
var Schema = mongoose.Schema,
bcrypt = require('bcrypt'),


var UserSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  wemail: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  wpassword: {
    type: String,
    required: true
  },
  wname: {
    type: String,
    required: true
  },
  wdob: {
    type: Date,
    required: true
  },
  wage: {
    type: Number,
    required: true
  },
  waddress: {
    type: String,
    required: true
  },
  wnearcity: {
    type: String,
    required: true
  },
  wstate: {
    type: String,
    required: true
  },
  wpincode: {
    type: Number,
    required: true
  },
  wmobile: {
    type: Number,
    required: true
  },
  woccupation: {
    type: String,
    required: true
  },
  wexperience: {
    type: Number,
    required: true
  },
  wskill: {
    type: String,
    required: true
  },
  wSecQue: {
    type: String,
    required: true
  },
  wSecAns: {
    type: String,
    required: true
  },
  wadhaar: {
    type: Number,
    required: true
  }

});

app.post("/lsogin",(req,res,next)=>{           // the html page where the form is being submitted 
    MongoClient.connect(url,(error,db)=>{    // the url provided by mongoDB to connect to the collection
        if(error)
        console.log(error)
        const SALT_ROUND="12"               //the higher its value the longer it takes to hash the password
        bcrypt.hash(req.body.wpassword,SALT_ROUND)
        .then(function(hashPassword){
      let data=
      {
          wemail:req.body.wemail,
          wpassword:hashedPassword
      }
      console.log(hashedPassword)
      console.log(req.body.wpassword)
      db.db("Homepage").collection("users").insert(data);
      res.send({message="Data Entered Successfully"})   
 }).catch((dberr)=>{
    if(dberr)
    console.log(dberr)
    next();
    
 })
db.close();

    })
});

app.post("/login",(req,res,next)=>                               // the html page where the form is being submitted 
{
    MongoClient.connect(url,(error,db)=>                         // the url provided by mongoDB to connect to the collection
    {
        if(error)
        console.log(error)
        db.db("Homepage").collection("users").find({wemail:res.body.wemail}).toArray((err,user)=>
    {
        if(!user[0])
        {
            console.log("User not found")
            res.status(404).send("User not found")
        }
        else
        {
          bcrypt.compare(req.body.wpassword,user[0].wpassword)
          .then(function()
          {
              console.log(user[0].wpassword)
              .then(function()
              {

                console.log(req.body.wpassword)
                console.log(bool)
                if(bool==false)
                {
                 res.status(400).send("Invalid Password")
                }
                else
                {
                res.send("The Email and Password Combination is correct!")
                }
              }).catch(dberr)
              {
                  console.log(dberr)
              }
         })


        }
    
        db.close();
    })
})
module.exports = mongoose.model('user', UserSchema);
})
