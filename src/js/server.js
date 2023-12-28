const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./database");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./routes");
routes(app);

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});