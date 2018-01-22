const express = require('express');


var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


const router = express.Router();

// declare axios for making http requests
const axios = require('axios');

module.exports = router;