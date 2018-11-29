
/*-----------------------------------------------------------------------------
 * servidor web
 *----------------------------------------------------------------------------*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/talenthunter');
var db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {});



// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

// include routes
var signuproute = require('./routes/signuproute');
app.use('/', signuproute);
var loginroute = require('./routes/loginroute');
app.use('/', loginroute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});


app.listen(8080, function () {
    console.log('Express app listening on port 8080');
});


/*-----------------------------------------------------------------------------
 * model section
 *----------------------------------------------------------------------------*/


var PERSON = function (e, n, l, a, p) {
    var email = e
    var name = n
    var lastname = l
    var standing = []
    var age = (a > 18) ? a : 0
    var password = p


    return {
        /**
         * E-mail setter.
         * 
         * @param {String}  e   E-mail.
         */
        setEmail: function (e) {
            email = e
        },
        /**
         * Name setter.
         * 
         * @param {String}  n   Name.
         */
        setName: function (n) {
            name = n
        },
        /**
         * Lastname setter.
         * 
         * @param {String}  l   Lastname.
         */
        setLastName: function (l) {
            lastname = l
        },
        /**
         * Age setter.
         * 
         * @param {Number}  a   Age.
         */
        setAge: function (a) {
            (a > 18)
                ? age = a
                : console.log("La persona debe ser mayor de edad.")
        },
        /**
         * Password setter.
         * 
         * @param {String}  p   Password.
         */
        setPassword: function (p) {
            (p.length >= 8)
                ? password = p
                : console.log("La conraseña debe ser al menos de 8 caracteres.")
        },
        /**
         * E-mail getter.
         * 
         * @return {String}  E-mail.
         */
        getEmail: function () {
            return email
        },
        /**
         * Name getter.
         * 
         * @return {String}  Name.
         */
        getName: function () {
            return name
        },
        /**
         * Lastname getter.
         * 
         * @return {String}  Lastname.
         */
        getLastName: function () {
            return lastname
        },
        /**
         * Standin getter.
         * 
         * @return {String}  All the standings.
         */
        getStanding: function () {
            return standing
        },
        /**
         * Age getter.
         * 
         * @return {String}  Age.
         */
        getAge: function () {
            return age
        },
        /**
         * Password getter.
         * 
         * @return {String}  Password.
         */
        getPassword: function () {
            return password
        },
        /**
         * Assigns the new standing with a specific date.
         * 
         * @param {String}  s   Stanging given from another person.
         */
        addStanging: function (s) {
            standing[new Date()] = s
        }
    }
}

var TALENT = function (e, n, l, a, p, ac, c) {
    var person = Person(e, n, l, a, p)
    var capabilities = []
    var activity = a
    var hours = []
    var cost = c
    var hired = []
    var has = []

    person.setActivity = function (a) {
        activity = a
    }
    person.setCost = function (c) {
        cost = c
    }
    person.getCapabilities = function () {
        return capabilities
    }
    person.getActivity = function () {
        return activity
    }
    person.getHours = function () {
        return hours
    }
    person.getCost = function () {
        return cost
    }
    person.getContracts = function () {
        return hired
    }
    person.getAppointments = function () {
        return has
    }
    person.addCapability = function (c) {
        capabilities.push(c)
    }
    person.addHour = function (day, hour) {
        hours[day] = hour
    }
    person.addContract = function (contract) {
        hired.push(contract)
    }
    person.addAppointment = function (appointment) {
        has.push(appointment)
    }
    return person
}

var HUNTER = function (e, n, l, a, p, b, c, f) {
    var person = Person(e, n, l, a, p)
    var business = b
    var coords = c
    var fee = f
    var hires = []
    var proposes = []
    var has = []

    person.setBusiness = function (b) {
        business = b
    }
    person.setCoords = function (c) {
        coords = c
    }
    person.setFee = function (f) {
        fee = f
    }
    person.getBusiness = function () {
        return business
    }
    person.getCoords = function () {
        return coords
    }
    person.getFee = function () {
        return fee
    }
    person.getContracts = function () {
        return hires
    }
    person.getProjects = function () {
        return proposes
    }
    person.getAppointments = function () {
        return has
    }
    person.addContract = function (contract) {
        hires.push(contract)
    }
    person.addProject = function (project) {
        proposes.push(project)
    }
    person.addAppointment = function (appointment) {
        has.push(appointment)
    }
    return person
}

var PROJECT = function (n, sd, ed, h, c) {
    var name = n
    var startDate = sd
    var endDate = ed
    var hunter = h
    var contract = c

    return {
        setName: function (n) {
            name = n
        },
        setStartDate: function (sd) {
            startDate = sd
        },
        setEndDate: function (ed) {
            endDate = ed
        },
        getName: function () {
            return name
        },
        getStartDate: function () {
            return startDate
        },
        getEndDate: function () {
            return endDate
        },
        getHunter: function () {
            return hunter
        },
        getContract: function () {
            return contract
        }
    }
}

var CONTRACT = function (t, h, p, sd, ed) {
    var talent = t
    var hunter = h
    var startDate = sd
    var endDate = ed
    var project = p
    var talentEvaluated = false
    var hunterEvaluated = false

    return {
        setStartDate: function (sd) {
            startDate = sd
        },
        setEndDate: function (ed) {
            endDate = ed
        },
        getTalent: function () {
            return talent
        },
        getHunter: function () {
            return hunter
        },
        getStartDate: function () {
            return startDate
        },
        getEndDate: function () {
            return endDate
        },
        getProject: function () {
            return project
        },
        expEvalTalent: function (evt) {
            if (talentEvaluated) { return }
            talentEvaluated = true
        },
        expEvalHunter: function (evt) {
            if (hunterEvaluated) { return }
            hunterEvaluated = true
        }
    }
}

var APPOINTMENT = function (t, h, d, hr, p) {
    var talent = t
    var hunter = h
    var date = d
    var hour = hr
    var place = p

    return {
        setDate: function (d) {
            date = d
        },
        setHour: function (h) {
            hour = h
        },
        setPlace: function (p) {
            place = p
        },
        getTalent: function () {
            return talent
        },
        getHunter: function () {
            return hunter
        },
        getDate: function () {
            return date
        },
        getHour: function () {
            return hour
        },
        getPlace: function () {
            return place
        }
    }
}