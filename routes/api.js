var express = require('express');
var router = express.Router();
var models = require('../models')


router.get('/ingredients', function (req, res, next) {
	models.Ingredients.findAll({
		order: 'name ASC'
	}).then(function (resultIngredients) {
		res.json(resultIngredients)
	})
});

router.post('/ingredients', function (req, res, next) {
	models.Ingredients.create({
		name: req.body.ingredientname,
		isSelected: false,
		ingredientTypeId: 1
	}).then(function () {
		models.Ingredients.findAll({
			order: 'name ASC'
		}).then(function (resultIngredients) {
			res.json(resultIngredients)
		})
	});
});

router.put('/ingredients/', function (req, res, next) {
	models.Ingredients.find({
		where: {
			id: req.body.id
		}
	}).then(function (result) {
		if (result) {
			result.updateAttributes({
				name: req.body.ingredientname,
				isSelected: req.body.isSelected,
				ingredientTypeId: req.body.ingredientTypeId
			}).then(function (result) {
				models.Ingredients.findAll({
					order: 'name ASC'
				}).then(function (resultIngredients) {
					res.json(resultIngredients)
				})
			})
		}
	})
});

router.patch('/ingredients', function (req, res, next) {
	models.Ingredients.find({
		where: {
			id: req.body.id
		}
	}).then(function (result) {
		if (result) {
			result.updateAttributes({
				name: req.body.ingredientname,
			}).then(function (result) {
				models.Ingredients.findAll({
					order: 'name ASC'
				}).then(function (resultIngredients) {
					res.json(resultIngredients)
				})
			})
		}
	})
});

router.delete('/ingredients', function (req, res, next) {
	models.Ingredients.destroy({
		where: {
			id: req.body.id
		}
	}).then(function () {
		models.Ingredients.findAll({
			order: 'name ASC'
		}).then(function (resultIngredients) {
			res.json(resultIngredients)
		})
	});
});


router.post('/users', function (req, res, next) {
	models.Users.create({
		name: req.body.name,
		username: req.body.username,
		password: req.body.password
	}).then(function () {
		models.Users.findAll({
			order: 'name ASC'
		}).then(function (result) {
			res.json(result)
		})
	});
})

module.exports = router;
