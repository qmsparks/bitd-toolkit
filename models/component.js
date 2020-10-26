// ANCHOR imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const componentSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    tooltype: {
        type: String,
        required: true,
        enum: ['Score', 'NPC', 'Ghost', 'Demon', 'Forgotten God Cult' ],
    },
    category: {
        type: String,
        required: true,
    }
})

const Component = mongoose.model('Component', componentSchema);

module.exports = Component;