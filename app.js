import http from 'http'
import userInformation from './json/userInformation.json' with {type: "json"}

const server = http.createServer((req, res) => {

    res.writeHead(200,
        {
            "Content-Type": "application/json"
        }
    )

    if (req.url === "/users" && req.method === "GET") {

        res.write(JSON.stringify(userInformation));

    }


    else {
        res.write("Hello Welcome to Node Js world")
    }

    res.end()
})

server.listen(8000, () => console.log("Your current port number is 8000"))