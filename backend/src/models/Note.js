const {Schema, model} = require('mongoose');

const noteSchema = new Schema({
    titulo: String,
    descripcion: {
        type: String,
        required: true
    },
    autor: String,
    fecha: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = model('Note', noteSchema);