const express = require('express')
const app = express()

const payload = {
	layout: {
		template: 'root',
		namespace: 'ns'
	},
	context: {
		main: 'one day kittens will rule us all'
	}

};

app.get('/', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(payload))
})

app.listen(8080, function () {
	console.log('Example app listening on port 3000!')
})
