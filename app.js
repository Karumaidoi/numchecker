// Requiiring our Core Modules
const express = require("express");

// Setup our express application
const app = express();

/*
Making our express app use JSON
Returns middleware that only parses json 
and only looks at requests where the Content-Type header matches the type option.
*/
app.use(express.json());

// Export the express app so that it can be used during
// firing up the server
module.exports = app;
