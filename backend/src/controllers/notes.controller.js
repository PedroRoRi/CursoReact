const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.createNote = async (req, res)=> {
    const {titulo, descripcion, fecha, autor} = req.body;
    const newNote = new Note({
        titulo,
        descripcion,
        fecha,
        autor
    })
    await newNote.save();
    res.json({message: 'Nota guardada'});
};

notesCtrl.getNote = async (req, res)=> {
    const note = await Note.findById(req.params.id);
    res.json(note)
};

notesCtrl.updateNote = async (req, res)=> {
    const {titulo, descripcion, autor} = req.body;
    const note = await Note.findOneAndUpdate({_id: req.params.id},{
        titulo,
        descripcion,
        autor,
    });
    res.json({message: 'Nota actualizada'})
};

notesCtrl.deleteNote = async (req, res)=> {
    const note = await Note.findOneAndDelete({_id: req.params.id});
    res.json({message: 'Nota eliminada'})
};

module.exports = notesCtrl;