const mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  Product = mongoose.model('Product');

  module.exports.getCart = async (req, res) => {
    if(req.session.passport){
      const user = await User.findOne({'username':req.session.passport.user}).exec();
      if (!user) {
        return res
          .status(200)
          .json({msg: 'User not found.', data: null });
      }else{
      res.status(200).json({
        err: null,
        msg: 'User retrieved successfully.',
        data: user.cart
      })};
    }else{
      res.status(200).json({msg:'Not logged in', data: null});
    }
  };

  module.exports.deleteFromCart = async (req, res) => {
    console.log('here');
    if(req.session.passport){
      console.log(req.params.productId);
      User.update({'username': req.session.passport.user},{$pull: {cart: {'_id':req.params.productId}}},{safe:true},function(err,obj){
        console.log(obj);
        res.status(200).json({msg:'success'});
      })
    }else{
      res.status(404).json({msg:'Not logged in'});
    }
  };

  module.exports.checkOut = async (req, res) => {
    console.log('here');
    if(req.session.passport){
      User.update({'username': req.session.passport.user},{$pull: {cart: {}}},{safe:true},function(err,obj){
        console.log(obj);
        res.status(200).json({msg:'success'});
      })
    }else{
      res.status(404).json({msg:'Not logged in'});
    }
  };

  module.exports.addToCart = async (req, res) => {
    if(req.session.passport){
      User.update({'username':req.session.passport.user},{$push: {cart:req.body}},function(err,obj){
        if(err){
          res.status(200).json({msg:'Not Found', data:null});
        }else{
          res.status(200).json({msg:'Added Successfully'});
        }
      });
    }else{
      res.status(200).json({msg:'Not logged in', data:null});
    }
  }
