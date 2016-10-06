var express = require('express');
var router = express.Router();
var items_controller = require('../controller/items')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/items', function(req, res, next) {

  items_controller.get_items(function (result) {
    res.json(result)
})
});
router.get('/api/items/:id', function(req, res, next) {
  items_controller.get_item({id: req.params.id},function (result) {
    res.json(result)
})
});
router.post('/api/items', function(req, res, next) {
  var object_item = {
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    tag: req.body.tag,
    picture_location: req.body.picture_location,
  }
      items_controller.add_item(object_item,function (result) {
        res.json(result)
    })

});
router.put('/api/items/:id', function(req, res, next) {
  var object_item = {
    id: req.params.id,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    tag: req.body.tag,
    picture_location: req.body.picture_location,
  }
      items_controller.update_item(object_item,function (result) {
        res.json(result)
    })

});
router.delete('/api/items/:id', function(req, res, next) {
  items_controller.delete_item({id: req.params.id},function (result) {
    res.json(result)
})
});

module.exports = router;
