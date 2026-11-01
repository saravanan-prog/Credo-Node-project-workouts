import http from 'http'

const server = http.createServer((req, res) => {

    res.write("Hello world welcome to node Js world")
    res.end()
})

server.listen(8000, () => console.log("Your current port number is 8000"))