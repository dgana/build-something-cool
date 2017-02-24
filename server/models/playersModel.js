var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var playersSchema = new Schema({	'name' : String,	'score' : Number});

module.exports = mongoose.model('players', playersSchema);
