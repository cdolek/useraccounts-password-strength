# cenk:useraccounts-password-strength
This package allows you to set strong passwords for your meteor-useraccounts enabled meteor application. Also places a strength indicator.

Uses
- [meteor-useraccounts](https://github.com/meteor-useraccounts)
- [useraccounts:bootstrap](https://github.com/meteor-useraccounts/bootstrap/)

## Usage
Replaces "password" field with a text input having a password strength indicator below.

Requires **strong passwords** as default with the following rules:

- Min 8 characters
- Uppercase letters
- Lowercase letters
- [0-9] digits
- [$@$!%*#?&] special characters

## Css
Colors for strength levels
``` css
.strengthLevelNone {
    background-color: rgb(221, 221, 221);
}
.strengthLevelLow {
    background-color: rgb(255, 100, 0);
}
.strengthLevelMedium {
    background-color: rgb(255, 100, 0);
}
.strengthLevelHigh {
    background-color: rgb(255, 100, 0);
}
.strengthLevelStrong {
    background-color: rgb(0, 200, 0);
}
```

## Changelog
- v0.0.1 Initial version

## ToDo
- Customization options
- Server side validation
- Other styles than Bootstrap

## LICENSE
MIT
