exports.retrieveRequests = function(req, res){
	console.log(req.query);
	console.log(req.query.token);
	console.log(req.body);
	res.end("OK");
}

exports.simpleGetRequests = function(req, res){
	var json_item = {"first_name": "Hello", "last_name": "World!"};
	res.send(json_item);
}