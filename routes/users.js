const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
// post api/users
// register user
// access public
router.post('/',[
    check('name','name is req').not().isEmpty(),
    check('email','include valid email').isEmail(),
    check('password','enter a passwrod').isLength({min:6})
],async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    
    const {name, email, password} = req.body;

    try{
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({msg:"User allready exists"})
        }
        user = new User({
            name,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);

        await user.save();

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
        })
    }catch(err){
        console.error(err.message);
        res.status(500).send("server error");
    }
});

module.exports = router;

