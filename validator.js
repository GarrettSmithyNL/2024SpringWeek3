var validator = require("validator");

console.log(validator.isEmail("foo@bar.com")); // false
console.log(validator.isISBN("978-3-16-148410-0")); // true
console.log(validator.isMobilePhone("555-555-5555", "en-US")); // true
console.log(validator.isURL("https://www.google.com")); // true
