const User = require('../models/users')
const {authenticate} = require('../middlewares/auth')
const jwt = require("jsonwebtoken");

module.exports = () => {
    const controller = {};

    controller.listUsers = (req, res) => {
       User.find().then((users) => res.status(200).send(users));
    };

    controller.createUser = (req, res) => {
        User.create(req.body).then((user) => res.status(201).send(user));
    };

    controller.findOne = (req,res) => {
        User.findOne({email:req.params.email}).then((user) => res.status(200).send(user));
    }

    controller.findById = (req,res) => {

        const token = req.headers['authorization'].substring(7);
        const decodedToken = jwt.verify(token, "secret");
        if(decodedToken.id === req.params.id || decodedToken.role === "admin") {
            User.findOne({userId:req.params.id}).then((user) => {
                if(user) {
                    res.status(200).send(user)
                }else {
                    res.status(404).json({status:'error',message:'Usuário não encontrado'})
                }
            });
        }else {
            res.status(401).send('Usuário não autorizado');
        }
    }

    return controller;
}