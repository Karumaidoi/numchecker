const checkNumber = require("../controllers/numberController");

describe("Number TestCases", () => {
  // Empty String
  test("Empty String", () => {
    var value = checkNumber(""); // assertions

    expect(value).toBe("Invalid Number");
  });

  // A string instead of an integer
  test("Invalid String", () => {
    var value = checkNumber("invalid"); // assertions

    expect(value).toBe("Invalid Number");
  });
});
