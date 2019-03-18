const http = require("http");
const app = require('./backend/app');
const port = process.env.PORT||3000;
app.set('port',)
const server = http.createServer((app) => {
  res.end("This is my first response");
});
server.listen(port);