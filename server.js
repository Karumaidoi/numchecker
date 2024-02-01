// Requring modules
const dotenv = require("dotenv");

const app = require("./app");

// Configuring our environment variables
dotenv.config({ path: "./env" });

// Setting up the server and a PORT configurations
// Provide a fallback PORT incase it not identified in our env
const port = process.env.PORT || 4400;

// Create the server to serve our requests
// To log our server we can use a package such as Morgan
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
