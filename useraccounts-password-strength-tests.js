// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by useraccounts-password-strength.js.
import { name as packageName } from "meteor/useraccounts-password-strength";

Tinytest.add('useraccounts-password-strength - example', function (test) {
  // test.equal(packageName, "useraccounts-password-strength");
});
