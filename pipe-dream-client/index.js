'use strict';

var shunter = require('shunter');

var app = shunter({

	path: {
		themes: __dirname
	},
	routes: {
		localhost: {
			default: {
				host: 'localhost',
				port: 6401
			}
		}
	}
});

app.start();
