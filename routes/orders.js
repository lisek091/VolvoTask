const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth');
const Order = require('../models/Order');
// post api/orders
// get all orders
// access private

router.get('/',auth,async (req,res)=>{
    
    try{
        const orders = await Order.find({user:req.user.id}).sort({date: -1});
        res.json(orders);
    }catch(err){
        console.error(err.message);
        res.status(500).send('server error');
    }
});

// post api/orders
// add new order
// access private

router.post('/',[auth,[
    check('name','Name is required').not().isEmpty()
]],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {name,email,phone,type} = req.body;

    try {
        const newOrder = new Order({
            name,
            email,
            phone,
            type,
            user:req.user.id
        })
        const order = await newOrder.save();
        res.json(order)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

// post api/orders/:id
// update order
// access private

router.put('/:id',auth,async (req,res)=>{
    const {name,email,phone,type} = req.body;
    // build order object
    const orderFields = {};
    if (name) orderFields.name = name;
    if (email) orderFields.email = email;
    if (phone) orderFields.phone = phone;
    if (type) orderFields.type = type;
    try {
        let order = await Order.findById(req.params.id);
        if(!order) return res.status(404).json({msg:'contact not found'});
        //make sure user owns orders
        if(order.user.toString() !== req.user.id){
            return res.status(401).json({msg:'not authorized'});

        }
        order = await Order.findByIdAndUpdate(
            req.params.id,
            { $set: orderFields },
            { new: true },
            );

            res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

// post api/orders/:id
// Delete order
// access private

router.delete('/:id',auth,async (req,res)=>{

    try {
        let order = await Order.findById(req.params.id);
        if(!order) return res.status(404).json({msg:'contact not found'});
        //make sure user owns orders
        if(order.user.toString() !== req.user.id){
            return res.status(401).json({msg:'not authorized'});

        }
        await Order.findByIdAndRemove(req.params.id);

            res.json({msg:'Contact removed'});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }

});

module.exports = router;