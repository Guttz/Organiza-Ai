const express = require('express');


var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const app = express();

app.get('/get_cards', (req, res) => {
	var MongoClient = require('mongodb').MongoClient;

	MongoClient.connect('mongodb://localhost/my_assistence_db', function(err, db) {
	  if (err) {
	    throw err;
	  }
	  db.collection('cards').find().toArray(function(err, result) {
	    if (err) {
	      throw err;
	    }
	    res.send(result);
	  });
	});
});



app.post('/add_cli', function(req, res, next){
	var model = require('./server/model/usuarios')();  
  
  //Variavel que recebe os dados do fomulario
  var body = req.body;
  body.status = false;

  model.create(body, function(err, usuario){
    if(err)
    {
      throw err;
    }

    res.redirect('/');
  })

});

app.post('/add_orca', function(req, res, next){
  var model = require('./server/model/orca')();  
  console.log(req.param("marca"));
  //Variavel que recebe os dados do fomulario
  var body = req.body;
  body.status = false;

  model.create(body, function(err, usuario){
    if(err)
    {
      throw err;
    }

    res.redirect('/');
  })

});


app.post('/add_card', function(req, res, next){
  var model = require('./server/model/cards')();

  //Variavel que recebe os dados do fomulario
  var body = req.body;
  body.status = false;

  model.create(body, function(err, usuario){
    if(err)
    {
      throw err;
    }

    res.redirect('/');
  })

});

module.exports = router;