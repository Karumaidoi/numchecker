// Requring modules
const dotenv = require("dotenv");

// Configuring our environment variables
dotenv.config({ path: "./env" });

// Setting up the server and a PORT configurations
// Provide a fallback PORT incase it not identified in our env
const port = process.env.PORT || 4400;

// Create the server to serve our requests
const server = 

