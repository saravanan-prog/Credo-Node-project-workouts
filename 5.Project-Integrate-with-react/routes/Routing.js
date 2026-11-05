import { getUsers, addUser } from "../module/UserModule.js";

export default function Routes(req, method) {
  if (req.url === "/users" && req.method === "GET") {
    let promise = new Promise((resolve, reject) => {
      let response = getUsers();
      resolve(response);
    });
    return promise;
  }
}
