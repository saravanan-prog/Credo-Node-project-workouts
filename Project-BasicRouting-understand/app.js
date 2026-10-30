import http from 'http'
import Routes from './routes/Routing.js'

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-Type":"application/json",})
    const response = Routes(req,req.method,)
    res.write(JSON.stringify(response))
    res.end()

})

server.listen(8000, () => console.log("Your current port number is 8000"))