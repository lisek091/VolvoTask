const express = require('express');
const connectDB =require('./config/db');
const app = express();
connectDB();

app.use(express.json({extended:false}));
app.get('/',(req,res)=>res.json({msg: "Hellloo"}));

app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/orders',require('./routes/orders'));
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log("server starts at port 5000"));