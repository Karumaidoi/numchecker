// Requiiring our Core Modules
const express = require("express");
const morgan = require("morgan");
const numberRoute = require("./routes/numberRoute");

// Setup our express application
const app = express();

/*
Configuring Morgan
Morgan will be responsible to log out serve responses in a more better way
Concise output colored by response status for development use. 
*/
app.use(morgan("dev"));

/*
Making our express app use JSON
Returns middleware that only parses json 
and only looks at requests where the Content-Type header matches the type option.
*/
app.use(express.json());

// Configuring app routes
app.use("/api", numberRoute);

// Export the express app so that it can be used during
// firing up the server
module.exports = app;
