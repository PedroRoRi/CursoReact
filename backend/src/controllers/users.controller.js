const usersCtrl = {};

usersCtrl.getUsers = (req, res) => res.json({message: []});

usersCtrl.createUser = (req, res)=> res.send({message: 'Usuario guardado'});

usersCtrl.getUser = (req, res)=> res.send({titulo: 'Hola' });

usersCtrl.updateUser = (req, res)=> res.send({message: 'Usuario actualizado'});

usersCtrl.deleteUser = (req, res)=> res.send({message: 'Usuario eliminado'});

module.exports = usersCtrl;