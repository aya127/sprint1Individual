var mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  User = mongoose.model('User'),
  passport = require('passport');

module.exports.register = function(req, res, next){
    User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
            res.status(200);
            res.send(err);
        } else {
            passport.authenticate('local')(req, res, function () {
                res.status(200).json({msg:'Successfully registered'});
            });
        }
    });
};

module.exports.login = async (req, res) => {

  passport.authenticate('local')(req, res, function() {
      console.log(req.session.passport.user+' hello');
      res.status(200).json(req.session.passport);
  });
};

module.exports.logout = async (req, res) => {
  req.logout();
  res.status(200).json({name:'logged out'});
};
