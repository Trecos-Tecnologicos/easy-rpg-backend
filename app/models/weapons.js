const mongoose = require('mongoose').default;
const bcrypt = require('bcrypt');
const {Int32} = require("mongodb");
const Schema = mongoose.Schema;

const weaponSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    maxAmmo: {
        type: Number,
        required: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    currentAmmo: {
        type: Number,
        required: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    extraAmmo: {
        type: Number,
        required: false,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    }

},{collection:'weapons',timestamps: true});

module.exports = mongoose.model('weapons', weaponSchema);