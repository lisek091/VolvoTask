const express = require('express');
const router = express.Router();


// post api/users
// register user
// access public
router.post('/',(req,res)=>{
    res.send('Register a user');
});

module.exports = router;