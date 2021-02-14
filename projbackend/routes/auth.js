const express = require('express');
const router = express.Router();
const {signout, signup, signin, isSignedIn} = require('../controllers/auth');
const {check} = require('express-validator');

router.post('/signup',
    [check("name", "name should be atleast 3 characters").isLength({min:3}),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required should be 3 characters").isLength({min:3})]
, signup);

router.post('/signin',
    [check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({min:3})]
, signin);


router.get('/signout', signout);

module.exports = router;