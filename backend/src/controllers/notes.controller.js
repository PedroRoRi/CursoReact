const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({message: []});

notesCtrl.createNote = (req, res)=> res.send({message: 'Nota guardada'});

notesCtrl.getNote = (req, res)=> res.send({titulo: 'Hola' });

notesCtrl.updateNote = (req, res)=> res.send({message: 'Nota actualizada'});

notesCtrl.deleteNote = (req, res)=> res.send({message: 'Nota eliminada'});

module.exports = notesCtrl;