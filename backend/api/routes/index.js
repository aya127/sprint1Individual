var express = require('express'),
  router = express.Router(),
  asyncMiddleware = require('express-async-handler'),
  productCtrl = require('../controllers/ProductController'),
  userCtrl = require('../controllers/UserController');
  cartCtrl = require('../controllers/CartController');

//-------------------------------Product Routes-----------------------------------
router.get('/product/getProducts', productCtrl.getProducts);
router.get('/product/getProduct/:productId', productCtrl.getProduct);
router.get(
  '/product/getProductsBelowPrice/:price',
  productCtrl.getProductsBelowPrice
);
router.post('/product/createProduct', productCtrl.createProduct);
router.patch('/product/updateProduct/:productId', productCtrl.updateProduct);
router.delete('/product/deleteProduct/:productId', productCtrl.deleteProduct);

//-----------------------------User Routes----------------------------------------
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.post('/register', userCtrl.register);

router.get('/isloggedin', function(req, res){
    if(req.user)
    {
        res.send({state: 'success', user: req.user});
    }
    else
    {
        res.send({state: 'failure', user: null});
    }
});

router.get('/logout', userCtrl.logout);

router.post('/login', userCtrl.login);

//--------------------------------Cart Routes-----------------------------------
router.get('/user/getCart', cartCtrl.getCart);
router.patch('/user/deleteFromCart/:productId', cartCtrl.deleteFromCart);
router.patch('/user/checkout', cartCtrl.checkOut);
router.patch('/user/addToCart', cartCtrl.addToCart);

module.exports = router;
