var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));


app.listen(app.get('port'), function () {console.log('server is up on port 3000 or the process.env.PORT');});
