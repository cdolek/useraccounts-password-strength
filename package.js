Package.describe({
    name: 'cenk:accounts-password-strength',
    version: '0.0.1',
    summary: 'This package allows you to set strong passwords for your meteor-useraccounts enabled meteor application. Also places a strength indicator.',
    git: 'https://github.com/cdolek/accounts-password-strength/tree/master',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.3.2.4');
    api.use('ecmascript');
    api.use('useraccounts:bootstrap');
    api.use('accounts-password');
    api.use('check');
    api.use(['templating'], 'client');
    api.addFiles([
        'atTextInputWithPasswordStrength.css',
        'atTextInputWithPasswordStrength.html',
        'atTextInputWithPasswordStrength.js'
    ], 'client');
    api.mainModule('accounts-password-strength.js');
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('cenk:accounts-password-strength');
    api.mainModule('accounts-password-strength-tests.js');
});
