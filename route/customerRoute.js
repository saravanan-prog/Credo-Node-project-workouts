import { addCustomer, checkTheCustomer } from "../modules/CustomersModule.js";

// customerWorkout
export const RegisterCustomer = (customerPayload) => {
  var response = {};
  if (customerPayload) {
    response.statusCode = 201;
    ((response.statusMessage = "SUCCESS"),
      (response.data = addCustomer(customerPayload)));
  } else {
    response.statusCode = 400;
    response.statusMessage = "Failed";
  }
  return response;
};

export const login = ({ email, password }) => {
  var response = {};
  const data = checkTheCustomer(email, password);

  if (data && data.length != 0) {
    response.statusCode = 200;
    response.statusMessage = "SUCCESS";
    response.data = data;
  } else {
    response.statusCode = 401;
    response.statusMessage = "Un authroized access";
  }

  return response;
};
