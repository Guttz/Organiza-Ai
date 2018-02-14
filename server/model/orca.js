	var mongoose = require('mongoose');

//Função chamada quando se da require nesse arquivo
module.exports = function(ass){

	db = mongoose.createConnection( 'mongodb://localhost/' + ass);

	var Schema = mongoose.Schema;

	//Definindo a estrutura da minha colection usuarios no db
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
