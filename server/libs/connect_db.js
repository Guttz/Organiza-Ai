var mongoose = require('mongoose');

//Função chamada quando se da require
module.exports = function(ass) {
	var db;
	if(!db)
	{
		db = mongoose.createConnection( 'mongodb://localhost/' + ass);
	}

	return db;
}