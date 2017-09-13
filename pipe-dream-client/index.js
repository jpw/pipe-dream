var shunter = require('shunter');

var app = shunter({

	// Configure the proxy route, this should point to
	// where your back end application runs
	routes: {
		localhost: {
			default: {
				host: '127.0.0.1',
				port: 5401
			}
		}
	}

});

app.start();
