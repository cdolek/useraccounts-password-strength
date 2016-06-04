Package.describe({
  name: 'cenk:accounts-password-strength',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'This package allows you to set password strength for your meteor application.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/cdolek/accounts-password-strength/tree/master',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.use('accounts-password');
  api.mainModule('accounts-password-strength.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('cenk:accounts-password-strength');
  api.mainModule('accounts-password-strength-tests.js');
});
