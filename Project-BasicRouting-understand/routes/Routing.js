import { getUsers,addUser } from '../module/UserModule.js'
 
export default function Routes(req, method) {

    var response = {}

    if (req.url === "/" && method === "GET") {
        response = {
            statusCode: 200,
            statusMessage: "success",
            data: "Hello My First Node Js Program"
        }
    }

    if (req.url === "/users" && method === "GET") {

        response = {
            statusCode: 200,
            statusMessage: "success",
            data: getUsers()
        }
    }

    if (req.url === "/add-users" && method === "POST") {

        var body = ""
        var data
        

        req.on("data", (chunk) => body += chunk )
        req.on("end",(chunk) => {
            data =  addUser(body)

            response = {
                statusCode: 200,
                statusMessage: "success post data",
                data: JSON.stringify(data)
            }
           
        })

         
    }
    return response
   
}