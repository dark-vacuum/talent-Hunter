/**
 * Representation of a Project.
 *
 * @class
 *
 * @param {Talent}       t  Talent hired.
 * @param {Hunter}      h   Hunter hiring.
 * @param {Project}     c   Project related to.
 * @param {Date}        sd  Start date of the contract.
 * @param {Date}        ed  End date of the contract.
 */
var Contract = function (t, h, p, sd, ed) {
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

var h = Hunter("luis@email.com", "Luis", "Flores", 21, "abcd")
var x = []
x[new Date().toDateString()] = h.getAge()
console.log(x)
console.log("a@l.com".includes("@"))