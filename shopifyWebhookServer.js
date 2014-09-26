var express = require('express'),
morgan		= require('morgan'),
bodyParser	= require('body-parser'),
shopify		= require('./routes/shopify');
app 		= express();

app.use(morgan('dev'));
app.use(bodyParser.json());


app.post('/requests', shopify.retrieveRequests);
app.get('/simple', shopify.simpleGetRequests);

app.listen(3000);
console.log('Magic happens on port 8080');


