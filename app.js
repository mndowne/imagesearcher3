var express = require('express');
var app = express();

app.set('port', process.env);

app.listen(app.get('port'));
