const http = require('http')  
const port = 3000

const requestHandler = (request, response) => {  
  console.log(request.url)
  response.end('{"payload":"one day kittens will rule us all"}')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('server.js err: ', err)
  }

  console.log(`server is listening on ${port}`)
})
