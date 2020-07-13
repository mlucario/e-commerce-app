const {check} = require('express-validator');

const usersRepo = require('../../repositories/users')

module.exports = {
    requireEmail : check('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .custom(async (email) => {
        const existingUser = await usersRepo.getOneBy({
            email
        });
        if (existingUser) {
            throw new Error('Email in use!');
        }
    }),

    requirePassword : check('password').trim()
    .isLength({
        min: 5,
        max: 20
    })
    .withMessage('Password must between 5 to 20 characters'),

    requirePasswordCOnfirmation: check('password_confirmation').trim()
    .isLength({
        min: 5,
        max: 20
    })
    .withMessage('Password must between 5 to 20 characters')
    .custom((password_confirmation, {
        req
    }) => {
       
        if (password_confirmation !== req.body.password) {
            throw new Error('Password need match');
        }else {
            return true;
        }
    }),
    
    requireEmailExist : check('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage('Must provide a valid email')
    .custom(async (email) => {
        const user = await usersRepo.getOneBy({
            email
        });
        if (!user) {
            throw new Error('email not found');
        }
    }),

    requirePasswordEmailExist : check('password')
    .trim()
    .custom(async (password, {
        req
    }) => {

        const user = await usersRepo.getOneBy({
            email: req.body.email
        });

        if (!user) {
            throw new Error(' Invalid password');
        }

        const validPassword = await usersRepo.comparePasswords(user.password, password);
        if (!validPassword) {
            throw new Error(' Invalid password');
        }

    }),



/* ---------------------------- Use for products ---------------------------- */

    requireTitle : check('title')
    .trim()
    .isLength({min:5,max:40})
    .withMessage('Must be a valid title between 5 to 40 characters')
    ,

    requirePrice: check('price')
    .trim()
    .toFloat() // convert input from STRING  to FLOAT number
    .isFloat({min:1}) // minimum price is 1 dolar
    .withMessage('Must be greater than 1'),


};