//server.js
const express = require('express'),
      mysql = require('mysql'),
      { port, host, db, db_user, db_pwd } = require('./config'),
      app = express(),
      bodyParser = require('body-parser');

const mc = mysql.createConnection({
  host: host,
  user: db_user,
  password: db_pwd,
  database: db
})
mc.connect();
console.log('DB connected: ' + db);

app.listen(port);
console.log('Express server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/routes');
routes(app); //register the route 