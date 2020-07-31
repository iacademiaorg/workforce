const express= require('express')
const router = express.Router()
const user = require('../models/user')

router.get('/:wpincode', async(req, res) => {
  try{
    const profiles_zone_wise = await user.find(req.params.$where[{wpincode: 55687}]);
    res.json(profiles_zone_wise);
  }catch(err){
    res.send('Error '+err)
  }
})

module.exports = router
