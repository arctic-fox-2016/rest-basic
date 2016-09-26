var express = require('express');
var router = express.Router();
var model = require("../models/index");

/* GET home page. */

router.post('/users', function(req, res, next) {
  model.Users.create({
    username: req.body.username,
    password: req.body.password,
    bio: req.body.bio
  }).then(function(users){
    res.json(users)
  })
});

router.get('/users', function(req, res, next) {
  model.Users.findAll().then(function(users){
    res.json(users)
  })
});

router.delete('/users/:id', function(req, res, next) {
  model.Users.destroy({
    where:{
      id:req.params.id
    }
  }).then(function(users){
    res.json(users)
  })
});

router.put('/users/:id', function(req, res, next) {
  model.Users.find({
    where:{
      id:req.params.id
    }
  }).then(function(users){
    if(users){
      users.updateAttributes({
        username: req.body.username,
        password: req.body.password,
        bio: req.body.bio
      }).then(function(users){
          res.json(users)
      })
    }
  })
});

router.patch('/users/:id', function(req, res, next) {
  model.Users.find({
    where:{
      id:req.params.id
    }
  }).then(function(users){
    if(users){
      users.updateAttributes({
        username: req.body.username,
        password: req.body.password,
        bio: req.body.bio
      }).then(function(users){
          res.json(users)
      })
    }
  })
});

module.exports = router;
