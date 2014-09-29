var request = require('request');


exports.retrieveRequests = function(req, res){
	// console.log(req);
	var order = req.body,
	items = [],
	shopify_items = order.line_items;

	for(var i = 0, len = shopify_items.length; i < len; ++i){
		var url_title = (shopify_items[i].title).split(' ').join('-');
		var item_object = {
			"itemId": shopify_items[i].id,
			"title": shopify_items[i].title,
			"quantityAvailable": "",
			"quantitySold": shopify_items[i].quantity,
			"itemPrice": shopify_items[i].price,
			"productId": {
				"value": shopify_items[i].sku,
				"type": "sku"
			},
			"viewURL": "https://" + res.headers['x-shopify-shop-domain'] + "/products/" + url_title,
			"categories": []
		}
		items.push(item_object);
	}
	res.end("OK");
}

exports.simpleGetRequests = function(req, res){
	var json_item = {"first_name": "Hello", "last_name": "World!"};
	res.send(json_item);
}