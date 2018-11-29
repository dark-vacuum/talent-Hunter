var mongoose = require('mongoose');

var HunterSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    business: String,
    coords: String,
    proposes: [String],
    fee: Number,
    hires: [{ talent: String, contract: String }],
    has: [{ talent: String, appointment: Date }]
});

HunterSchema.index({ email: 1 })


var Hunter = mongoose.model('Hunter', HunterSchema);
module.exports = Hunter;
