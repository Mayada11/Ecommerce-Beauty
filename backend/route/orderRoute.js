var express = require('express');
var router = express.Router();
var Order = require('../models/order');
var Cloudinary = require('../middleware/cloudinary').upload;
const Validator = require('validatorjs');
//multer package for upload img
const multer = require('multer');
const path =require('path');

router.post('/addorder',async(req,res)=>{
 
    const{username,date,totalPrice,titles,status} =req.body;

    const order =  await Order.create({username:username,date:date,totalPrice:totalPrice,titles:titles,status:status});
       res.send(order);
});

router.get('/',async(req,res,next)=>{
  
    const order =await Order.find({},{_id:1,username:1,date:1,totalPrice:1,titles:1,totalPrice:1,status:1}).exec();
    res.send(order);
});

router.patch('/adminedit/:id',async (req,res,next)=>{
    try{
        const {id}=req.params;
        const{status} =req.body;
        await Order.updateOne({_id:id},{status:status});
        res.statusCode=200;
        res.send({message:'updated successfully',success:true});
        next();
    }
    catch(err){
        res.statusCode = 401;
        res.send({success:false, message:err});
        return handleError(err);
    }
});

router.delete('/delete/:id',async (req,res,next)=>{
    try{
        const {id}=req.params;
        await Order.deleteOne({_id:id});
        res.statusCode=200;
        res.send({message:'deleted successfully',success:true});
        next();
    }
    catch(err){
        res.statusCode = 401;
        res.send({success:false, message:err});
        return handleError(err);
    }
})
router.get('/getuserorders/:username',async (req,res,next)=>{
    try{
        const {username} = req.params;
        const orders = await Order.find({username:username});
        res.statusCode =200;
        res.send({success:true,orders});
        next();
    }
    catch(err){
        res.statusCode = 401;
        res.send({success:false, message:err});
        return handleError(err);
    }
})
module.exports = router