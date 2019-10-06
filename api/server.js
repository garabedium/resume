//server.js
const express = require('express'),
      { port } = require('./config'),
      app = express(),
      bodyParser = require('body-parser');

app.listen(port);

console.log('Express server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/routes');
routes(app); //register the route 