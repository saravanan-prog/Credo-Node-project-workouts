import http from 'http'
import Routes from './routes/Routing.js'

const server = http.createServer(async (req, res) => {
    res.writeHead(200, {"content-Type":"application/json"})
    res.setHeader("Access-Control-Origin","*")
    res.setHeader("Access-Control-Methods","GET,POST,PUT,DELETE")
    res.setHeader("Access-Control-Headers","Content-Type")
    try {
        const response = await Routes(req)
        res.write(JSON.stringify(response))
        res.end()
    }
    catch(error){
        console.log("error::::",error)
    }

})

server.listen(8000, () => console.log("Your current port number is 8000"))