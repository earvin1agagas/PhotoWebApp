const checkUsername = (username) => {
    /* ^    --> start of the string
    *  \D   --> anything NOT a digit [^0-9]
    *  \w   --> anything that is an alphanumeric character [a-zA-Z0-9]
    *  {2,} --> 2 or more characters w/ NO UPPER LIMIT
    *
    * */
    let usernameChecker = /^\D\w{2,}$/;
    return usernameChecker.test(username);
}
/*Checking if password has at least one number
*  and at least 6 characters long
* */
const checkPassword = (password) => {
    let passwordChecker = /^(?=.*\d)([a-zA-Z0-9]){6,16}$/;
    return passwordChecker.test(password);
}

const checkEmail = (email) => {
    let emailChecker = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailChecker.test(email);
}

const registerValidator = (req,res,next) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    if(!checkUsername(username)) {
        req.flash('error','invalid username!!!');
        req.session.save(err => {
            res.redirect("/registration");
        });
    } else if(!checkPassword(password)){
        req.flash('error','invalid password!!!');
        req.session.save(err => {
            res.redirect("/registration");
        });

    } else if(!checkEmail(email)) {
        req.flash('error','invalid email!!!');
        req.session.save(err => {
            res.redirect("/registration");
        })
    }
    else{
        next();
    }
}

const loginValidator = (req,res,next) => {
 let username = req.body.username;
 let password = req.body.password;

 if(username == null || username == "" || password == null || password ==""){
    req.flash('error','invalid username/password!');
    req.session.save(err => {
        res.redirect("/login");
    })
 }
 else {
     next();
 }



}

module.exports = {registerValidator, loginValidator}