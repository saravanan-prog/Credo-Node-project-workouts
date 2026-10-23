var customerList = [
  {
    name: "saravanan",
    email: "saravanan@gmail.com",
    age: 28,
    work: "tcs",
    password: "Test@123",
  },
];

export const addCustomer = (customer) => {
  customerList.push(customer);
  return customerList;
};

export const checkTheCustomer = (email, password) => {
  return customerList.filter(
    (value) => value.email === email && value.password === password,
  );
};
