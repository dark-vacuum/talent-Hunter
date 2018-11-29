/**
 * Representation of a talent.
 *
 * @class
 * @augments Person
 *
 * @param {String}  e   E-mail of the person.
 * @param {String}  n   Name or names.
 * @param {String}  l   Lastname.
 * @param {Number}  a   Age grater than 18.
 * @param {String}  p   Password.
 * @param {String}  ac  Activity.
 * @param {Number}  c   Cost.
 * 
 * @returns {Person} The Augmented version of Person.
 */
var Talent = function (e, n, l, a, p, ac, c) {
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
