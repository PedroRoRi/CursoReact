const User = require("../models/User");

const usersCtrl = {};

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
};

usersCtrl.createUser = async (req, res)=> {
    const {username} = req.body;
    const newUser = new User({
        username
    })
    await newUser.save();
    res.json({message: 'Usuario guardado'})
};

usersCtrl.getUser = (req, res)=> {

    res.send({titulo: 'Hola' })
};

usersCtrl.updateUser = (req, res)=> res.json({message: 'Usuario actualizado'});

usersCtrl.deleteUser = async (req, res)=> {
    const user = await User.findOneAndDelete({_id: req.params.id})
    res.json({message: 'Usuario eliminado'})
};

module.exports = usersCtrl;