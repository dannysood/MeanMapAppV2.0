// Dependencies
// -----------------------------------------------------
var express         = require('express');
var mongoose        = require('mongoose');
var port            = process.env.PORT || 3000;
var database        = require('./app/config');
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var app             = express();

// Express Configuration
// -----------------------------------------------------
// Sets the connection to MongoDB
const userBuffer = new Buffer.from(process.env.DATABASE_USER, 'base64')
const user = userBuffer.toString();
const passwordBuffer = new Buffer.from(process.env.DATABASE_PASSWORD, 'base64')
const password = passwordBuffer.toString();
const hostBuffer = new Buffer.from(process.env.DATABASE_HOST, 'base64')
const host = hostBuffer.toString();
const dbnameBuffer = new Buffer.from(process.env.DATABASE_NAME, 'base64')
const dbname = dbnameBuffer.toString();
const portBuffer = new Buffer.from(process.env.DATABASE_PORT, 'base64')
const dbport = portBuffer.toString();
console.log("###############@@@@@@@@@@@@@@@@@@@@@@@@@", {
    name: "MongoDB Service",
    url: "mongodb://" + user + ":" + password + "@" + host + "/" + dbname,
    port: dbport
});

mongoose.connect(database.bitnami.url);

// Logging and Parsing
app.use(express.static(__dirname + '/public'));                 // sets the static files location to public
app.use('/bower_components',  express.static(__dirname + '/bower_components')); // Use BowerComponents
app.use(morgan('dev'));                                         // log with Morgan
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json
app.use(methodOverride());

// Routes
// ------------------------------------------------------
require('./app/routes.js')(app);

// Listen
// -------------------------------------------------------
app.listen(port);
console.log('App listening on port ' + port);
