// ANCHOR imports 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toolSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Score', 'NPC', 'Ghost', 'Demon', 'Forgotten God Cult'],
        required: true
    },
    components: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Component'
    } ],
    notes: {
        type: String,
        required: false
    },
}, {
    timestamps: true
});

const Tool = mongoose.model('Tool', toolSchema);

module.exports = Tool;
