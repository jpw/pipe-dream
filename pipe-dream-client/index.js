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
	},
	errorPages: {
		errorLayouts: {
			default: 'error'		},
		staticData: {
			context: {
				title: 'client-provided error title',
				main: 'there was an error'
			}
		}
	}
});
console.log('shunter internal port='+port);
app.start();
