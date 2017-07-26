let http = require('http');
let static = require('node-static');
let file = new static.Server('.', {
	cache: 0
});

function accept(request, response) {
	if (request.url.slice(0, 6) === '/data') {
		setTimeout(() => {
			file.serve(request, response);
		}, 100);
	} else {
		file.serve(request, response);
	}
}

http.createServer(accept).listen(3000);

console.log('Server running on port 3000');