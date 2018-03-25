var http = require('http');
var url = require('url');

function startserver(router) {

	var server = http.createServer(function(request, response) {
		response.writeHead(200, {
			"Content-Type": "text/html"
		});
		var path=url.parse(request.url).pathname
		//router
		router(path,request,response);
	});
	server.listen(3000);
	console.log("server start");
}

exports.startserver = startserver;