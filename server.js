const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = '/home/vivek/Projects/node-express-sequelize-postgresql/Trainee_Frontend';

const app = express();

app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./Trainee_backend/models");

db.sequelize.sync();

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

require("./Trainee_backend/routes/turorial.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
})