// Require our core Module if any

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
};
