const Modification = require('../models/modifications');

module.exports = () => {
    const controller = {};

    controller.listModifications = (req, res) => {

        Modification.find().then((modification) => res.status(200).send(modification));
    };

    controller.createModification = (req, res) => {

        Modification.create(req.body).then((modification) => res.status(201).send(modification));
    };

    return controller;
}