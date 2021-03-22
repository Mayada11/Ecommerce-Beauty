var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var Cloudinary = require('../middleware/cloudinary').upload;
const Validator = require('validatorjs');
//multer package for upload img
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const passport = require('passport');
const _ = require('lodash');
const jwtHelper = require('../config/jwtHelper');


// add new cart
router.post('/add-to-cart',jwtHelper.verifyJwtToken, async (req, res, next) => {
    console.log(req.file);
    // image =await Cloudinary(req.file.path);
    // console.log(image.url);
    // console.log(image.public_id);
    const { productId } = req.body;
    // res.json({desc:descripton});
    const cart = await Cart.create({ productId: productId })
    res.send(cart);



})


// router.post('/add-to-cart', async (req, res, next) => {
//     // console.log(req.file);
//     // image =await Cloudinary(req.file.path);
//     // console.log(image.url);
//     // console.log(image.public_id);
//     const { productId } = req.body;
//     // res.json({desc:descripton});
//     const cart = await Cart.create({ productId: productId })
//     res.send(cart);
// });

//get all carts
// router.get('/',async(req,res,next)=>{
//     console.log('get cart');
//     const cart =await Cart.find({},{_id:1,productId:1}).exec();
//     res.send(cart);
// });

router.get('/',jwtHelper.verifyJwtToken, (req, res, next) => {
    console.log('get cart');
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else {
                return Cart.find({}, { _id: 1, productId: 1 },
                    (err, cart) => {
                        if (!cart)
                            return res.status(404).json({ status: false, message: 'cart record not found.' });
                        else
                            return res.status(200).json({ status: true, cart: _.pick(cart, ['productId']) });
                    });
            }
        });
});




router.patch('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { Quantity } = req.body;
        await Cart.updateOne({ _id: id }, { quantity: Quantity });
        res.statusCode = 200;
        res.send({ message: 'updated successfully', success: true });
        next();
    }
    catch (err) {
        res.statusCode = 401;
        res.send({ success: false, message: err });
        return handleError(err);
    }
});

router.delete('/delete/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        await Cart.deleteOne({ _id: id });
        res.statusCode = 200;
        res.send({ message: 'deleted successfully', success: true });
        next();
    }
    catch (err) {
        res.statusCode = 401;
        res.send({ success: false, message: err });
        return handleError(err);
    }
})



module.exports = router;