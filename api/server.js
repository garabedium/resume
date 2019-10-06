//server.js
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      port = process.env.PORT || 3000;

app.listen(port);

console.log('Express server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/routes');
routes(app); //register the route