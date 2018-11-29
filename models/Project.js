/**
 * Representation of a Project.
 *
 * @class
 *
 * @param {String}      n   Name of the Project.
 * @param {Date}        sd  Start date of the contract.
 * @param {Date}        ed  End date of the contract.
 * @param {Hunter}      h   Hunter proposing the project.
 * @param {Contract}    c   Contract.
 */
var Project = function (n, sd, ed, h, c) {
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
