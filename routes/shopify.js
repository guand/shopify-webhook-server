var request = require('request');


exports.retrieveRequests = function(req, res){
	// console.log(req);
	var order = req.body,
	items = [],
	shopify_items = order.line_items,
	shipping = order.shipping_lines,
	shipping_cost = 0,
	date = new Date(order.created_at);

	for(var i = 0, len = shopify_items.length; i < len; ++i){
		var url_title = ((shopify_items[i].title).toLowerCase()).split(' ').join('-');
		var item_object = {
			"itemId": shopify_items[i].id,
			"title": shopify_items[i].title,
			"listingFees": 0,
			"quantityAvailable": "",
			"quantitySold": shopify_items[i].quantity,
			"itemPrice": parseFloat(shopify_items[i].price),
			"productId": {
				"value": shopify_items[i].sku,
				"type": "sku"
			},
			"viewURL": "https://" + req.headers['x-shopify-shop-domain'] + "/products/" + url_title,
			"categories": []
		}
		items.push(item_object);
	}
	for(var j = 0, len = shipping.length; j < len; ++j){
		shipping_cost += shipping[j].price;
	}

	var shopify_transaction = {
		"id": order.id,
		"time": date.getTime(),
		"shipCost": shipping_cost,
		"currencyISOCode": order.currency,
		"type": "Fixed Price"
	};

	var shopify_seller = {
		"id": req.headers['x-shopify-shop-domain'],
		"email": "",
		"name": "",
		"countryISOCode": ""
	};

	var shopify_buyer = {
		"id": order.customer.id,
		"email": order.customer.email,
		"name": order.customer.name,
		"countryISOCode": order.shipping_address.country_code,
		"state": order.shipping_address.provice_code,
		"city": order.shipping_address.city,
		"age": "",
		"gender": ""
	}

	var transactions = {
		"transactions": [
			"channelId": "shopify",
			"items": items,
			"transaction": shopify_transaction,
			"seller": shopify_seller,
			"buyer": shopify_buyer,
			"source": "shopify"
		]
	}
	console.log(transaction);
	res.end("OK");
}

exports.simpleGetRequests = function(req, res){
	var json_item = {"first_name": "Hello", "last_name": "World!"};
	res.send(json_item);
}