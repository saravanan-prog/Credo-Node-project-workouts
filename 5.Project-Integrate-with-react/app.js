
import http from 'http'
import Routes from './routes/Routing.js'

const server = http.createServer(async (req, res) => {

    // CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")

    // Handle browser preflight request
    if (req.method === "OPTIONS") {
        res.writeHead(204)
        return res.end()
    }

    try {

        const response = await Routes(req)

        if (response === undefined) {
            res.writeHead(404)
            return res.end(JSON.stringify({
                message: "Route returned undefined"
            }))
        }

        res.writeHead(response.statusCode || 200)
        res.end(JSON.stringify(response))

    }
    catch (error) {

        console.log("Error:", error)
    }

})

server.listen(8000, () => {
    console.log("Server running on port 8000")
})
