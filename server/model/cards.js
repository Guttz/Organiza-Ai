var mongoose = require('mongoose');

//Função chamada quando se da require nesse arquivo
module.exports = function(){
	var db = require('./../libs/connect_db')();

	var Schema = mongoose.Schema;


	//Definindo a estrutura da minha colection cards no db
	var cards = Schema({
		cpf: String,
		defeito: String,
		marca: String,
		data: Date,
		modelo: String,
		periodo: String
		nome: String,
		telefone: String,
		celular: String,
		email: String,
		endereco: String,
		observacoes: String
	});
	return db.model('cards', cards);
}