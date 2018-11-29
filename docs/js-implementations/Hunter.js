/**
 * Representation of a Hunter.
 *
 * @class
 * @augments Person
 *
 * @param {String}  e   E-mail of the person.
 * @param {String}  n   Name or names.
 * @param {String}  l   Lastname.
 * @param {Number}  a   Age grater than 18.
 * @param {String}  p   Password.
 * @param {String}  b   Business.
 * @param {String}  c   Coordinates.
 * @param {Number}  f   Fee.
 * 
 * @returns {Person} The Augmented version of Person.
 */
var Hunter = function (e, n, l, a, p, b, c, f) {
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
