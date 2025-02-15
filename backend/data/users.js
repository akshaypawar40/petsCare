import bcrypt from "bcryptjs";
const users = [
  {
    name: "Administrator",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Satyam",
    email: "satyam@gmail.com",
    password: bcrypt.hashSync("123", 10),
    isAdmin: false,
  },
  {
    name: "Vedang",
    email: "vedang@gmail.com",
    password: bcrypt.hashSync("123", 10),
    isAdmin: false,
  },
  // {
  //   name: "Dr Ramesh Kumar",
  //   email: "ramesh.kumar@gmail.com",
  //   password: bcrypt.hashSync("123", 10),
  //   isAdmin: false,
  // },
  // {
  //   name: "Dr Priya Sharma",
  //   email: "priya.sharma@gmail.com",
  //   password: bcrypt.hashSync("123", 10),
  //   isAdmin: false,
  // },
  // {
  //   name: "Dr Arjun Mehta",
  //   email: "arjun.mehta@gmail.com",
  //   password: bcrypt.hashSync("doctor123", 10),
  //   isAdmin: false,
  // },
];

export default users;
