const express = require('express')
const app = express()
const port = process.env.PORT || 5401;

const payloadTemplate = {
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

let defaultPayload = JSON.parse(JSON.stringify(payloadTemplate));

app.disable('etag');

app.get('/', function (req, res) {
	res.setHeader('Content-Type', 'application/x-shunter+json');
	res.send(JSON.stringify(defaultPayload));
})

app.get('/500/', function (req, res, next) {
	let err = new Error();
	err.status = 500;
	err.message = 'Internal Server Error';
	next(err);
})

app.get('*', function(req, res, next) {
	let err = new Error();
	err.status = 404;
	err.message = 'Resource Not Found';
	next(err);
});

// error middleware
app.use(function(err, req, res, next) {
	let errorPayload = payloadTemplate;
	errorPayload.layout.template = 'error';
	errorPayload.context.title = errorPayload.context.main = err.message;

//	res.setHeader('Content-Type', 'application/x-shunter+json');
//	res.status(err.status).send(JSON.stringify(errorPayload))
	res.status(err.status).send(err.message)
});

app.listen(port, function () {
	console.log('Example app listening on ' + port)
})
