'use strict';

var GetLinksResourceHandler = function GetLinksResourceHandler(){};
var getLinksService = require('../db/getlinksservice');

GetLinksResourceHandler.prototype.getHandlerForGetLinks = function getHandlerForGetLinks(){
	return function(req, res){
		if(!req.query.tableName){
			res.status(400).send('tableName query parameter must be specified.');
		} else if (!req.query.selectedFields && !req.query.countOnly) {
			res.status(400).send('you must select at least one field to query.');
		} else {
			var options = {};
			var tableName = req.query.tableName;
			for (var k in req.query){
				if(k !== "tableName"){
					options[k] = req.query[k];
				}
			}
			getLinksService.getLinks(tableName, options, req.user)
				.then(function(rows){
					res.status(200).send(rows);
				})
				.catch(function(err){
					res.status(500).send(err);
				});
		}
	};
};

module.exports = new GetLinksResourceHandler();
