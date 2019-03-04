const express = require("express");
const app = express();
const port = 3000;
const { version } = require("./package.json");

app.get("/", (req, res) => res.send("Hello k8s!"));
app.get("/version", (req, res) => res.send(version));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
