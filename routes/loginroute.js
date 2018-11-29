var express = require('express');
var router = express.Router();
var Person = require('../models/person');
var Talent = require('../models/Talent');
var Hunter = require('../models/Hunter');

var userEmail = undefined
var whichIs = undefined


// GET route for reading data
router.get('/login', function (req, res, next) {
    return res.sendFile('ingresar.html', { root: './public/login' });
});


//POST route for updating data
router.post('/login', function (req, res, next) {
    if (req.body.logemail && req.body.logpassword) {
        Person.authenticate(req.body.logemail, req.body.logpassword, function (error, person) {
            if (error || !person) {
                var err = new Error('Wrong email or password.');
                err.status = 401;
                return next(err);
            } else {
                //console.log(user)
                userEmail = person.email
                whichIs = person.whichIs
                return res.sendFile('perfil.html', { root: './public/login' });
            }
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
})

// GET route after registering
/*router.get('/profile', function (req, res, next) {
    //console.log(userEmail)
    Person.findOne({ "email": userEmail })
        //Person.findById(req.session.userId)
        .exec(function (error, user) {
            if (error) {
                return next(error);
            } else {
                if (user === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return next(err);
                } else {
                    return res.send()
                }
            }
        });
});*/

router.get('/profile', function (req, res, next) {
    var person = ""
    Person.findOne({ "email": userEmail })
        //Person.findById(req.session.userId)
        .exec(function (error, user) {
            if (error) {
                return next(error);
            } else {
                if (user === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return next(err);
                } else {
                    person = user
                    /*talent["email"] = user.email
                    talent.name = user.name
                    talent.lastname = user.lastname
                    talent.age = user.age
                    talent.standing = user.standing
                    talent.whichIs = user.whichIs
                    talent.imgName = user.imgName*/
                }
            }
        });
    if (whichIs == "talento") {
        Talent.findOne({ "email": userEmail })
            //Person.findById(req.session.userId)
            .exec(function (error, user) {
                if (error) {
                    return next(error);
                } else {
                    if (user === null) {
                        var err = new Error('Not authorized! Go back!');
                        err.status = 400;
                        return next(err);
                    } else {
                        return res.send({
                            email: person.email,
                            name: person.name,
                            lastname: person.lastname,
                            age: person.age,
                            standing: 0,
                            //imgName: "file:///Users/luisflores/udlap/applications_distribuited_environments/talent-Hunter/public/images/carlosCastelan.jpg" + person.imgName,
                            capabilities: user.capabilities,
                            activity: user.activity,
                            hours: user.hours,
                            cost: user.cost,
                            hired: user.hired,
                            has: user.has
                        })
                    }
                }
            });
    } else {
        Hunter.findOne({ "email": userEmail })
            //Person.findById(req.session.userId)
            .exec(function (error, user) {
                if (error) {
                    return next(error);
                } else {
                    if (user === null) {
                        var err = new Error('Not authorized! Go back!');
                        err.status = 400;
                        return next(err);
                    } else {
                        /*talent.business = user.business;
                        talent.coords = user.coords;
                        talent.proposes = user.proposes;
                        talent.fee = user.fee;
                        talent.hires = user.hires;
                        talent.has = user.has;*/
                    }
                }
            });
    }
    /*console.log(talent)
    return res.send(talent)*/
})



module.exports = router;