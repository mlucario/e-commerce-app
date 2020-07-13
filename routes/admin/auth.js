const express = require('express');


const usersRepo = require('../../repositories/users');

const router = express.Router();

const signUpTemplete = require('../../views/admin/auth/signup');
const signInTemplete = require('../../views/admin/auth/signin');
const {handleErrors} = require('../admin/middleware');

// ! validators
const {
    requireEmail,
    requirePassword,
    requirePasswordCOnfirmation,
    requireEmailExist,
    requirePasswordEmailExist
} = require('./validators');


router.get('/signup', (req, res) => {

    if (!req.session.userID) {
        res.send(signUpTemplete({
            req
        }));
    } else {
        res.redirect('/admin/products');

    }
});



router.post('/signup',

    [
        requireEmail,
        requirePassword,
        requirePasswordCOnfirmation,
    ],
    handleErrors(signUpTemplete),
    async (req, res) => {

        // const errors = validationResult(req);

        // if (!errors.isEmpty()) {
        //     console.log('errors ', errors);
        //     return res.send(signUpTemplete({
        //         req,
        //         errors
        //     }));
        // }

        const {
            email,
            password,
        } = req.body;





        const user = await usersRepo.create({
            email,
            password,
            "id": usersRepo.randomId
        });

        req.session.userID = user.id;


        res.redirect('/admin/products');
    })


router.get('/signout', (req, res) => {
    req.session = null;

    res.send('You are logger out');
})

router.get('/signin', (req, res) => {
    res.send(signInTemplete({}));
});

router.post('/signin',
    [requireEmailExist,
    requirePasswordEmailExist
    ],
    handleErrors(signInTemplete),
    async (req, res) => {
        // 1. Did another user already sign up with this email

        // const errors = validationResult(req);

        // if (!errors.isEmpty()) {
        //     console.log('errors ', errors);
        //     return res.send(signInTemplete({
        //         errors: errors,
        //     }));
        // }

        const {
            email
        } = req.body;
        const user = await usersRepo.getOneBy({
            email
        });

        // if all pass set session
        req.session.userID = user.id;

        res.redirect('/admin/products');
    });

module.exports = router;