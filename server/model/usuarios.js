var mongoose = require('mongoose');

//Função chamada quando se da require nesse arquivo
module.exports = function(){
	var db = require('./../libs/connect_db')();

	var Schema = mongoose.Schema;


	//Definindo a estrutura da minha colection usuarios no db
	var usuarios = Schema({
		cpf: String,
		nome: String,
		telefone: String,
		celular: String,
		email: String
	});
	return db.model('usuarios', usuarios);
}