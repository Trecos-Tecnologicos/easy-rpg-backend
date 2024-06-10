const {default: mongoose} = require("mongoose");

module.exports = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));
}