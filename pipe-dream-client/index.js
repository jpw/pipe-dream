'use strict';
const shunter = require('shunter');
const port = process.env.PORT || 5400;

const app = shunter({

	path: {
		themes: __dirname
	},
	port: {
		port
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
console.log('shunter internal port='+port);
app.start();
