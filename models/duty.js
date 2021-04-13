const mongoose = require('mongoose');

var Duty = mongoose.model('Duty', {
    name: { 
        type: String,
        required: true
    }
});

module.exports = { 
    Duty: Duty 
};