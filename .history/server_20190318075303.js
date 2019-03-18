const http = require("http");
const app = require("./backend/app");

const normallizePort = val => {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    //name pipe
    return val;
  }
  if (port >= 0) {
    //port number
    return port;
  }
  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const blind = typeof addr === "string" ? "pipe" + addr : "port" + port;
  switch (error.code) {
    case "EACCES":
      console.log(blind + " requires elevated privileges");
      process.exit();
      break;
    case "EACCES":
      console.log(blind + " requires elevated privileges");
      process.exit();
      break;

    default:
      break;
  }
};
