const mongoose = require('mongoose').default;
const bcrypt = require('bcrypt');
const {Int32} = require("mongodb");
const Schema = mongoose.Schema;

const weaponSchema = new Schema({

    type: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    }

},{collection:'modifications',timestamps: true});

module.exports = mongoose.model('modifications', weaponSchema);