var mongoose = require('mongoose');

//Função chamada quando se da require nesse arquivo
module.exports = function(){
	var db = require('./../libs/connect_db')();

	var Schema = mongoose.Schema;


	//Definindo a estrutura da minha colection orca no db
	var orca = Schema({
		    cpf: String,
			defeito: String,
			marca: String,
			data: Date,
			modelo: String,
			periodo: String
	});
	return db.model('orca', orca);
}