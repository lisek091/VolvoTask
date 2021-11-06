const express = require('express');
const router = express.Router();


// post api/auth
// log in user
// access private
router.get('/',(req,res)=>{
    res.send('Get loged in');
});

// post api/auth
// auth and get token
// access public
router.post('/',(req,res)=>{
    res.send('Log in user');
});

module.exports = router;