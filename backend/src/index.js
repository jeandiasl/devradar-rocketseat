const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require('http');
const routes = require("./routes.js");
const {
  setupWebsocket
} = require('./websocket');

const app = express();
const server = http.Server(app);
setupWebsocket(server);

mongoose.connect(
  "mongodb+srv://tiindiquei:frKigOTHwlbSvcfD@cluster0-orx7k.gcp.mongodb.net/tiindiqueidb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors({
  origin: "http://localhost:3000"
}));
app.use(express.json());
app.use(routes);

server.listen(3333);