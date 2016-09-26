//grab all dependencies
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	router = express.Router(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose')

//configure app
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//routes
router.get('/', function(req,res) {
	res.send('Ini API nya!')
})

router.route('/datas')

	.post(function(req,res){
		var data = new Data()
		data.name = req.body.name
		data.species = req.body.species

		data.save(function(err){
			if(err)
				res.send(err)

			res.send('data berhasil dibuat!')
		})
	})

	.get(function(req,res){
		Data.find(function(err,datas){
			if(err)
				res.send(err)

			res.send(datas)
		})
	})

router.route('/datas/:id')

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

				res.send('data berhasil diupdate!')
			})
		})
	})

	.delete(function(req,res){
		Data.remove({
			_id: req.params.id
		}, function(err, data){
			if(err)
				res.send(err)

			res.send('data berhasil didelete!')
		})
	})

//register routes to /api
app.use('/api',router) 

//start server
app.listen(port)
console.log('Ya udah jalan di port: ' + port)

//setup database
mongoose.connect('mongodb://tevinstein:tevinstein@ds041506.mlab.com:41506/datas')
var Data = require('./app/models/datas')