var proxy = require('express-http-proxy');
var app = require('express')();

app.use('/', proxy('http://localhost:3000'));
app.use('/api', proxy('http://localhost:3001'));

app.listen(8888)