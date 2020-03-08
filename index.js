const express = require("express");
require("./db/connection");
const searchCompanyRouter = require("./router/search-company")
var cors = require('cors')



const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); //converts the response request.body into json
app.use(searchCompanyRouter);

app.listen(port, () => {
  console.log("the port is up running at " + port);
});

