var express = require('express');
var router = express.Router();
var Person = require('../models/person');
var Talent = require('../models/Talent');
var Hunter = require('../models/Hunter');

var userEmail = undefined

// GET route for reading data
router.get('/signup', function (req, res, next) {
    return res.sendFile('registro.html', { root: './public/signup' });//__dirname + '/../registro.html');
});


//POST route for updating data
router.post('/signup', function (req, res, next) {
    //console.log(req)
    if (req.body.email &&
        req.body.password) {

        var personData = {
            email: req.body.email,
            name: req.body.name,
            lastname: req.body.lastname,
            standing: [],
            age: req.body.age,
            password: req.body.password,
            whichIs: req.body.eres,
            imgName: ""
        }
        Person.create(personData, function (error, person) {
            if (error) {
                return next(error);
            } else {
                userEmail = person.email
                //return res.redirect('/signup/succesful');
            }
        });
        if (req.body.eres == "talento") {
            var talentData = {
                email: req.body.email,
                capabilities: [],
                activity: req.body.activity,
                hours: [],
                cost: req.body.cost,
                hired: [],
                has: []
            }
            Talent.create(talentData, function (error, talelnt) {
                if (error) {
                    return next(error);
                } else {
                    // userEmail = person.email                                            
                    return res.sendFile('success.html', { root: './public/signup' });
                }
            });
        } else {
            var hunterData = {
                email: req.body.email,
                business: req.body.business,
                coords: req.body.place,
                proposes: [],
                fee: 200.00,
                hires: [],
                has: []
            }
            Hunter.create(hunterData, function (error, hunter) {
                if (error) {
                    return next(error);
                } else {
                    //userEmail = person.email                                            
                    return res.sendFile('success.html', { root: './public/signup' });
                }
            });
        }


    } else {
        return res.sendFile('fail.html', { root: './public/signup' });
    }
})

// GET route after registering
/*router.get('/signup/succesful', function (req, res, next) {
    Person.findOne({ "email": userEmail })
        .exec(function (error, user) {
            if (error) {
                return next(error);
            } else {
                if (user === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return next(err);
                } else {
                    return res.sendFile(path.join(__dirname + '/signup/success.html'));
                    // return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
                }
            }
        });
});*/


module.exports = router;