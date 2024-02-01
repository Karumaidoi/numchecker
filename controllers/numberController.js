// Require our core Module if any
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

/*
Create an  function that will be 
responsible to creating the JSON File

res -> It's our request's response
resultObject -> The Object to be written inside the JSON file
*/
const createJSON = (res, resultObject) => {
  // Create a random name for our JSON File
  const randomNumber = uuidv4();

  // Write a result to a JSON file using the FS module
  fs.writeFile(
    `output-${randomNumber}.json`,
    JSON.stringify(resultObject, null, 2),
    (err) => {
      if (err) {
        res
          .status(500)
          .json({ status: "failed", message: "Error writing to JSON file" });
      } else {
        // Sending the API Response
        res.status(200).json(resultObject);
      }
    }
  );
};

/*
Create an export function that will be 
executed when the "/" route is fired

req -> Represents the request object of our API request [Object holds Params, queries etc]
res -> It's our request's response
next -> Calls our next middleware in the Stack if any
*/
exports.checkNumber = (req, res, next) => {
  // This is a [GET] request so the Number is in the Request Query
  const { number } = req.query;

  //Guard check to check if the number is an empty String
  // If the number is an empty String return immediately with an error 400 -> Bad Request
  if (number == "") {
    res.status(400).json({
      status: "failed",
      message: "Invalid Number. Please provider a valid number",
    });
  }

  // The number is a String so we change it to a number -> Using Number Method or ParseInt or + sign
  const inputNumber = Number(number);

  // Check if the inputNumber is a number ot Not
  // If the number is not a NaN return immediately with an error 400 -> Bad Request
  if (isNaN(inputNumber)) {
    res.status(400).json({
      status: "failed",
      message: "Invalid Number. Please provider a valid number",
    });
  }

  /*
  Create a varibale to store our output
  The variable should be a let variable because it will change
  It is empty at the beginning
  */
  let result = "";

  // Check if it's divisible by 5
  if (inputNumber % 5 == 0) {
    result = "L";
  }

  // Check if it divible by 7
  if (inputNumber % 7 == 0) {
    result = "R";
  }

  // Check if its a Multiple of both 5 & 7
  if (inputNumber % 5 == 0 && inputNumber % 7 == 0) {
    result = "LR";
  }

  //By this time if the result is still empty string then the number is not a divisor of either 7 or 5
  if (result === "") {
    result = inputNumber.toString();
  }

  const resultObject = { status: "success", result };

  // Call our fn to create and store the JSON File
  createJSON(res, resultObject);
};
