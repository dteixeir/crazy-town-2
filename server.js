var express = require('express');

var app = express();

app.use(express.static('./app'));

var port = process.env.PORT || 3000;

app.listen(port);
console.log('listening on port ' + port);