const mongoose = require('mongoose').default;
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({

        name: {
            type: String,
            required: false,
            unique: false
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: false
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },
        userId:{
            type: String,
            required: true,
            unique: true
        }
    },{collection:'users',timestamps: true});

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error) {
        return next(error);
    }
});

// Compare the given password with the hashed password in the database
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('users', userSchema);