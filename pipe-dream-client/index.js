'use strict';

var shunter = require('shunter');

var app = shunter({

	path: {
		themes: __dirname
	},
	routes: {
		localhost: {
			default: {
				host: 'localhost', 	// prod, http://pd-server.local.pcfdev.io/
				port: 5401			// prod, 80
			}
		}
	}
});

app.start();


