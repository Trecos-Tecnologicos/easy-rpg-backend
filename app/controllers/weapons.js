const Weapon = require('../models/weapons')
const { ObjectId } = require('mongodb');

module.exports = () => {
    const controller = {};

    controller.listWeapons = (req, res) => {
        Weapon.find().then((weapon) => res.status(200).send(weapon));
    };

    controller.createWeapon = (req, res) => {
        const body = req.body;
        body.modificationId = new ObjectId(req.body.modificationId);
        Weapon.create(body).then((weapon) => res.status(201).send(weapon));
    };

    return controller;
}