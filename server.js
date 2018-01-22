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
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

var model = require('./server/model/usuarios')();

app.post('/add', function(req, res, next){
  //Variavel que recebe os dados do fomulario

  var body = req.body;
  body.status = false;
  console.log("cpf recebido : " + req.param('cpf'));
  console.log("nome recebido : " + req.param('nome'));
  console.log("telefone recebido : " + req.param('telefone'));
  console.log("celular recebido : " + req.param('celular'));
  console.log("email recebido : " + req.param('email'));
  console.log("body recebido: " + body);
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
server.listen(port, () => console.log(`API running on localhost:${port}`));