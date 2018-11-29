/**
 * Representation of a person.
 *
 * @class
 * 
 * @param {String}  e   E-mail of the person.
 * @param {String}  n   Name or names.
 * @param {String}  l   Lastname.
 * @param {Number}  a   Age grater than 18.
 * @param {String}  p   Password.
 */
var Person = function (e, n, l, a, p) {
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

