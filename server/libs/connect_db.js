var mongoose = require('mongoose');

// Build the connection string 
var dbURL = 'mongodb://localhost/my_assistence_db'; 


//Função chamada quando se da require
module.exports = function() {
	var db;
	if(!db)
	{
		db = mongoose.createConnection(dbURL);
	}

	console.log("Db conectado: " + db);
	return db;
}