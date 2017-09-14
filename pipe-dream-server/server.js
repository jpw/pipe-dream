const express = require('express')
const app = express()
const port = process.env.PORT || 5401;
const payload = {
	layout: {
		template: 'root',
		namespace: 'ns'
	},
	context: {
		title: 'data-driven title',
		main: 'one day kittens will rule us all'
	},
	port: port
};

app.disable('etag');

app.get('/', function (req, res) {
	res.setHeader('Content-Type', 'application/x-shunter+json');
	res.send(JSON.stringify(payload))
})

app.listen(port, function () {
	console.log('Example app listening on ' + port)
})


