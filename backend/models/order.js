const mongoose= require('mongoose');

//username,date,total price,product titles only)
const orderScema = new mongoose.Schema({
    username:{
        type:String,
      
      
    },
    date:{
        type:Date,
    
    },
    totalPrice:{
        type:Number,
  
    },
    titles:{
        type:[String],
      
    },
    status:{
       type:String,
     
    }
})
const orderModel = mongoose.model('order',orderScema);
module.exports = orderModel;