const express = require('express')
const app = express()
const port = 6401;

const payload = {
	layout: {
		template: 'root',
		namespace: 'ns'
	},
	context: {
		title: 'data-driven title',
		main: 'one day kittens will rule us all'
	}
};

app.get('/', function (req, res) {
	res.setHeader('Content-Type', 'application/x-shunter+json');
	res.send(JSON.stringify(payload))
})

app.listen(port, function () {
	console.log('Example app listening on ' + port)
})
