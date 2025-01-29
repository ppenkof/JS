function passwordValidator(passStr) {
    function checkPassLength(pass) {
        if (pass.length < 6 || pass.length > 10) {
            console.log("Password must be between 6 and 10 characters");
            return false;
        } else {
            return true;
        }
    }

    function checkOnlyAlphanumeric(pass) {
        let pattern = /^[A-Za-z0-9]+$/; //Regex
        // for (let i = 0; i < pass.length; i++) {
        //     let currChar = Number(pass[i].charCodeAt());
        //     if (!((currChar >= 48 && currChar <= 57) || (currChar >= 65 && currChar <= 90) || (currChar >= 97 && currChar <= 122))) {
        //         console.log("Password must consist only of letters and digits");
        //         return false;
        //     }
        // }
        // return true;
        if (pattern.test(pass)) {
            return true;
        } else {
            console.log("Password must consist only of letters and digits");
            return false;
        }
    }

    function check2Digit(pass) {
        // let count = 0;
        // for (let i = 0; i < pass.length; i++) {
        //     let currChar = Number(pass[i].charCodeAt());
        //     if (currChar >= 48 && currChar <= 57) {
        //         count++;
        //     }
        // }
        // if (count < 2) {
        //     console.log("Password must have at least 2 digits");
        //     return false;
        // } else {
        //     return true;
        // }
        let pattern = /[0-9]{2,}/;
        if (pattern.test(pass)) {
            return true;
        } else {
            console.log("Password must have at least 2 digits");
            return false;
            
        }
    }

        let isValidLength = checkPassLength(passStr);
        let isAlphanumeric = checkOnlyAlphanumeric(passStr);
        let has2Digit = check2Digit(passStr);
        if (isAlphanumeric && isValidLength && has2Digit) {
            console.log("Password is valid");
        }
    }
    passwordValidator('Pa$s$s')
    passwordValidator('MyPass123')
    passwordValidator('logIn')