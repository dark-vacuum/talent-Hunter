/**
 * Representation of a Project.
 *
 * @class
 *
 * @param {Talent}  t   Talent.
 * @param {Hunter}  h   Hunter.
 * @param {Date}    d   Date of the appointment.
 * @param {String}  hr  Hour of the appointment.
 * @param {String}  p   Place.
 */
var Appointment = function (t, h, d, hr, p) {
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
