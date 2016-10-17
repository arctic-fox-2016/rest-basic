//grab all dependencies
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	router = express.Router(),
	port = process.env.PORT || 9000,
	mongoose = require('mongoose')

//configure app
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//routes
router.get('/', function(req,res) {
	res.send('this is the API!')
})

//register routes to /api
app.use('/API',router)

//start server
app.listen(port)
console.log('The magics happen on port: ' + port)

//setup database
mongoose.connect('mongodb://ryan:1234@ds023105.mlab.com:23105/datas')
var Data = require('./server/models/data')

router.route('/data')

	.post(function(req,res){
		var data = new Data()
		data.name = req.body.name
		data.species = req.body.species

		data.save(function(err){
			if(err)
				res.send(err)

			res.send('data is succesfully made!')
		})
	})

	.get(function(req,res){
		Data.find(function(err,datas){
			if(err)
				res.send(err)

			res.send(datas)
		})
	})

router.route('/data/:id')

	.get(function(req,res){
		Data.findById(req.params.id, function(err, data){
			if(err)
				res.send(err)

			res.send(data)
		})
	})

	.put(function(req,res){
		Data.findById(req.params.id, function(err,data){
			if(err)
				res.send(err)

			data.name = req.body.name
			data.species = req.body.species

			data.save(function(err){
				if(err)
					res.send(err)

				res.send('data succesfully updated!')
			})
		})
	})

	.delete(function(req,res){
		Data.remove({
			_id: req.params.id
		}, function(err, data){
			if(err)
				res.send(err)

			res.send('data succesfully deleted!')
		})
	})
