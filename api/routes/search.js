const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');

// router.get("/search", (req, res) => {
//   const  term  = '56564';
//   console.log(term);

//   User.find(
//     {$or: [
//       { "wemail" : term },
//       { "wpincode": term }
//     ]}
//   , function(err, obj){
//     console.log(obj);
//     res.send(obj);

//   }
//   );

// })
router.get('/search', (req, res) => {
  const term = '56564';
  console.log(term);

  User.find({ $or: [{ wemail: term }, { wpincode: term }] }, function (
    err,
    obj
  ) {
    if (err) throw err;

    console.log(obj);
    res.send(obj);
  });
});

module.exports = router;
