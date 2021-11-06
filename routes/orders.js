const express = require('express');
const router = express.Router();


// post api/orders
// get all orders
// access private

router.get('/',(req,res)=>{
    res.send('Get all orders');
});

// post api/orders
// add new order
// access private

router.post('/',(req,res)=>{
    res.send('Add order');
});

// post api/orders/:id
// update order
// access private

router.put('/:id',(req,res)=>{
    res.send('Update order');
});

// post api/orders/:id
// Delete order
// access private

router.put('/:id',(req,res)=>{
    res.send('Delete order');
});

module.exports = router;