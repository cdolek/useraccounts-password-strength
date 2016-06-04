// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by accounts-password-strength.js.
import { name as packageName } from "meteor/accounts-password-strength";

// Write your tests here!
// Here is an example.
Tinytest.add('accounts-password-strength - example', function (test) {
  test.equal(packageName, "accounts-password-strength");
});
