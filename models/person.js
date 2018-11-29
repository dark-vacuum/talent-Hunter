var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var PersonSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    name: String,
    lastname: String,
    standing: [{ date: Date, value: Number }],
    age: Number,
    password: {
        type: String,
        required: true,
    },
    whichIs: String,
    imgName: String
});

PersonSchema.index({ email: 1 })

//authenticate input against database
PersonSchema.statics.authenticate = function (email, password, callback) {
    Person.findOne({ "email": email })
        .exec(function (err, person) {
            if (err) {
                return callback(err)
            } else if (!person) {
                var err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, person.password, function (err, result) {
                if (result === true) {
                    return callback(null, person);
                } else {
                    return callback();
                }
            })
        });
}

//hashing a password before saving it to the database
PersonSchema.pre('save', function (next) {
    var person = this;
    bcrypt.hash(person.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        person.password = hash;
        next();
    })
});


var Person = mongoose.model('Person', PersonSchema);
module.exports = Person;

