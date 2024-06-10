const {default: mongoose} = require("mongoose");
const url = process.env.MONGO_URL;

module.exports = () => {
    mongoose.connect(url)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));
}