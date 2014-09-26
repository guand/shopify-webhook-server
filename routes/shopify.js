exports.retrieveRequests = function(req, res){

}

exports.simpleGetRequests = function(req, res){
	var json_item = {"first_name": "Hello", "last_name": "World!"};
	res.send(json_item);
}