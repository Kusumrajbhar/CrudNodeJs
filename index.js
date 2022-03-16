const express = require("express");
const mongoose = require("mongoose");
const router = require("./routers/crud");

const url = "mongodb://localhost/CrudNode"; //connect with mongodb having db name CrudeNode with IP address localhost

const app = express();
app.use(router);

app.use(express.json());
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  return console.log("server started");
});
