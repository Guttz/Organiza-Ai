// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
// Faz o site funcionar
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


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


app.post('/get_user', (req,res) =>{

	console.log("Running get_user Post.");
	var MongoClient = require('mongodb').MongoClient;
	MongoClient.connect('mongodb://localhost/my_assistence_db', function(err, db) {
	  if (err) {
	    throw err;
	  } 

	  if(req.param('cpf') != undefined)
	  {
	  	db.collection('usuarios').findOne( { cpf: req.param('cpf') }, function(err, result) {
	  	  if (err) {
	  	    throw err;
	  	  }
	  	  //Checking if founded any user
	  	  if(result != null)
	  	  {
	  	  	console.log("The user is present on DB");
	  	  	res.send(result);
	  	  }
	  	  else
	  	  {
	  	  	console.log("The user is not present on DB");
	  	  	res.send(null);
	  	  }
	  	});
	  }
	  else
	  {
	  	console.log("Can't get the CPF to make get_user post");
	  	res.send(null);
	  }
	});
		
});

app.post('/update_cli', function(req, res, next){
	console.log("Running update_cli Post.");
	var MongoClient = require('mongodb').MongoClient;

	MongoClient.connect('mongodb://localhost/my_assistence_db', function(err, db){
		if(err)	{
			throw err;
		}

		//Checking if the params has at least a valid cpf
		if(req.param('cpf') != undefined)
	  {
	  	db.collection('usuarios').update( { cpf: req.param('cpf') }, req.body, function(err, result){
	  		if(err)
	  		{
	  			throw err;
	  		}
	  		else
	  		{
	  			console.log("Update_cli with success");
	  			res.send('');
	  		}
	  	});
	  }
	  else
	  {
	  	console.log("Invalid params, can't complete update_cli");
	  }

	})
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


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
//console.log(api);

server.listen(port, () => console.log(`API running on localhost:${port}`));
