let http = require('http');
let static = require('node-static');
let file = new static.Server('.', {
	cache: 0
});

function accept(request, response) {

	if (!request.url.startsWith('/data')) {
		request.url = '/public' + request.url;
		file.serve(request, response);
		return;
	}

	setTimeout(() => {
		response.setHeader("Access-Control-Allow-Origin", '*');

		file.serve(request, response);
	}, 100);
}

http.createServer(accept).listen(3000);

console.log('Server running on port 3000');