var mongoose = require('mongoose');

var TalentSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    capabilities: [String],
    activity: String,
    hours: [{ day: String, hours: String }],
    cost: Number,
    hired: [{ hunter: String, contract: String }],
    has: [{ hunter: String, appointment: Date }]
});

TalentSchema.index({ email: 1 })


var Talent = mongoose.model('Talent', TalentSchema);
module.exports = Talent;

