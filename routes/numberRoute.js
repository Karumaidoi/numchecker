/*
This is the Route for our Number Checker
*/
const express = require("express");
const numberController = require("../controllers/numberController");

// Configiring our express router
const router = express.Router();

/*
Adding HTTP Methods on the router -> [GET,POST]
Inside the GET Method -> Pass the controller method that will be executed when this endpoint is fired
*/
router.route("/").get(numberController.checkNumber);

// Exporting the route
module.exports = router;
