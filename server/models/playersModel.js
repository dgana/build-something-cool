var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var playersSchema = new Schema({

module.exports = mongoose.model('players', playersSchema);