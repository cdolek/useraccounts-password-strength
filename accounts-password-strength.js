import {
    AccountsTemplates
} from 'meteor/useraccounts:core';

import {
    Template
} from 'meteor/templating';

AccountsTemplates.removeField('password');

AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    minLength: 8,
    required: true,
    func: function(value) {
        var self = this;
        if (Meteor.isClient) {
            var result = getPasswordStrength(value);
            if (result.strength !== 4) {
                return true; // true means NOT valid
            } else {
                self.setSuccess();
            }
        }
    },
    errStr: 'Does not meet the requirements',
    template: 'atTextInputWithPasswordStrength'
});

Accounts.passwordStrength = {
    rules: {
        upperCase: true,
        lowerCase: true,
        digits: true,
        specialCharacters: true
    },
    strengthTextArr: [
        "",
        "Low",
        "Medium",
        "High",
        "Strong"
    ]
};


export function getPasswordStrength(password) {

    check(password, String);

    var strength = 0;

    if (password.trim().length !== 0) {
        // Regular Expressions
        var regex = new Array();
        regex.push("[A-Z]"); // Uppercase Alphabet.
        regex.push("[a-z]"); // Lowercase Alphabet.
        regex.push("[0-9]"); // Digit.
        regex.push("[$@$!%*#?&]"); // Special Character.

        // Validate for each Regular Expression
        for (var i = 0; i < regex.length; i++) {
            if (new RegExp(regex[i]).test(password)) {
                strength++;
            }
        }
    }
    return {
        strength: strength,
        strengthText: strength ? "Strength: " + Accounts.passwordStrength.strengthTextArr[strength] : '',
        isAtRequiredStrength: strength === 4
    };
}
