var mongoose = require('mongoose');

//Função chamada quando se da require nesse arquivo
module.exports = function(){
	var db = require('./../libs/connect_db')();

	var Schema = mongoose.Schema;


	//Definindo a estrutura da minha colection cards no db
	var cards = Schema({
		    id: String,
		    description: String,
		    client: String,
		    number: String,
		    date: Date,
		    day: Number,
		    month: Number,
		    period: String,
		    adress: String
	});
	return db.model('cards', cards);
}