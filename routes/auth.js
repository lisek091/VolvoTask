const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

// post api/auth
// log in user
// access private
router.get('/',auth,async (req,res)=>{
    try{
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    }catch(err){
        console.error(err.mesage);
        res.status(500).send('server error');
    }
});

// post api/auth
// auth and get token
// access public
router.post('/',[
    check('email','include valid email').isEmail(),
    check('password','enter a passwrod').exists()
],
async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const { email,password}=req.body;

    try{
        let user =await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:'Invalid credientials'});
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({msg:'Invalid credientials'});
        }
        const payload = {
            user:{
                id: user.id
            }
        }
        jwt.sign(payload,config.get('jwtSecret'),{
            expiresIn:36000
        },(err,token)=>{
            if(err)throw err;
            res.json({token});
        });
    }catch(err){
        console.error(err.mesage);
        res.status(500).send('server error');
    }

});

module.exports = router;