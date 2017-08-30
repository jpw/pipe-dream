const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('{"payload":"one day kittens will rule us all"}')
})

app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})
