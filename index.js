var fs = require('fs');
var http = require('http');

var server = http.createServer();
server.on('request', function(req, res) {
	if (req.method === 'GET' & req.url === "/") {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		res.write('Success!. Content of index.js: ');
		fs.readFile('index.js', function(err, data) {
			if (err) throw err;
			res.write(data);
			res.end();
		})
	} else {
		res.statusCode = 404;
		fs.readFile('./img/404.jpg', function(err, img) {
			if(err) {
				res.setHeader("Content-Type", "text/html; charset=utf-8");
				res.write("<p>404</p>");
				res.end();
			} else {

				res.setHeader("Content-Type", "image/jpg");
				res.write(img);
				res.end();
			}
		})
	}
});

server.listen(8080);
