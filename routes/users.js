var express = require('express');
var router = express.Router();
var models = require('../models')

router.get('/users', function(req, res, next) {
  models.users.findAll({}).then(function(data) {
    res.json(data)
  })
})

router.post('/users', function(req, res, next) {
  models.users.create({
    email: req.body.email
  }).then(function(data) {
    res.json(data)
  })
})

router.put('/users/:id', function(req, res, next) {
  models.users.find({
    where: {
      id: req.params.id
    }
  }).then(function(data) {
    if(data){
      data.updateAttributes({
        email: req.body.email
      }).then(function(data) {
        res.json(data)
      })
    }
  })
})

router.patch('/users/:id', function(req, res, next) {
  models.users.find({
    where: {
      id: req.params.id
    }
  }).then(function(data) {
    if(data){
      data.updateAttributes({
        email: req.body.email
      }).then(function(data) {
        res.json(data)
      })
    }
  })
})

router.delete('/users/:id', function(req, res, next) {
  models.users.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(data) {
    res.json(data)
  })
})

module.exports = router;
