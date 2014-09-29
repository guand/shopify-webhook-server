var request = require('request');


exports.retrieveRequests = function(req, res){
	// console.log(req);
	var order = req.body;
	request('http://pie-eats.myshopify.com/admin/products/370123851.json', function(error, response, body){
		console.log(body);
	});
	res.end("OK");
}

exports.simpleGetRequests = function(req, res){
	var json_item = {"first_name": "Hello", "last_name": "World!"};
	res.send(json_item);
}