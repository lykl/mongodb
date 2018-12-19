var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = new mongoose.Schema({
    name: String,
    password: String,
    sex: String
});
schema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', schema, 'users'); // Model.paginate()