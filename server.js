// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
     res.setHeader('Access-Control-Allow-Origin', 'http://myas:3000');

     //doesnt work separetely
     res.setHeader('Access-Control-Allow-Origin', 'http://myas');

     //doesnt work separetely
    res.setHeader('Access-Control-Allow-Origin', 'http://ec2-54-210-153-102.compute-1.amazonaws.com:80');

    //The last one works
    res.setHeader('Access-Control-Allow-Origin', 'http://ec2-54-210-153-102.compute-1.amazonaws.com:3000');

    // Request methods you wish to allow
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use(session({
	secret: 'faeb4453e5d14fe6f6d04637f78077c76c73d1b4',
	proxy: true,
	resave: true,
	saveUninitialized: true,
	store: new MongoStore({ url: 'mongodb://localhost/my_assistence_db' })
	})
);

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
	console.log("here am I again");
	  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '80';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));