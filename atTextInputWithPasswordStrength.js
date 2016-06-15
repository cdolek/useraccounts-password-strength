import {
    getPasswordStrength
} from './useraccounts-password-strength.js';

const enabledStatesArr = ["enrollAccount", "signUp", "resetPwd", "changePwd"];

Template.atForm.onCreated(function() {
    if (typeof this.data.state !== 'undefined') {
        if (enabledStatesArr.indexOf(this.data.state) > -1) {
            AccountsTemplates.setState(this.data.state);
        }
    }
});

Template.atTextInputWithPasswordStrength.onCreated(function() {
    this.strength = ReactiveVar(0);
    this.strengthText = ReactiveVar('');
});

Template.atTextInputWithPasswordStrength.helpers({
    showStrengthLevel: function() {
        return enabledStatesArr.indexOf(AccountsTemplates.getState()) > -1;
    },
    strength: function() {
        return Template.instance().strength.get();
    },
    strengthText: function() {
        return Template.instance().strengthText.get();
    },
    strengthClassName: function(strengthLevel) {
        var strength = Template.instance().strength.get();
        if (strengthLevel > (strength + 1)) {
            return 'strengthLevelNone';
        } else if (strength <= 1) {
            return 'strengthLevelLow';
        } else if (strength <= 2) {
            return 'strengthLevelMedium';
        } else if (strength <= 3) {
            return 'strengthLevelHigh';
        } else {
            return 'strengthLevelStrong';
        }
    }
});

Template.atTextInputWithPasswordStrength.events({
    "keyup input": function(event, templateInstance) {
        var password = $(event.target).val();
        var result = getPasswordStrength(password);
        templateInstance.strength.set(result.strength);
        templateInstance.strengthText.set(result.strengthText);
    },
});
