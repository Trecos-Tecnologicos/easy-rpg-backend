const Weapon = require('../models/weapons')
const jwt = require("jsonwebtoken");

module.exports = () => {
    const controller = {};

    controller.listWeapons = (req, res) => {
        Weapon.find().then((weapon) => res.status(200).send(weapon));
    };

    controller.createWeapon = (req, res) => {
        Weapon.create(req.body).then((weapon) => res.status(201).send(weapon));
    };

    return controller;
}