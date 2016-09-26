var mongoose = require('mongoose'),
	Schema = mongoose.Schema

var DataSchema = new Schema({
	name: String,
	species: String
})

module.exports = mongoose.model('Data', DataSchema)